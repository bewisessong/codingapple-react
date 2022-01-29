import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import './Detail.scss';

/* 01/29(토) : styled-components로 CSS 스타일링하기 */
let Box = styled.div`
  padding: 20px;
`;

let Title = styled.h4`
  font-size: 25px;
  color: ${props => props.color}
`;

/* 01/29(토) : LifeCycle Hook */
// class Detail2 extends React.Component {
//   // LifeCycle Hook은 class로 선언된 Component에 사용한다
//   componentDidMount() {
//     // Detail2 Component가 Mount되었을 때 실행할 코드
//   }

//   componentWillUnmount() {
//     // Detail2 Component가 Unmount될 때 실행할 코드
//   }
// }

function Detail(props) {
  /* 01/29(토) : useEffect - 2초 후에 alert 창 사라지게 하기 */
  let [alert, setAlert] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAlert(!alert);
    }, 2000);

    /* 01/29(토) : useEffect - Unmount 시에 코드 실행
    Arrow Func 사용 시 return () => { 실행할 코드 }
    여러 개의 useEffect 사용 가능 + 작성한 순서대로 위에서부터 실행된다.
    ! 반드시 한 useEffect에서 모든 것을 사용할 필요는 없음.
    */
    return function() {
      // Unmount 시에 실행되는 코드
    }
  });

  let { id } = useParams();
  let history = useHistory();

  let target = props.shoes.find(function(data) {
    return data.id = id
  });

  return (
    <div className="container">
      {/* 01/29(토) : styled-components로 CSS 스타일링하기 */}
      <Box>
        {/* <Title color="blue">Detail</Title> */}
        <Title className="red">Detail</Title>
      </Box>
      {/* 01/29(토) : SASS를 이용한 CSS 스타일링 - @extned */}
      {/* 01/29(토) : useEffect - 2초 후에 alert 창 사라지게 하기 */}
      {
        alert == true?
          <div className="my-alert2">
            <p>재고가 얼마 남지 않았습니다</p>
          </div>
        : null
      }

      <div className="row">
        <div className="col-md-6">
          <img src={ 'https://codingapple1.github.io/shop/shoes'+ (parseInt(id) + 1) +'.jpg' } width="100%" />
        </div>
        <div className="col-md-6 mt-4">
         <h4 className="pt-5">{target.title}</h4>
          <p>{target.content}</p>
          <p>{target.price}원</p>
          <button className="btn btn-danger">주문하기</button>
          &nbsp;
          <button className="btn btn-danger"
                  onClick={ () => { history.goBack(); }}>뒤로가기</button>
        </div>
      </div>
    </div> 
  )
}

export default Detail;
import React, { useState } from 'react';
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

function Detail(props) {

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
      <div className="my-alert-mixin">
        <p>재고가 얼마 남지 않았습니다</p>
      </div>

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
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
          Dropdown button
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li><a class="dropdown-item">Action</a></li>
          <li><a class="dropdown-item">Another action</a></li>
          <li><a class="dropdown-item">Something else here</a></li>
        </ul>
      </div>
    </div>
  );
}

export default App;

import './App.css';
import axios from 'axios';
import {useState} from 'react'

function App() {
  const [state, setState] = useState([])
  return (
    <div className="App">
      <h1>Simple API Call Using AXIOS</h1>
      <button className="button" onClick={() => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
          console.log(response.data)
          setState(response.data)
        })
      }}>Click Me To get Data</button>
      <hr className='main'></hr>
      <div style={{display:'flex'}}>
        <div className='id'>ID</div>
        <div className='title'>Title</div>
        <div className='description'>Description</div>
      </div>
      <hr className='secondhr'></hr>
      {state.map((obj, index) => {
        return (
          <div>
            <div style={{ display: "flex" }}>
              <div className="id">{index+1}</div>
              <div className="title">{obj.title}</div>
              <div className="description">{obj.body}</div>
            </div>
            <hr></hr>
          </div>
        );
      })}
    </div>
  );
}

export default App;

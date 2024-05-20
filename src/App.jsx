import {useState} from "react"
import './App.css';


export default function App() {
    const [value, setValue] = useState(0);
    const [result, setResult] = useState(0);



  return (
    <div>
      <h1>덧셈과 뺄셈이 가능한 앱 만들기</h1>
      <div>
        <input /> 만큼을
        
        <button onClick = {()=>handAdd()}>더할게요</button> 
        <button onClick = {()=>handSubtract()}>뺄게요</button> 
        <button onClick = {()=>handleReset()}>초기화</button> 
      </div>
      <hr />
      <div className="result-container">
        <h3>결과</h3>
      </div>
    </div>
  );
}

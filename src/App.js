import React,{useState,useEffect} from 'react';
import './App.css';
import Counter from './counter.js';

function App() {
  const [data, setData]=useState(0);
  const increment=()=>{
    if(data>9)
    alert("please click on the 'GO BACK TO 0' button");
    else
    setData(data+1);
    
  }
  const decrement=()=>{
   if( data<1 && data<=0){
    alert("Error");
    setData(0);

  } 
  else
    setData(data-1);
  }

  const zeroValFun=()=>{
      setData(0);
  }


  useEffect(()=>{
   console.log(data);
  },[data])

  return (
    <>
     <Counter deta={data} increaseFunc={increment} decreaseFunc={decrement} zeroFun={zeroValFun}/>
    </>
  );
}

export default App;

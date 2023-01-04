import React from "react";
import Image1 from './calculator.jpg';
   const counter=(props)=>{
    return(
        <>
        <div className="container">
        <div className="main">
            <div className="heading">
              <h1>Counter</h1>
              </div>
        </div>
        <input type="text" value={props.deta} />
        <div className="btoon" >
        <button onClick={()=>props.increaseFunc()} className="btn1">INC</button>
        <button onClick={()=>props.decreaseFunc()} className="btn2">DCR</button>
        
    </div>
    {
        props.deta>=10? <button onClick={()=>props.zeroFun()} className="btn3">GO BACK TO 0</button>:null
    }
   
    </div>
        </>
    );
   }
   export default counter;
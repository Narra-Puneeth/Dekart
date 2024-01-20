import { useState } from 'react';
import React from 'react'
import Page1 from './page1';
import Page2 from './page2';
import './style.css';

const Mainform = () => {

  const [step,setStep] = useState(0);
  const [step1,setStep1] = useState('Product Details');
  const [num,setNum] = useState(1);
  const [formData,setFormData] = useState({
    name:"",
    description:"",
    category:"",
    image:"",
    condition:"",
    price:"",
    phone:"",
    address:"",
    city:"",
    pincode:""
})

const [left, setLeft] = useState('0px');

const leftclick = () => {
    setLeft('0px');
};
const rightclick=()=>{
  setLeft('110px')
}
const ShowStep=()=>{
  if (step===0){
    
      return(
          <Page1 formData={formData} setFormData={setFormData} />
      );
  }
  else if(step===1){
    // setStep1('Address Details')
      return(

          <Page2 formData={formData} setFormData={setFormData} />

      );
  }
}
  return (
    <div className='content-add'>
      <div className="container2">
        <div className='heading1'>
      <h1 className='head'>Add New Product Form</h1> 
        <p className='des'>Fill in the details to add a new Product</p>
        </div>
        </div>
        <p className='step'>Step {num} of 2</p>
        <h2 className='step1'>{step1}</h2>
      <div className='progress-bar'>
        <div className='progress' style={{width: step=== 0 ?"50%":step===1?"100%":"100%"}}>
        
        </div>
        <div>
          {ShowStep()}
          </div>
        <div className="btn-container2">
                <div className="button-box">
                  <div id="btn-add" style={{left}}></div>
                <button className="btn1-add" disabled={ step ===0} onClick={()=>{setStep(step-1);setStep1('Product Details');setNum(1);leftclick()}}>Prev</button>
                <button className="btn1-add" disabled={step===1} onClick={()=>{setStep(step+1);
                setStep1('Address Details');setNum(2);rightclick()}}>Next</button>
                </div>
            </div>
      </div>
    </div>
  )
}

export default Mainform

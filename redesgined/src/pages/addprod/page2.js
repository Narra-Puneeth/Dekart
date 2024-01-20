import React from 'react'
import './style.css'
const page2 = () => {
  return (
    <div className='Form'>
      <div className="custom-input">
      <input type="text" id="address" placeholder=" " />
      <label htmlFor="name">Address*</label>
      <div className="small-text">Enter the address where the product is located</div>

    </div>

    <div className="custom-input1">
      <div>
      <input className='input' type="text" id="city" placeholder=" " />
      <label htmlFor="name">City*</label></div>
      <div className="custom-input1">
      <input className='input' type="text" id="city" placeholder=" " />
      <label htmlFor="name">State*</label></div>

      <div className="custom-input1">
      <input className='input' type="text" id="city" placeholder=" " />
      <label htmlFor="name">Pincode*</label></div>
      
      
    </div>


    <div className="custom-input2">
      <div className="custom-input2">
      <input className='input' type="text" id="city" placeholder=" " />
      <label htmlFor="name">Phone*</label></div>
      <div className="custom-input2">
      <input className='input' type="text" id="city" placeholder=" " />
      <label htmlFor="name">Email*</label></div>

      
      
    </div>
    

    <div className="custom-input3">
      <input type="file" id="address" placeholder=" " />
      <label htmlFor="name">Photos*</label>
      <div className="small-text">Upload the pictures of product</div>

    </div>
    

    <div className="btn2-add">
      <button className="btn3-add">SUBMIT</button>
    </div>

</div>
  )
}

export default page2

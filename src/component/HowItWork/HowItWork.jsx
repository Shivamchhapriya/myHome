import React from 'react'
import "./HowItWork.css"
import HowItWorkCarosuael from '../Carosuael/HowItWorkCarosuael';

function HowItWork() {
  return (
    <div className='how_it_work_main_div'>
        <h4>How It Work</h4>
        <div className="create_div">
                    <div className="inner-create_div"></div>
                </div>
                <div className='row p-4'>
<div className='col-7 px-5'>
    <HowItWorkCarosuael/>

</div>
<div className='col-5 p-4 pb-5 bg-white how_it_work_form' style={{width:"36%"}}>
    <h5><b>  Consult With Our Home Design Experts </b></h5>
<input type="text" placeholder='Name' className='form-control mt-5'/>
<input type="text" placeholder='Country' className='form-control mt-3'/>
<div className='row mt-4'>
    <div className='col-9 text-start' style={{fontSize:"13px"}}>
    <p style={{fontWeight:"bolder"}}>You can reach me on WhatsApp</p>
    <p>Get notified about upcoming design meetings and offers</p>
    </div>
    <div className='col-3 mt-4'>
  <button type="">Toggle</button>
    </div>
</div>
<input type="text" placeholder='Email' className='form-control mt-3'/>
<input type="text" placeholder='City' className='form-control mt-3'/>
<input type="text" placeholder='Requirement' className='form-control mt-3'/>
<button className="register_btn form-control mt-3">Register as Contractor</button>
<div className='mt-3' style={{fontSize:"13px"}}>
<p>By submitting this form, you agree to the</p>
<p style={{color:"#3bad4b",margin:"-15`px"}}> <span> Privacy Policy </span> &  <span> Terms And Conditions </span></p>
</div>


</div>
                </div>
    </div>
  )
}

export default HowItWork;
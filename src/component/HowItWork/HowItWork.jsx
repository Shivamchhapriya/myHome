import React from 'react'
import "./HowItWork.css"
import HowItWorkCarosuael from '../Carosuael/HowItWorkCarosuael';
import Switch from '@mui/material/Switch';

function HowItWork() {
  const label = { inputProps: { 'aria-label': 'Switch demo' } };
  return (
    <div className='how_it_work_main_div'>
       <center> <h4>How It Work</h4></center>
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
    <div class="col-sm-2 pt-4">
                                             <Switch
                                              //  checked={obj2.mandatory}
                                               size="medium"
                                               color="warning"
                                              //  onClick={() =>
                                              //    toggleMandatory(obj2.name)
                                              //  }
                                               sx={{
                                                 "& .MuiSwitch-thumb": {
                                                   backgroundColor:
                                                     "white",
                                                    //  : "#bdbbbb",
                                                   height: 0,
 
                                                   border:
                                                      "9px solid white"
                                                    //  : "9px solid #bdbbbb",
                                                 },
                                                 "& .MuiSwitch-track": {
                                                   backgroundColor: 
                                                      "green",
                                                    //  : "#bdbbbb",
                                                   // height:33,
                                                   border: "green",
                                                 },
                                               }}
                                             />
</div>
</div>
<input type="text" placeholder='Email' className='form-control mt-3'/>
<input type="text" placeholder='City' className='form-control mt-3'/>
<input type="text" placeholder='Requirement' className='form-control mt-3'/>
<button className="register_btn form-control mt-3">Register as Contractor</button>
<center> <div className='mt-3' style={{fontSize:"13px"}}>
<p className='p-0 m-0'>By submitting this form, you agree to the</p>
<p className='p-0 m-0' style={{color:"#3bad4b"}}> <span> Privacy Policy </span> &  <span> Terms And Conditions </span></p>
</div></center>


</div>
                </div>
    </div>
  )
}

export default HowItWork;
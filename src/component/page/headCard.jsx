import React, { useState } from "react";
import './index.css'

function CardForm() {
    const [hover,setHover]=useState()
    return (  
        <>
<div className="main_Form_card mt-2">

<div className="d-flex gap-3 ms-2">
           { [1,2,3].map((item)=>
           <div onMouseLeave={()=>setHover(false)} onMouseOver={()=>setHover(true)}  className=" mini_card_header rounded-3   mb-3">
        <div style={{display:'flex',justifyContent:'center'}}>
        <img  src="https://www.makemyhouse.com/assets/themelibv3assets/images/web-images/supervised.png?version=210" style={{height:'50px',width:'50px'}} alt="" />
        </div>
        <h2 className={hover?"underline-text-header mt-3 font-weight-bolder":"mt-3 font-weight-bolder"}>Site Supervision</h2>
      </div>)}
      </div>
</div>

        </>
    );
}

export default CardForm;
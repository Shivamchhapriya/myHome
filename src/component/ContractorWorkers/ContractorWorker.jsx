import React, { useState } from "react";
import "./ContractorWorker.css";

function ContractorWorkes() {
  const WokersData = [
    {
      image:
        "https://www.makemyhouse.com/assets/themelibv3assets/images/web-images/cw-1.png?version=210",
      name: "Civil Contractor",
    },
    {
      image:
        "	https://www.makemyhouse.com/assets/themelibv3assets/images/web-images/cw-2.png?version=210",
      name: "Roofing Contractor",
    },
    {
      image:
        "	https://www.makemyhouse.com/assets/themelibv3assets/images/web-images/cw-3.png?version=210",
      name: "Flooring Contractor",
    },
    {
      image:
        "	https://www.makemyhouse.com/assets/themelibv3assets/images/web-images/cw-4.png?version=210",
      name: "Concrete RCC Contractor",
    },
    {
      image:
        "	https://www.makemyhouse.com/assets/themelibv3assets/images/web-images/cw-5.png?version=210",
      name: "Landscape-Garden Work",
    },
    {
      image:
        "	https://www.makemyhouse.com/assets/themelibv3assets/images/web-images/cw-6.png?version=210",
      name: "Painting Contractor",
    },
    {
      image:
        "	https://www.makemyhouse.com/assets/themelibv3assets/images/web-images/cw-7.png?version=210",
      name: "Ceiling Contractor",
    },
    {
      image:
        "	https://www.makemyhouse.com/assets/themelibv3assets/images/web-images/cw-8.png?version=210",
      name: "Electrical Contractor",
    },
    {
      image:
        "	https://www.makemyhouse.com/assets/themelibv3assets/images/web-images/cw-9.png?version=210",
      name: "Plumbind Contractor",
    },
    {
      image:
        "	https://www.makemyhouse.com/assets/themelibv3assets/images/web-images/cw-10.png?version=210",
      name: "Solar Contractor",
    },
  ];
  return (
    <>
    <div className="row workers_div">
        <div className="col text-start">
<h3>Contractor & Workers</h3>
        </div>
        <div className="col text-end">
<button className="register_btn">Register as Contractor</button>
        </div>
    </div>
      <div className="row justify-content-center mini_card_gap m-5">
        {WokersData.map((dt) => (
          <MiniCard name={dt.name} image={dt.image} />
        ))}
      </div>
    </>
  );
}


function MiniCard(props) {
    const[hover,setHover] = useState(false)
  return (
    <>
      <div onMouseLeave={()=>setHover(false)} onMouseOver={()=>setHover(true)} className="mini_card col-lg-2 col-md-3 col-sm-6 p-4 mb-3">
       <div style={{display:'flex',justifyContent:'center'}}> <img src={props.image} alt="" /></div>
       <center>
        <h6 className={hover?"underline-text mt-3 font-weight-bold":"mt-3 font-weight-bold"}>{props.name}</h6>
        </center>
      </div>
    </>
  );
}

export default ContractorWorkes;

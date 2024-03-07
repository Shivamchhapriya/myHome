import React from "react";
import './demof.css'


function Demo() {
    return ( 
        <>
        <section class="p-5 pt-2 ps-0 pe-0">
<div class="banner pt-5">
<div class="container-fluid mt-2">



<div class="row">
<div class="col-col-12">
<div class="banner-overlay"></div>
<div class="row rw-frm">
<div class="col-sm-12 text-center hindi-ttl">
<h2 class="main-ttl"><b>अब घर बनेगा आसानी से</b></h2>
</div>
<div class="col-sm-8 frist-grey m-auto">
<div class="frm-scrl">
<ul class="nav nav-pills mb-3 m-auto" id="pills-tab" role="tablist">
<li class="nav-item">
<a class="nav-link active" href="#" id="pills-home-tab" data-toggle="pill" onclick="tabFunction('75','0','offerlane')" role="tab" aria-controls="pills-home" aria-selected="true">
<div class="tab-icon mb-1" data-id="75">
<img alt="2D Layout Plan" loading="lazy" src="https://www.makemyhouse.com/assets/themelibv3assets\images\web-images\2d.png?version=210"/>
</div>
2D Layout Plan
</a>
</li>
<li class="nav-item">
<a class="nav-link" data-id="2" href="#" id="pills-profile-tab" data-toggle="pill" onclick="tabFunction('2','GET10','offerlane1')" role="tab" aria-controls="pills-profile" aria-selected="false">
<div class="tab-icon mb-1">
<img alt="3D Front Elevation" loading="lazy" src="https://www.makemyhouse.com/assets/themelibv3assets\images\web-images\3d.png?version=210"/>
</div>
3D Front Elevation
</a>
</li>
<li class="nav-item">
<a class="nav-link" data-id="4" href="#" id="pills-contact-tab" data-toggle="pill" onclick="tabFunction('4','GET10','offerlane1')" role="tab" aria-controls="pills-contact" aria-selected="false">
<div class="tab-icon mb-1">
<img alt="Structual Drawings" loading="lazy" src="https://www.makemyhouse.com/assets/themelibv3assets\images\web-images\structual.png?version=210"/>
</div>
Structual Drawings
</a>
</li>
<li class="nav-item">
<a class="nav-link" data-id="1" href="#" id="pills-profile-tab" data-toggle="pill" onclick="tabFunction('1','MMHPP15','offerlane1')" role="tab" aria-controls="pills-profile" aria-selected="false">
<div class="tab-icon mb-1">
<img alt="Presentation Plan" loading="lazy" src="https://www.makemyhouse.com/assets/themelibv3assets\images\web-images\presentation.png?version=210"/>
</div>
Presentation Plan
</a>
</li>
<li class="nav-item">
<a class="nav-link w-more" href="#" id="pills-contact-tab" data-toggle="pill" onclick="tabFunction('more')" role="tab" aria-controls="pills-contact" aria-selected="false">
<div class="tab-icon mb-1">
<img alt="More" loading="lazy" src="https://www.makemyhouse.com/assets/themelibv3assets\images\web-images\more-1.png?version=210"/>
</div>
More
</a>
</li>
</ul>
</div>
<div class="tab-content" id="pills-tabContent2" style={{display:'none'}}>
<div class="tab-pane fade" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
<div class="frm-bg-tra p-3">
<form class="row">
<div class="form-group col-sm-2 pe-0 mb-0 mb-0">
<input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Depth"/>
</div>
<div class="form-group col-sm-2 pe-0 mb-0 mb-0 ps-1">
<input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Width"/>
</div>
<div class="form-group col-sm-2 pe-0 mb-0 mb-0 ps-1">
<input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Floors"/>
</div>
<div class="form-group col-sm-2 pe-0 mb-0 mb-0 ps-1">
<input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Building Area"/>
</div>
<div class="form-group col-sm-2 pe-0 mb-0 mb-0 ps-1">
<select id="inputState" class="form-control">
<option selected="">Direction</option>
<option>...</option>
</select>
</div>
<div class="form-group col-sm-2 ps-1 mb-0">
<button type="submit" class="btn btn-primary w-100 mb-0">Calculate
Price</button>
</div>
</form>
</div>
</div>
<div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab"/>
<div class="frm-bg-tra p-3">
<form class="row">
<div class="form-group col-sm-2 pe-0 mb-0 mb-0">
<input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Depth"/>
</div>
<div class="form-group col-sm-2 pe-0 mb-0 mb-0 ps-1">
<input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Width"/>
</div>
<div class="form-group col-sm-2 pe-0 mb-0 mb-0 ps-1">
<input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Floors"/>
</div>
<div class="form-group col-sm-2 pe-0 mb-0 mb-0 ps-1">
<input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Building Area"/>
</div>
<div class="form-group col-sm-2 pe-0 mb-0 mb-0 ps-1">
<select id="inputState" class="form-control">
<option selected="">Direction</option>
<option>...</option>
</select>
</div>
<div class="form-group col-sm-2 ps-1 mb-0">
<button type="submit" class="btn btn-primary w-100 mb-0">Calculate
Price</button>
</div>
</form>
</div>
</div>
<div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
<div class="frm-bg-tra p-3">
<form class="row">
<div class="form-group col-sm-2 pe-0 mb-0 mb-0">
<input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Depth"/>
</div>
<div class="form-group col-sm-2 pe-0 mb-0 mb-0 ps-1">
<input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Width"/>
</div>
<div class="form-group col-sm-2 pe-0 mb-0 mb-0 ps-1">
<input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Floors"/>
</div>
<div class="form-group col-sm-2 pe-0 mb-0 mb-0 ps-1">
<input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Building Area"/>
</div>
<div class="form-group col-sm-2 pe-0 mb-0 mb-0 ps-1">
<select id="inputState" class="form-control">
<option selected="">Direction</option>
<option>...</option>
</select>
</div>
<div class="form-group col-sm-2 ps-1 mb-0">
<button type="submit" class="btn btn-primary w-100 mb-0">Calculate
Price</button>
</div>
</form>
</div>
</div>
<div class="tab-pane fade" id="pills-contact1" role="tabpanel" aria-labelledby="pills-contact-tab">
<div class="frm-bg-tra p-3">
<form class="row">
<div class="form-group col-sm-2 pe-0 mb-0 mb-0">
<input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Depth"/>
</div>
<div class="form-group col-sm-2 pe-0 mb-0 mb-0 ps-1">
<input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Width"/>
</div>
<div class="form-group col-sm-2 pe-0 mb-0 mb-0 ps-1">
<input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Floors"/>
</div>
<div class="form-group col-sm-2 pe-0 mb-0 mb-0 ps-1">
<input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Building Area"/>
</div>
<div class="form-group col-sm-2 pe-0 mb-0 mb-0 ps-1">
<select id="inputState" class="form-control">
<option selected="">Direction</option>
<option>...</option>
</select>
</div>
<div class="form-group col-sm-2 ps-1 mb-0">
<button type="submit" class="btn btn-primary w-100 mb-0">Calculate
Price</button>
</div>
</form>
</div>
</div>
<div class="tab-pane fade active show" id="pills-contact2" role="tabpanel" aria-labelledby="pills-contact-tab">
<div class="frm-bg-tra p-3">
<form class="row">
<div class="form-group col-sm-4 pe-0">
<div class="row p-2">
<div class="col-sm-12 text-center p-2">
<a href="https://www.makemyhouse.com/site/site_supervision" target="_blank">
<div class="bg-light p-3 rounded-3">
<img alt="Site Supervision" loading="lazy" src="https://www.makemyhouse.com/assets/themelibv3assets\images\web-images/supervised.png?version=210" width="50px;"/>
<h4 class="mt-3">
<b>Site Supervision</b>
</h4>
</div>
</a>
</div>
</div>
</div>
<div class="form-group col-sm-4 pe-0">
<div class="row p-2">
<div class="col-sm-12 text-center p-2">
<a href="https://www.makemyhouse.com/Vastu-consultancy" target="_blank">
<div class="bg-light p-3 rounded-3">
<img alt="Vastu Consultency" loading="lazy" src="https://www.makemyhouse.com/assets/themelibv3assets\images\web-images/vastu.png?version=210" width="50px;"/>
<h4 class="mt-3">
<b>Vastu Consultency</b>
</h4>
</div>
</a>
</div>
</div>
</div>
<div class="form-group col-sm-4 pe-0">
<div class="row p-2">
<div class="col-sm-12 text-center p-2">
<a href="https://www.makemyhouse.com/house-construction-cost-calculator-mmh" target="_blank">
<div class="bg-light p-3 rounded-3">
<img alt="Cost Estimation" loading="lazy" src="https://www.makemyhouse.com/assets/themelibv3assets\images\web-images/cost.png?version=210" width="50px;"/>
<h4 class="mt-3">
<b>Cost Estimation</b>
</h4>
</div>
</a>
</div>
</div>
</div>
</form></div>
</div>
</div>
<div class="tab-content" id="pills-tabContent1">
<div id="contact__details" style={{display:'none'}}>
<form method="POST" id="contact-details" class="m-auto py-3">
<div class="input-group mb-3">

<button class="btn btn-success" type="submit" id="get__otp">Get OTP</button>
</div>
</form>
</div>
<div id="otp__details" style={{display:'none'}}>
<form method="POST" id="otp-details" class="m-auto py-3">
<div class="input-group mb-3">
<input type="tel" name="otp" class="form-control" id="otp__number"/>
<button class="btn btn-success" type="submit" id="get__otp">Login</button>
</div>
</form>
</div>
<div id="plot__details">
<div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
<div class="frm-bg-tra p-3">
<form class="row" method="GET" id="express__checkout" action="https://www.makemyhouse.com/express-checkout" novalidate="novalidate">
<div class="form-group col-sm-2 pe-0 mb-0">
<input type="number" name="depth" class="form-control" id="length" aria-describedby="length" placeholder="Depth"/>
</div>
<div class="form-group col-sm-2 pe-0 mb-0 ps-1">
<input type="number" name="width" class="form-control" id="width" aria-describedby="width" placeholder="Width"/>
</div>
<div class="form-group col-sm-2 pe-0 mb-0 ps-1">
<select name="floors" id="floors" class="form-select">
<option value="1" selected="">Floor</option>
<option value="1">1</option>
<option value="2">2</option>
<option value="3">3</option>
<option value="4">4</option>
<option value="5">5</option>
</select>
</div>
<div class="form-group col-sm-2 pe-0 mb-0 ps-1">
<input name="build_area" type="text" class="form-control" id="builtUpArea" aria-describedby="builtUpArea" placeholder="Building Area"/>
</div>
<div class="form-group col-sm-2 pe-0 mb-0 ps-1">
<select name="direction" id="direction" class="form-control" select2="">
<option selected="">Direction</option>
<option value="NN" selected="">North</option>
<option value="SS">South</option>
<option value="SE">South East</option>
<option value="NE">North East</option>
<option value="EE">East</option>
<option value="WW">West</option>
<option value="SW">South West</option>
<option value="NW">North West</option>
</select>
</div>
<div class="form-group col-sm-2 ps-1 mb-0">
<input type="hidden" id="product_id" name="product" value="75"/>
<input type="hidden" name="couponcode" id="coupon_code" value=""/>
<input type="hidden" name="campaignid" id="campaign_id" value="offerlane1"/>
<button type="submit" id="btn_submit" value="Next" class="btn btn-primary w-100 mb-0">Calculate
Price</button>
</div>


</form>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
        </>
     );
}

export default Demo;
import React from "react";
import './index.css'

function FormHeader() {
    return (
        <>
            <div className="main_Form">
            <form action="/action_page.php" className="d-flex gap-2 p-0 row">
            <div class="form-group col-sm-2 pe-0 mb-0 has-error has-feedback input-Width">
<input type="number" name="depth" class="form-control" id="length" aria-describedby="length" placeholder="Depth" />
</div>
<div class="form-group col-sm-2 pe-0 mb-0  has-error has-feedback input-Width">
<input type="number" name="width" class="form-control" id="width" aria-describedby="width" placeholder="Width"/>
</div>
<div class="form-group col-sm-2 pe-0 mb-0  has-success input-Width">
<select name="floors" id="floors" class="form-select" aria-invalid="false">
<option value="1" selected="">Floor</option>
<option value="1">1</option>
<option value="2">2</option>
<option value="3">3</option>
<option value="4">4</option>
<option value="5">5</option>
</select>
</div>
<div class="form-group col-sm-2 pe-0 mb-0  has-error has-feedback input-Width">
<input name="build_area" type="text" class="form-control" id="builtUpArea" aria-describedby="builtUpArea" placeholder="Building Area"/>
</div>
<div class="form-group col-sm-2 pe-0 mb-0  has-success input-Width">
<select name="direction" id="direction" class="form-control" select2="" aria-invalid="false">
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

<div class="form-group col-sm-2  mb-0 input-Width" >
<input type="hidden" id="product_id" name="product" value="75"/>
<input type="hidden" name="couponcode" id="coupon_code" value="MMHPP15"/>
<input type="hidden" name="campaignid" id="campaign_id" value="offerlane1"/>
<button type="submit" id="btn_submit" value="Next" style={{background:'#3bad4b',border:'#3bad4b',color:'white'}} class="btn btn_Size  w-100 mb-0">Calculate
Price</button>
</div>
     </form>
            </div>
        </>
      );
}

export default FormHeader;
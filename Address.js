import React, { useState } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput } from 'mdbreact';
import "./index.css"
function Address() {

var[formerros,setFormerrors]=useState({})

var validate= function(elements){
  var errors={}
  console.log("validate form field", elements ,elements.name)

  if(!elements.name.value){
    errors.name="Enter your name"
  }

  if(typeof elements.name.value !== "undefined"){
    if(!elements.name.value.match(/^[a-zA-Z]+$/)){
       //formIsValid = false;
       errors.name= "Please enter Only letters";
    }        
 }
 
//  if(!elements.phone.value){
//   errors.phone="Please enter phone number"
// }

 if (typeof elements.phone.value !== "undefined") {

         

  var pattern = new RegExp(/^[0-9\b]+$/);

  if (!pattern.test(elements.phone.value)) {

    //isValid = false;

    elements.phone.value = "Please enter only number.";

  }else if(elements.phone.value.length != 10){

    //isValid = false;

    errors.phone = "Please enter valid phone number.";

  }

}
if(!elements.pincode.value){
  errors.pincode="Please enter pincode number"
}
if (typeof elements.pincode.value !== "undefined") {

         

  var pattern = new RegExp(/^[0-9\b]+$/);

  if (!pattern.test(elements.pincode.value)) {

    //isValid = false;

    elements.pincode.value = "Please enter only number.";

  }else if(elements.pincode.value.length != 6){

    //isValid = false;

    errors.pincode = "Please enter valid pincode number.";

  }

}


if(!elements.city.value){
  errors.city="Enter your city"
}

if(typeof elements.city.value !== "undefined"){
  if(!elements.city.value.match(/^[a-zA-Z]+$/)){
     //formIsValid = false;
     errors.city= "Enter your city";
  }        
}
if(!elements.address.value){
  errors.address="Enter your address"
}


var errorskey=Object.keys(errors)
if(errorskey.length>0)
return errors
else 
return false
}
var placeOrder =function(){
var form= document.getElementById('addressForm')

console.log("form field", form.elements, form.controls)
var errors= validate(form.elements)
if(errors){
  setFormerrors(errors)
}
else{
  setFormerrors({})
  alert("form validated")
}
}




return (
<div className="Container">
  <div className="Row">
    <div className="col-md-10 pt-5">
    <form  id="addressForm">
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">Name</label>
     
      <input type="text" name="name" class="form-control"  placeholder="Name"/>
      <div className="form-error">{formerros?.name && <div>{formerros.name}</div>}</div>
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Phone</label>
      <input type="password" name="phone" class="form-control"  placeholder="Phone"/>
      <div className="form-error">{formerros?.phone && <div>{formerros.phone}</div>}</div>
    </div>
  </div>
  <div class="form-row">
  <div class="form-group col-md-6">
    <label for="inputPincode">Pincode</label>
    <input type="text" class="form-control" name="pincode"  placeholder="pincode"/>
    <div className="form-error">{formerros?.pincode && <div>{formerros.pincode}</div>}</div>
  </div>
  <div class="form-group col-md-6">
    <label for="inputCity">City</label>
    <input type="text" class="form-control" name="city" placeholder="city"/>
    <div className="form-error">{formerros?.city && <div>{formerros.city}</div>}</div>
  </div>
  </div>
  <div class="form-group">
    <label for="inputAddress">Address</label>
    <input type="text" class="form-control"  name="address" placeholder="Apartment, studio, or floor"/>
    <div className="form-error">{formerros?.address && <div>{formerros.address}</div>}</div>
  </div>
</form>
<div className="placeorderbtn">
<button class="btn btn-primary" onClick={placeOrder} type="submit">Place Order</button>
</div>
     
    </div>
  </div>
</div>


);
};

export default Address;
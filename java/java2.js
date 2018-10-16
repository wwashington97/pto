function hours(){
var Hoursperpay = 40
var yearsWorked = 26    

var inner = document.getElementById('inner').value;
var outter = document.getElementById('outter');
var hours;
if (inner < 5){
    hours = 5;
}
if(inner >= 5){
    hours = 6;
}
if(inner >= 10){
    hours = 7;
}
var PTO = hours * yearsWorked;
outter.innerHTML = PTO / Hoursperpay;
}
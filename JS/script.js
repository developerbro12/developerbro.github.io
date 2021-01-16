// $('#navigation ul li').css('display', 'inline-block'); Refer this to change style using jquery


function leftnew() {
    $(".accupaymain").addClass("triggerChange");
//   $(".signupleft").addClass("signupleftnew");
//   $(".signupright").addClass("signuprightnew");
//   // $(".signupleft").addClass("loginmsgright");
//   $(".loginright").addClass("loginrightnewone");
// //   $(".signupright").addClass("signuprightnew");
//   $(".loginleft").addClass("loginleftnewone");
}
function rightnew() {
    $(".accupaymain").removeClass("triggerChange");
    //    $(".loginright").addClass("loginrightnew");
    //    $(".loginleft").addClass("loginleftnew");
    //    $(".signupright").addClass("signupleftnewone");
    //    $(".signupleft").addClass("signuprightnewone");
    }
function init(){
    $(".navin").click(leftnew);
    $(".navup").click(rightnew);
 }

$(document).ready(init);
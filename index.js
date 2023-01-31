function HandleBackFunctionality()  
 {  
       if(window.event) //Internet Explorer  
      {  
           alert("Browser back button is clicked on Internet Explorer...");  
       }  
       else //Other browsers for example Chrome  
       {  
           alert("Browser back button is clicked on other browser...");  
       }  
 }  
$(document).ready(function(){
     $("#load").hide();
});
$(".carouselExampleControls").on("onmouseover",(event)=>
{
  event.preventDefault();
});
function caroche() {
  let cw=window.innerWidth;
  if(cw<=991)
{

  $(".d-block").addClass("w-100");
}
else
{
  $(".d-block").removeClass("w-100");
}
}

let x=document.cookie;
if(document.cookie.length!=0)
{
$(".ctext").hide();
$(".c4").hide().fadeIn(2000);
$(".backsetter").hide().fadeIn(2000);
$(".caroanim").hide().fadeIn(2000);
}
if(document.cookie.length==0)
{



$(".services").hide();
$(".backsetter").hide().fadeIn(2000);
$(".caroanim").hide()
$(".c4").hide();
$(".ctext").hide().fadeIn(2000);
var inh=window.innerHeight;
var inw=window.innerWidth;
$(".backsetter").attr("backgroundSize",inh);
$(".backsetter").attr("backgroundSize",inw);
$(".ctext").fadeOut(2000);
setTimeout(()=>{
    $(".c4").hide().fadeIn(2000);
},4000);
setTimeout(()=>{
$(".caroanim").hide().fadeIn(2000);
$(".services").hide().fadeIn(2000);
},6000);

  document.cookie="uservisit=logic;expires=Fri, 5 Aug 2023 01:00:00 UTC;";

}
caroche();
window.onresize=caroche;

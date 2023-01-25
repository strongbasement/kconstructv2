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
},8000);




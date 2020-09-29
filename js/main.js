
var img = document.getElementById("img");
function changePic(){
    img.src='./img/logo1.png';
}

function orgPic(){
    img.src='./img/logo.png';
}


var modal = document.getElementById('myModal');
var video = document.getElementById('video');
video.onclick = function(){
    modal.style.display = "block";
}



var span = document.getElementsByClassName("close")[0];


span.onclick = function() { 
    modal.style.display = "none";
}



$(window).on('scroll', function(){
if($(window).scrollTop()){
$('header').addClass('bgColor');
changePic();
}
else{
$('header').removeClass('bgColor');
orgPic();
}
})



$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})



// AOS.init();
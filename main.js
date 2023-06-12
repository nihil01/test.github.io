const site= document.querySelector(".site-header");
let prevScrollPos = window.scrollY;
window.onscroll = function(){
    let currentScrollPos = window.scrollY;
    if (prevScrollPos > currentScrollPos){
        site.style.top = "0px";
    }else{
        site.style.top = "-50px";
    }
    prevScrollPos = currentScrollPos;
}

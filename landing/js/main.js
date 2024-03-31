let navbar = document.querySelector("nav");
let menulinks = document.getElementById('menu-links');

window.onscroll = function(){
    if(window.scrollY > 0 ){
        navbar.style.background = "#eefff9";
    }else{
        navbar.style.background = "transparent";
    }
};
function toogelMenu(){
    menulinks.classList.toggle('show-menu')
} 
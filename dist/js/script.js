window.onscroll = function(){
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    if(window.pageYOffset > fixedNav){
        header.classList.add('navbar-fixed')
    }else{
        header.classList.remove('navbar-fixed')
    }
}
const hamburg = document.querySelector('#hamburger');
const navbar = document.querySelector('#navbar');
hamburg.addEventListener('click', function(){
    hamburg.classList.toggle('hamburger-active');
    navbar.classList.toggle('hidden');
});
const navlink = document.querySelectorAll('.nav-link');
navlink.forEach(function(e){
e.addEventListener('click', function(){
    hamburg.classList.toggle('hamburger-active');
navbar.classList.toggle('hidden');
});
});


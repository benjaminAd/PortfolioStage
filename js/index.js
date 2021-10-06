// navbar config
const links = document.querySelectorAll(".navlinks");
links.forEach((item) => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        let el = document.getElementById(item.getAttribute("data-link"));
        el.scrollIntoView(false);
    });
});

const toggle = document.querySelector(".toggle");
var flag = false;

toggle.addEventListener('click',(e)=>{
    flag = !(flag);
    addClass(flag);
});


function addClass(flag){
    const nav_menu = document.querySelectorAll('.visiblemenu');
    if(flag){
        nav_menu.forEach((item)=>{
            item.classList.remove("visiblemenu_hidden");
            item.classList.add("visiblemenu_active");
        });
        return;
    }
    nav_menu.forEach((item)=>{
        item.classList.add("visiblemenu_hidden");
        item.classList.remove("visiblemenu_active");
    });
}
// navbar config
const links = document.querySelectorAll(".navlinks");
const toggle = document.querySelector(".toggle");
var flag = false;
links.forEach((item) => {
    item.addEventListener('click', (e) => {
        if(flag){
            flag = !flag;
            addClass(flag);
        }
    });
});

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
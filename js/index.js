// navbar config
const links = document.querySelectorAll(".navlinks");
links.forEach((item) => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        let el = document.getElementById(item.getAttribute("data-link"));
        el.scrollIntoView(false);
    });
});
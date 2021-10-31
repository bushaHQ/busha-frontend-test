setTimeout(function() {
    $('.loader-bg').fadeToggle();
}, 1500);

setTimeout(function() {
    $('.loader-cg').fadeToggle();
}, 5000);

document.addEventListener("DOMContentLoaded", () => {
    const nav = document.querySelector(".nav");

    document.querySelector("#btnNav").addEventListener("click", () => {
        nav.classList.add("nav-open")
    })
    document.querySelector(".nav-overlay").addEventListener("click", () => {
        nav.classList.remove("nav-open")
    })
})
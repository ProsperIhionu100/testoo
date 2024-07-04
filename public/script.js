const sidebar = document.getElementById('sidebar')
const hamburger = document.getElementById('hamburger')
const menu = document.querySelector("#menu")
const element = document.getElementById('element');

hamburger.addEventListener("click", function () {
    sidebar.classList.toggle('hidden')
    menu.classList.toggle('bx-x')
    // Add or remove backdrop filter blur
    if (sidebar.classList.contains('hidden')) {
        sidebar.style.backdropFilter = "none";
    } else {
        sidebar.style.backdropFilter = "blur(5px)";
    }
});

const search = document.getElementById('search')
const box = document.getElementById('box')
const blur = document.getElementById('blur')
const closebtn = document.getElementById('closebtn')
const bod = document.getElementById('bod')


search.addEventListener('click', function(){
    box.classList.remove('hidden')
    blur.classList.remove('hidden')
})

closebtn.addEventListener('click', function(){
    box.classList.add('hidden')
    blur.classList.add('hidden')
})


const alert1 = document.getElementById("alert")
const btn = document.getElementById("btn")

btn.addEventListener('click', function () {
    alert1.classList.add("hidden")
})




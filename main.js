const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");
const menu = document.querySelector('nav .container ul');

// Function to open the menu
function openMenu() {
    menu.style.display = "block"; // Show the menu
    menuBtn.style.display = "none"; // Hide the menu button
    closeBtn.style.display = "inline-block"; // Show the close button
}

// Function to close the menu
function closeMenu() {
    menu.style.display = "none"; // Hide the menu
    menuBtn.style.display = "inline-block"; // Show the menu button
    closeBtn.style.display = "none"; // Hide the close button
}

// Add event listener to the menu button
menuBtn.addEventListener("click", openMenu);

// Add event listener to the close button
closeBtn.addEventListener("click", closeMenu);

const navItems = menu.querySelectorAll("li");


const changeActiveItem = () =>{
    navItems.forEach(item => {
        const link = item.querySelector("a")
        link.classList.remove("active");
    })
}

navItems.forEach(item => {
    const link = item.querySelector("a")
    link.addEventListener("click",() =>{
        link.classList.add("active");
    })
})


const skillItems = document.querySelectorAll('section.skills .skill');

skillItems.forEach(skill => {
    skill.querySelector(".head").addEventListener("click", () => {
        skill.querySelector(".items").classList.toggle("show-items");
    });
});

window.addEventListener("scroll", ()=>{
    document.querySelector("nav").classList.toggle("show-box-shadow",window.scrollY>0)
})
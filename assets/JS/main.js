const navbarSwitch = document.querySelector(".nav-bar-switch i");
const navBarItems = document.querySelector(".nav-bar-items");
const stats = document.querySelectorAll(".stat");
const coursCards = document.querySelectorAll('.course-card');
const aosElements = document.querySelectorAll("[data-aos]");

let isOpen = false;

navbarSwitch.addEventListener("click", () => {
    isOpen = !isOpen;
    if(isOpen) {
        navbarSwitch.classList.remove("fa-bars");
        navbarSwitch.classList.add("fa-xmark")
        navBarItems.style.display = "block";
        document.body.style.overflowY = "hidden"
    }
    else {
        navbarSwitch.classList.remove("fa-xmark");
        navbarSwitch.classList.add("fa-bars");
        navBarItems.style.display = "none";
        document.body.style.overflowY = "scroll"
    }
})

navBarItems.addEventListener("resize", () => {
    const windowWidth = window.innerWidth;
    if(windowWidth > 1024) {
        navBarItems.style.display = "none !important";
    }
})
//counterUp

//AOS
stats.forEach(stat => {
    stat.setAttribute("data-aos","fade-down");
})
coursCards.forEach(card => {
    card.setAttribute("data-aos","fade-down");
})
aosElements.forEach(e => {
    e.setAttribute("data-aos-duration","1500");
})

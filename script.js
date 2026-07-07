
/*
    PORTFOLIO JAVASCRIPT
*/

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");
const navLinks = document.querySelectorAll("nav a");
const scrollBtn = document.getElementById("scrollTop");
const progressBar = document.getElementById("progressBar");
const cursorGlow = document.querySelector(".cursor-glow");

/*
        MOBILE MENU
*/

menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("active");

    if (navMenu.classList.contains("active")) {

        menuBtn.innerHTML = '<i class="ri-close-line"></i>';

    } else {

        menuBtn.innerHTML = '<i class="ri-menu-3-line"></i>';

    }

});


navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

        menuBtn.innerHTML = '<i class="ri-menu-3-line"></i>';

    });

});


/*
        TYPING EFFECT
*/

new Typed("#typing", {

    strings: [

        "Software Engineering Student",

        "ASP.NET Developer",

        "Front-End Developer",

        "QA Enthusiast"

    ],

    typeSpeed:70,

    backSpeed:40,

    backDelay:1700,

    loop:true

});


/*
        AOS
*/

AOS.init({

    duration:900,

    once:false,

    easing:"ease-in-out"

});
/*
        SCROLL EVENTS
*/

const header = document.querySelector("header");
const sections = document.querySelectorAll("section");

/*
        WINDOW SCROLL
*/
window.addEventListener("scroll", () => {

    /*.
        Header Background
    .*/

    if (window.scrollY > 60) {

        header.style.background = "rgba(7,11,20,.90)";
        header.style.backdropFilter = "blur(30px)";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.35)";

    } else {

        header.style.background = "rgba(7,11,20,.55)";
        header.style.boxShadow = "none";

    }

    /*.
        Scroll Progress
    .*/

    const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress =
        (window.scrollY / totalHeight) * 100;

    progressBar.style.width = progress + "%";

    /*.
        Scroll To Top
    .*/

    if (window.scrollY > 450) {

        scrollBtn.classList.add("show");

    } else {

        scrollBtn.classList.remove("show");

    }

    /*.
        Active Navigation
    .*/

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 180;
        const sectionHeight = section.clientHeight;

        if (
            pageYOffset >= sectionTop &&
            pageYOffset < sectionTop + sectionHeight
        ) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === "#" + current
        ) {
            link.classList.add("active");
        }

    });

});


/*.
        SCROLL TO TOP
.*/

scrollBtn.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


/*.
        SMOOTH LINKS
.*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});
/*.
        CURSOR GLOW
.*/

document.addEventListener("mousemove", (e) => {

    if(cursorGlow){

        cursorGlow.style.left = e.clientX + "px";
        cursorGlow.style.top = e.clientY + "px";

    }

});


/*.
        HERO PARALLAX
.*/

const heroImage = document.querySelector(".profile-card");

window.addEventListener("mousemove", (e)=>{

    if(!heroImage) return;

    const x = (window.innerWidth / 2 - e.clientX) / 35;
    const y = (window.innerHeight / 2 - e.clientY) / 35;

    heroImage.style.transform =
        `translate(${x}px, ${y}px)`;

});


/*.
        CARD HOVER EFFECT
.*/

const cards = document.querySelectorAll(
    ".skill-card, .project-card, .contact-card, .info-card"
);

cards.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transition=".35s";

    });

    card.addEventListener("mousemove",(e)=>{

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateX = -(y - rect.height/2)/18;
        const rotateY = (x - rect.width/2)/18;

        card.style.transform =
        `perspective(900px)
         rotateX(${rotateX}deg)
         rotateY(${rotateY}deg)
         translateY(-8px)`;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform =
        "perspective(900px) rotateX(0) rotateY(0)";

    });

});


/*.
        BUTTON RIPPLE
.*/

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button=>{

    button.addEventListener("click",function(e){

        const ripple=document.createElement("span");

        const rect=this.getBoundingClientRect();

        const size=Math.max(rect.width,rect.height);

        ripple.style.width=size+"px";
        ripple.style.height=size+"px";

        ripple.style.left=e.clientX-rect.left-size/2+"px";
        ripple.style.top=e.clientY-rect.top-size/2+"px";

        ripple.classList.add("ripple");

        this.appendChild(ripple);

        setTimeout(()=>{

            ripple.remove();

        },600);

    });

});


/*.
        FADE BODY ON LOAD
.*/

window.addEventListener("load",()=>{

    document.body.style.opacity="1";

});


/*.
        PREVENT IMAGE DRAG
.*/

document.querySelectorAll("img").forEach(img=>{

    img.setAttribute("draggable","false");

});


/*.
        CURRENT YEAR
.*/

const footer = document.querySelector("footer p");

if(footer){

    footer.innerHTML =
    `© ${new Date().getFullYear()} Syeda Muskan Haider | All Rights Reserved`;

}


/*.
        CONSOLE MESSAGE
 */

console.log(
"%cWelcome to Syeda Muskan Haider's Portfolio 🚀",
"color:#38BDF8;font-size:18px;font-weight:bold;"
);
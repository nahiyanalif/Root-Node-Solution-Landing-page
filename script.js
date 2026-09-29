/* =========================================================
   ROOT NODE SOLUTIONS
   JAVASCRIPT
========================================================= */


/* ================= MOBILE MENU ================= */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});


/* Close menu after clicking a link */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});


/* ================= HEADER SCROLL ================= */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});


/* ================= BACK TO TOP ================= */

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});


backToTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* ================= CURRENT YEAR ================= */

const year = document.getElementById("year");

year.textContent = new Date().getFullYear();


/* ================= SCROLL REVEAL ================= */

const revealElements = document.querySelectorAll(
    ".service-card, .industry-card, .process-step, .stat, .about-content"
);

const revealObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(25px)";
    element.style.transition =
        "opacity 0.6s ease, transform 0.6s ease";

    revealObserver.observe(element);

});


/* ================= DASHBOARD ANIMATION ================= */

const dashboard = document.querySelector(".dashboard-card");

if (dashboard) {

    document.addEventListener("mousemove", (event) => {

        const x = (window.innerWidth / 2 - event.clientX) / 80;
        const y = (window.innerHeight / 2 - event.clientY) / 80;

        if (window.innerWidth > 800) {

            dashboard.style.transform =
                `perspective(1200px)
                 rotateY(${x * -1}deg)
                 rotateX(${y}deg)`;

        }

    });

}


/* ================= SMOOTH ANCHOR LINKS ================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        if (targetId === "#") {
            return;
        }

        const target = document.querySelector(targetId);

        if (!target) {
            return;
        }

        event.preventDefault();

        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

});
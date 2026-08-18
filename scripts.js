// ==========================================
// MOBILE MENU
// ==========================================

const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

if (menuBtn && mobileMenu) {

    menuBtn.addEventListener("click", () => {

        mobileMenu.classList.toggle("hidden");

        const icon = menuBtn.querySelector("i");

        if (mobileMenu.classList.contains("hidden")) {

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        } else {

            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");

        }

    });


    // Close mobile menu after clicking a link

    const mobileLinks = mobileMenu.querySelectorAll("a");

    mobileLinks.forEach(link => {

        link.addEventListener("click", () => {

            mobileMenu.classList.add("hidden");

            const icon = menuBtn.querySelector("i");

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        });

    });

}


// ==========================================
// NAVBAR SCROLL EFFECT
// ==========================================

const navbar = document.getElementById("navbar");

if (navbar) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {

            navbar.classList.add(
                "bg-rugby",
                "shadow-lg"
            );

        } else {

            navbar.classList.remove(
                "bg-rugby",
                "shadow-lg"
            );

        }

    });

}


// ==========================================
// CURRENT YEAR
// ==========================================

const yearElements = document.querySelectorAll("#year");

yearElements.forEach(element => {

    element.textContent = new Date().getFullYear();

});


// ==========================================
// CONTACT FORM
// ==========================================

const contactForm = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        formMessage.classList.remove("hidden");

        formMessage.classList.remove(
            "text-red-500",
            "text-green-600"
        );

        formMessage.classList.add("text-green-600");

        formMessage.textContent =
            "Thank you! Your message has been received.";

        contactForm.reset();

    });

}


// ==========================================
// SMOOTH SCROLLING
// ==========================================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        if (targetId === "#") return;

        const target = document.querySelector(targetId);

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});
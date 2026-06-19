/* =========================
   TYPED TEXT
========================= */

new TypedText("#typed", [

    // "SERVERS",
    "SOFTWARE",
    "AI Integration & Development",
    "WEBSITES DEVELOPMENT ",
    "SEO",
    "SOCIAL MEDIA",
    "APPLICATION DEVELOPMENT",
    "CLOUD SERVICES"


    // "AUTOMATION",
    // "CLOUD INFRASTRUCTURE"

], {

    speed: 80,
    backSpeed: 40,
    delay: 1500

});

/* =========================
   MOBILE MENU
========================= */

const menuBtn =
    document.getElementById("menuBtn");

const mobileMenu =
    document.getElementById("mobileMenu");

const closeMenu =
    document.getElementById("closeMenu");

menuBtn.onclick = () => {

    mobileMenu.classList.add("active");
};

closeMenu.onclick = () => {

    mobileMenu.classList.remove("active");
};

/* =========================
   LIQUID NAV
========================= */

const pill =
    document.getElementById("navPill");

const links =
    document.querySelectorAll(".nav-link");

function movePill(target) {

    if (!target) return;

    const navContainer =
        document.getElementById("navLinks");

    const containerRect =
        navContainer.getBoundingClientRect();

    const rect =
        target.getBoundingClientRect();

    const left =
        rect.left - containerRect.left;

    pill.style.width =
        `${rect.width}px`;

    pill.style.transform =
        `translateX(${left}px)`;

    links.forEach(link => {

        link.classList.remove("active");
    });

    target.classList.add("active");
}

/* INITIAL */

window.addEventListener("load", () => {

    movePill(
        document.querySelector(".nav-link.active")
    );
});

/* CLICK */

links.forEach(link => {

    link.addEventListener("click", () => {

        movePill(link);
    });
});

/* =========================
   SCROLLSPY
========================= */

const sections =
    document.querySelectorAll("main, section");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top =
            section.offsetTop - 180;

        if (window.scrollY >= top) {

            current =
                section.getAttribute("id");
        }
    });

    links.forEach(link => {

        const href =
            link.getAttribute("href");

        if (href === `#${current}`) {

            movePill(link);
        }
    });
});

/*About us */
const counters = document.querySelectorAll(".counter");

const startCounter = () => {

    counters.forEach(counter => {

        const target = +counter.dataset.target;

        let count = 0;

        const increment = target / 100;

        const updateCount = () => {

            if (count < target) {

                count += increment;

                counter.innerText =
                    Math.ceil(count);

                requestAnimationFrame(updateCount);

            } else {

                counter.innerText = target + "+";
            }
        };

        updateCount();
    });
};

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            startCounter();

            observer.disconnect();
        }
    });

}, { threshold: 0.4 });

/* Mobile Auto Slider */

const slides = document.querySelectorAll(".slide");

let currentSlide = 0;

function showSlide(index) {

    slides.forEach(slide => {
        slide.classList.remove("active");
    });

    slides[index].classList.add("active");
}

function nextSlide() {

    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    showSlide(currentSlide);
}

if (window.innerWidth <= 768) {

    setInterval(nextSlide, 2500);
}
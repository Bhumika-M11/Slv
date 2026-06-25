document.addEventListener(
    "DOMContentLoaded",
    () => {

        const intro =
            document.getElementById(
                "welcomeIntro"
            );

        const brand =
            document.querySelector(
                ".welcome-brand"
            );

        const heroTitle =
            document.querySelector(
                ".hero-title"
            );

        const heroSubtitle =
            document.querySelector(
                ".hero-subtitle"
            );

        const heroActions =
            document.querySelector(
                ".hero-actions"
            );

        heroTitle.style.opacity = "0";
        heroSubtitle.style.opacity = "0";
        heroActions.style.opacity = "0";

        setTimeout(() => {

            brand.classList.add(
                "dissolve"
            );

        }, 5000);

        setTimeout(() => {

            intro.classList.add(
                "fade-out"
            );

            heroTitle.style.transition =
                "opacity .8s ease";

            heroSubtitle.style.transition =
                "opacity .8s ease";

            heroActions.style.transition =
                "opacity .8s ease";

            heroTitle.style.opacity = "1";
            heroSubtitle.style.opacity = "1";
            heroActions.style.opacity = "1";

        }, 3000);

    }
);
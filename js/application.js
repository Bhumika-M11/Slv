document.addEventListener("DOMContentLoaded", () => {

    const panel =
        document.getElementById("servicePanel");

    function loadService(serviceName) {

        const service =
            SERVICES[serviceName];

        panel.innerHTML = `

            <div class="service-content">

                <div class="service-icon">

                    ${service.icon}

                </div>

                <h2>

                    ${service.title}

                </h2>

                <h3>

                    ${service.tagline}

                </h3>

                <p>

                    ${service.description}

                </p>

            </div>

        `;
    }

    loadService("mobile");

    document
        .querySelectorAll(".service-item")
        .forEach(button => {

            const activate = () => {

                document
                    .querySelectorAll(".service-item")
                    .forEach(btn =>
                        btn.classList.remove("active")
                    );

                button.classList.add("active");

                loadService(
                    button.dataset.target
                );
            };

            button.addEventListener(
                "mouseenter",
                activate
            );

            button.addEventListener(
                "click",
                activate
            );

        });

});

document.addEventListener(
    "DOMContentLoaded",
    () => {

        initializeServiceExplorer(
            ".service-item",
            "servicePanel",
            "mobile"
        );

    }
);
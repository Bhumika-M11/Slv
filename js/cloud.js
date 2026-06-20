/* =====================================
   CLOUD SERVICES DATA
===================================== */

const SERVICES = {

    Infrastructure: {

        title: "Cloud Infrastructure Setup & Management",

        image: "./icons/cloud-infra.png",

        tagline: "Secure, Scalable & High-Performance Cloud Environments",

        description: "We help businesses build modern cloud infrastructures that improve reliability, performance, and scalability. From deployment and migration to monitoring and optimization, our cloud engineers ensure your infrastructure is secure, efficient, and ready for future growth.",

        features: [

            "Cloud Server Deployment",
            "Cloud Migration",
            "Infrastructure Monitoring",
            "Performance Optimization",
            "Load Balancing",
            "Scalable Architecture"

        ]

    },

    Backup: {

        title: "Cloud Server & Backup Solutions",

        image: "./icons/cloud-backup.png",

        tagline: "Protect Business-Critical Data With Reliable Backup Systems",

        description: "Data loss can impact operations, revenue, and customer trust. Our cloud backup solutions provide automated backups, disaster recovery planning, and business continuity systems that keep your data protected and available whenever needed.",

        features: [

            "Automated Backups",
            "Disaster Recovery",
            "Data Replication",
            "Business Continuity",
            "Recovery Testing",
            "Data Restoration"

        ]

    },

    Hosting: {

        title: "Business Email & Hosting",

        image: "./icons/cloud-hosting.png",

        tagline: "Professional Email & Enterprise Hosting Solutions",

        description: "Improve communication and website reliability with secure business email and high-performance hosting. We provide custom domain emails, web hosting, SSL security, spam protection, and infrastructure designed for modern businesses.",

        features: [

            "Custom Domain Hosting",
            "Business Web Hosting",
            "SSL Security",
            "Spam Proctection",
            "Email Backup",
            "Doamin Management"

        ]

    }

};

/* =====================================
   RENDER SERVICE
===================================== */

function renderService(panelId, serviceKey) {

    const panel =
        document.getElementById(panelId);

    if (!panel) return;

    const service =
        SERVICES[serviceKey];

    if (!service) return;

    panel.innerHTML = `

<div class="service-content">

    <div class="service-image">

        <img
        src="${service.image}"
        alt="${service.title}">

    </div>

    <div class="service-details">

        <h2>
            ${service.title}
        </h2>

        <h3>
            ${service.tagline}
        </h3>

        <p>
            ${service.description}
        </p>

        <div class="feature-grid">

            ${service.features.map(feature => `

                <div class="feature-card">

                    <span>•</span>

                    ${feature}

                </div>

            `).join("")}

        </div>

    </div>

</div>

`;
}

/* =====================================
   SERVICE EXPLORER ENGINE
===================================== */

function initializeServiceExplorer(
    buttonSelector,
    panelId,
    defaultService
) {

    const buttons =
        document.querySelectorAll(buttonSelector);

    renderService(
        panelId,
        defaultService
    );

    buttons.forEach(button => {

        const activate = () => {

            buttons.forEach(btn =>
                btn.classList.remove("active")
            );

            button.classList.add("active");

            renderService(
                panelId,
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

}

/* =====================================
   INIT
===================================== */

initializeServiceExplorer(
    ".service-item",
    "servicePanel",
    "Infrastructure"
);
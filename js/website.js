const services = {

    business: {

        title: "Business Website Design",

        image: "./icons/business-website.png",

        tagline: "Professional Websites That Build Trust & Generate Leads",

        description: "We design visually appealing, responsive, and conversion-focused business websites that represent your brand professionally. Every website is built with user experience, performance, and scalability in mind to help attract potential customers and improve business growth.",

        features: [

            "Custom Website Design",
            "Responsive Layouts",
            "Lead Generation Forms",
            "Professional Branding",
            "Fast Loading pages",
            "SEO-Friendly Structures"

        ]

    },

    ecommerce: {

        title: "E-Commerce Website Deveploment",

        image: "./icons/ecommerce.png",

        tagline: "Powerful Online Stores Designed To Increase Sales",

        description: "We develop modern e-commerce platforms with secure payment systems, product management tools, inventory tracking, and mobile-friendly shopping experiences that help businesses sell products efficiently online.",

        features: [

            "Product Management",
            "Shopping Cart",
            "Payment Gateway",
            "Inventory Tracking",
            "Order Management",
            "Mobile Commerce"

        ]

    },

    hosting: {

        title: "Domain & Hosting Solutions",

        image: "./icons/hosting.png",

        tagline: "Reliable Hosting & Secure Domain Management",

        description: "Our hosting solutions ensure your website remains fast, secure, and available around the clock. We provide domain registration, SSL security, email hosting, cloud hosting, and infrastructure management for businesses of all sizes.",

        features: [

            "Domain Registration",
            "Business Hosting",
            "SSL Certificates",
            "Email Hosting",
            "Cloud Hosting",
            "DNS Management"

        ]

    },

    maintenance: {

        title: "Website Maintenance & SEO",

        image: "./icons/seo-maintenance.png",

        tagline: "Keep Your Website Secure, Updated & Optimized",

        description: "Our maintenance and SEO services help businesses improve website performance, search engine visibility, security, and user experience through continuous monitoring, updates, and optimization.",

        features: [

            "Software Updates",
            "Security Monitoring",
            "Bug Fixes",
            "Performance Optimization",
            "SEO Aduits",
            "Content Updates"

        ]

    }

};

const panel =
    document.getElementById("servicePanel");

const buttons =
    document.querySelectorAll(".service-item");

function loadService(service) {

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

loadService(services.business);

buttons.forEach(button=>{

button.addEventListener("click",()=>{

buttons.forEach(btn=>
btn.classList.remove("active"));

button.classList.add("active");

loadService(
services[
button.dataset.target
]
);

});

});
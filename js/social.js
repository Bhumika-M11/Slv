const services = {

    management: {

        title: "Social Media Managemnet",

        image: "./icons/social-management.png",

        tagline: "Professional Social Media Presence Across All Major Platforms",

        description: "We handle your business presence on Facebook, Instagram, LinkedIn, YouTube, and other social networks to ensure better brand visibility, audience engagement, and professionalism. We handle all aspects including content creation, content posting, profile optimization, audience engagement, and performance monitoring.",

        features: [

            "Facebook Management",
            "Instagram Management",
            "LinkedIn Management",
            "YouTube Management",
            "Content Scheduling",
            "Audience Engagement",
            "Profile Optimization",
            "Monthly Reports"

        ]

    },

    marketing: {

        title: "Digital Marketing Services",

        image: "./icons/digital-marketing.png",

        tagline: "Traffic, Leads and Business Growth with Digital Marketing",

        description: "Our digital marketing services comprise paid marketing, organic marketing and lead generation solutions to ensure that our clients get targeted traffic and measurable results. We design campaigns which will help you earn more ROI and improve brand visibility.",

        features: [

            "Social Media Marketing",
            "Meta Ads",
            "Google Ads",
            "SEO Optimization",
            "Lead Generation",
            "Email Marketing",
            "WhatsApp Marketing",
            "Marketing Analytics "

        ]

    },

    branding: {

        title: "Branding & Content Creation",

        image: "./icons/branding-content.png",

        tagline: "Create A Strong Brand Identity Through Innovative Content",

        description: "We produce unique content and branded assets that enhance your brand identity and reach out to your target customers. We have expertise in areas such as graphic design, video creation, brand promotion, and more.",

        features: [

            "Graphic Design",
            "Brand Promotion",
            "Logo Design",
            "Content Creation",
            "Video Editing",
            "Motion Graphics",
            "AI Video Creation",
            "YouTube Optimization"

        ]

    },

    industry: {

        title: "Industry Specific Marketing",

        image: "./icons/industry-marketing.png",

        tagline: "Customized Marketing Solutions For Different Industries",

        description: "We offer customized digital marketing services according to specific needs of each industry. These marketing campaigns aim at solving different business problems and producing quality leads for you..",

        features: [

            "Real Estate Marketing",
            "Healthcare Marketing",
            "School & College Marketing",
            "Political Campaigns",
            "Startup Marketing",
            "IT Company Marketing",
            "Manufacturing Marketing",
            "Villa & Farmhouse Marketing"

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

                    <span class="feature-icon">
                        •
                    </span>
                        ${feature}

                </div>

            `).join("")}

        </div>

    </div>

</div>

`;

}

loadService(services.management);

buttons.forEach(button => {

button.addEventListener("click", () => {

buttons.forEach(btn =>
btn.classList.remove("active"));

button.classList.add("active");

loadService(
services[
button.dataset.target
]
);

});

});
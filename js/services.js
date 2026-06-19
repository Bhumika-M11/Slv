/* =====================================
   TPS SERVICES DATA
===================================== */

const SERVICES = {

    /* =====================================
       APPLICATION DEVELOPMENT
    ===================================== */

    mobile: {

        title: "Mobile Application Development",

        image: "./icons/android.png",

        tagline: "Empowering Businesses Through Intelligent Mobile Experiences",

        description: "Our mobile application solutions are designed to transform the way businesses interact with customers, manage operations, and deliver services. From customer-facing applications to internal workforce tools, we create reliable Android solutions that streamline workflows, improve efficiency, and provide seamless user experiences. Every application is built with scalability, performance, and long-term maintainability in mind, ensuring that your investment continues to support your business as it grows."

    },

    web: {

        title: "Web Application Development",

        image: "./assets/website_icon.png",

        tagline: "Building Digital Platforms That Drive Business Growth",

        description: "Modern businesses require more than just a website. They need intelligent systems that automate processes, centralize information, and provide real-time visibility into operations. Our web application development services focus on building powerful business platforms such as CRM systems, customer portals, management dashboards, billing platforms, and workflow automation solutions."

    },

    windows: {

        title: "Windows Application Development",

        image: "./assets/windows11.png",

        tagline: "Reliable Desktop Solutions For Mission-Critical Operations",

        description: "For organizations that depend on stable, high-performance desktop software, we develop Windows applications that deliver reliability, speed, and operational efficiency. From inventory systems to manufacturing management platforms, our desktop solutions are engineered to perform consistently while supporting long-term business growth."

    },

    /* =====================================
       AI DEVELOPMENT
    ===================================== */

    aiChatbot: {

        title: "AI Chatbots",

        image: "./assets/chatbot.jpeg",

        tagline: "Intelligent Customer Engagement Around The Clock",

        description: "Modern customers expect immediate responses, accurate information, and seamless support experiences. Our AI chatbot solutions enable businesses to provide instant assistance twenty-four hours a day, helping customers find information, resolve common issues, schedule appointments, and receive personalized guidance without waiting for human intervention."

    },

    aiAutomation: {

        title: "AI Business Automation",

        image: "./assets/business_automation.jpeg ",

        tagline: "Transform Repetitive Processes Into Intelligent Workflows",

        description: "Many organizations spend countless hours performing repetitive administrative tasks that slow productivity and limit growth. Our AI-powered automation solutions streamline operations by handling document processing, data entry, report generation, workflow approvals, notifications, and routine business activities with minimal human intervention."

    },

    aiAgent: {

        title: "AI Agents",

        image: "./assets/agent.png ",

        tagline: "Autonomous Digital Assistants Designed For Business Growth",

        description: "AI agents represent a new generation of intelligent business systems capable of understanding objectives, making decisions, and executing tasks independently. Unlike traditional software, AI agents can analyze information, respond to changing conditions, coordinate workflows, and assist teams with complex operational activities."

    },
    websiteMaintenance: {

        title: "Website Maintenance",

        image: "./icons/website-maintenance1.jpeg",

        tagline: "Keeping Your Digital Presence Secure, Updated, And Reliable",

        description: "A website is one of the most valuable digital assets a business owns, and its effectiveness depends on consistent maintenance and continuous improvement. Our website maintenance services focus on ensuring optimal performance, security, and reliability through regular updates, bug fixes, content modifications, performance optimization, and backup management. By proactively maintaining your website, we help reduce downtime, improve user experience, strengthen security, and ensure that your online presence continues to support business growth and customer engagement without interruption."

    },

    applicationSupport: {

        title: "Application Support",

        image: "./icons/application_support1.png",

        tagline: "Ensuring Business-Critical Applications Operate At Peak Performance",

        description: "Business applications play a critical role in daily operations, making reliability and stability essential. Our application support services provide continuous monitoring, troubleshooting, maintenance, and enhancement of existing software systems. We assist organizations with issue resolution, feature updates, version upgrades, performance optimization, and long-term technical support. Through proactive maintenance and expert guidance, we help businesses maximize the value of their software investments while minimizing operational disruptions and technical challenges."

    },

    securityMonitoring: {

        title: "Security & Monitoring",

        image: "./icons/security1.jpeg",

        tagline: "Protecting Digital Assets Through Proactive Monitoring And Prevention",

        description: "Cybersecurity threats continue to evolve, making continuous monitoring and protection a necessity rather than an option. Our security and monitoring services focus on identifying vulnerabilities, detecting unusual activity, monitoring system health, managing backups, and implementing preventive measures before issues impact business operations. By maintaining constant visibility into your digital infrastructure, we help organizations improve resilience, reduce risk, strengthen security posture, and ensure business continuity in an increasingly connected environment."

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

    if (!buttons.length) {

        console.warn(
            "No service buttons found"
        );

        return;
    }

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
   DEBUG
===================================== */

console.log(
    "TPS Services Engine Loaded"
);
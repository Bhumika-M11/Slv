/* =========================================
   FIREBASE IMPORTS
========================================= */

import { initializeApp }
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    sendSignInLinkToEmail,
    isSignInWithEmailLink,
    signInWithEmailLink
}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import {
    getFirestore,
    collection,
    addDoc,
    serverTimestamp
}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

/* =========================================
   FIREBASE CONFIG
========================================= */

const firebaseConfig = {

    apiKey: "AIzaSyATbraCdmbtuYKO6jsbeihtjWJbQhvtwV4",
    authDomain: "slv-protech.firebaseapp.com",
    projectId: "slv-protech",
    storageBucket: "slv-protech.firebasestorage.app",
    messagingSenderId: "355873316474",
    appId: "1:355873316474:web:f353f1ce444cb5531565c3"
};

/* =========================================
   INIT
========================================= */

const app =
    initializeApp(firebaseConfig);

const auth =
    getAuth(app);

const db =
    getFirestore(app);

const provider =
    new GoogleAuthProvider();

/* =========================================
   ELEMENTS
========================================= */

const googleBtn =
    document.getElementById("googleLoginBtn");

const emailBtn =
    document.getElementById("emailLoginBtn");

const emailAuthBox =
    document.getElementById("emailAuthBox");

const emailInput =
    document.getElementById("emailInput");

const sendLinkBtn =
    document.getElementById("sendLinkBtn");

const leadForm =
    document.getElementById("leadForm");

const toast =
    document.getElementById("toast");

/* =========================================
   USER STATE
========================================= */

let currentUser = null;

let authProvider = "";

/* =========================================
   TOAST
========================================= */

function showToast(message) {

    toast.innerText = message;

    toast.classList.add("show");

    setTimeout(() => {

        toast.classList.remove("show");

    }, 3000);
}

/* =========================================
   EMAIL BOX TOGGLE
========================================= */

emailBtn.addEventListener("click", () => {

    emailAuthBox.classList.toggle(
        "active"
    );
});

/* =========================================
   GOOGLE LOGIN
========================================= */

googleBtn.addEventListener("click", async() => {

    try {

        const result =
            await signInWithPopup(auth, provider);

        currentUser =
            result.user;

        authProvider =
            "google";

        googleBtn.style.display =
            "none";

        emailBtn.style.display =
            "none";

        emailAuthBox.style.display =
            "none";

        document
            .getElementById("fullName")
            .value =
            currentUser.displayName || "";

        leadForm.classList.add(
            "active"
        );

        showToast(
            "Google Login Successful"
        );

    } catch (error) {

        console.error(error);

        showToast(
            "Google Login Failed"
        );
    }
});

/* =========================================
   SEND EMAIL LINK
========================================= */

sendLinkBtn.addEventListener("click", async() => {

    const email =
        emailInput.value;

    if (!email) {

        showToast(
            "Enter email first"
        );

        return;
    }

    // const isLocalhost =

    //     window.location.hostname === "127.0.0.1" ||

    //     window.location.hostname === "localhost";

    // const actionCodeSettings = {

    //     url: isLocalhost

    //         ?

    //         "http://127.0.0.1:5500/register.html"

    //         :

    //         "https://03hari-krishna-kumar-div.github.io/services/register.html",

    //     handleCodeInApp: true
    // };
    const actionCodeSettings = {

        url: "https://03hari-krishna-kumar-div.github.io/services/register.html",

        handleCodeInApp: true
    };
    try {

        await sendSignInLinkToEmail(
            auth,
            email,
            actionCodeSettings
        );

        localStorage.setItem(
            "emailForSignIn",
            email
        );

        showToast(
            "Login link sent"
        );

    } catch (error) {

        console.error(error);

        showToast(
            "Failed to send link"
        );
    }
});

/* =========================================
   EMAIL LINK LOGIN
========================================= */

if (
    isSignInWithEmailLink(
        auth,
        window.location.href
    )
) {

    let email =
        localStorage.getItem(
            "emailForSignIn"
        );

    if (!email) {

        email =
            prompt(
                "Enter your email"
            );
    }

    signInWithEmailLink(
        auth,
        email,
        window.location.href
    )

    .then((result) => {

        currentUser =
            result.user;

        authProvider =
            "email-link";

        googleBtn.style.display =
            "none";

        emailBtn.style.display =
            "none";

        emailAuthBox.style.display =
            "none";

        leadForm.classList.add(
            "active"
        );

        showToast(
            "Email Login Successful"
        );
    })

    .catch((error) => {

        console.error(error);

        showToast(
            "Email Login Failed"
        );
    });
}

/* =========================================
   FORM SUBMIT
========================================= */

leadForm.addEventListener("submit", async(e) => {

    e.preventDefault();

    try {

        await addDoc(
            collection(db, "leads"), {

                authProvider,

                name:

                    currentUser.displayName ||

                    document
                    .getElementById("fullName")
                    .value,

                email: currentUser.email,

                phone:

                    document
                    .getElementById("phoneNumber")
                    .value,

                businessType:

                    document
                    .getElementById("businessType")
                    .value,

                services:

                    document
                    .getElementById("services")
                    .value,

                projectDetails:

                    document
                    .getElementById("projectDetails")
                    .value,

                createdAt: serverTimestamp()
            }
        );

        showToast(
            "Inquiry Submitted"
        );

        leadForm.reset();

    } catch (error) {

        console.error(error);

        showToast(
            "Submission Failed"
        );
    }
});

/* =========================================
   FLIP TEXT
========================================= */

const flipText =
    document.getElementById("flipText");

const words = [

    "Your Business",
    "Our Trust"
];

let currentIndex = 0;

setInterval(() => {

    flipText.style.transform =
        "rotateX(90deg)";

    flipText.style.opacity =
        "0";

    setTimeout(() => {

        currentIndex++;

        if (currentIndex >= words.length) {

            currentIndex = 0;
        }

        flipText.textContent =
            words[currentIndex];

        flipText.style.transform =
            "rotateX(0deg)";

        flipText.style.opacity =
            "1";

    }, 400);

}, 2500);

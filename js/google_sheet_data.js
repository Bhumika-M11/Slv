const admin = require("firebase-admin");
const axios = require("axios");

const serviceAccount = require("./website-98d29-firebase-adminsdk-fbsvc-5da1c44a07.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

const WEB_APP_URL =
  "https://script.google.com/macros/s/AKfycbzX73SxR060E1JKs0nsq0Bpazl-oPAobbM3e-ii9m2DiKCl7aJowUZGWrKmbt3R96y3kA/exec";

async function syncFirestoreToSheet() {

  try {

    const snapshot =
      await db.collection("leads").get();

    const leads = [];

    snapshot.forEach(doc => {

      const lead = doc.data();

      leads.push({
        name: lead.name || "",
        email: lead.email || "",
        phone: lead.phone || "",
        businessType: lead.businessType || "",
        services: lead.services || "",
        projectDetails: lead.projectDetails || "",
        authProvider: lead.authProvider || "",
        createdAt:
          lead.createdAt
            ? lead.createdAt.toDate().toISOString()
            : ""
      });

    });

    const response =
      await axios.post(
        WEB_APP_URL,
        leads
      );

    console.log(response.data);

  } catch (error) {

    console.error(error);

  }

}

syncFirestoreToSheet();
import { firestore } from "firebase-functions";
import { admin } from "firebase-admin";
import { nodemailer } from "nodemailer";
const { EMAIL, EMAIL_PASSWORD, USERNAME, PASSWORD } = process.env;
require("dotenv").config();

// send email function

admin.initializeApp();

var transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: EMAIL_PASSWORD,
    pass: EMAIL,
  },
});

export const sendEmail = firestore
  .document("enquiry/{enquiryId}")
  .onCreate((snap, context) => {
    const mailOptions = {
      from: EMAIL,
      to: EMAIL,
      subject: "Enquiry from website: advertiseherebranding.co.za",
      html: `
        <p>From:</p>
        <h1>${snap.data().name}</h1>
        <br/>
        <h3>${snap.data().email}</h3>
        <br/>
        <h3>${snap.data().number}</h3>
        <br/><br/>
        <p>About prospect:</p> 
        <br/>
        <h5>${snap.data().aboutClient}</h5>
        <br/><br/>
        <p>About Reason for reaching out:</p> 
        <br/>
        <h5>${snap.data().reason}</h5>
      `,
    };
    return transporter.sendMail(mailOptions, (error, data) => {
      if (error) {
        console.log(error);
        return;
      }
      console.log("Sent!");
    });
  });

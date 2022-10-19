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

let emailList = [
  "rngobeni"
];

export const sendEmail = firestore
  .document("enquiry/{enquiryId}")
  .onCreate((snap, context) => {
    const mailOptions = {
      from: EMAIL,
      to: [EMAIL, "leads@advertiseherebranding.co.za"],
      subject: "Enquiry from website: advertiseherebranding.co.za",
      html: `
        <p>From:</p>
        <h1>${snap.data().name}</h1>
        <h3>${snap.data().email}</h3>
        <h3>${snap.data().number}</h3>
        <br/>
        <p>About prospect:</p> 
        <h3>${snap.data().aboutClient}</h3>
        <p>About Reason for reaching out:</p>
        <h3>${snap.data().reason}</h3>
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

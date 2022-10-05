const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");

admin.initializeApp();

var transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "rngobeni303@gmail.com",
    pass: "dryuebdbtwjpbffj",
  },
});

exports.sendEmail = functions.firestore
  .document("enquiry/{enquiryId}")
  .onCreate((snap, context) => {
    const mailOptions = {
      from: "rngobeni303@gmail.com",
      to: "rngobeni303@gmail.com",
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

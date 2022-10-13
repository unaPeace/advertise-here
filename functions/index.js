const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");
const express = require("express");
const Instagram = require("instagram-web-api");
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

  // post to social functions

  const app = express();

  const port = process.env.PORT || 4440;

  app.listen(port, () =>{
    console.log("Connected!");
  });

  const instagramLoginFunction = () => {
    const client = new Instagram({
      username: USERNAME,
      password: PASSWORD
    });

    const instagramPostPictureFunction = async () => {
      await client.getPhotosByUsername({username: USERNAME}).then((res) => console.log(res));
    };

    instagramPostPictureFunction()
  };

  instagramLoginFunction()
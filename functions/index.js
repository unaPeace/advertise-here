const functions = require('firebase-functions')
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');

admin.initializeApp();

const transporter = nodemailer.createTransport({
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
      console.log("email id" + snap.data().email);
      let message = "From: " + snap.data().name +
      "<br/>Email: " + snap.data().email;
      message = message + "<br/>Number: " + snap.data().number;
      message = message + "<br/>About prospect: " + snap.data().aboutClient;
      message = message + "<br/>Reason for reaching out: " + snap.data().reason;
      const mailOptions = {
        from: "rngobeni303@gmail.com",
        to: "rngobeni303@gmail.com",
        subject: 'Enquiry from website: advertiseherebranding.co.za',
        html: message,
      };
      return transporter.sendMail(mailOptions, (error, data) => {
        if (error) {
          console.log("Inside error block" + error);
          return;
        }
        console.log("email sent");
      });
    });


/*import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';
import SendmailTransport from 'nodemailer/lib/sendmail-transport/index.js';
import { async } from '@firebase/util';
import { user } from 'firebase-functions/v1/auth';

const app = express();
app.use(cors({origin: "*" }));
app.use(bodyParser.json());

app.listen(3000, () => {
    console.log("The server started on port 3000");
});

app.post("/sendmail", (req, res) => {
    console.log("enquiry made");
    let user = req.body;
    sendMail(user, (err, info) => {
        if (err) {
            console.log(err);
            res.status(400);
            res.send({ error: "Failed to send email" });
        } else {
            console.log("Email has been sent");
            res.send(info);
        }
    });
});

const sendMail = (user, callback) => {
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: 'rngobeni303@gmail.com',
            pass: 'dryuebdbtwjpbffj',
        }
    });
};

const mailOptions = {
    from: `"Website Enquiry"`,
    to: 'rngobeni303@gmail.com',
    subject: 'Enquiry from website: advertiseherebranding.co.za',
    html: `
    <div>
        <h1>${user.name}</h1>
        <h1>${user.number}</h1>
        <h1>${user.email}</h1><br/>
        <p>Client note</p>
        <h2>${user.aboutClient}</h2>
        <p>Reason for reaching out</p>
        <h2>${user.reason}</h2>
    </div>
    `,
  };
  transporter.sendMail(mailOptions, callback); */

/*
const functions = require('firebase-functions')
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');

admin.initializeApp()
require('dotenv').config()

exports.sendEmailNotification = functions.firestore.document('submissions/{docId}')
.onCreate((snap, ctx) => {
    const data = snap.data();
    let authData = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: 'rngobeni303@gmail.com',
            pass: 'dryuebdbtwjpbffj',
        }
    });
    authData.sendMail({
        from: `"Website Enquiry"`,
        to: 'rngobeni303@gmail.com',
        subject: 'Enquiry from website: advertiseherebranding.co.za',
        html: `
        <div>
            <h1>${data.name}</h1>
            <h1>${data.number}</h1>
            <h1>${data.email}</h1><br/>
            <p>Client note</p>
            <h2>${data.aboutClient}</h2>
            <p>Reason for reaching out</p>
            <h2>${data.reason}</h2>
        </div>
        `,
    }).then(res => console.log('Success')).catch(err => console.log(err));
});
*/

//import express from 'express';
//import cors from 'cors';
//import bodyParser from 'body-parser';
//import nodemailer from 'nodemailer';
//import SendmailTransport from 'nodemailer/lib/sendmail-transport/index.js';
//import { async } from '@firebase/util';

// Firebase App

/* const functions = require('firebase-functions')
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');

admin.initializeApp();
require('dotenv').config()

const {EMAIL, PASSWORD} = process.env;

exports.sendEmailNotification = function.firestore.document('submissions/{docId}')
.onCreate((snap, ctx) => {

    const data = snap.data();

    let authData = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: EMAIL,
            pass: PASSWORD,
        }
    });
    
    authData.sendMail({
        from : 'rngobeni303@gmail.com',
        to : 'user.'
    })
}) */

// Express App

/*const app = express();
app.use(cors({origin: '*'}));
app.use(bodyParser.json());

app.listen(3000, () => {
    console.log('listening on port 3000');
});

app.get('/', (req, res) => {
    res.send('<h1>Welcome to Advertise Here</h1>');
});

app.post('/sendmail', (req, res) => {
    console.log('Enquiry made!');
    let user = req.body;
    sendMail(user, info => {
        console.log(`Mail sent successfully 😃 Id: ${info.messageId}`);
        res.send(info);
    });
});

async function sendMail(user, callback) {
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: 'rngobeni303@gmail.com',
            pass: 'dryuebdbtwjpbffj',
        }
    });

    let emailList = [
        //'sales@advertiseherebranding.co.za',
        'leads@advertiseherebranding.co.za',
        'rngobeni303@gmail.com'
    ];
    
    let createMail = {
        
            from: `"Website Enquiry"`,
            to: emailList,
            subject: 'Enquiry from website: advertiseherebranding.co.za',
            html: `
            <div>
                <h1>${user.name}</h1>
                <h1>${user.number}</h1>
                <h1>${user.email}</h1><br/>
                <p>Client note</p>
                <h2>${user.aboutClient}</h2>
                <p>Reason for reaching out</p>
                <h2>${user.reason}</h2>
            </div>
            `,
       // }).then(console.info).catch(console.catch);
    };

    let info = await transporter.sendMail(createMail);

    callback(info);
} */

/* const functions = require("firebase-functions");
const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');
const cors = require("cors")({
  origin: true
});

exports.emailMessage = functions.https.onRequest((req, res) => {
  const { name, email, number, aboutClient, reason } = req.body;
  return cors(req, res, () => {
    var text = `<div>
      <h4>Information</h4>
      <ul>
        <li>
          Name - ${name || ""}
        </li>
        <li>
          Email - ${email || ""}
        </li>
        <li>
          Phone - ${number || ""}
        </li>
      </ul>
      <h4>Client note</h4>
      <p>${aboutClient || ""}</p>
      <h4>Message</h4>
      <p>${reason || ""}</p>
    </div>`;

     var transporter = nodemailer.createTransport(smtpTransport({
      service: 'gmail',
      auth: {
          user: 'rngobeni303@gmail.com',
          pass: 'dryuebdbtwjpbffj'
      }
    }));
    const mailOptions = {
      to: "rngobeni303@gmail.com",
      from: "no-reply@myemail.com",
      subject: `Enquiry from Website`,
      text: text,
      html: text
    };
    
    transporter.sendMail(mailOptions, function(error, info){
     if(error){
        console.log(error.message);
     }
     res.status(200).send({
       message: "success"
     })
    });
  }).catch(() => {
    res.status(500).send("error");
  });
}); */


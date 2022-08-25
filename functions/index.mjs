import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';
import SendmailTransport from 'nodemailer/lib/sendmail-transport/index.js';
import { async } from '@firebase/util';

const app = express();
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
        port: 465,
        secure: true,
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
    
    
}
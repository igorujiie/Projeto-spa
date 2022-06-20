import express from 'express'
import nodemailer from 'nodemailer'
import { prisma } from './prisma';

const app = express();

app.use(express.json());


const  transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "c54a82eb3afad8",
      pass: "5c83bf94abfbb6"
    }
  });


app.post('/feedbacks', async (req,res) =>{
const {type, comment, screenshot}=  req.body;

    const feedback = await prisma.feedback.create({
        data: {
            type,
            comment,
            screenshot,
        }
    });


    await transport.sendMail({
        from: 'Equipe Feedget <oi@feedget.com>',
        to: 'igor <igorkazuhico@hotmail.com>',
        subject: 'novo Feedback',
        html: [
            `<div style ="font-family: sans-serif; font-size: 16px; color: #111;">`,
            `<p>Tipo do Feedback: ${type} </p>`,
            `<p>comentario: ${comment} </p>`,
            `</div>`
        ].join('\n') 
    });
  
    return res.status(201).json({data:feedback});
});


app.listen(3333, () => {
    console.log('HTTP server running');
})

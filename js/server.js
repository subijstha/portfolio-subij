const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const port = process.env.PORT || 3000;

// Middleware for parsing JSON and form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve HTML form
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Handle form submission
app.post('/sendEmail', (req, res) => {
    const { name, email, subject, message } = req.body;

    // Compose and send email using Nodemailer
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'iminstha5@gmail.com', // Your Gmail address
            pass: 'motogp8intv'   // Your Gmail password or App Password
        }
    });

    const mailOptions = {
        from: email,
        to: 'subijshrestha@gmail.com', // Recipient's email address
        subject: `New Contact Form Submission - ${subject}`,
        text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            res.json({ status: 'error', message: 'Failed to send email.' });
        } else {
            console.log('Email sent:', info.response);
            res.json({ status: 'success', message: 'Email sent successfully!' });
        }
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

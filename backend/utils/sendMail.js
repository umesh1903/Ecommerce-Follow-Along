const nodemailer = require('nodemailer');

const sendMail = async (options) => {
    try {
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            secure: false, // Use true for 465, false for other ports
            service: process.env.SMTP_SERVICE,
            auth: {
                user: process.env.SMTP_EMAIL, // Your email address
                pass: process.env.SMTP_PASSWORD // Your email password
            }
        });

        // Additional logic for sending email can go here (e.g., transporter.sendMail)
    } catch (error) {
        console.error("Error sending email:", error);
    }
};
import nodemailer from 'nodemailer'

export const sendOTPemail = async (email, otp) => {
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        },
    });

    await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: email,
        subject: "Verify Your Email",
        html: `
            <h2>Welcome to Aires Bliss</h2>
            <p>Your verification code is:</p>
            <h1>${otp}</h1>
            <p>This code expires in 10 minutes.</p>
        `,
    });
}
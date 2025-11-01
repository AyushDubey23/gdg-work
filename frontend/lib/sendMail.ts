"use server";
import { IMail } from "@/components/contact";
import nodemailer from "nodemailer";

// Create a transporter for SMTP
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  auth: {
    user: process.env.SMTP_USERNAME,
    pass: process.env.SMTP_PASSWORD,
  },
});

const sendMail = async (props: IMail | null) => {
  try {
    const info = await transporter.sendMail({
      from: `${props?.fullName} <${props?.senderEmail}>`, // sender address
      to: "gdgmmmut@gmail.com", // list of receivers
      subject: props?.subject, // Subject line
      text: props?.message, // plain text body
    });

    console.log("Message sent: %s", info.messageId);
    return info.messageId;
  } catch (err) {
    console.error("Error while sending mail", err);
    return null;
  }
};

export { sendMail };

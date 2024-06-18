import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const { senderMail, name, subject, message } = await request.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 587,
      secure: true,
      auth: {
        user: process.env.NEXT_PRIVATE_USERNAME,
        pass: process.env.NEXT_PRIVATE_PASSWORD,
      },
    });

    const mailOption = {
      from: "E2A Tuition Website",
      to: process.env.NEXT_PRIVATE_RECEIVER,
      subject: "Student Enquiry from E2A Tuition Website",
      html: `
        <html>
          <head>
            <style>
              body {
                font-family: Arial, sans-serif;
                background-color: #f4f4f4;
                color: #333;
                margin: 0;
                padding: 0;
              }
              .container {
                width: 80%;
                margin: 20px auto;
                background-color: #fff;
                padding: 20px;
                border-radius: 10px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
              }
              .content {
                line-height: 1.6;
              }
              .content li {
                margin-bottom: 10px;
                list-style-type: none;
                padding: 10px;
                background-color: #f9f9f9;
                border-radius: 5px;
              }
              .footer {
                text-align: center;
                padding-top: 20px;
                color: #777;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="content">
                <h2>Student Enquiry</h2>
                <ul>
                  <li><strong>Name:</strong> ${name}</li>
                  <li><strong>Sender Mail:</strong> ${senderMail}</li>
                  <li><strong>Title:</strong> ${subject}</li>
                  <li><strong>Message:</strong> ${message}</li>
                </ul>
              </div>
              <div class="footer">
                <p>This message was sent from the E2A Tuition website.</p>
              </div>
            </div>
          </body>
        </html>
      `,
    };

    await transporter.sendMail(mailOption);

    return NextResponse.json({ message: "Email Sent Successfully" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Failed to Send Email", error }, { status: 500 });
  }
}

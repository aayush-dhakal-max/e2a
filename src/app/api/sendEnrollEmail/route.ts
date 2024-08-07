import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const { asLevelIsChecked, a2LevelIsChecked, name, phone, email } = await request.json();
    let enrolledFor = "";

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

    if (asLevelIsChecked) {
      enrolledFor = "AS Level";
    } else if (a2LevelIsChecked) {
      enrolledFor = "A2 Level";
    } else if (asLevelIsChecked && a2LevelIsChecked) {
      enrolledFor = "AS Level, A2 Level";
    } else {
      enrolledFor = "None";
    }

    const mailOption = {
      from: "E2A Website Enroll Page",
      to: process.env.NEXT_PRIVATE_RECEIVER,
      subject: "Student Enrollment Form",
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
                <h1>Student Enrollment</h1>
                <ul>
                  <li><strong>Name : </strong> ${name}</li>
                  <li><strong>Phone Number : </strong> ${phone}</li>
                  <li><strong>Email : </strong> ${email}</li>
                  <li><strong>Enrolled For : </strong> ${enrolledFor}</li>
                </ul>
              </div>
              <div class="footer">
                <p>This message was sent from the E2A Tuition website enroll page.</p>
              </div>
            </div>
          </body>
        </html>
      `,
    };

    await transporter.sendMail(mailOption);

    return NextResponse.json({ message: "Enroll Form Submitted Successfully" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Failed to Send Form", error }, { status: 500 });
  }
}

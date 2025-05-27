import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import path from "path";
import fs from "fs/promises";

export async function POST(req) {
  try {
    const {
      name,
      email,
      Phone,
      projectBudget,
      projectType,
      otherProjectType,
      message,
    } = await req.json();

    if (!name || !email || !Phone || !projectBudget || !projectType || !message) {
      return NextResponse.json(
        { error: "Name, email, project title, budget, type, and message are required." },
        { status: 400 }
      );
    }

    if (projectType === "other" && !otherProjectType) {
      return NextResponse.json({ error: "Please specify the other project type." }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const imagePath = path.resolve("public", "footer-logo.png");
    let image;
    try {
      image = await fs.readFile(imagePath);
    } catch (error) {
      console.warn("Warning: Could not read footer image.", error);
      image = null;
    }

    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: process.env.RECEIVER_EMAIL,
      subject: `New Enquiry from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.5;">
          <h2>New Project Enquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone Number:</strong> ${Phone}</p>
          <p><strong>Project Budget:</strong> ${projectBudget}</p>
          <p><strong>Project Type:</strong> ${projectType}</p>
          ${otherProjectType ? `<p><strong>Other Project Type:</strong> ${otherProjectType}</p>` : ''}
          <p><strong>Message:</strong> ${message}</p>
          ${image ? '<br><img src="cid:footerImage" style="width:100%;max-width:500px;border-radius:10px;" />' : ''}
        </div>
      `,
      attachments: image
        ? [
            {
              filename: "footer-image.png",
              content: image,
              cid: "footerImage",
            },
          ]
        : [],
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Enquiry sent successfully!" }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Failed to send enquiry." }, { status: 500 });
  }
}

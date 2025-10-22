import { NextResponse } from "next/server";
import { getTransporter } from "@/lib/mail";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("📧 Received booking form data:", body);

    const {
      firstname,
      lastname,
      email,
      phoneNumber,
      gender,
      age,
      medicalInfo,
      city,
      travelType,
      packageName,
      tierName,
      groupName,
      packageDuration,
      originalPrice,
      discountedPrice,
      companionNames,
      paymentMethod,
      fromPakistan,
    } = body;

    const fullName = `${firstname || ""} ${lastname || ""}`.trim();
    const transporter = getTransporter();

    // Email to admin (you)
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: process.env.ADMIN_EMAIL,
      subject: "🕌 New Ready-Made Package Booking",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #AD5628;">New Booking Request Received</h2>
          
          <h3>Personal Information:</h3>
          <p><strong>Name:</strong> ${fullName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phoneNumber}</p>
          <p><strong>Gender:</strong> ${gender || "Not specified"}</p>
          <p><strong>Age:</strong> ${age || "Not specified"}</p>
          <p><strong>City:</strong> ${city}</p>
          <p><strong>From Pakistan:</strong> ${fromPakistan || "Not specified"}</p>
          ${medicalInfo ? `<p><strong>Medical Info:</strong> ${medicalInfo}</p>` : ''}
          
          <h3>Package Details:</h3>
          <p><strong>Package:</strong> ${packageName}</p>
          <p><strong>Tier:</strong> ${tierName}</p>
          <p><strong>Group:</strong> ${groupName}</p>
          <p><strong>Duration:</strong> ${packageDuration}</p>
          ${originalPrice ? `<p><strong>Original Price:</strong> ${originalPrice}</p>` : ''}
          <p><strong>Final Price:</strong> <span style="color: #AD5628; font-size: 18px; font-weight: bold;">${discountedPrice}</span></p>
          
          <h3>Travel Information:</h3>
          <p><strong>Travel Type:</strong> ${travelType}</p>
          <p><strong>Payment Method:</strong> ${paymentMethod || "Not specified"}</p>
          ${companionNames && companionNames.length > 0 ? `
            <p><strong>Companions:</strong></p>
            <ul style="line-height: 1.8;">
              ${companionNames.map((name: string) => `<li>${name}</li>`).join('')}
            </ul>
          ` : '<p><strong>Companions:</strong> None</p>'}
        </div>
      `,
    });

    // Email to customer
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: email,
      subject: "✅ Your Umrah Booking Request Received",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #AD5628;">Dear ${fullName || "Pilgrim"},</h2>
          
          <p>Thank you for choosing <strong>Qafila-e-Miqat</strong>. We've received your booking request and our team will contact you shortly at <strong>${phoneNumber}</strong>.</p>
          
          <h3>Your Booking Summary:</h3>
          <div style="background-color: #f9f5f0; padding: 15px; border-radius: 8px; border-left: 4px solid #AD5628;">
            <p style="margin: 5px 0;"><strong>Package:</strong> ${packageName}</p>
            <p style="margin: 5px 0;"><strong>Tier:</strong> ${tierName}</p>
            <p style="margin: 5px 0;"><strong>Group:</strong> ${groupName}</p>
            <p style="margin: 5px 0;"><strong>Duration:</strong> ${packageDuration}</p>
            <p style="margin: 5px 0;"><strong>Price: PKR</strong> <span style="color: #AD5628; font-size: 18px; font-weight: bold;">${discountedPrice}</span></p>
          </div>
          
          <h3 style="margin-top: 20px;">Your Details:</h3>
          <ul style="line-height: 1.8;">
            <li><strong>Travel Type:</strong> ${travelType}</li>
            <li><strong>City:</strong> ${city}</li>
            ${companionNames && companionNames.length > 0 ? `
              <li><strong>Traveling with:</strong> ${companionNames.join(", ")}</li>
            ` : '<li><strong>Companions:</strong> None</li>'}
          </ul>
          
          <div style="margin-top: 30px; padding: 15px; background-color: #fff8f0; border-radius: 8px;">
            <p style="margin: 0; color: #AD5628;"><strong>📞 What's Next?</strong></p>
            <p style="margin: 10px 0 0 0;">Our team will review your booking and contact you within 24 hours to confirm your reservation and discuss payment details.</p>
          </div>
          
          <p style="margin-top: 30px;">Best regards,<br><strong>Qafila-e-Miqat Team</strong></p>
          
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #e0e0e0;">
          <p style="font-size: 12px; color: #666;">If you have any questions, feel free to contact us at ${process.env.ADMIN_EMAIL} or +92 345-5631563</p>
        </div>
      `,
    });

    console.log("✅ Booking emails sent successfully");
    return NextResponse.json({ success: true, message: "Emails sent successfully" });
  } catch (error) {
    console.error("❌ Error sending booking email:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send booking email" },
      { status: 500 }
    );
  }
}

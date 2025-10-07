import { NextResponse } from "next/server";
import { getTransporter } from "@/lib/mail";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("📧 Received custom package data:", body);

    const {
      fullname,
      email,
      phoneNumber,
      hotel_category,
      transport_choice,
      travel_date,
      arrival_date,
      departure_city,
      special_requests,
      priority,
      adults,
      children,
      infants,
      room_preference,
    } = body;

    // Calculate duration in days
    const departureDate = new Date(travel_date);
    const returnDate = new Date(arrival_date);
    const durationInDays = Math.ceil((returnDate.getTime() - departureDate.getTime()) / (1000 * 60 * 60 * 24));

    const transporter = getTransporter();

    // Email to admin (you)
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: process.env.ADMIN_EMAIL,
      subject: "🕌 New Customized Umrah Package Lead",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #AD5628;">New Customized Package Request</h2>
          
          <h3>Personal Information:</h3>
          <p><strong>Name:</strong> ${fullname}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phoneNumber}</p>
          <p><strong>City:</strong> ${departure_city}</p>
          
          <h3>Travel Details:</h3>
          <p><strong>Departure Date:</strong> ${travel_date}</p>
          <p><strong>Return Date:</strong> ${arrival_date}</p>
          <p><strong>Duration:</strong> ${durationInDays} days</p>
          <p><strong>Travelers:</strong> ${adults} Adults${children ? `, ${children} Children` : ''}${infants ? `, ${infants} Infants` : ''}</p>
          
          <h3>Preferences:</h3>
          <p><strong>Hotel Category:</strong> ${hotel_category}</p>
          <p><strong>Room Type:</strong> ${room_preference}</p>
          <p><strong>Transport:</strong> ${transport_choice}</p>
          <p><strong>Priority:</strong> ${priority}</p>
          <p><strong>Special Requests:</strong> ${special_requests || "None"}</p>
        </div>
      `,
    });

    // Email to customer
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: email,
      subject: "✅ Your Customized Umrah Package Request Received",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #AD5628;">Dear ${fullname},</h2>
          
          <p>Thank you for choosing <strong>Qafila-e-Miqat</strong>. We have received your custom Umrah package request and our team will contact you shortly at <strong>${phoneNumber}</strong>.</p>
          
          <h3>Your Submitted Details:</h3>
          <ul style="line-height: 1.8;">
            <li><strong>Departure Date:</strong> ${travel_date}</li>
            <li><strong>Return Date:</strong> ${arrival_date}</li>
            <li><strong>Duration:</strong> ${durationInDays} days</li>
            <li><strong>Travelers:</strong> ${adults} Adults${children ? `, ${children} Children` : ''}${infants ? `, ${infants} Infants` : ''}</li>
            <li><strong>Hotel Category:</strong> ${hotel_category}</li>
            <li><strong>Room Preference:</strong> ${room_preference}</li>
            <li><strong>Transport:</strong> ${transport_choice}</li>
            <li><strong>Departure City:</strong> ${departure_city}</li>
            <li><strong>Special Requests:</strong> ${special_requests || "None"}</li>
          </ul>

          <div style="margin-top: 30px; padding: 15px; background-color: #fff8f0; border-radius: 8px;">
            <p style="margin: 0; color: #AD5628;"><strong>📞 What's Next?</strong></p>
            <p style="margin: 10px 0 0 0;">Our team will review your booking and contact you within 24 hours to confirm your reservation and discuss payment details.</p>
          </div>
          
          
          <p style="margin-top: 20px;">Best regards,<br><strong>Qafila-e-Miqat Team</strong></p>
        </div>
      `,
    });

    console.log("✅ Emails sent successfully");
    return NextResponse.json({ success: true, message: "Emails sent successfully" });
  } catch (error) {
    console.error("❌ Error sending custom package email:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send custom package email" },
      { status: 500 }
    );
  }
}
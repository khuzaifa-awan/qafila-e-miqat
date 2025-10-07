import { google } from "googleapis";
import path from "path";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("📩 Incoming request body:", body);

    const { formType, data } = body as {
      formType: string;
      data: Record<string, any>;
    };

    // Load Google Auth
    const auth = new google.auth.GoogleAuth({
      keyFile: path.join(process.cwd(), "keys/service-account.json"),
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });
    const spreadsheetId = process.env.GOOGLE_SHEET_ID!;

    const timestamp = new Date().toLocaleString("en-PK", {
      timeZone: "Asia/Karachi",
    });

    let values: any[] = [];
    let tabName = "";

    if (formType === "ReadyMadePackage") {
      tabName = "ReadyMadePackage";
      values = [
        [
          timestamp, // Timestamp
          data.fromPakistan, // From Pakistan
          data.firstname, // First Name
          data.lastname, // Last Name
          data.email, // Email
          data.phoneNumber, // Contact Number
          data.gender, // Gender
          data.age, // Age
          data.medicalInfo, // Medical Info
          data.city, // City
          data.travelType, // Travel Type
          (data.companionNames || []).join(", "), // Companion Names
          data.paymentMethod, // Payment Method
          data.packageName, // Package Name
          data.tierName, // Tier Name
          data.groupName, // Group Name
          data.packageDuration, // Duration
          data.originalPrice, // Original Price ⭐
          data.discountedPrice, // Discounted Price ⭐
          data.terms ? "Yes" : "No",
        ],
      ];
    }

    if (formType === "CustomPackage") {
      tabName = "CustomPackage";
      values = [
        [
          timestamp,
          data.transport_choice,
          data.special_requests,
          data.priority,
          data.travel_date,
          data.arrival_date,
          data.adults,
          data.children,
          data.infants,
          data.hotel_category,
          data.room_preference,
          data.fullname,
          data.phoneNumber,
          data.email,
          data.departure_city,
        ],
      ];
    }

    if (formType === "UmrahLeads") {
      tabName = "UmrahLeads";
      values = [
        [
          timestamp,
          data.name,
          data.phoneNumber,
          data.preferredMonth,
          data.groupSize,
          data.budgetRange,
          data.hotelStar,
        ],
      ];
    }

    if (formType === "NewsLetterSubscribers") {
      tabName = "NewsLetterSubscribers";
      values = [[timestamp, data.email]];
    }

    if (!tabName) {
      console.error("❌ No matching tab found for formType:", formType);
      return NextResponse.json(
        { success: false, error: `No tab found for formType: ${formType}` },
        { status: 400 }
      );
    }

    console.log("📌 About to append row:", { spreadsheetId, tabName, values });

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: `${tabName}!A1`,
      valueInputOption: "USER_ENTERED",
      requestBody: { values },
    });

    console.log("✅ Row appended successfully to:", tabName);

    return NextResponse.json({ success: true, message: "Form submitted!" });
  } catch (error: unknown) {
    const err = error as Error;
    console.error("❌ Google Sheets error:", err.message);
    return NextResponse.json(
      { success: false, error: err.message },
      { status: 500 }
    );
  }
}

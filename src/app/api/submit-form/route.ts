import { google } from "googleapis";
import path from "path";
import { NextResponse } from "next/server";

// Define types for form data
interface ReadyMadePackageData {
  fromPakistan: string;
  firstname: string;
  lastname: string;
  email: string;
  phoneNumber: string;
  gender: string;
  age: string | number;
  medicalInfo: string;
  city: string;
  travelType: string;
  companionNames?: string[];
  paymentMethod: string;
  packageName: string;
  tierName: string;
  groupName: string;
  packageDuration: string | number;
  originalPrice: string | number;
  discountedPrice: string | number;
  terms: boolean;
}

interface CustomPackageData {
  transport_choice: string;
  special_requests: string;
  priority: string;
  travel_date: string;
  arrival_date: string;
  adults: string | number;
  children: string | number;
  infants: string | number;
  hotel_category: string;
  room_preference: string;
  fullname: string;
  phoneNumber: string;
  email: string;
  departure_city: string;
}

interface UmrahLeadsData {
  name: string;
  phoneNumber: string;
  preferredMonth: string;
  groupSize: string | number;
  budgetRange: string;
  hotelStar: string | number;
}

interface NewsLetterSubscribersData {
  email: string;
}

type FormData =
  | ReadyMadePackageData
  | CustomPackageData
  | UmrahLeadsData
  | NewsLetterSubscribersData;

interface RequestBody {
  formType: string;
  data: FormData;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("📩 Incoming request body:", body);

    const { formType, data } = body as RequestBody;

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

    let values: (string | number)[][] = [];
    let tabName = "";

    if (formType === "ReadyMadePackage") {
      tabName = "ReadyMadePackage";
      const packageData = data as ReadyMadePackageData;
      values = [
        [
          timestamp, // Timestamp
          packageData.fromPakistan, // From Pakistan
          packageData.firstname, // First Name
          packageData.lastname, // Last Name
          packageData.email, // Email
          packageData.phoneNumber, // Contact Number
          packageData.gender, // Gender
          packageData.age, // Age
          packageData.medicalInfo, // Medical Info
          packageData.city, // City
          packageData.travelType, // Travel Type
          (packageData.companionNames || []).join(", "), // Companion Names
          packageData.paymentMethod, // Payment Method
          packageData.packageName, // Package Name
          packageData.tierName, // Tier Name
          packageData.groupName, // Group Name
          packageData.packageDuration, // Duration
          packageData.originalPrice, // Original Price ⭐
          packageData.discountedPrice, // Discounted Price ⭐
          packageData.terms ? "Yes" : "No",
        ],
      ];
    }

    if (formType === "CustomPackage") {
      tabName = "CustomPackage";
      const customData = data as CustomPackageData;
      values = [
        [
          timestamp,
          customData.transport_choice,
          customData.special_requests,
          customData.priority,
          customData.travel_date,
          customData.arrival_date,
          customData.adults,
          customData.children,
          customData.infants,
          customData.hotel_category,
          customData.room_preference,
          customData.fullname,
          customData.phoneNumber,
          customData.email,
          customData.departure_city,
        ],
      ];
    }

    if (formType === "UmrahLeads") {
      tabName = "UmrahLeads";
      const leadsData = data as UmrahLeadsData;
      values = [
        [
          timestamp,
          leadsData.name,
          leadsData.phoneNumber,
          leadsData.preferredMonth,
          leadsData.groupSize,
          leadsData.budgetRange,
          leadsData.hotelStar,
        ],
      ];
    }

    if (formType === "NewsLetterSubscribers") {
      tabName = "NewsLetterSubscribers";
      const newsletterData = data as NewsLetterSubscribersData;
      values = [[timestamp, newsletterData.email]];
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
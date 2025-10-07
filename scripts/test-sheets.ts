import { google } from "googleapis";
import fs from "fs";
import path from "path";

const SPREADSHEET_ID = "11ODAhqhlyMeldoc1pXuHWleXXYGqD_Kp_tjlZQlnNhc"; 

// Load the service account JSON securely
const keyFile = path.join(process.cwd(), "keys/service-account.json");
const serviceAccount = JSON.parse(fs.readFileSync(keyFile, "utf-8"));

async function appendTestRow() {
  const auth = new google.auth.GoogleAuth({
    credentials: serviceAccount,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const sheets = google.sheets({ version: "v4", auth });

  const response = await sheets.spreadsheets.values.append({
    spreadsheetId: SPREADSHEET_ID,
    range: "ReadyMadePackage!A1",
    valueInputOption: "USER_ENTERED",
    requestBody: {
      values: [[new Date().toISOString(), "Test Name", "0300-1234567"]],
    },
  });

  console.log("✅ Row appended:", response.statusText);
}

appendTestRow().catch((err) => {
  console.error("❌ Error:", err.message);
});

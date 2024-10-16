"use server";

import { googleAuth } from "./googleAuth";
import { google } from "googleapis";

export const subscribeAction = async (state, formData) => {
  const spreadsheetId = process.env.NEXT_PUBLIC_SPREADSHEET_ID;
  
  const rawData = {
    email: formData.get("email"),
    name: formData.get("name"),
    links: formData.get("links"),
    funfacts: formData.get("funfacts"),
  }

  console.log({rawData})

  try {
    const data = rawData;

    const sheets = await google.sheets({
      auth: await googleAuth(),
      version: "v4",
    });

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "A1:D1",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[data.email, data.name, data.links, data.funfacts]],
      },
    });

    return {
      success: true,
      errors: null,
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      errors: ["An error occurred."],
    };
  }
};
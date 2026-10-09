import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, service, date, timeSlot, source, notes } = body;

    if (!name || !phone || !service) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const leadData = {
      name,
      phone,
      service,
      date: date || "Flexible / Not specified",
      timeSlot: timeSlot || "Flexible",
      source: source || "Website Booking Form",
      notes: notes || "",
      submittedAt: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
    };

    // Server Console Log
    console.log("=== NEW APPOINTMENT LEAD RECEIVED ===");
    console.log(`Patient Name: ${leadData.name}`);
    console.log(`Phone: ${leadData.phone}`);
    console.log(`Service: ${leadData.service}`);
    console.log(`Preferred Date: ${leadData.date}`);
    console.log(`Preferred Time: ${leadData.timeSlot}`);
    console.log(`Submitted At: ${leadData.submittedAt}`);
    console.log("====================================");

    // Google Sheet Webhook Integration
    const webhookUrl =
      process.env.GOOGLE_SHEET_WEBHOOK_URL ||
      process.env.BOOKING_WEBHOOK_URL ||
      "https://script.google.com/macros/s/AKfycbyK5K79_C5K2J8MJMpRVwQ3norX_zQ88tcl2JcIw5u9rNpJun3ZuTwED8j9GBlxG58y/exec";
      
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(leadData),
          redirect: "follow",
        });
      } catch (err) {
        console.error("Google Sheet Webhook Notification Error:", err);
      }
    }

    return NextResponse.json({
      success: true,
      message: "Lead recorded and sent to Google Sheet successfully",
    });
  } catch (error) {
    console.error("Booking API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, service, date, timeSlot } = body;

    if (!name || !phone || !service) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Webhook simulation / Email notification payload log
    console.log("=== NEW APPOINTMENT BOOKING LEAD RECEIVED ===");
    console.log(`Clinic: Align Dentofacial Clinic, Noida`);
    console.log(`Patient Name: ${name}`);
    console.log(`Phone: ${phone}`);
    console.log(`Requested Service: ${service}`);
    console.log(`Preferred Date: ${date}`);
    console.log(`Preferred Time: ${timeSlot}`);
    console.log(`Timestamp: ${new Date().toISOString()}`);
    console.log("=============================================");

    // Webhook POST placeholder (e.g., Google Sheet / Zapier / Make)
    const webhookUrl = process.env.BOOKING_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name,
            phone,
            service,
            date,
            timeSlot,
            submittedAt: new Date().toISOString(),
          }),
        });
      } catch (err) {
        console.error("Webhook notification error:", err);
      }
    }

    return NextResponse.json({
      success: true,
      message: "Appointment request logged successfully",
    });
  } catch (error) {
    console.error("Booking API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

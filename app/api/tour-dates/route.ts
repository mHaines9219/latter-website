import { NextResponse } from "next/server";

export async function GET() {
  try {
    const apiKey = process.env.BANDSINTOWN_API_KEY;

    if (!apiKey) {
      console.error("Bandsintown API key not found in environment variables");
      return NextResponse.json(
        {
          error: "API configuration error",
          details: "Bandsintown API key not configured",
        },
        { status: 500 }
      );
    }

    console.log("Fetching from Bandsintown API...");
    const response = await fetch(
      "https://rest.bandsintown.com/artists/awakebutstillinbed-for-your-health/events",
      {
        headers: {
          Accept: "application/json",
          "x-api-key": apiKey,
        },
      }
    );

    console.log("Bandsintown API Status:", response.status);

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Bandsintown API Error Response:", errorText);
      throw new Error(
        `Bandsintown API responded with status: ${response.status}`
      );
    }

    const data = await response.json();

    // Log the response for debugging
    console.log("Bandsintown API Response:", data);

    // Ensure we're returning an array
    if (!Array.isArray(data)) {
      console.error("Invalid response format:", data);
      return NextResponse.json(
        { error: "Invalid response format from Bandsintown" },
        { status: 500 }
      );
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error("Detailed error in tour-dates API:", error);
    return NextResponse.json(
      {
        error: "Failed to fetch tour dates",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}

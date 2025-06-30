// src/app/api/loans/route.ts
import { NextResponse } from "next/server";
import { mockLoanApplications } from "@/utils/data"; // Adjust the import path if necessary

export async function GET() {
  try {
    return NextResponse.json(mockLoanApplications, { status: 200 });
  } catch (error) {
    console.error("Failed to fetch loan applications:", error);
    return NextResponse.json(
      { message: "Error fetching loan applications" },
      { status: 500 }
    );
  }
}

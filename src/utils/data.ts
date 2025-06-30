// src/utils/data.ts
import { faker } from "@faker-js/faker";

export interface LoanApplication {
  id: string;
  applicantName: string;
  amountRequested: number;
  status: "Pending" | "Approved" | "Rejected" | "Declined";
  submissionDate: string; // YYYY-MM-DD format
}

function generateRandomLoanApplication(): LoanApplication {
  const statuses: LoanApplication["status"][] = [
    "Pending",
    "Approved",
    "Rejected",
    "Declined",
  ];
  const randomStatus = faker.helpers.arrayElement(statuses);

  // Generate a random date within the last 90 days
  const randomDate = faker.date
    .recent({ days: 90 })
    .toISOString()
    .split("T")[0]; // Format to YYYY-MM-DD

  return {
    id: `LOAN-${faker.string.numeric(5)}`, // LOAN-xxxxx
    applicantName: faker.person.fullName(),
    amountRequested: faker.number.int({
      min: 10000,
      max: 250000,
      multipleOf: 1000,
    }), // Amounts in thousands
    status: randomStatus,
    submissionDate: randomDate,
  };
}

// Generate a list of 20 fake loan applications
export const mockLoanApplications: LoanApplication[] = Array.from(
  { length: 100 },
  generateRandomLoanApplication
);

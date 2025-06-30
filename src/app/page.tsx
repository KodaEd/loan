"use client";
import Filter from "@/components/Filter";
import Table from "@/components/Table";
import { LoanApplication, mockLoanApplications } from "@/utils/data";
import React from "react";

interface LoanContextType {
  state: LoanApplication[];
  dispatch: (action: FilterValues) => void;
}

export const LoanContext = React.createContext<LoanContextType>(
  {} as LoanContextType
);

export enum FilterValues {
  ALL = "All",
  PENDING = "Pending",
  APPROVED = "Approved",
  REJECTED = "Rejected",
  DECLINED = "Declined",
}

function loanReducer(
  _state: LoanApplication[],
  action: FilterValues
): LoanApplication[] {
  console.log(action);

  if (action === FilterValues.ALL) {
    return mockLoanApplications;
  }

  return mockLoanApplications.filter(
    (application) => application.status === action
  );
}

export default function Home() {
  const [state, dispatch] = React.useReducer(loanReducer, mockLoanApplications);

  return (
    <div className="w-full h-full">
      <LoanContext.Provider value={{ state, dispatch }}>
        <Filter />
        <Table />
      </LoanContext.Provider>
    </div>
  );
}

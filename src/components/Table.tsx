import { LoanContext } from "@/app/page";
import { LoanApplication } from "@/utils/data";
import React from "react";

export default function Table() {
  const { state: loanApplications } = React.useContext(LoanContext);

  if (loanApplications.length === 0) {
    return <div>No loan applications available.</div>;
  }

  return (
    <table className="w-full h-full">
      <tr className="text-left">
        {Object.keys(loanApplications.at(0) as LoanApplication).map((key) => {
          return <th key={key}>{key}</th>;
        })}
      </tr>
      {loanApplications.map((application) => (
        <tr key={application.id}>
          <td>{application.id}</td>
          <td>{application.applicantName}</td>
          <td>{application.amountRequested}</td>
          <td>{application.status}</td>
          <td>{application.submissionDate}</td>
        </tr>
      ))}
    </table>
  );
}

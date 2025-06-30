import { FilterValues, LoanContext } from "@/app/page";
import React, { ChangeEvent } from "react";

export default function Filter() {
  const { dispatch } = React.useContext(LoanContext);

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    dispatch(event.target.value as FilterValues);
  };

  return (
    <select onChange={handleChange}>
      {Object.values(FilterValues).map((value) => (
        <option key={value} value={value}>
          {" "}
          {value}{" "}
        </option>
      ))}
    </select>
  );
}

import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
export default function CheckBoxName({ children }) {
  return (
    <div className="flex  justify-between gap-2 hover:text-primary">
      <div className="flex gap-3 items-center">
        <Checkbox id="Commercial" />
        <label htmlFor="Commercial"> {children}</label>
      </div>
      <p className="flex">(15)</p>
    </div>
  );
}

import React from "react";
import InfoCard from "./InfoCard";

export default function InfoSection() {
  return (
    <div className="flex justify-center gap-8 flex-wrap items-center mt-10 p-2">
      <InfoCard />
      <InfoCard />
      <InfoCard />
      <InfoCard />
    </div>
  );
}

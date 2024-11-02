import AddsOn from "@/components/home/AddsOn";
import Category from "@/components/home/Category";
import Courses from "@/components/home/Courses";
import GrowUpSection from "@/components/home/GrowUpSection";
import HeroBanner from "@/components/home/HeroBanner";
import InfoSection from "@/components/home/InfoSection";
import RoleSection from "@/components/home/RoleSection";
import StudentFeedBack from "@/components/home/StudentFeedBack";
import WordpressSection from "@/components/home/WordpressSection";
import React from "react";

export default function Homepage() {
  return (
    <>
      <HeroBanner />
      <Category />
      <Courses />
      <AddsOn />
      <InfoSection />
      <GrowUpSection />
      <WordpressSection />
      <StudentFeedBack />
      <RoleSection />
    </>
  );
}

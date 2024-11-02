import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
export default function Curriculum() {
  return (
    <div className="flex flex-col gap-5 p-5 w-[330px]  md:w-[800px]">
      <p>
        LearnPress is a comprehensive WordPress LMS Plugin for WordPress. This
        is one of the best WordPress LMS Plugins which can be used to easily
        create & sell courses online.
      </p>
      <div>
        <Accordion
          type="single"
          className="bg-white rounded-xl px-5 border-0"
          collapsible
        >
          <AccordionItem value="item-1">
            <AccordionTrigger>Lessons with video content</AccordionTrigger>
            <AccordionContent>Lessons with video content</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div>
        <Accordion
          type="single"
          className="bg-white rounded-xl px-5 border-0"
          collapsible
        >
          <AccordionItem value="item-1">
            <AccordionTrigger>Lessons with video content</AccordionTrigger>
            <AccordionContent>Lessons with video content</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div>
        <Accordion
          type="single"
          className="bg-white rounded-xl px-5 border-0"
          collapsible
        >
          <AccordionItem value="item-1">
            <AccordionTrigger>Lessons with video content</AccordionTrigger>
            <AccordionContent>Lessons with video content</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div>
        <Accordion
          type="single"
          className="bg-white rounded-xl px-5 border-0"
          collapsible
        >
          <AccordionItem value="item-1">
            <AccordionTrigger>Lessons with video content</AccordionTrigger>
            <AccordionContent>Lessons with video content</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}

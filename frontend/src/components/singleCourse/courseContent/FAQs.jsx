import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
export default function FAQs() {
  return (
    <div className="flex flex-col gap-5 p-5 w-[330px]  md:w-[800px]">
      <div>
        <Accordion
          type="single"
          className="bg-white rounded-xl px-5 border-0"
          collapsible
        >
          <AccordionItem value="item-1">
            <AccordionTrigger>What Does Royalty Free Mean?</AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna,
              donec turpis egestas volutpat. Quisque nec non amet quis. Varius
              tellus justo odio parturient mauris curabitur lorem in.
            </AccordionContent>
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
            <AccordionTrigger>What Does Royalty Free Mean?</AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna,
              donec turpis egestas volutpat. Quisque nec non amet quis. Varius
              tellus justo odio parturient mauris curabitur lorem in.
            </AccordionContent>
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
            <AccordionTrigger>What Does Royalty Free Mean?</AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna,
              donec turpis egestas volutpat. Quisque nec non amet quis. Varius
              tellus justo odio parturient mauris curabitur lorem in.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}

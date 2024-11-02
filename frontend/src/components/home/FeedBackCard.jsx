import React from "react";
import { Card, CardContent, CardFooter, CardTitle } from "../ui/card";

export default function FeedBackCard() {
  return (
    <div className="">
      <Card className={"p-5 rounded-2xl"}>
        <CardTitle>
          <img src="/quote.png" alt="" />
        </CardTitle>
        <CardContent>
          <div className="w-[230px] md:w-[250px] mt-6">
            I must explain to you how all this mistaken . Tdea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system and expound
          </div>
        </CardContent>
        <CardFooter>
          <p className="text-lg font-Dm">Roe Smith</p>
        </CardFooter>
      </Card>
    </div>
  );
}

import AuditoriumCards from "@/components/AuditoriumCards";
import { WithDefaultLayout } from "@/components/DefautLayout";
import SportCards from "@/components/SportCards";
import { Button } from "@/components/ui/button";
import { Page } from "@/types/Page";
import React, { useState } from "react";

const SpecialAuditorium: Page = () => {
  const [content, setContent] = useState(<AuditoriumCards />);
  const [underlineStyle, setUnderlineStyle] = useState({ left: "0%", width: "50%" });

  const handleAuditoriumClick = () => {
    setContent(<AuditoriumCards />);
    setUnderlineStyle({ left: "0%", width: "50%" });
  };

  const handleSportsClick = () => {
    setContent(<SportCards />);
    setUnderlineStyle({ left: "50%", width: "50%" });
  };

  return (
    <div className="container mx-auto">
      <div className="flex justify-evenly font-bold mb-8 relative">
        <Button
          onClick={handleAuditoriumClick}
          className="hover:text-red-500 text-xl relative"
        >
          Auditorium
        </Button>
        <Button
          onClick={handleSportsClick}
          className="hover:text-red-500 text-xl relative"
        >
          Sports
        </Button>
        <div
          className="absolute bottom-0 left-0 h-0.5 bg-red-500 transition-all duration-300"
          style={{ left: underlineStyle.left, width: underlineStyle.width }}
        ></div>
      </div>
      <div className="w-full mb-10">{content}</div>
    </div>
  );
};

SpecialAuditorium.layout = WithDefaultLayout;
export default SpecialAuditorium;

import React from "react";
import Link from 'next/link';

const AuditoriumCards = () => {
  const auditoriums = [
    { name: "Gold Class", src: "https://cdn.cgv.id/uploads_v2/special_audi/web/thumbnails/2308/SA202308041819584206.jpg", link: "/auditoriums/gold-class" },
    { name: "Velvet Class", src: "https://cdn.cgv.id/uploads_v2/special_audi/web/thumbnails/2308/SA202308041826292094.jpg", link: "/auditoriums/velvet-class" },
    { name: "Satin Class", src: "https://cdn.cgv.id/uploads_v2/special_audi/web/thumbnails/2308/SA202308041827191534.jpg", link: "/auditoriums/satin-class" },
    { name: "Sweet Box", src: "https://cdn.cgv.id/uploads_v2/special_audi/web/thumbnails/2308/SA202308041828077499.jpg", link: "/auditoriums/sweet-box" },
    { name: "4DX", src: "https://cdn.cgv.id/uploads_v2/special_audi/web/thumbnails/2308/SA202308041830356804.jpg", link: "/auditoriums/4dx" },
    { name: "ScreenX", src: "https://cdn.cgv.id/uploads_v2/special_audi/web/thumbnails/2308/SA202308041831366877.jpg", link: "/auditoriums/screenx" },
    { name: "Starium", src: "https://cdn.cgv.id/uploads_v2/special_audi/web/thumbnails/2308/SA202308041829003710.jpg", link: "/auditoriums/starium" },
    { name: "SphereX", src: "https://cdn.cgv.id/uploads_v2/special_audi/web/thumbnails/2308/SA202308041829541327.jpg", link: "/auditoriums/spherex" },
    { name: "Private Box", src: "https://cdn.cgv.id/uploads_v2/special_audi/web/thumbnails/2402/SA202402170700368566.png", link: "/auditoriums/private-box" }
  ];

  return (
    <div className="grid grid-cols-2 gap-4 place-content-center">
      {auditoriums.map(auditorium => (
        <Link href={auditorium.link} key={auditorium.name}>
          <div className="relative rounded-xl overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:rotate-2 cursor-pointer">
            <img
              src={auditorium.src}
              alt={auditorium.name}
              className="w-full rounded-xl hover:opacity-80"
            />
            <p className="absolute bottom-2 left-2 text-white text-lg font-bold">{auditorium.name}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default AuditoriumCards;



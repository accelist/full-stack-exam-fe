import React from "react";

const SportCards = () => {
  return (
    <div className="grid grid-cols-2 gap-4 place-content-center">
      <div className="relative rounded-xl overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:rotate-2">
        <img
          src="https://cdn.cgv.id/uploads_v2/special_audi/web/thumbnails/2308/SA202308041835362098.jpg"
          alt="Sports Hall FX Sudirman"
          className="w-full rounded-xl hover:opacity-80"
        />
        <p className="absolute bottom-2 left-2 text-white text-lg font-bold">Sports Hall FX Sudirman</p>
      </div>
      {/* Add more images with similar structure if needed */}
    </div>
  );
};

export default SportCards;

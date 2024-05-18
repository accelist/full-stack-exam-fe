import React, { useState, useEffect } from "react";
import Link from "next/link";

const FloatingNavigation = () => {
  const [yPos, setYPos] = useState(0);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const delta = scrollTop - lastScrollTop;

      // Update position with slight delay and physics-like animation
      setYPos((prevYPos) => prevYPos + delta * 0.1);

      setLastScrollTop(scrollTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <div
      className="p-4 bg-white rounded-xl shadow-xl w-36 fixed z-10 right-10"
      style={{
        transform: `translateY(${yPos}px)`,
        transition: "transform 0.2s ease-out",
      }}
    >
      <ul className="flex flex-col">
        <li>
          <Link href="/movies/now-playing">
            <img
              src="https://cdn.cgv.id/assets/images/features/MOVIES.png"
              alt="Movies"
            />
          </Link>
        </li>
        <li>
          <Link href="/schedule/cinema">
            <img
              src="https://cdn.cgv.id/assets/images/features/CINEMAS.png"
              alt="Cinemas"
            />
          </Link>
        </li>
        <li>
          <Link href="/promotion/all">
            <img
              src="https://cdn.cgv.id/assets/images/features/PROMO.png"
              alt="Promotions"
            />
          </Link>
        </li>
        <li>
          <Link href="/special_audi">
            <img
              src="https://cdn.cgv.id/assets/images/features/FEATURES.png"
              alt="Features"
            />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default FloatingNavigation;

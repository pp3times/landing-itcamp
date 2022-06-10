import React, { useState, useEffect } from "react";

const Nav = () => {
  const [scrollHeight, setScrollHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollHeight(position);
    };
    const event = window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", event);
    };
  }, [scrollHeight]);

  return (
    <div className={`sticky ${scrollHeight > 100 ? "bg-slate-800/40 py-4" : "py-8"} hidden md:flex top-0 left-0 right-0 justify-center space-x-12 text-white font-bold z-40 transition-all duration-50`}>
      <a className=" hover:underline decoration-2 underline-offset-4" href="/a">
        ปฐมบท
      </a>
      <a className=" hover:underline decoration-2 underline-offset-4" href="/a">
        ค่ายย่อย
      </a>
      <a className=" hover:underline decoration-2 underline-offset-4" href="/a">
        กำหนดการ
      </a>
      <a className=" hover:underline decoration-2 underline-offset-4" href="/a">
        สถานที่
      </a>
      <a className=" hover:underline decoration-2 underline-offset-4" href="/a">
        ภาพกิจกรรม
      </a>
      <a className=" hover:underline decoration-2 underline-offset-4" href="/a">
        FAQ
      </a>
    </div>
  );
};

export default Nav;

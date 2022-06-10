import React from "react";

const Nav = () => {
  return (
    <div className="fixed hidden md:flex top-6 left-0 right-0 justify-center space-x-12 text-white font-bold z-40">
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

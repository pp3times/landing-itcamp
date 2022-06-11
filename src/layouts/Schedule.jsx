import React from "react";

const Schedule = () => {
  return (
    <div className="mt-24" id="schedule">
      <h3 className="text-3xl font-semibold text-white text-center">
        กำหนดการ
      </h3>
      <h4 className="text-2xl font-semibold text-white/80 text-center">
        ของค่ายไอทีแคมป์
      </h4>
      <div className="mt-12 flex flex-col space-y-4 mx-4 md:mx-24 items-center">
        <div className="flex border-2 border-[#A1BBE0] w-full max-w-[50em] divide-x-2 divide-dotted p-4 rounded-3xl">
          <div className="flex items-center">
            <div className="bg-[#A1BBE0] rounded-full p-6">
              <img src="icon1.svg" alt="icon1" className="w-10 " />
            </div>
            <h3 className="w-32 md:w-44 md:bg-transparent text-[#A1BBE0] font-semibold md:text-xl mx-4 md:mx-12">
              เปิดรับสมัคร
            </h3>
          </div>
          <div className="w-full flex items-center px-12 text-[#A1BBE0] font-semibold text-xl">
            <p className="text-sm md:text-base">10 มิถุนายน - 21 มิถุนายน</p>
          </div>
        </div>
        <div className="flex border-2 border-[#F5B2B2] w-full max-w-[50em] divide-x-2 divide-dotted p-4 rounded-3xl">
          <div className="flex items-center">
            <div className="bg-[#F5B2B2] rounded-full p-6">
              <img src="icon2.svg" alt="icon2" className="w-10 " />
            </div>
            <h3 className="w-32 md:w-44  md:bg-transparent text-[#F5B2B2] font-semibold md:text-xl mx-4 md:mx-12">
              ประกาศผล
            </h3>
          </div>
          <div className="w-full flex items-center px-12 text-[#F5B2B2] font-semibold text-xl">
            <p className="text-sm md:text-base">29 มิถุนายน</p>
          </div>
        </div>
        <div className="flex border-2 border-[#F8DA6F] w-full max-w-[50em] divide-x-2 divide-dotted p-4 rounded-3xl">
          <div className="flex items-center">
            <div className="bg-[#F8DA6F] rounded-full p-6">
              <img src="icon3.svg" alt="icon3" className="w-10 " />
            </div>
            <h3 className="w-32 md:w-44  md:bg-transparent text-[#F8DA6F] font-semibold md:text-xl mx-4 md:mx-12">
              ยืนยันสิทธิ์
            </h3>
          </div>
          <div className="w-full flex items-center px-12 text-[#F8DA6F] font-semibold text-xl">
            <p className="text-sm md:text-base">29 มิถุนายน - 1 กรกฎาคม</p>
          </div>
        </div>
        <div className="flex border-2 border-[#AAD3B0] w-full max-w-[50em] divide-x-2 divide-dotted p-4 rounded-3xl">
          <div className="flex items-center">
            <div className="bg-[#AAD3B0] rounded-full p-6">
              <img src="icon4.svg" alt="icon4" className="w-10 " />
            </div>
            <h3 className="w-32 md:w-44  md:bg-transparent text-[#AAD3B0] font-semibold md:text-xl mx-4 md:mx-12">
              สำรองสิทธิ์
            </h3>
          </div>
          <div className="w-full flex items-center px-12 text-[#AAD3B0] font-semibold text-xl">
            <p className="text-sm md:text-base">2 กรกฎาคม - 4 กรกฎาคม</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;

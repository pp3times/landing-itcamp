import React from "react";

const Intro2 = () => {
  return (
    <>
      <div className="pt-44 flex justify-center space-x-10">
        <img src="it-logo.png" alt="it-logo" className="w-24 md:w-44" />
        <img
          src="kmitl-logo.png"
          alt="kmitl-logo"
          className="w-24 md:w-44 object-contain"
        />
      </div>
      <p className="text-center text-2xl font-medium text-white my-16 md:my-32 leading-10">
        เมื่อโลกใบเดิมล่มสลาย
        <br />
        โลกใบใหม่ได้ถือกำเนิด
        <br />
        ก่อให้เกิดความหวังใหม่ของมนุษยชาติ
        <br />
        ท่านพร้อมหรือยังที่จะเป็นความหวังของโลกใบนี้
      </p>

      <div className=" mx-12 md:mx-auto md:w-full max-w-[40em] h-[1px] bg-white/50" />
      <h3 className="text-center text-2xl font-semibold text-white/80 mt-24">
        เรื่องราวแห่ง ITCAMP ครั้งที่ 18
      </h3>
      <h3 className="text-center text-3xl font-semibold text-white mt-3">
        ปฐมบทของโลกใบใหม่
      </h3>
      <div className="relative flex px-12 py-14 bg-white/50 rounded-lg max-w-[40em] mx-12 md:mx-auto mt-12 z-10 shadow-xl">
        <p className="indent-10 text-2xl font-semibold">
          เมื่อโลกเกิดการล่มสลายด้วยภัยพิบัติทางธรรมชาติที่คาดไม่ถึง
          ทำให้มนุษย์ทั้งหลายต้อง รวมกลุ่มกันเพื่อเอาชีวิตรอด
          โดยมนุษย์ต่างก็ได้แยกย้ายกันและอพยพไปยังเขตพื้นที่ที่ยังคง
          เหลือรอดจากภัยพิบัติและได้ก่อตั้งเมืองขึ้นมาจากนวัตกรรมและเทคโนโลยีที่ได้สั่งสมไว้
          แต่ถึง อย่างนั้น ผลกระทบจากภัยพิบัติยังคงส่งผลให้เกิดปัญหาขึ้นมากมาย
          ทุกกลุ่มจึงต้องหาทาง
          แก้ไขปัญหาเหล่านั้นเพื่อเอาชีวิตรอดและสร้างโลกใบใหม่อันสวยงามขึ้นมาให้ได้
          !
        </p>
        <div className="w-4 h-4 rounded-full absolute top-3 left-3 bg-[#5C4A62]" />
        <div className="w-4 h-4 rounded-full absolute top-3 right-3 bg-[#5C4A62]" />
        <div className="w-4 h-4 rounded-full absolute bottom-3 left-3 bg-[#5C4A62]" />
        <div className="w-4 h-4 rounded-full absolute bottom-3 right-3 bg-[#5C4A62]" />
      </div>
      <img
        src="/intro2-building.png"
        alt="intro2-building"
        className="w-full min-w-[40em] absolute left-1/2 -translate-x-1/2 bottom-0 mt-12 z-0"
      />
    </>
  );
};

export default Intro2;

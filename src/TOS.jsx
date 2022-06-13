import React from "react";
import { Link } from "react-router-dom";
const TOS = () => {
	window.scrollTo(0, 0);
  return (
    <div className="bg-gradient-to-b from-[#1D1D2F] via-[#30307D] to-[#6329C1] min-h-[125vh] py-12 px-4 sm:px-12">
      <div className="sticky top-8 left-0">
        <Link
          to="/"
          className="font-medium text-white underline decoration-2 underline-offset-2 cursor-pointer px-5 py-4 bg-blue-900 rounded-lg border-white/30 border-2"
        >
          กลับสู่หน้าหลัก
        </Link>
      </div>
      <div className="mt-12 max-w-[60em] mx-auto">
        <h2 className="text-center sm:text-left text-3xl text-white font-bold">
          คุณสมบัติของผู้สมัครเข้าร่วมโครงการ
        </h2>
        <ul className="list-decimal sm:text-lg text-white/80 pl-6 mt-12 leading-8 divide-y divide-gray-100/20">
          <li className="py-2">
            ผู้สมัครต้องเป็นนักเรียนระดับมัธยมศึกษาตอนปลาย ปวช. ปวส.
            หรือเทียบเท่า เท่านั้น
          </li>
          <li className="py-2">
            ผู้สมัครสามารถเข้าร่วมการอบรมได้ตลอดระยะเวลา 4 วัน 3 คืน
            โดยได้รับการยินยอมจากผู้ปกครอง
          </li>
          <li className="py-2">
            เป็นผู้ที่ได้รับวัคซีน COVID-19 อย่างน้อย 2 เข็มก่อนวันค่ายอย่างน้อย
            14 วัน ทั้งนี้ผู้สมัครต้องส่งหลักฐานการได้รับวัคซีนเมื่อถูกร้องขอ
          </li>
          <li className="py-2">
            <p>
              ไม่อยู่ในกลุ่มเสี่ยงติดเชื้อ COVID-19
              ในช่วงก่อนวันจัดกิจกรรมตามเงื่อนไข ดังนี้
            </p>
            <p>
              - ไม่มีอาการบ่งชี้โรคติดเชื้อไวรัสโคโรนา 2019 (COVID-19) เช่น ไข้
              ไอ มีน้ำมูก เจ็บคอ คอแห้ง อ่อนเพลีย ปวดเมื่อย ท้องเสีย ตาแดง
              ผื่นขึ้น หรือเหงื่อออกตอนกลางคืน
            </p>
            <p>
              -
              ไม่มีประวัติสัมผัสกับผู้ป่วยที่ยืนยันถึงการเป็นโรคติดเชื้อไวรัสโคโรนา
              2019 (COVID-19) เป็นเวลาอย่างน้อย 14 วัน ก่อนวันจัดกิจกรรม
            </p>
          </li>
          <li className="py-2">
            มีผลตรวจเชื้อเป็นลบเมื่อตรวจเชื้อด้วยชุดตรวจเชื้อ SARS-CoV-2
            (เชื้อก่อโรค COVID-19) แบบตรวจหาแอนติเจนด้วยตนเอง (COVID-19 Antigen
            test self-test kits) ภายใน 72 ชั่วโมง ก่อนวันจัดกิจกรรม
            ทั้งนี้ผู้สมัครต้องส่งผลตรวจเชื้อเมื่อถูกร้องขอ
          </li>
        </ul>

        <h2 className="text-center sm:text-left text-3xl text-white font-bold mt-24">
          การสมัครเข้าร่วมโครงการ
        </h2>

        <ul className="list-decimal sm:text-lg text-white/80 pl-6 mt-12 leading-8 divide-y divide-gray-100/20">
          <li className="py-2">
            ผู้สมัครต้องเป็นนักเรียนระดับมัธยมศึกษาตอนปลาย ปวช. ปวส.
            หรือเทียบเท่า เท่านั้น
          </li>
          <li className="py-2">
            <p>ค่ายที่รับสมัครมีทั้งหมด 4 ค่าย ได้แก่</p>
            <p>- Webtopia</p>
            <p>- Datavergent</p>
            <p>- Game Runner</p>
            <p>- Nettapunk</p>
          </li>
          <li className="py-2">
            ผู้สมัครสามารถสมัครได้เพียง 1 ค่ายเท่านั้น
            โดยการเลือกค่ายจะอยู่ในขั้นตอนที่ 2 ของระบบรับสมัคร
            หากมีการยืนยันการเลือกค่ายและผ่านขั้นตอนที่ 2 แล้ว
            ผู้สมัครจะไม่สามารถเปลี่ยนค่ายได้อีก
          </li>
          <li className="py-2">
            การสมัครจะเสร็จสมบูรณ์ก็ต่อเมื่อสิ้นสุดเวลารับสมัครแล้วเท่านั้น
            ระหว่างช่วงเวลารับสมัคร
            ผู้สมัครสามารถเข้าไปแก้ไขข้อมูลและคำตอบของท่านได้
          </li>
          <li className="py-2">
            ข้อมูลของผู้สมัครทุกคนจะถูกคุ้มครองตามนโยบายคุ้มครองข้อมูลส่วนบุคคล
          </li>
        </ul>
        <h2 className="text-center sm:text-left text-3xl text-white font-bold mt-24">
          การคัดเลือกเข้าร่วมโครงการ
        </h2>

        <ul className="list-decimal sm:text-lg text-white/80 pl-6 mt-12 leading-8 divide-y divide-gray-100/20">
          <li className="py-2">
            ผู้สมัครจะผ่านการคัดเลือกโดยการพิจารณาจากการตอบคำถาม
            และคุณสมบัติตรงตามที่โครงการกำหนด
          </li>
          <li className="py-2">
            คณะกรรมการจะคัดเลือกผู้มีสิทธิ์เข้าร่วมโครงการทั้งหมด 4 ค่ายย่อย
            ค่ายละ 15 คน รวมผู้เข้าร่วมโครงการทั้งสิ้น 60 คน
            โดยประกาศรายชื่อผู้ผ่านการคัดเลือกที่เว็บไซต์ itcamp18.in.th
            ในวันที่ 29 มิถุนายน 2565
          </li>
          <li className="py-2">การตัดสินของคณะกรรมการถือเป็นที่สิ้นสุด</li>
        </ul>

        <h2 className="text-center sm:text-left text-3xl text-white font-bold mt-24">
          รายละเอียดการเข้าร่วมโครงการ
        </h2>

        <ul className="list-decimal sm:text-lg text-white/80 pl-6 mt-12 leading-8 divide-y divide-gray-100/20">
          <li className="py-2">
            ผู้มีสิทธิ์เข้าร่วมโครงการต้องโอนเงินชำระค่าสมัคร
            เพื่อเป็นการยืนยันสิทธิ์จำนวน 500 บาท
          </li>
          <li className="py-2">
            ผู้มีสิทธิ์เข้าร่วมโครงการต้องส่งเอกสารหลักฐานการฉีดวัคซีน
            (หมอพร้อม) อย่างน้อย 2 เข็ม เพื่อเข้าร่วมโครงการ
          </li>
          <li className="py-2">
            ผู้จัดงานขอสงวนสิทธิ์ในการเปลี่ยนแปลง
            แก้ไขรายละเอียดกิจกรรมในครั้งนี้ และ/หรือข้อกำหนดและเงื่อนไขต่าง ๆ
            ที่เกี่ยวข้องตามดุลพินิจของผู้จัดงาน โดยไม่ต้องแจ้งให้ทราบล่วงหน้า
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TOS;

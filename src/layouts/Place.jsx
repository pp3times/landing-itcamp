import React, { useState } from "react";
import Iframe from "react-iframe";
const Place = () => {
  const noneTab = (
    <div className="w-full h-full flex justify-center items-center">
      <img className="h-[80%]" src="/place/map.png" alt="map" />
    </div>
  );
  const airportTab = (
    <div className="m-5">
      <li>
        รถไฟฟ้าสายท่าอากาศยานสุวรรณภูมิจากสถานีพญาไท (SA City Line)
        ลงที่สถานีลาดกระบัง แล้วต่อรถไฟที่สถานี รถไฟลาดกระบัง หรือ
        รถโดยสารขนาดเล็ก
      </li>
    </div>
  );
  const busTab = (
    <div className="m-5">
      <li>
        รถโดยสารประจำทางสาย 143 (รถร่วมบริการ) : ต้นทาง จากศูนย์การค้า
        แฮปปี้แลนด์ คลองจั่น ผ่านการเคหะ ชุมชนร่มเกล้า ถนนเจ้าคุณทหาร
        เข้าถนนฉลองกรุง ปลายทางที่สถาบันเทคโนโลยีพระจอมเกล้า
        เจ้าคุณทหารลาดกระบัง
      </li>
      <li>
        รถโดยสารประจำทางสาย 1013 (รถร่วมบริการ) : ต้นทาง จากศูนย์การค้า
        แฮปปี้แลนด์ คลองจั่น ผ่านการเคหะชุมชน ร่มเกล้าต้นทาง จากสุขุมวิท 77
        (อ่อนนุช)ไปตามถนน อ่อนนุช ปลายทางตลาด หัวตะเข้ ลงรถตรงข้ามสวนพระ
        นครจากนั้น ต่อรถสองแถวจากหน้าสวนพระนครเข้ามายัง สถาบัน (สายที่เขียนว่า
        “เทคโน”)
      </li>
    </div>
  );
  const rodtuTab = (
    <div className="m-5">
      <li>
        รถตู้โดยสารปรับอากาศ หมอชิตใหม่ - อนุสาวรีย์ - พระจอมเกล้าลาดกระบัง
        (ทางด่วน)
      </li>
      <li>รถตู้โดยสารปรับอากาศ รังสิต-ลาดกระบัง</li>
      <li>รถตู้โดยสารปรับอากาศ สาย 50B แฮปปิ้แลนด์ - ลาดกระบัง</li>
      <li>
        รถตู้โดยสารปรับอากาศ สาย 50 ห้างซีคอนสแควร ์-
        พระจอมเกล้าเจ้าคุณทหารลาดกระบัง
      </li>
      <li>รถตู้โดยสารปรับอากาศ สายมีนบุรี - ลาดกระบัง</li>
    </div>
  );
  const rodfiTab = (
    <div className="m-5">
      <li>รถไฟสายตะวันออก ลงที่ป้ายหยุดรถไฟพระจอมเกล้าหรือสถานีหัวตะเข้</li>
    </div>
  );
  const [showingTabs, setTab] = useState({ name: "noneTab", compo: noneTab });
  const tabClass = (com) => {
    if (com === showingTabs.name) {
      return "flex justify-center items-center cursor-pointer decoration-[#0671E0] no-underline hover:underline text-[#0671E0]";
    }
    return "flex justify-center items-center cursor-pointer decoration-black no-underline hover:underline";
  };
  return (
    <div className="bg-[#ffffff7c] w-full lg:m-32 md:m-24 sm:m-4 h-[90%] lg:h-[60%] rounded-3xl p-11 lg:p-14">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 h-[49%] grid-rows-3">
        <div className="flex lg:justify-center items-center justify-start lg:row-span-3">
          <div className="lg:p-10">
            <h1 className="text-3xl font-medium relative h-11">
              <div className="w-[80px] h-[80px] bg-[#7BB5D3] rounded-full absolute opacity-80 top-[-70%] left-[-40px] z-0"></div>
              <div className="absolute z-1">สถานที่จัดค่าย</div>
            </h1>
            <div className="text-md font-medium mx-2">
              คณะเทคโนโลยีสารสนเทศ <br />
              สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง
            </div>
          </div>
        </div>
        <div className="row-span-3">
          <Iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3875.8362522768525!2d100.77892338003905!3d13.728361716150033!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d66308ce98ffd%3A0xcb43a76f038c38ca!2sKMITL%20Faculty%20of%20IT!5e0!3m2!1sen!2sth!4v1654858750838!5m2!1sen!2sth"
            width="100%"
            height="100%"
            allowfullscreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-xl"
          />
        </div>
      </div>
      <div className="dashLine"></div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 h-[49%] grid-rows-3">
        <div className="flex justify-center items-center lg:h-auto lg:row-span-3 ">
          <div className="w-[150px] hidden lg:block">
            <h1 className="text-3xl font-medium relative h-11">
              <div className="w-[80px] h-[80px] bg-[#7BB5D3] rounded-full absolute opacity-80 top-[-70%] left-[-40px] z-0"></div>
              <div className="absolute z-1">การเดินทาง</div>
              <div className="absolute right-0 top-10 text-xl">
                สู่เมืองใหญ่
              </div>
            </h1>
          </div>
          <div className="text-3xl font-medium block lg:hidden">การเดินทางสู่เมืองใหญ่</div>
        </div>
        <div className=" col-span-2 row-span-3">
          <div className="w-full h-14 rounded-full flex justify-around items-center border-2 border-black font-medium">
            <div
              className={tabClass("airportTab")}
              onClick={() => {
                setTab({ name: "airportTab", compo: airportTab });
              }}
            >
              <img
                src="/place/airport.png"
                alt="airport"
                className="mr-2 hidden md:block"
              ></img>
              Airport Rail Link
            </div>
            <div className="border-r-2 border-black h-[80%]"></div>
            <div
              className={tabClass("busTab")}
              onClick={() => {
                setTab({ name: "busTab", compo: busTab });
              }}
            >
              <img
                src="/place/bus.png"
                alt="bus"
                className="mr-2 hidden md:block"
              ></img>
              รถโดยสาร
            </div>
            <div className="border-r-2 border-black h-[80%]"></div>
            <div
              className={tabClass("rodtuTab")}
              onClick={() => {
                setTab({ name: "rodtuTab", compo: rodtuTab });
              }}
            >
              <img
                src="/place/rodtu.png"
                alt="rodtu"
                className="mr-2 hidden md:block"
              ></img>
              รถตู้
            </div>
            <div className="border-r-2 border-black h-[80%]"></div>
            <div
              className={tabClass("rodfiTab")}
              onClick={() => {
                setTab({ name: "rodfiTab", compo: rodfiTab });
              }}
            >
              <img
                src="/place/oldrodfi.png"
                alt="oldrodfi"
                className="mr-2 hidden md:block"
              ></img>
              รถไฟ
            </div>
          </div>
          <div className="w-full h-[80%] rounded-3xl border-2 border-black text-black font-medium mt-3 relative overflow-auto">
            {showingTabs.compo}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Place;

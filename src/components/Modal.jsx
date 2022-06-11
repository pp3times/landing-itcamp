import React from "react";
import ReactDOM from "react-dom";
import { FiXCircle } from "react-icons/fi";

const Modal = ({ setToggleModal, selectedCamp }) => {
  const [toggleTOS, setToggleTOS] = React.useState(false);
  const [accept, setAccept] = React.useState(false);

  const closeModal = () => {
    setToggleModal(false);
  };

  if (selectedCamp === "Webtopia Town") {
    return ReactDOM.createPortal(
      <>
        {toggleTOS && (
          <>
            <div className="fixed z-[44] top-12 left-12 lg:left-32 right-12 lg:right-32 bottom-12 bg-white rounded-lg p-4 overflow-y-scroll no-scroll">
              <FiXCircle
                onClick={() => setToggleTOS(false)}
                className="text-gray-800 text-3xl ml-auto"
              />
              <div className="mx-2 md:mx-12 my-4">
                <h3 className="text-center text-lg font-bold text-gray-800">
                  กรุณายอมรับข้อกำหนดและเงื่อนไข
                  การเข้าร่วมโครงการเพื่อดำเนินการสมัคร
                </h3>
                <div className="p-4 border-2 border-[#AF7273] rounded-md mt-2">
                  <h4 className="text-lg font-semibold text-[#AF7273]">
                    คุณสมบัติของผู้สมัครเข้าร่วมโครงการ
                  </h4>
                  <ul className="list-decimal list-inside flex flex-col space-y-4 mt-4">
                    <li>
                      ผู้สมัครต้องเป็นนักเรียนระดับมัธยมศึกษาตอนปลายหรือเทียบเท่าที่มีอายุระหว่าง
                      15 - 18 ปีบริบูรณ์ โดยกำลังศึกษาระดับชั้นมัธยมศึกษาปีที่ 4
                      จนถึงปีที่ 6
                      รวมถึงผู้ที่จบการศึกษาระดับชั้นมัธยมศึกษาปีที่ 6 แล้ว
                      แต่ยังไม่เคยเข้าเรียนระดับอุดมศึกษามาก่อน
                    </li>
                    <li>
                      ผู้สมัครสามารถเข้าร่วมการอบรมได้ตลอดระยะเวลา 4 วัน 3 คืน
                      โดยได้รับการยินยอมจากผู้ปกครอง
                    </li>
                    <li>
                      เป็นผู้ที่ได้รับวัคซีนโควิด 19
                      ครบถ้วนตามเกณฑ์ที่กระทรวงสาธารณสุขกำหนดก่อนวันค่ายอย่างน้อย
                      14 วัน หรือมีประวัติการติดเชื้อไวรัสโคโรนา 2019 (COVID-19)
                      และรักษาหายแล้วก่อนวันค่ายอยู่ในช่วง 1 - 3 เดือน
                      ทั้งนี้ผู้สมัครต้องส่งหลักฐานการได้รับวัคซีนหรือเอกสารแสดงประวัติการติดเชื้อและการรักษาเมื่อถูกร้องขอ
                    </li>
                    <li>
                      เป็นผู้ที่ได้รับวัคซีนโควิด 19
                      ครบถ้วนตามเกณฑ์ที่กระทรวงสาธารณสุขกำหนดก่อนวันค่ายอย่างน้อย
                      14 วัน หรือมีประวัติการติดเชื้อไวรัสโคโรนา 2019 (COVID-19)
                      และรักษาหายแล้วก่อนวันค่ายอยู่ในช่วง 1 - 3 เดือน
                      ทั้งนี้ผู้สมัครต้องส่งหลักฐานการได้รับวัคซีนหรือเอกสารแสดงประวัติการติดเชื้อและการรักษาเมื่อถูกร้องขอ
                    </li>
                    <li>
                      ไม่อยู่ในกลุ่มเสี่ยงติดเชื้อ COVID-19
                      ในช่วงก่อนวันจัดกิจกรรมตามเงื่อนไข ดังนี้
                      <br />
                      - ไม่มีอาการบ่งชี้โรคติดเชื้อไวรัสโคโรนา 2019 (COVID-19)
                      เช่น ไข้ ไอ มีน้ำมูก เจ็บคอ คอแห้ง อ่อนเพลีย ปวดเมื่อย
                      ท้องเสีย ตาแดง ผื่นขึ้น หรือเหงื่อออกตอนกลางคืน
                      <br />-
                      ไม่มีประวัติสัมผัสกับผู้ป่วยที่ยืนยันถึงการเป็นโรคติดเชื้อไวรัสโคโรนา
                      2019 (COVID-19) เป็นเวลาอย่างน้อย 14 วัน ก่อนวันจัดกิจกรรม
                    </li>
                    <li>
                      มีผลตรวจเชื้อเป็นลบเมื่อตรวจเชื้อด้วยชุดตรวจเชื้อ
                      SARS-CoV-2 (เชื้อก่อโรค COVID-19)
                      แบบตรวจหาแอนติเจนด้วยตนเอง (COVID-19 Antigen test
                      self-test kits) ภายใน 72 ชั่วโมง ก่อนวันจัดกิจกรรม
                      ทั้งนี้ผู้สมัครต้องส่งผลตรวจเชื้อเมื่อถูกร้องขอ
                    </li>
                  </ul>
                </div>
                <div className="flex space-x-2 items-center mx-auto justify-center mt-2">
                  <input
                    onChange={() => setAccept(!accept)}
                    type="checkbox"
                    name="accpet"
                    id="accpet-box"
                    className=""
                  />
                  <label htmlFor="accpet-box">
                    ข้าพเจ้าได้อ่านและยอมรับข้อกำหนด
                    และเงื่อนไขการเข้าร่วมโครงการเป็นที่เรียบร้อยแล้ว
                  </label>
                </div>
                <button
                  className={`disabled:bg-gray-300 bg-gray-500 text-white w-full py-3 text-lg font-semibold rounded-md mt-4 transition-all duration-100`}
                  disabled={!accept}
                >
                  ยืนยัน
                </button>
              </div>
            </div>
            <div
              onClick={() => setToggleTOS(false)}
              className="fixed z-[43] top-0 left-0 right-0 bottom-0 bg-gray-900/50 backdrop-blur-md"
            />
          </>
        )}

        <div className="fixed z-[42] top-2 left-2 right-2 bottom-2 bg-[url('web.png')] rounded-lg p-4 overflow-y-scroll no-scroll">
          <FiXCircle
            onClick={closeModal}
            className="text-white text-3xl ml-auto"
          />
          <div className="flex justify-center items-center flex-col lg:flex-row space-y-12 lg:space-y-0 lg:space-x-12 p-2 md:p-12 max-w-[100em] mx-auto mt-24">
            <img src="/camp-logo-1.png" alt="Webtopia Town" />
            <div>
              <p className="text-white text-3xl font-semibold  text-center">
                Webtopia Town
              </p>
              <p className="text-white text-3xl font-semibold  text-center">
                เมืองแห่งการสร้างนวัตกรรม
              </p>
              <p className="indent-10 p-4 md:p-12 bg-[#221010]/40 rounded text-white text-lg font-medium max-w-[40em] mt-8">
                มีความสามารถเด่นในการสร้างเว็บไซต์บนเบราว์เซอร์ได้อย่างใจนึก
                ผู้รอดชีวิตทุกคนในเมืองแห่งนี้จะได้
                เรียนรู้ภาษาเก่าแก่ของเมืองอย่าง Vue.js และ Express.js
                ตั้งแต่เริ่มต้น และนำไปใช้ร่วมกับเทคโนโลยีหลัก
                ของเมืองอย่างโปรแกรม Visual Studio Code และเทคโนโลยีลับอย่าง
                Vuetify Framework เพื่อสร้าง เว็บไซต์ล้ำสมัย
                ที่จะเพิ่มความสะดวกสบายให้กับทุกคนในเมือง
                หากท่านมีพื้นฐานในการสร้างสรรค์เว็บไซต์
                และต้องการสร้างซอฟแวร์ที่ทำให้โลกพัฒนาขึ้นได้
                จงมาเข้าร่วมกับเมืองของเราเพื่อสร้างโลกแห่งอนาคต
                ในอุดมคติไปด้วยกัน !
              </p>
              <button
                onClick={() => setToggleTOS(!toggleTOS)}
                className="px-8 py-2 bg-red-200 text-lg font-medium rounded-full ml-auto block mt-4"
              >
                สมัครค่าย Webtopia
              </button>
            </div>
          </div>
        </div>
        <div
          onClick={closeModal}
          className="fixed z-[41] top-0 left-0 right-0 bottom-0 bg-gray-600/40 backdrop-blur-sm"
        />
      </>,
      document.getElementById("modal")
    );
  }

  if (selectedCamp === "Datavergent Town") {
    return ReactDOM.createPortal(
      <>
        {toggleTOS && (
          <>
            <div className="fixed z-[44] top-12 left-12 lg:left-32 right-12 lg:right-32 bottom-12 bg-white rounded-lg p-4 overflow-y-scroll no-scroll">
              <FiXCircle
                onClick={() => setToggleTOS(false)}
                className="text-gray-800 text-3xl ml-auto"
              />
              <div className="mx-2 md:mx-12 my-4">
                <h3 className="text-center text-lg font-bold text-gray-800">
                  กรุณายอมรับข้อกำหนดและเงื่อนไข
                  การเข้าร่วมโครงการเพื่อดำเนินการสมัคร
                </h3>
                <div className="p-4 border-2 border-[#AF7273] rounded-md mt-2">
                  <h4 className="text-lg font-semibold text-[#AF7273]">
                    คุณสมบัติของผู้สมัครเข้าร่วมโครงการ
                  </h4>
                  <ul className="list-decimal list-inside flex flex-col space-y-4 mt-4">
                    <li>
                      ผู้สมัครต้องเป็นนักเรียนระดับมัธยมศึกษาตอนปลายหรือเทียบเท่าที่มีอายุระหว่าง
                      15 - 18 ปีบริบูรณ์ โดยกำลังศึกษาระดับชั้นมัธยมศึกษาปีที่ 4
                      จนถึงปีที่ 6
                      รวมถึงผู้ที่จบการศึกษาระดับชั้นมัธยมศึกษาปีที่ 6 แล้ว
                      แต่ยังไม่เคยเข้าเรียนระดับอุดมศึกษามาก่อน
                    </li>
                    <li>
                      ผู้สมัครสามารถเข้าร่วมการอบรมได้ตลอดระยะเวลา 4 วัน 3 คืน
                      โดยได้รับการยินยอมจากผู้ปกครอง
                    </li>
                    <li>
                      เป็นผู้ที่ได้รับวัคซีนโควิด 19
                      ครบถ้วนตามเกณฑ์ที่กระทรวงสาธารณสุขกำหนดก่อนวันค่ายอย่างน้อย
                      14 วัน หรือมีประวัติการติดเชื้อไวรัสโคโรนา 2019 (COVID-19)
                      และรักษาหายแล้วก่อนวันค่ายอยู่ในช่วง 1 - 3 เดือน
                      ทั้งนี้ผู้สมัครต้องส่งหลักฐานการได้รับวัคซีนหรือเอกสารแสดงประวัติการติดเชื้อและการรักษาเมื่อถูกร้องขอ
                    </li>
                    <li>
                      เป็นผู้ที่ได้รับวัคซีนโควิด 19
                      ครบถ้วนตามเกณฑ์ที่กระทรวงสาธารณสุขกำหนดก่อนวันค่ายอย่างน้อย
                      14 วัน หรือมีประวัติการติดเชื้อไวรัสโคโรนา 2019 (COVID-19)
                      และรักษาหายแล้วก่อนวันค่ายอยู่ในช่วง 1 - 3 เดือน
                      ทั้งนี้ผู้สมัครต้องส่งหลักฐานการได้รับวัคซีนหรือเอกสารแสดงประวัติการติดเชื้อและการรักษาเมื่อถูกร้องขอ
                    </li>
                    <li>
                      ไม่อยู่ในกลุ่มเสี่ยงติดเชื้อ COVID-19
                      ในช่วงก่อนวันจัดกิจกรรมตามเงื่อนไข ดังนี้
                      <br />
                      - ไม่มีอาการบ่งชี้โรคติดเชื้อไวรัสโคโรนา 2019 (COVID-19)
                      เช่น ไข้ ไอ มีน้ำมูก เจ็บคอ คอแห้ง อ่อนเพลีย ปวดเมื่อย
                      ท้องเสีย ตาแดง ผื่นขึ้น หรือเหงื่อออกตอนกลางคืน
                      <br />-
                      ไม่มีประวัติสัมผัสกับผู้ป่วยที่ยืนยันถึงการเป็นโรคติดเชื้อไวรัสโคโรนา
                      2019 (COVID-19) เป็นเวลาอย่างน้อย 14 วัน ก่อนวันจัดกิจกรรม
                    </li>
                    <li>
                      มีผลตรวจเชื้อเป็นลบเมื่อตรวจเชื้อด้วยชุดตรวจเชื้อ
                      SARS-CoV-2 (เชื้อก่อโรค COVID-19)
                      แบบตรวจหาแอนติเจนด้วยตนเอง (COVID-19 Antigen test
                      self-test kits) ภายใน 72 ชั่วโมง ก่อนวันจัดกิจกรรม
                      ทั้งนี้ผู้สมัครต้องส่งผลตรวจเชื้อเมื่อถูกร้องขอ
                    </li>
                  </ul>
                </div>
                <div className="flex space-x-2 items-center mx-auto justify-center mt-2">
                  <input
                    onChange={() => setAccept(!accept)}
                    type="checkbox"
                    name="accpet"
                    id="accpet-box"
                    className=""
                  />
                  <label htmlFor="accpet-box">
                    ข้าพเจ้าได้อ่านและยอมรับข้อกำหนด
                    และเงื่อนไขการเข้าร่วมโครงการเป็นที่เรียบร้อยแล้ว
                  </label>
                </div>
                <button
                  className={`disabled:bg-gray-300 bg-gray-500 text-white w-full py-3 text-lg font-semibold rounded-md mt-4 transition-all duration-100`}
                  disabled={!accept}
                >
                  ยืนยัน
                </button>
              </div>
            </div>
            <div
              onClick={() => setToggleTOS(false)}
              className="fixed z-[43] top-0 left-0 right-0 bottom-0 bg-gray-900/50 backdrop-blur-md"
            />
          </>
        )}

        <div className="fixed z-[42] top-2 left-2 right-2 bottom-2 bg-[url('data.png')] rounded-lg p-4 overflow-y-scroll no-scroll">
          <FiXCircle
            onClick={closeModal}
            className="text-white text-3xl ml-auto"
          />
          <div className="flex justify-center items-center flex-col lg:flex-row space-y-12 lg:space-y-0 lg:space-x-12 p-2 md:p-12 max-w-[100em] mx-auto mt-24">
            <img src="/camp-logo-2.png" alt="Webtopia Town" />
            <div>
              <p className="text-white text-3xl font-semibold  text-center">
                Datavergent Town
              </p>
              <p className="text-white text-3xl font-semibold  text-center">
                เมืองแห่งข้อมูล
              </p>
              <p className="indent-10 p-4 md:p-12 bg-[#221B10]/40 rounded text-white text-lg font-medium max-w-[40em] mt-8">
                เหล่าผู้รอดชีวิตในเมืองแห่งนี้ต่างเก็บงำข้อมูลมหาศาลไว้และมารวมตัวกัน
                เพื่อสร้างมูลค่าให้กับข้อมูล ทั้งหลาย
                ทุกท่านที่มาเป็นส่วนหนึ่งของเมืองจะได้เรียนรู้
                ศาสตร์แห่งวิทยาการข้อมูล ตั้งแต่ต้น รวมถึง
                ศาสตร์ลับของเมืองอย่าง การวิเคราะห์เหมืองข้อมูล ด้วยหลักการ
                Cross-Industry Standard Process for Data Mining (CRISP-DM)
                เพื่อทำให้ข้อมูลทั้งหลายบนโลกที่กระจัดกระจายเป็นระเบียบยิ่งขึ้น
                หากท่าน
                ไม่มีปัญหากับเหล่าตัวเลขและต้องการให้โลกอันไร้ระเบียบนี้เปลี่ยนไปด้วยพลังแห่งการวิเคราะห์ข้อมูลของ
                ท่าน เมืองแห่งนี้รอรับเหล่าผู้แตกต่างอยู่เสมอ!
              </p>
              <button
                onClick={() => setToggleTOS(!toggleTOS)}
                className="px-8 py-2 bg-[#E7D3A3] text-lg font-medium rounded-full ml-auto block mt-4"
              >
                สมัครค่าย DATAVERGENT
              </button>
            </div>
          </div>
        </div>
        <div
          onClick={closeModal}
          className="fixed z-[41] top-0 left-0 right-0 bottom-0 bg-gray-600/40 backdrop-blur-sm"
        />
      </>,
      document.getElementById("modal")
    );
  }

  if (selectedCamp === "Game Runner Town") {
    return ReactDOM.createPortal(
      <>
        {toggleTOS && (
          <>
            <div className="fixed z-[44] top-12 left-12 lg:left-32 right-12 lg:right-32 bottom-12 bg-white rounded-lg p-4 overflow-y-scroll no-scroll">
              <FiXCircle
                onClick={() => setToggleTOS(false)}
                className="text-gray-800 text-3xl ml-auto"
              />
              <div className="mx-2 md:mx-12 my-4">
                <h3 className="text-center text-lg font-bold text-gray-800">
                  กรุณายอมรับข้อกำหนดและเงื่อนไข
                  การเข้าร่วมโครงการเพื่อดำเนินการสมัคร
                </h3>
                <div className="p-4 border-2 border-[#AF7273] rounded-md mt-2">
                  <h4 className="text-lg font-semibold text-[#AF7273]">
                    คุณสมบัติของผู้สมัครเข้าร่วมโครงการ
                  </h4>
                  <ul className="list-decimal list-inside flex flex-col space-y-4 mt-4">
                    <li>
                      ผู้สมัครต้องเป็นนักเรียนระดับมัธยมศึกษาตอนปลายหรือเทียบเท่าที่มีอายุระหว่าง
                      15 - 18 ปีบริบูรณ์ โดยกำลังศึกษาระดับชั้นมัธยมศึกษาปีที่ 4
                      จนถึงปีที่ 6
                      รวมถึงผู้ที่จบการศึกษาระดับชั้นมัธยมศึกษาปีที่ 6 แล้ว
                      แต่ยังไม่เคยเข้าเรียนระดับอุดมศึกษามาก่อน
                    </li>
                    <li>
                      ผู้สมัครสามารถเข้าร่วมการอบรมได้ตลอดระยะเวลา 4 วัน 3 คืน
                      โดยได้รับการยินยอมจากผู้ปกครอง
                    </li>
                    <li>
                      เป็นผู้ที่ได้รับวัคซีนโควิด 19
                      ครบถ้วนตามเกณฑ์ที่กระทรวงสาธารณสุขกำหนดก่อนวันค่ายอย่างน้อย
                      14 วัน หรือมีประวัติการติดเชื้อไวรัสโคโรนา 2019 (COVID-19)
                      และรักษาหายแล้วก่อนวันค่ายอยู่ในช่วง 1 - 3 เดือน
                      ทั้งนี้ผู้สมัครต้องส่งหลักฐานการได้รับวัคซีนหรือเอกสารแสดงประวัติการติดเชื้อและการรักษาเมื่อถูกร้องขอ
                    </li>
                    <li>
                      เป็นผู้ที่ได้รับวัคซีนโควิด 19
                      ครบถ้วนตามเกณฑ์ที่กระทรวงสาธารณสุขกำหนดก่อนวันค่ายอย่างน้อย
                      14 วัน หรือมีประวัติการติดเชื้อไวรัสโคโรนา 2019 (COVID-19)
                      และรักษาหายแล้วก่อนวันค่ายอยู่ในช่วง 1 - 3 เดือน
                      ทั้งนี้ผู้สมัครต้องส่งหลักฐานการได้รับวัคซีนหรือเอกสารแสดงประวัติการติดเชื้อและการรักษาเมื่อถูกร้องขอ
                    </li>
                    <li>
                      ไม่อยู่ในกลุ่มเสี่ยงติดเชื้อ COVID-19
                      ในช่วงก่อนวันจัดกิจกรรมตามเงื่อนไข ดังนี้
                      <br />
                      - ไม่มีอาการบ่งชี้โรคติดเชื้อไวรัสโคโรนา 2019 (COVID-19)
                      เช่น ไข้ ไอ มีน้ำมูก เจ็บคอ คอแห้ง อ่อนเพลีย ปวดเมื่อย
                      ท้องเสีย ตาแดง ผื่นขึ้น หรือเหงื่อออกตอนกลางคืน
                      <br />-
                      ไม่มีประวัติสัมผัสกับผู้ป่วยที่ยืนยันถึงการเป็นโรคติดเชื้อไวรัสโคโรนา
                      2019 (COVID-19) เป็นเวลาอย่างน้อย 14 วัน ก่อนวันจัดกิจกรรม
                    </li>
                    <li>
                      มีผลตรวจเชื้อเป็นลบเมื่อตรวจเชื้อด้วยชุดตรวจเชื้อ
                      SARS-CoV-2 (เชื้อก่อโรค COVID-19)
                      แบบตรวจหาแอนติเจนด้วยตนเอง (COVID-19 Antigen test
                      self-test kits) ภายใน 72 ชั่วโมง ก่อนวันจัดกิจกรรม
                      ทั้งนี้ผู้สมัครต้องส่งผลตรวจเชื้อเมื่อถูกร้องขอ
                    </li>
                  </ul>
                </div>
                <div className="flex space-x-2 items-center mx-auto justify-center mt-2">
                  <input
                    onChange={() => setAccept(!accept)}
                    type="checkbox"
                    name="accpet"
                    id="accpet-box"
                    className=""
                  />
                  <label htmlFor="accpet-box">
                    ข้าพเจ้าได้อ่านและยอมรับข้อกำหนด
                    และเงื่อนไขการเข้าร่วมโครงการเป็นที่เรียบร้อยแล้ว
                  </label>
                </div>
                <button
                  className={`disabled:bg-gray-300 bg-gray-500 text-white w-full py-3 text-lg font-semibold rounded-md mt-4 transition-all duration-100`}
                  disabled={!accept}
                >
                  ยืนยัน
                </button>
              </div>
            </div>
            <div
              onClick={() => setToggleTOS(false)}
              className="fixed z-[43] top-0 left-0 right-0 bottom-0 bg-gray-900/50 backdrop-blur-md"
            />
          </>
        )}

        <div className="fixed z-[42] top-2 left-2 right-2 bottom-2 bg-[url('game.png')] rounded-lg p-4 overflow-y-scroll no-scroll">
          <FiXCircle
            onClick={closeModal}
            className="text-white text-3xl ml-auto"
          />
          <div className="flex justify-center items-center flex-col lg:flex-row space-y-12 lg:space-y-0 lg:space-x-12 p-2 md:p-12 max-w-[100em] mx-auto mt-24">
            <img src="/camp-logo-3.png" alt="Webtopia Town" />
            <div>
              <p className="text-white text-3xl font-semibold  text-center">
                Game Runner Town
              </p>
              <p className="text-white text-3xl font-semibold  text-center">
                เมืองแห่งการสร้างสรรค์
              </p>
              <p className="indent-10 p-4 md:p-12 bg-[#221010]/40 rounded text-white text-lg font-medium max-w-[40em] mt-8">
                เหล่าผู้รอดชีวิตในเมืองแห่งนี้ต่างเป็นเหล่านักวิ่งที่ต้องการสร้างโลกในฝันที่ตนเองได้จินตนาการไว้
                ทุกท่านที่เข้ามาเป็นส่วนหนึ่งของเมืองแห่งนี้จะได้ใช้เทคโนโลยีลับของเมืองอย่าง
                Unreal Engine 5 และ Blueprint ในการสร้างสรรค์โลกแห่งเกม Fisrt
                Person Shooter ที่ท่านออกแบบเองได้ รวมถึงได้ศึกษา
                ศาสตร์แห่งการรังสรรค์ตั้งแต่เบื้องต้นเพื่อสร้างโลกแห่งเกมที่ดีได้อีกด้วย
                หากท่านมีความสนใจในการสร้าง โลกแห่งเกม
                และต้องการที่จะสร้างโลกในความฝันนี้ไปด้วยกัน
                เมืองแห่งนี้จะรอจับมือและออกวิ่งไปพร้อมกับ ทุกท่านเอง!
              </p>
              <button
                onClick={() => setToggleTOS(!toggleTOS)}
                className="px-8 py-2 bg-[#DDEED9] text-lg font-medium rounded-full ml-auto block mt-4"
              >
                สมัครค่าย GAME RUNNER
              </button>
            </div>
          </div>
        </div>
        <div
          onClick={closeModal}
          className="fixed z-[41] top-0 left-0 right-0 bottom-0 bg-gray-600/40 backdrop-blur-sm"
        />
      </>,
      document.getElementById("modal")
    );
  }

  if (selectedCamp === "Nettapunk Town") {
    return ReactDOM.createPortal(
      <>
        {toggleTOS && (
          <>
            <div className="fixed z-[44] top-12 left-12 lg:left-32 right-12 lg:right-32 bottom-12 bg-white rounded-lg p-4 overflow-y-scroll no-scroll">
              <FiXCircle
                onClick={() => setToggleTOS(false)}
                className="text-gray-800 text-3xl ml-auto"
              />
              <div className="mx-2 md:mx-12 my-4">
                <h3 className="text-center text-lg font-bold text-gray-800">
                  กรุณายอมรับข้อกำหนดและเงื่อนไข
                  การเข้าร่วมโครงการเพื่อดำเนินการสมัคร
                </h3>
                <div className="p-4 border-2 border-[#AF7273] rounded-md mt-2">
                  <h4 className="text-lg font-semibold text-[#AF7273]">
                    คุณสมบัติของผู้สมัครเข้าร่วมโครงการ
                  </h4>
                  <ul className="list-decimal list-inside flex flex-col space-y-4 mt-4">
                    <li>
                      ผู้สมัครต้องเป็นนักเรียนระดับมัธยมศึกษาตอนปลายหรือเทียบเท่าที่มีอายุระหว่าง
                      15 - 18 ปีบริบูรณ์ โดยกำลังศึกษาระดับชั้นมัธยมศึกษาปีที่ 4
                      จนถึงปีที่ 6
                      รวมถึงผู้ที่จบการศึกษาระดับชั้นมัธยมศึกษาปีที่ 6 แล้ว
                      แต่ยังไม่เคยเข้าเรียนระดับอุดมศึกษามาก่อน
                    </li>
                    <li>
                      ผู้สมัครสามารถเข้าร่วมการอบรมได้ตลอดระยะเวลา 4 วัน 3 คืน
                      โดยได้รับการยินยอมจากผู้ปกครอง
                    </li>
                    <li>
                      เป็นผู้ที่ได้รับวัคซีนโควิด 19
                      ครบถ้วนตามเกณฑ์ที่กระทรวงสาธารณสุขกำหนดก่อนวันค่ายอย่างน้อย
                      14 วัน หรือมีประวัติการติดเชื้อไวรัสโคโรนา 2019 (COVID-19)
                      และรักษาหายแล้วก่อนวันค่ายอยู่ในช่วง 1 - 3 เดือน
                      ทั้งนี้ผู้สมัครต้องส่งหลักฐานการได้รับวัคซีนหรือเอกสารแสดงประวัติการติดเชื้อและการรักษาเมื่อถูกร้องขอ
                    </li>
                    <li>
                      เป็นผู้ที่ได้รับวัคซีนโควิด 19
                      ครบถ้วนตามเกณฑ์ที่กระทรวงสาธารณสุขกำหนดก่อนวันค่ายอย่างน้อย
                      14 วัน หรือมีประวัติการติดเชื้อไวรัสโคโรนา 2019 (COVID-19)
                      และรักษาหายแล้วก่อนวันค่ายอยู่ในช่วง 1 - 3 เดือน
                      ทั้งนี้ผู้สมัครต้องส่งหลักฐานการได้รับวัคซีนหรือเอกสารแสดงประวัติการติดเชื้อและการรักษาเมื่อถูกร้องขอ
                    </li>
                    <li>
                      ไม่อยู่ในกลุ่มเสี่ยงติดเชื้อ COVID-19
                      ในช่วงก่อนวันจัดกิจกรรมตามเงื่อนไข ดังนี้
                      <br />
                      - ไม่มีอาการบ่งชี้โรคติดเชื้อไวรัสโคโรนา 2019 (COVID-19)
                      เช่น ไข้ ไอ มีน้ำมูก เจ็บคอ คอแห้ง อ่อนเพลีย ปวดเมื่อย
                      ท้องเสีย ตาแดง ผื่นขึ้น หรือเหงื่อออกตอนกลางคืน
                      <br />-
                      ไม่มีประวัติสัมผัสกับผู้ป่วยที่ยืนยันถึงการเป็นโรคติดเชื้อไวรัสโคโรนา
                      2019 (COVID-19) เป็นเวลาอย่างน้อย 14 วัน ก่อนวันจัดกิจกรรม
                    </li>
                    <li>
                      มีผลตรวจเชื้อเป็นลบเมื่อตรวจเชื้อด้วยชุดตรวจเชื้อ
                      SARS-CoV-2 (เชื้อก่อโรค COVID-19)
                      แบบตรวจหาแอนติเจนด้วยตนเอง (COVID-19 Antigen test
                      self-test kits) ภายใน 72 ชั่วโมง ก่อนวันจัดกิจกรรม
                      ทั้งนี้ผู้สมัครต้องส่งผลตรวจเชื้อเมื่อถูกร้องขอ
                    </li>
                  </ul>
                </div>
                <div className="flex space-x-2 items-center mx-auto justify-center mt-2">
                  <input
                    onChange={() => setAccept(!accept)}
                    type="checkbox"
                    name="accpet"
                    id="accpet-box"
                    className=""
                  />
                  <label htmlFor="accpet-box">
                    ข้าพเจ้าได้อ่านและยอมรับข้อกำหนด
                    และเงื่อนไขการเข้าร่วมโครงการเป็นที่เรียบร้อยแล้ว
                  </label>
                </div>
                <button
                  className={`disabled:bg-gray-300 bg-gray-500 text-white w-full py-3 text-lg font-semibold rounded-md mt-4 transition-all duration-100`}
                  disabled={!accept}
                >
                  ยืนยัน
                </button>
              </div>
            </div>
            <div
              onClick={() => setToggleTOS(false)}
              className="fixed z-[43] top-0 left-0 right-0 bottom-0 bg-gray-900/50 backdrop-blur-md"
            />
          </>
        )}

        <div className="fixed z-[42] top-2 left-2 right-2 bottom-2 bg-[url('network.png')] rounded-lg p-4 overflow-y-scroll no-scroll">
          <FiXCircle
            onClick={closeModal}
            className="text-white text-3xl ml-auto"
          />
          <div className="flex justify-center items-center flex-col lg:flex-row space-y-12 lg:space-y-0 lg:space-x-12 p-2 md:p-12 max-w-[100em] mx-auto mt-24">
            <img src="/camp-logo-4.png" alt="Webtopia Town" />
            <div>
              <p className="text-white text-3xl font-semibold  text-center">
              Nettapunk Town
              </p>
              <p className="text-white text-3xl font-semibold  text-center">
              เมืองแห่งเครือข่ายอันกว้างใหญ่ 
              </p>
              <p className="indent-10 p-4 md:p-12 bg-[#221010]/40 rounded text-white text-lg font-medium max-w-[40em] mt-8">
              ผู้รอดชีวิตในเมืองแห่งนี้ต่างมีแนวคิดที่จะสื่อสารไปหาเมืองอื่น ๆ ที่เหลือรอดด้วยศาสตร์แห่งเครือข่าย
และวิทยาการอันทรงพลังของเมืองอย่าง Packet Tracer ที่ท่านจะสามารถศึกษาการเดินทางของข้อมูล
ตั้งแต่ต้นทางจนถึงปลายทางได้ โดยทุกท่านที่เป็นส่วนหนึ่งของเมืองจะได้เรียนรู้ศาสตร์แห่ง Network ตั้งแต่เริ่มต้น และได้ใช้อุปกรณ์ลับของเมืองอย่าง Rack กันจริง ๆ อีกด้วย หากท่านมีความสนใจในศาสตร์
แห่งการติดต่อสื่อสาร จงมาเข้าร่วมกับเมืองของเราและเชื่อมต่อเมืองทั้ง 4 เข้าด้วยกัน ด้วยพลังนี้กันเถอะ!
              </p>
              <button
                onClick={() => setToggleTOS(!toggleTOS)}
                className="px-8 py-2 bg-[#B0C2FF] text-lg font-medium rounded-full ml-auto block mt-4"
              >
                สมัครค่าย NETTAPUNK
              </button>
            </div>
          </div>
        </div>
        <div
          onClick={closeModal}
          className="fixed z-[41] top-0 left-0 right-0 bottom-0 bg-gray-600/40 backdrop-blur-sm"
        />
      </>,
      document.getElementById("modal")
    );
  }

  return ReactDOM.createPortal(
    <>
      <div className="fixed z-[42] top-2 left-2 right-2 bottom-2 bg-white rounded-lg p-4">
        <FiXCircle onClick={closeModal} className="text-3xl ml-auto" />
        <p>asd</p>
      </div>
      <div
        onClick={closeModal}
        className="fixed z-[41] top-0 left-0 right-0 bottom-0 bg-gray-600/40 backdrop-blur-sm"
      />
    </>,
    document.getElementById("modal")
  );
};

export default Modal;

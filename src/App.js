import React, { useEffect } from "react";
import {
  Nav,
  Intro,
  Intro2,
  ChooseCamp,
  Schedule,
  Place,
  SwiperSection,
} from "./layouts";
import gsapPlayer from "./functions/gsapPlayer";

const App = () => {
  //Use animation
  useEffect(() => {
    gsapPlayer();
  }, []);

  return (
    <div className="bg-[#1D1D2F]">
      <Nav />
      <div
        id="intro-section"
        className="relative bg-gradient-to-b from-[#1D1D2F] via-[#30307D] to-[#6D55A0] min-h-[110vh] sm:min-h-[140vh] overflow-hidden"
      >
        <Intro />
        {/* Bottom building */}
        <img
          id="intro-building"
          src="/intro-building.png"
          alt="intro-building"
          className="w-full min-w-[50em] absolute bottom-0 left-1/2 -translate-x-1/2 z-0"
        />
      </div>

      <div
        id="intro-section-2"
        className="relative bg-gradient-to-b from-[#6D55A0] via-[#37222C] to-[#D9AAB1] min-h-[110vh] sm:min-h-[140vh] pb-[20em] md:pb-[50em] overflow-hidden"
      >
        {/* Particle bg */}
        <img
          src="/wing-wing.png"
          alt="wing-wing"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        {/* top rock */}
        <img
          src="/rock.png"
          alt="rock"
          className="w-full max-h-[20em] absolute top-0 left-0"
        />
        <Intro2 />
      </div>
      <div className="relative bg-gradient-to-b from-[#D9AAB1]  via-[#514B90] to-[#310C57] min-h-[110vh] sm:min-h-[140vh] overflow-hidden">
        <img
          src="/intro2-rock.png"
          alt="intro2-rock"
          className="w-full min-w-[40em] absolute left-1/2 -translate-x-1/2 top-0"
        />
        <div id="choose-camp-section" className="my-24 md:mt-64">
          <ChooseCamp />
          <Schedule />
        </div>
      </div>

      <div className="relative bg-gradient-to-b from-[#310C57]  via-[#514B90] to-[#4c4787] min-h-[110vh] sm:min-h-[140vh] overflow-hidden">
        <img
          src="/place/building.png"
          alt="building"
          className="w-full min-w-[40em] absolute left-1/2 -translate-x-1/2 bottom-0"
        />
        <img
          src="/place/left.png"
          alt="building"
          className="absolute left-[-21em] bottom-[23em] w-[840px]"
        />
        <img
          src="/place/right.png"
          alt="building"
          className="absolute right-[-21em] bottom-[5em] w-[840px]"
        />
        <div className="absolute w-full h-full flex justify-center items-center">
          <Place />
        </div>
      </div>

      <div id="FAQ" className="relative bg-gradient-to-b from-[#4D4889] to-[#330A5D] py-12 min-h-screen md:min-h-[150vh]">
        {/* Background */}
        <img
          src="question-bg.png"
          alt="question-bg"
          className="absolute bottom-0 w-full left-1/2 transform -translate-x-1/2 opacity-70"
        />
        <div className="relative z-10 ">
          <h3 className="text-3xl font-semibold text-white text-center">
            ภาพกิจกรรม IT CAMP ที่เคยจัด
          </h3>
          <SwiperSection />
          <h3 className="text-3xl font-semibold text-white text-center mt-12">
            คำถามที่พบบ่อย
          </h3>
          <div className="flex flex-col space-y-6 divide-y-2 divide-white/50 mt-12 bg-[#141523]/80 mx-24 md:mx-44 p-12">
            {[
              {
                question: "ค่าย ITCAMP ครั้งที่ 18 คืออะไร",
                answer:
                  "ค่ายที่จะทำให้น้อง ๆ ได้มารู้จักกับคณะไอทีลาดกระบัง เรียนรู้เนื้อหาพื้นฐานของไอที และที่สำคัญน้อง ๆ จะได้มาลองสัมผัสการใช้ชีวิตที่คณะ และมีกิจกรรมมากมายให้น้อง ๆ ได้เข้าร่วมแบบใกล้ชิดกับพี่ ๆ จากคณะไอทีลาดกระบัง",
              },
              {
                question: "ค่าย ITCAMP ครั้งที่ 18 จัดขึ้นที่ไหน",
                answer:
                  "ค่าย ITCAMP ครั้งที่ 18 จัดขึ้นที่คณะเทคโนโลยีสารสนเทศ สถาบันเทคโนโลยีพระจอมเกล้า เจ้าคุณทหารลาดกระบัง",
              },
              {
                question:
                  "ค่าย ITCAMP ครั้งที่ 18 จัดขึ้นวันที่เท่าไหร่ และค้างคืนหรือไม่",
                answer:
                  "ค่าย ITCAMP ครั้งที่ 18 เป็นค่ายค้างคืน 4 วัน 3 คืน ตั้งแต่วันที่ 14 - 17 กรกฎาคม 2565",
              },
              {
                question:
                  "อยากสมัครค่าย ITCAMP ครั้งที่ 18 ต้องมีคุณสมบัติอะไรบ้าง",
                answer:
                  "กำลังศึกษาอยู่ในระดับชั้น ม.ปลาย หรือ ปวช. ปวส. หรือผู้ที่จบการศึกษาระดับชั้นมัธยมปลายแล้ว หรือเทียบเท่า แต่ยังไม่เคยศึกษาในระดับอุดมศึกษามาก่อน",
              },
              {
                question: "มีการคัดเลือกหลังจากการสมัครหรือไม่",
                answer:
                  "หลังจากสมัครแล้วจะมีการคัดเลือกน้อง ๆ จากคำถาม โดยน้อง ๆ ที่ผ่านการคัดเลือกจะต้องชำระเงินค่าสมัครจำนวน 500 บาท (ชำระในขั้นตอนของการยืนยันสิทธิ์)",
              },
            ].map((question, i) => (
              <div key={i} className="pt-6">
                <p className="text-lg text-white font-medium text-center">
                  Q: {question.question}
                </p>
                <p className="text-lg text-white font-medium text-center">
                  A: {question.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full px-12 py-24 bg-[#180020] flex flex-col">
        <h2 className="text-lg text-white text-center font-medium">
          ช่องทางการติดตาม
        </h2>
        <div className="flex justify-center space-x-12 mt-12">
          <a
            href="https://web.facebook.com/itcampKMITL/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/facebook.png" alt="facebook" className="w-12" />
          </a>
          <a
            href="https://twitter.com/ITCAMP"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/twitter.png" alt="twitter" className="w-12" />
          </a>
          <a
            href="https://www.instagram.com/itcamp_kmitl/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/ig.png" alt="ig" className="w-12" />
          </a>
          <a
            href="www.tiktok.com/@itcamp_kmitl"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/tiktok.png" alt="tiktok" className="w-12" />
          </a>
        </div>
        <h2 className="text-lg text-white text-center font-medium mt-12">
          คณะเทคโนโลยีสารสนเทศ สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง
          เลขที่ 1 ซอยฉลองกรุง 1 แขวงลาดกระบัง เขตลาดกระบัง กรุงเทพฯ 10520
          <p>ติดต่อ +66 (0) 2723 4900 หรือ +66 (0) 2723 4910</p>
        </h2>
      </div>
    </div>
  );
};

export default App;

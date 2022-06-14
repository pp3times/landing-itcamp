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
          ข้อมูลส่วนบุคคล คืออะไร?
        </h2>
        <p className="sm:text-lg text-white/80 mt-4">
          ข้อมูลส่วนบุคคล หมายถึง
          ข้อมูลเกี่ยวกับบุคคลซึ่งทำให้สามารถระบุตัวตนบุคคลนั้นได้
          ไม่ว่าทางตรงหรือทางอ้อม แต่ไม่รวมถึงข้อมูลของผู้ถึงแก่กรรม
        </p>

        <h2 className="text-center sm:text-left text-3xl text-white font-bold mt-12">
          ลักษณะข้อมูลส่วนบุคคลที่เราเก็บรวบรวม
        </h2>
        <p className="sm:text-lg text-white/80 mt-4">
          เราจะเก็บรวบรวมข้อมูลส่วนบุคคลดังต่อไปนี้
        </p>
        <ul className="list-decimal sm:text-lg text-white/80 pl-6 mt-4 leading-8 divide-y divide-gray-100/20">
          <li className="py-2">
            ข้อมูลที่บ่งชี้ตัวตน อาทิ ชื่อ วันเกิด เพศ กรุ๊ปเลือด ศาสนา
          </li>
          <li className="py-2">
            ข้อมูลช่องทางการติดต่อ อาทิ ที่อยู่ เบอร์โทร อีเมล
          </li>
          <li className="py-2">
            ข้อมูลส่วนตัว อาทิ ชื่อบัญชีผู้ใช้ ข้อมูลการแพทย์ ข้อมูลการศึกษา
            ข้อมูลผู้ปกครอง
          </li>
          {/* <li className="py-2">
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
          </li> */}
          <li className="py-2">ข้อมูลบัญชี อาทิ รายละเอียดการชำระเงิน</li>
          <li className="py-2">
            ข้อมูลทางเทคนิค อาทิ Google Analytics, Facebook Pixels, Hotjar
            หมายเลขระบุตำแหน่งคอมพิวเตอร์ (IP Address) ข้อมูลการเข้าระบบ
            ข้อมูลการใช้งาน และ การตั้งค่า (log)
          </li>
        </ul>

        <h2 className="text-center sm:text-left text-3xl text-white font-bold mt-12">
          แหล่งที่มาของข้อมูลส่วนบุคคล
        </h2>
        <p className="sm:text-lg text-white/80 mt-4">
          เราได้รับข้อมูลส่วนบุคคลของท่านจาก 2 ช่องทาง ดังนี้
        </p>
        <ul className="list-decimal sm:text-lg text-white/80 pl-6 mt-4 leading-8 divide-y divide-gray-100/20">
          <li className="py-2">
            <p>
              เราได้รับข้อมูลส่วนบุคคลจากท่านโดยตรง
              โดยเราจะเก็บรวบรวมข้อมูลส่วนบุคคลของท่านจากการยินยอมเข้าร่วมโครงการ
              ดังนี้
            </p>
            <p>- เมื่อท่านลงทะเบียนบัญชีเพื่อเข้าร่วมโครงการ</p>
            <p>- จากการเก็บข้อมูลการใช้เว็บไซต์ของท่านผ่านบราวเซอร์คุกกี้</p>
            <p>
              - จากการติดต่อสอบถามของท่าน หรือผ่านการโต้ตอบทางอีเมลหรือ
              ช่องทางการสื่อสารอื่น ๆ เช่น โทรศัพท์
              เพื่อที่ผู้ให้บริการสามารถติดต่อท่านกลับได้
            </p>
            <p>
              - เมื่อท่านเข้าสู่ระบบบัญชีผู้ใช้บนเว็บไซต์ของเรา
              หรือแอพพลิเคชันอื่น ๆ ที่เกี่ยวข้อง อาทิ เฟสบุ๊ค
            </p>
          </li>
          <li className="py-2">
            เราได้รับข้อมูลส่วนบุคคลของท่านมาจากบุคคลที่สาม Facebook Login
            โดยได้รับข้อมูลเมื่อท่านสมัครระบบหรือเข้าใช้งานระบบผ่านช่องทางของบุคคลที่สาม
          </li>
        </ul>

        <h2 className="text-center sm:text-left text-3xl text-white font-bold mt-12">
          วัตถุประสงค์ในการประมวลผลข้อมูล
        </h2>
        <ul className="list-decimal sm:text-lg text-white/80 pl-6 mt-4 leading-8 divide-y divide-gray-100/20">
          <li className="py-2">
            เราจัดเก็บข้อมูลส่วนบุคคลของท่านเพื่อประโยชน์ในการจัดฐานข้อมูลในการวิเคราะห์
            และเสนอสิทธิประโยชน์ตามความสนใจของท่าน (เผื่อสปอน)
          </li>
          <li className="py-2">
            เราจัดเก็บข้อมูลส่วนบุคคลเพื่อยืนยันตัวตนว่าท่านเป็นผู้เดียวในการเข้าถึงบัญชีของท่าน
          </li>
          <li className="py-2">
            เราจัดเก็บข้อมูลส่วนบุคคลของท่านเพื่อวิจัยการตลาดและบริหารความสัมพันธ์ระหว่างผู้ให้บริการและผู้ใช้บริการ
            (เผื่อสปอน)
          </li>
          <li className="py-2">
            เราจัดเก็บข้อมูลส่วนบุคคลของท่านเพื่อปฏิบัติตามข้อกฎหมาย
            และระเบียบบังคับใช้ของรัฐ
          </li>
          <li className="py-2">
            เราจัดเก็บข้อมูลส่วนบุคคลของท่านเพื่อปฏิบัติตามกฎระเบียบที่ใช้บังคับกับผู้บริการ
            รวมถึงการยินยอมให้ผู้ให้บริการสามารถโอนข้อมูลส่วนบุคคลให้แก่กลุ่มธุรกิจและพันธมิตรของผู้ให้บริการ
            ผู้ประมวลผลข้อมูล หรือหน่วยงานใด ๆ ที่มีสัญญากับผู้ให้บริการ
            (เผื่อสปอน)
          </li>
        </ul>

        <h2 className="text-center sm:text-left text-3xl text-white font-bold mt-12">
          การประมวลผลข้อมูลส่วนบุคคล
        </h2>
        <ul className="list-decimal sm:text-lg text-white/80 pl-6 mt-4 leading-8 divide-y divide-gray-100/20">
          <li className="py-2">
            เมื่อได้รับข้อมูลส่วนบุคคลจากท่านแล้ว
            เราจะดำเนินการดังนี้เก็บรวบรวมโดยมีการบันทึกในระบบคอมพิวเตอร์
            ที่ใช้บริการ ได้แก่ Hostinger, Google sheet
          </li>
          <li className="py-2">
            เราจะใช้ข้อมูลส่วนบุคคลของท่านที่ได้เก็บรวบรวมมาในการดำเนินของสมาคมตามวัตถุประสงค์ที่ระบุไว้ในหัวข้อ
            “วัตถุประสงค์ในการประมวลผลข้อมูล”
          </li>
        </ul>

        <h2 className="text-center sm:text-left text-3xl text-white font-bold mt-12">
          การแบ่งปันข้อมูล
        </h2>
        <p className="sm:text-lg text-white/80 mt-4">
          เราใช้ผู้ให้บริการภายนอกเพื่อดำเนินการกับข้อมูลส่วนบุคคลของท่านในนามของเราเท่านั้น
          การดำเนินการนี้เพื่อจุดประสงค์ที่ระบุไว้ในแถลงการณ์ความเป็นส่วนตัวนี้
          ยกตัวอย่างเช่น การเก็บสถิติการใช้งาน การวิเคราะห์ หรือส่งข้อมูลการตลาด
          ผู้ให้บริการเหล่านี้มีภาระผูกพันตามข้อตกลงการรักษาความลับและไม่ได้รับอนุญาตให้ใช้ข้อมูลส่วนบุคคลของท่านเพื่อจุดประสงค์ของผู้ดำเนินการเองหรือเพื่อจุดประสงค์อื่น
        </p>

        <h2 className="text-center sm:text-left text-3xl text-white font-bold mt-12">
          การเก็บรักษาและระยะเวลาในการเก็บรักษาข้อมูลส่วนบุคคล
        </h2>

        <p className="sm:text-lg text-white/80 mt-4">
          การเก็บรักษาข้อมูลส่วนบุคคลผู้ควบคุมทำการเก็บรักษาข้อมูลส่วนบุคคลของท่าน
          ดังนี้
        </p>

        <ul className="list-decimal sm:text-lg text-white/80 pl-6 mt-4 leading-8 divide-y divide-gray-100/20">
          <li className="py-2">
            ข้อมูลส่วนบุคคลที่ทางสมาคมจัดเก็บจะอยู่ในลักษณะของ Hard Copy และ
            Soft Copy
          </li>
          <li className="py-2">
            ข้อมูลส่วนบุคคลจะถูกจัดเก็บไว้ในเครื่องมืออุปกรณ์ของคณะดำเนินงานภายใต้การดูแลของคณะเทคโนโลยีสารสนเทศ
            สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง ได้แก่ คอมพิวเตอร์
            โทรศัพท์มือถือ รวมถึงมีการเก็บข้อมูลในบนระบบคอมพิวเตอร์ ซึ่งได้แก่
            Hostinger, Google sheet
          </li>
          <li className="py-2">
            ระยะเวลาจัดเก็บ เป็นไปตามหัวข้อ
            "ระยะเวลาในการประมวลผลข้อมูลส่วนบุคคล"
          </li>
        </ul>
        <h2 className="text-center sm:text-left text-3xl text-white font-bold mt-12">
          ระยะเวลาในการประมวลผลข้อมูลส่วนบุคคล
        </h2>
        <table className="mt-12 border-2 text-white/80 text-sm w-full min-h-[15em]">
          <thead>
            <tr className="border border-white/50">
              <td className="border-r-2 p-1.5 text-center">ลำดับที่</td>
              <td className="border-r-2 p-1.5 text-center">
                ประเภท / รายการข้อมูลส่วนบุคคล
              </td>
              <td className="border-r-2 p-1.5 text-center">ระยะเวลาประมวลผล</td>
            </tr>
          </thead>
          <tbody>
            <tr className="border border-white/50">
              <td className="border-r-2 p-1.5 text-center">1</td>
              <td className="border-r-2 p-1.5 text-center">
                ข้อมูลที่บ่งชี้ตัวตน อาทิ ชื่อ วันเกิด เพศ กรุ๊ปเลือด ศาสนา
              </td>
              <td className="border-r-2 p-1.5 text-center">1 ปี</td>
            </tr>
            <tr className="border border-white/50">
              <td className="border-r-2 p-1.5 text-center">2</td>
              <td className="border-r-2 p-1.5 text-center">
                ข้อมูลช่องทางการติดต่อ อาทิ ที่อยู่ เบอร์โทร อีเมล
              </td>
              <td className="border-r-2 p-1.5 text-center">1 ปี</td>
            </tr>
            <tr className="border border-white/50">
              <td className="border-r-2 p-1.5 text-center">3</td>
              <td className="border-r-2 p-1.5 text-center">
                ข้อมูลส่วนตัว อาทิ ชื่อบัญชีผู้ใช้ รหัสผ่าน ข้อมูลการแพทย์
                ข้อมูลการศึกษา ข้อมูลผู้ปกครอง
              </td>
              <td className="border-r-2 p-1.5 text-center">1 ปี</td>
            </tr>
            <tr className="border border-white/50">
              <td className="border-r-2 p-1.5 text-center">4</td>
              <td className="border-r-2 p-1.5 text-center">
                ข้อมูลบัญชี อาทิ รายละเอียดการชำระเงิน และบัญชีธนาคาร
              </td>
              <td className="border-r-2 p-1.5 text-center">1 ปี</td>
            </tr>
          </tbody>
        </table>
        <h2 className="text-center sm:text-left text-3xl text-white font-bold mt-12">
          สิทธิของเจ้าของข้อมูล
        </h2>
        <p className="sm:text-lg text-white/80 mt-4">
          ท่านมีสิทธิในการดำเนินการ ดังต่อไปนี้
        </p>
        <ul className="list-decimal sm:text-lg text-white/80 pl-6 mt-4 leading-8 divide-y divide-gray-100/20">
          <li className="py-2">
            สิทธิในการได้รับแจ้ง (right to be informed) :
            ท่านมีสิทธิที่จะได้รับแจ้งเมื่อข้อมูลส่วนบุคคลของท่านถูกจัดเก็บ
            รวมถึงรายละเอียดต่าง ๆ ที่เกี่ยวข้อง อาทิ
            วิธีการจัดเก็บและระยะเวลาการจัดเก็บ
          </li>
          <li className="py-2">
            สิทธิในการเพิกถอนความยินยอม (right to withdraw consent) :
            ท่านมีสิทธิในการเพิกถอนความยินยอมในการประมวลผลข้อมูลส่วนบุคคลที่ท่านได้ให้ความยินยอมกับเราได้
            ตลอดระยะเวลาที่ข้อมูลส่วนบุคคลของท่านอยู่กับเรา
          </li>
          <li className="py-2">
            สิทธิในการเข้าถึงข้อมูลส่วนบุคคล (right of access) :
            ท่านมีสิทธิในการเข้าถึงข้อมูลส่วนบุคคลของท่านและขอให้เราทำสำเนาข้อมูลส่วนบุคคลดังกล่าวให้แก่ท่าน
            รวมถึงขอให้เราเปิดเผยการได้มาซึ่งข้อมูลส่วนบุคคลที่ท่านไม่ได้ให้ความยินยอมต่อเรา
          </li>
          <li className="py-2">
            สิทธิในการแก้ไขข้อมูลผู้สมัครให้ถูกต้อง (right to rectification) :
            ท่านมีสิทธิในการขอให้เราแก้ไขข้อมูลที่ไม่ถูกต้องหรือเพิ่มเติมข้อมูลที่ไม่สมบูรณ์
          </li>
          <li className="py-2">
            สิทธิในการลบข้อมูลส่วนบุคคล (right to erasure) :
            ท่านมีสิทธิในการขอให้เราทำการลบข้อมูลของท่านด้วยเหตุบางประการได้
          </li>
          <li className="py-2">
            สิทธิในการระงับการใช้ข้อมูลส่วนบุคคล (right to restriction of
            processing) :
            ท่านมีสิทธิในการระงับการใช้ข้อมูลส่วนบุคคลของท่านด้วยเหตุบางประการได้
          </li>
          <li className="py-2">
            สิทธิในการให้โอนย้ายข้อมูลส่วนบุคคล (right to data portability) :
            ท่านมีสิทธิในการโอนย้ายข้อมูลส่วนบุคคลของท่านไปให้แก่ผู้ควบคุมข้อมูลรายอื่นหรือตัวท่านเองด้วยเหตุบางประการได้
          </li>
          <li className="py-2">
            สิทธิในการคัดค้านการประมวลผลข้อมูลส่วนบุคคล (right to object) :
            ท่านมีสิทธิในการคัดค้านการประมวลผลข้อมูลส่วนบุคคลของท่านด้วยเหตุบางประการได้
          </li>
        </ul>
        <p className="sm:text-lg text-white/80 mt-4">
          ท่านสามารถส่งคำขอมาที่อีเมล support@itcamp18.ac.th
          เพื่อดำเนินการยื่นคำร้องขอดำเนินการตามสิทธิข้างต้นได้ หรือ
          ท่านสามารถศึกษารายละเอียดเงื่อนไข ข้อยกเว้นการใช้สิทธิต่าง ๆ ได้ที่
          แนวปฏิบัติเกี่ยวกับการคุ้มครองข้อมูลส่วนบุคคล (TDPG2.0) และ
          เว็บไซต์กระทรวงดิจิทัลเพื่อเศรษฐกิจและสังคม{" "}
          <span
            className="text-white underline underline-offset-1"
            onClick={() => window.open("http://www.mdes.go.th", "_blank")}
          >
            http://www.mdes.go.th
          </span>{" "}
          ทั้งนี้ ท่านไม่จำเป็นต้องเสียค่าใช้จ่ายใด ๆ ในการดำเนินตามสิทธิข้างต้น
          โดยเราจะพิจารณา และแจ้งผลการพิจารณาคำร้องของท่านภายใน 30
          วันนับแต่วันที่เราได้รับคำร้องขอดังกล่าว
        </p>
        <h2 className="text-center sm:text-left text-3xl text-white font-bold mt-12">
          การยื่นคำร้องเพื่อการจัดการข้อมูลส่วนบุคคล
        </h2>
        <p className="sm:text-lg text-white/80 mt-4">
          หากท่านมีความประสงค์ในการยื่นคำร้องเรียนเพื่อจัดการข้อมูลส่วนบุคคลของท่าน
          ซึ่งรวมไปถึงการขอเข้าถึงข้อมูลส่วนบุคคล การแก้ไขข้อมูลส่วนบุคคล
          การขอเพิกถอนการยินยอมให้ข้อมูลส่วนบุคคล
          และการส่งความคิดเห็นต่อการบริการ
          ท่านสามารถติดต่อได้ทางเจ้าหน้าที่คุ้มครองข้อมูลส่วนบุคคลตามรายละเอียด
          ได้ที่ support@itcamp18.ac.th
        </p>
      </div>
    </div>
  );
};

export default TOS;

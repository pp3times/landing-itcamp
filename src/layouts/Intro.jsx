import React from "react";

const Intro = () => {
  return (
    <div className="relative z-10">
      <div className="pt-24 flex flex-col items-center px-10">
        <img
          src="/intro-logo.png"
          alt="intro-logo"
          className="w-2/4  min-w-[15em] max-w-[25em]"
          id="main-logo"
        />
        <h2 className="intro-header mt-20 text-3xl font-semibold text-white">
          ITCAMP 18
        </h2>
        <h2 className="intro-header text-3xl text-center mt-1 font-semibold text-white">
          A post-apocalyptic world
        </h2>
        <p className="intro-header text-white/80 text-lg text-center mt-12">
          14 - 17 กรกฎาคม 2565
          <br />
          คณะเทคโนโลยีสารสนเทศ <br />
          สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง{" "}
        </p>
        <a
          href="https://register.itcamp18.in.th"
          target="_blank"
          rel="noreferrer"
          className="hidden intro-header relative px-14 py-5 hover:scale-105 transition-all ease-in-out duration-200 bg-transparent border-2 border-white text-2xl font-semibold text-white mt-10"
        >
          ประกาศผลรับสมัคร
        </a>
      </div>
    </div>
  );
};

export default Intro;

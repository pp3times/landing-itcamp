import { Nav, Intro, Intro2, ChooseCamp, Schedule } from "./layouts"

const App = () => {
  return (
    <>
      <Nav />

      <div className="relative bg-gradient-to-b from-[#1D1D2F] via-[#30307D] to-[#6D55A0] min-h-[110vh] sm:min-h-[140vh] overflow-hidden">
        <Intro />
        {/* Bottom building */}
        <img src="/intro-building.png" alt="intro-building" className="w-full min-w-[50em] absolute bottom-0 left-1/2 -translate-x-1/2 z-0" />
      </div>

      <div className="relative bg-gradient-to-b from-[#6D55A0] via-[#37222C] to-[#D9AAB1] min-h-[110vh] sm:min-h-[140vh] pb-[20em] md:pb-[50em] overflow-hidden">
        {/* Particle bg */}
        <img src="/wing-wing.png" alt="wing-wing" className="absolute top-0 left-0 w-full h-full object-cover" />
        {/* top rock */}
        <img src="/rock.png" alt="rock" className="w-full max-h-[20em] absolute top-0 left-0" />
        <Intro2 />
      </div>
      <div className="relative bg-gradient-to-b from-[#D9AAB1]  via-[#514B90] to-[#310C57] min-h-[110vh] sm:min-h-[140vh] overflow-hidden">
        <img src="/intro2-rock.png" alt="intro2-rock" className="w-full min-w-[40em] absolute left-1/2 -translate-x-1/2 top-0" />
        <div className="my-24 md:mt-64">
          <ChooseCamp />
          <Schedule/>
        </div>
      </div>
    </>
  );
}

export default App;
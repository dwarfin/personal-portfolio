import Beams from "./Beams.jsx";
import { FontWeightText } from "./FontWeightText.jsx";

export default function Hero() {
  return (
    <section className="w-full h-dvh overflow-x-hidden">
      {/* <div className="fixed inset-0 pointer-events-none -z-10">
        <Beams
          beamWidth={3}
          beamHeight={30}
          lightColor="#ffefdd"
          speed={2}
          noiseIntensity={1.75}
          scale={0.2}
          rotation={30}
        />

        <div className="absolute inset-0 bg-black/40 pointer-events-none" />
      </div> */}

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center gap-6">
        <div className="text-xl font-bold text-(--text-h)">Hey there I'm</div>

        <div className="flex w-full items-center justify-center">
          <FontWeightText
            text="Isaac Reyes"
            fontSize={60}
            className="z-10 text-(--text-h)"
            style={{ fontFamily: "Inter var" }}
          />
        </div>

        <div className="text-lg">
          Welcome to my portfolio! Scroll to learn more.
        </div>
      </div>

    </section>
  );
}
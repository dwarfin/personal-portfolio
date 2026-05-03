import { FontWeightText } from "./FontWeightText.jsx";

export default function Hero() {
  return (
    <section className="w-full h-dvh overflow-x-hidden">
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
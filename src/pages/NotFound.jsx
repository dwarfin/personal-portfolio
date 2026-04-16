import BorderGlow from "../components/BorderGlow";
import Grainient from "../components/Grainient";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <>
      <div className="fixed inset-0 -z-10 w-full h-full pointer-events-none">

        <Grainient
          color1="#3E4244"
          color2="#1F2122"
          color3="#0B0C0C"
          timeSpeed={1.5}
          colorBalance={0}
          warpStrength={1.2}
          warpFrequency={6}
          warpSpeed={2}
          warpAmplitude={50}
          blendAngle={0}
          blendSoftness={0.05}
          rotationAmount={500}
          noiseScale={2}
          grainAmount={0.1}
          grainScale={2}
          grainAnimated={false}
          contrast={1.5}
          gamma={1}
          saturation={1}
          centerX={0}
          centerY={0}
          zoom={0.9}
        />

      </div>
      <div className="min-h-screen flex items-center justify-center px-4">
        <BorderGlow edgeSensitivity={10} glowColor="40 80 80" backgroundColor="" borderRadius={28}
          glowRadius={40} glowIntensity={1} coneSpread={40} animated={false}
          colors={['#c084fc', '#f472b6', '#38bdf8']} className="w-full max-w-lg backdrop-blur-md" >
          <div className="p-10 rounded-3xl backdrop-blur-md border border-white/10 text-center space-y-6">

            {/* Accent bar */}
            <div className="w-12 h-1 rounded-full bg-(--accent3) mx-auto"></div>

            <h1 className="text-4xl font-display font-semibold text-(--text-h)">
              404
            </h1>

            <p className="text-gray-300 leading-relaxed max-w-sm mx-auto">
              The page you’re looking for doesn’t exist.
            </p>

            {/* Signature button */}
            <button
              onClick={() => navigate("/")}
              className="cursor-none hover:opacity-80 transition shrink-0 bg-transparent p-0 cursor-target mx-auto"
            >
              <img
                src="/signature.svg"
                alt="Logo"
                className="w-28 md:w-36 lg:w-44 h-auto mx-auto"
              />
            </button>

            {/* Hint */}
            <p className="text-xs text-gray-500 tracking-wide">
              Tap the signature to return home
            </p>
          </div>
        </BorderGlow>
      </div>
    </>
  );
}

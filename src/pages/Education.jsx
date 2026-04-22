import Grainient from "../components/Grainient";
import BorderGlow from '../components/BorderGlow';
import Beams from "../components/Beams";

export default function Education() {
  return (
    <>
      <section className="mt-10">
        <h1 className="text-3xl text-(--text-h) font-display mb-10 px-2 z-10">
          Coursework
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-6">

          {/* Card 1 */}
          <BorderGlow edgeSensitivity={10} glowColor="40 80 80" backgroundColor="" borderRadius={28}
            glowRadius={40} glowIntensity={1} coneSpread={40} animated={false}
            colors={['#c084fc', '#f472b6', '#38bdf8']} className="backdrop-blur-md cursor-pointer">
            <div className="p-8 w-full max-w-96 rounded-2xl text-left space-y-4">
              <div className="w-10 h-1 rounded-full bg-(--accent)"></div>
              <h3 className="text-2xl font-display font-medium text-(--text-h)">B.S. in Computer Science</h3>
              <p className="text-gray-300 leading-relaxed text-sm">  
                Coursework in cybersecurity, networking, and systems engineering.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-2 py-1 bg-(--social-bg) text-(--accent) rounded">Cybersecurity</span>
                <span className="text-xs px-2 py-1 bg-(--social-bg) text-(--accent) rounded">Networking</span>
              </div>
            </div>
          </BorderGlow>

          {/* Card 2 */}
          <BorderGlow edgeSensitivity={10} glowColor="40 80 80" backgroundColor="" borderRadius={28}
            glowRadius={40} glowIntensity={1} coneSpread={40} animated={false}
            colors={['#c084fc', '#f472b6', '#38bdf8']} className="backdrop-blur-md cursor-pointer">
            <div className="p-8 w-full max-w-96 rounded-2xl text-left space-y-4">
              <div className="w-10 h-1 rounded-full bg-(--accent)"></div>
              <h3 className="text-2xl font-display font-medium text-(--text-h)">Data Privacy & Security</h3>
              <p className="text-gray-300 leading-relaxed text-sm">
                Secure system design, threat modeling, and defensive techniques.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-2 py-1 bg-(--social-bg) text-(--accent) rounded">Cybersecurity</span>
                <span className="text-xs px-2 py-1 bg-(--social-bg) text-(--accent) rounded">Defense</span>
              </div>
            </div>
          </BorderGlow>

          {/* Card 3 */}
          <BorderGlow edgeSensitivity={10} glowColor="40 80 80" backgroundColor="" borderRadius={28}
            glowRadius={40} glowIntensity={1} coneSpread={40} animated={false}
            colors={['#c084fc', '#f472b6', '#38bdf8']} className="backdrop-blur-md cursor-pointer">
            <div className="p-8 w-full max-w-96 rounded-2xl text-left space-y-4">
              <div className="w-10 h-1 rounded-full bg-(--accent)"></div>
              <h3 className="text-2xl font-display font-medium text-(--text-h)">Generative AI</h3>
              <p className="text-gray-300 leading-relaxed text-sm">
                LLM architectures, attention, and PyTorch model building.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-2 py-1 bg-(--social-bg) text-(--accent) rounded">PyTorch</span>
                <span className="text-xs px-2 py-1 bg-(--social-bg) text-(--accent) rounded">LLMs</span>
              </div>
            </div>
          </BorderGlow>

          {/* Card 4 */}
          <BorderGlow edgeSensitivity={10} glowColor="40 80 80" backgroundColor="" borderRadius={28}
            glowRadius={40} glowIntensity={1} coneSpread={40} animated={false}
            colors={['#c084fc', '#f472b6', '#38bdf8']} className="backdrop-blur-md cursor-pointer">
            <div className="p-8 w-full max-w-96 rounded-2xl text-left space-y-4">
              <div className="w-10 h-1 rounded-full bg-(--accent)"></div>
              <h3 className="text-2xl font-display font-medium text-(--text-h)">Operating Systems Theory</h3>
              <p className="text-gray-300 leading-relaxed text-sm">
                Processes, scheduling, memory, and Unix system programming.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-2 py-1 bg-(--social-bg) text-(--accent) rounded">Unix</span>
                <span className="text-xs px-2 py-1 bg-(--social-bg) text-(--accent) rounded">OS Theory</span>
              </div>
            </div>
          </BorderGlow>

          {/* Card 5 */}
          <BorderGlow edgeSensitivity={10} glowColor="40 80 80" backgroundColor="" borderRadius={28}
            glowRadius={40} glowIntensity={1} coneSpread={40} animated={false}
            colors={['#c084fc', '#f472b6', '#38bdf8']} className="backdrop-blur-md cursor-pointer">
            <div className="p-8 w-full max-w-96 rounded-2xl text-left space-y-4">
              <div className="w-10 h-1 rounded-full bg-(--accent)"></div>
              <h3 className="text-2xl font-display font-medium text-(--text-h)">Software Engineering</h3>
              <p className="text-gray-300 leading-relaxed text-sm">
                SDLC, design patterns, agile workflows, and scalable systems.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-2 py-1 bg-(--social-bg) text-(--accent) rounded">Design</span>
                <span className="text-xs px-2 py-1 bg-(--social-bg) text-(--accent) rounded">Team Collaboration</span>
              </div>
            </div>
          </BorderGlow>
        </div>
      </section>

      <section className="mb-32 px-2">
        <h1 className="text-3xl font-display mb-10">
          Certifications
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-6">

          <BorderGlow edgeSensitivity={10} glowColor="40 80 80" backgroundColor="" borderRadius={28}
            glowRadius={40} glowIntensity={1} coneSpread={40} animated={false}
            colors={['#c084fc', '#f472b6', '#38bdf8']} className="backdrop-blur-md cursor-pointer">
            <div className="p-8 w-full max-w-96 rounded-2xl text-left space-y-4">
              <div className="w-10 h-1 rounded-full bg-(--accent3)"></div>
              <h3 className="text-2xl font-display font-medium text-(--text-h)">
                Building Agentic AI Applications with LLMs
              </h3>

              <p className="text-gray-300 leading-relaxed text-sm">
                NVIDIA certification covering agentic AI patterns, tool‑using LLMs,
                multi‑step reasoning, and real‑world AI application design.
              </p>

              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-2 py-1 bg-(--social-bg) text-(--accent3) rounded">Agentic AI</span>
                <span className="text-xs px-2 py-1 bg-(--social-bg) text-(--accent3) rounded">LLMs</span>
              </div>
            </div>
          </BorderGlow>
        </div>
      </section>
    </>
  );
}
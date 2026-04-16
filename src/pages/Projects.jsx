import Grainient from "../components/Grainient";
import Beams from "../components/Beams"
import ProjectModal from "../components/ProjectModal";

export default function Projects() {
  return (
    <>
      <div className="fixed inset-0 pointer-events-none -z-10">
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
      </div>

      <section id="projects" className="mt-10 mb-32 px-2 mx-6">
        <div className="mb-10">
          <h1 className="text-(--text-h)">
            Projects
          </h1>

          <p>
            Tap to learn more!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
          <ProjectModal
            title="Wazuh Server"
            badge="Case Study"
            subtitle="Security Engineering & Threat Analysis"
            description="Security Information and Event Management (SIEM) program. Configured the server, endpoints, and active response."
            tags={["Wazuh", "Linux", "Hyper-V", "SIEM"]}
            color={[0.65, 0.25, 1.0]}
            sections={[
              {
                heading: "Overview",
                text: [
                  "Inspiration for this project first came from watching videos about cybersecurity projects to implement. A SIEM or security information and event management system was suggested. At that time, I only did some initial research and looked at different options. Later, during my computer networks class, we briefly discussed SIEMs among other security topics. That was when I decided that implementing a SIEM would not only be an interesting project but would also reinforce what I was learning in that class.",
                  "With very limited knowledge of SIEMs, I took on the project with a simple goal to connect an agent and actively respond to brute force attacks against that endpoint. Through a long process of trial and error, I was able to achieve that task. This document covers the architecture and process that ultimately led to a functional detection and response pipeline.",
                ],
              },
              {
                heading: "Conclusion",
                text: [
                  "This project provided experience with SIEM operations, log analysis, rule based detection, and automated response. The process involved significant troubleshooting, but each challenge contributed to a deeper und detects and responds to real brute force attacks, demonstrating a complete and functional security workflow.",
                ],
              },
            ]}
            cta={{ href: "/wazuh" }}
          />

          <ProjectModal
            title="Azure Honeypot"
            badge="Case Study"
            subtitle="Security Engineering & Threat Analysis"
            description="Deployed a cloud-based honeypot in Azure and integrated it with Microsoft Sentinel to capture, analyze, and visualize real world attack traffic."
            tags={["Azure", "Sentinel", "KQL"]}
            color={[0.1, 0.55, 1.0]}
            sections={[
              {
                heading: "Overview",
                text: [
                  "To deepen my understanding of cybersecurity, I decided to build a honeypot utilizing Microsoft Azure. Inspired by a video by Josh Makador, titled Cyber Home Lab. The overall objective was to create a cloud system and expose a vulnerable virtual machine to the internet then plot where the attacks came from. This would demonstrate how dangerous it can be to misconfigure a system, show where attacks come from, and show the process of creating a simple cloud architecture. This case study documents the architecture, methods used, and insights gained throughout the development process.",
                ],
              },
              {
                heading: "Conclusion",
                text: [
                  "This project reinforced the importance of proper firewall configuration and secure design. Seeing tens of thousands of attacks within such a small timeframe was a powerful reminder of how quickly an exposed system is attacked. It highlighted the risks organizations face when misconfigurations or vulnerable services are left accessible.",
                  "Working through this lab improved my cybersecurity skill by giving me hands on experience with Azure security controls, firewall rule management, SIEM configuration and KQL threat hunting. I gained a deeper understanding of how attackers and automated brute force attacks operate. It also reinforced how important monitoring and logging are for detecting such activities for further analysis.",
                ],
              },
            ]}
            cta={{ href: "/azure" }}
          />
        </div>
      </section>
    </>
  );
}
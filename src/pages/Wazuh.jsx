import Grainient from "../components/Grainient";
import Beams from "../components/Beams";
import ProjectNav from "../components/ProjectNav";
import { useNavigate } from "react-router-dom"
import { VscChevronLeft } from "react-icons/vsc"

const wazuhNav = [
  { label: "Objective", href: "objective" },
  { label: "Wazuh", href: "wazuh" },
  { label: "Project", href: "goals" },
  { label: "Setup", href: "setup" },
  { label: "Response", href: "response" },
  { label: "System", href: "final" },
  { label: "Lessons", href: "lessons" },
  { label: "Improvements", href: "improvements" },
  { label: "Conclusion", href: "conclusion" },
  { label: "Demo", href: "demo" },
];

export default function Wazuh() {
  const navigate = useNavigate();

  return (
    <>
      {/* Background */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <Beams beamWidth={3} beamHeight={30} lightColor="#ffefdd" speed={2} noiseIntensity={1.75} scale={0.2} rotation={30} />
        <div className="absolute inset-0 bg-black/40 pointer-events-none" />
      </div>

      {/* Page Wrapper */}
      <div className="overflow-x-hidden">

        {/* Reusable Navbar */}
        <ProjectNav items={wazuhNav} />

        {/* Prevent overlap with fixed navbar */}
        <div className="pt-24 md:pt-32">

          {/* Hero Section */}
          <section id="wazuh-hero"
            // className="relative flex items-center ml-0 px-10 py-32"
            className="mt-10 mb-32 px-2 mx-6"
          >
            <div className="max-w-3xl mx-auto text-center font-sans">
              <div className="text-(--text-h)">
                <h1 className="text-4xl md:text-6xl font-display">
                  Wazuh SIEM Implementation with Automated Active Response
                </h1>

                <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto font-sans">
                  A locally hosted SIEM deployment using Wazuh, featuring automated threat detection,
                  active response scripting, and a full case study documenting the build process.
                </p>

                <div className="flex flex-wrap justify-center gap-3 mt-6 font-sans">
                  <span className="text-xs px-3 py-1 bg-(--accent-bg) text-(--accent) rounded-full">
                    Case Study
                  </span>
                  <span className="text-xs px-3 py-1 bg-(--social-bg) rounded">Wazuh</span>
                  <span className="text-xs px-3 py-1 bg-(--social-bg) rounded">Linux</span>
                  <span className="text-xs px-3 py-1 bg-(--social-bg) rounded">Python</span>
                  <span className="text-xs px-3 py-1 bg-(--social-bg) rounded">Bash</span>
                  <span className="text-xs px-3 py-1 bg-(--social-bg) rounded">Hyper-V</span>
                </div>
              </div>
            </div>
          </section>

          {/* Divider */}
          <div className="ml-0 w-full h-px bg-(--border) mb-20"></div>

          {/* Documentation Sections */}
          <section id="documentation" className="ml-0 px-10 space-y-20">
            <div className="max-w-3xl mx-auto text-left font-sans">

              {/* Overview */}
              <div id="overview" className="scroll-mt-20 md:scroll-mt-24">
                <h2 className="text-3xl font-display text-white mb-4">
                  Overview
                </h2>

                <p className="project-p">
                  Inspiration for this project first came from watching videos about cybersecurity
                  projects to implement. A SIEM or security information and event management system
                  was suggested. At that time, I only did some initial research and looked at
                  different options. Later, during my computer networks class, we briefly discussed
                  SIEMs among other security topics. That was when I decided that implementing a
                  SIEM would not only be an interesting project but would also reinforce what I was
                  learning in that class.
                </p>

                <p className="project-p">
                  With very limited knowledge of SIEMs, I took on the project with a simple goal to
                  connect an agent and actively respond to brute force attacks against that
                  endpoint. Through a long process of trial and error, I was able to achieve that
                  task. This document covers the architecture and process that ultimately led to a
                  functional detection and response pipeline.
                </p>
              </div>

              {/* Objective */}
              <div id="objective" className="scroll-mt-20 md:scroll-mt-24">
                <h2 className="text-2xl mb-4">
                  Objective
                </h2>

                <p className="project-p">
                  My goal was to create a complete SIEM workflow from scratch using Wazuh. I wanted
                  to simulate an attack, watch Wazuh detect it, and then trigger a custom automated
                  response that would block the attacker at the firewall level. While Wazuh offers
                  many features, the scope of this project focuses on the setup of the environment,
                  detection, and automated responses to brute force attempts.
                </p>
              </div>

              {/* Wazuh */}
              <div id="wazuh" className="scroll-mt-20 md:scroll-mt-24">
                <h2 className="text-2xl mb-4">
                  Wazuh
                </h2>

                <p className="project-p">
                  Wazuh is an open source platform that provides both XDR and SIEM capabilities. It
                  supports log data analysis, intrusion and malware detection, file integrity
                  monitoring, configuration assessment, vulnerability detection, and regulatory
                  compliance.
                </p>

                <p className="project-p">
                  Wazuh is composed of four main components:
                </p>

                <ul className="space-y-6 text-gray-300 leading-relaxed text-base max-w-3xl mb-6">
                  <li>
                    <span className="font-display text-white">Wazuh Agent</span>
                    <ul className="ml-10 mt-2 list-disc">
                      <li>Installed on endpoints to collect logs and security events.</li>
                    </ul>
                  </li>

                  <li>
                    <span className="font-display text-white">Wazuh Server</span>
                    <ul className="ml-10 mt-2 list-disc">
                      <li>Analyzes events, applies rules, and triggers alerts.</li>
                    </ul>
                  </li>

                  <li>
                    <span className="font-display text-white">Wazuh Indexer</span>
                    <ul className="ml-10 mt-2 list-disc">
                      <li>Stores and indexes analyzed data.</li>
                    </ul>
                  </li>

                  <li>
                    <span className="font-display text-white">Wazuh Dashboard</span>
                    <ul className="ml-10 mt-2 list-disc">
                      <li>Provides visualization and alert management.</li>
                    </ul>
                  </li>
                </ul>

                <p className="project-p">
                  Agents forward events detected on their machine to the server over TCP port 1514
                  by default. The server decodes the logs, applies rules, and forwards the results
                  to the indexer. The dashboard then displays alerts, system status, and event
                  details.
                </p>

                <p className="project-p">
                  Wazuh includes built‑in rules and decoders capable of detecting privilege
                  escalation, suspicious process creation, file integrity changes, malware‑like
                  behavior, password attacks, brute force attempts, outdated software, and missing
                  patches. Detection is automatic, and basic responses come preconfigured. Wazuh
                  also supports the implementation of custom scripts that are executed when certain
                  rules are triggered.
                </p>
              </div>

              {/* Project Goals */}
              <div id="goals" className="scroll-mt-20 md:scroll-mt-24">
                <h2 className="text-2xl mb-4">
                  Project Goals
                </h2>

                <p className="project-p">
                  This project focused on setting up all four Wazuh components, writing and
                  implementing a custom Python script to respond to brute force attacks, simulating
                  an attack, and testing everything in a controlled environment all while
                  documenting the process, problems, and solutions.
                </p>
              </div>

              {/* Setup */}
              <div id="setup" className="scroll-mt-20 md:scroll-mt-24">
                <h2 className="text-2xl mb-4">
                  Setup Process
                </h2>

                <p className="project-p">
                  The attack simulation was developed after discussing how to generate meaningful
                  security events for Wazuh to detect. We settled on using Hydra from the Kali
                  machine to perform an SSH brute‑force attack against the Ubuntu endpoint. This
                  produced the repeated failed login attempts needed to trigger Wazuh’s detection
                  rules. The simulation itself was straightforward, but confirming that logs were
                  being forwarded correctly and that Wazuh was interpreting them properly required
                  several clarifications and adjustments along the way.
                </p>

                <h4 className="text-2xl font-display text-white mb-4">Wazuh Server</h4>

                <h5 className="text-xl font-display text-white mb-4">
                  Initial VM Setup
                </h5>

                <p className="text-gray-300 leading-relaxed text-base max-w-3xl mb-6">
                  I first created a VM using Ubuntu Server 24.04.3 with 4096 MB RAM, Generation 2,
                  Virtual switch: WazuhLabSwitch, and a 30 GB virtual disk.
                </p>

                <p className="text-gray-300 leading-relaxed text-base max-w-3xl mb-6">
                  I attempted to install Wazuh 4.13. Installation failures persisted as I encountered repeated issues with filebeat errors, storage problems, permission failures, and services not starting. I initially assumed the problem was Wazuh itself so I tried installing Wazuh 4.12 then Wazuh 4.9 but both failed.
                </p>

                <h5 className="text-xl font-display text-white mb-4">
                  Root Cause: OS Version Mismatch
                </h5>

                <p className="text-gray-300 leading-relaxed text-base max-w-3xl mb-6">
                  After more in‑depth research I discovered that Wazuh 4.13 does not support Ubuntu 24.04 but rather Ubuntu 22.04.
                </p>

                <p className="text-gray-300 leading-relaxed text-base max-w-3xl mb-6">
                  I then rebuilt the VM with Ubuntu Server 22.04, an older version that is compatible with Wazuh 4.13 and a 60 GB disk to avoid the storage problems. After reinstalling with the correct OS version, the indexer, server, and dashboard all worked correctly.
                </p>

                {/* Agent Section */}
                <div>
                  <h4 className="text-2xl font-display text-white mb-4">
                    Wazuh Agent
                  </h4>

                  <h5 className="text-xl font-display text-white mb-4">
                    Connecting the Agent
                  </h5>

                  <p className="text-gray-300 leading-relaxed text-base max-w-3xl mb-6">
                    Using the official Wazuh website I downloaded the corresponding installer and installed the Wazuh agent on my Mac, attempting to register it with the server.
                  </p>

                  <p className="text-gray-300 leading-relaxed text-base max-w-3xl mb-6">
                    The agent would not connect.
                  </p>

                  <h5 className="text-xl font-display text-white mb-4">
                    Root Cause: Poor Configuration
                  </h5>

                  <p className="text-gray-300 leading-relaxed text-base max-w-3xl mb-6">
                    Upon further inspection I found that I used the wrong server IP address during registration. This was a simple fix after correcting the IP, the agent appeared in the dashboard and began sending logs.
                  </p>

                  <h5 className="text-xl font-display text-white mb-4">
                    Detecting Failed SSH Login Attempts
                  </h5>

                  <p className="text-gray-300 leading-relaxed text-base max-w-3xl mb-6">
                    I wanted Wazuh to detect brute‑force SSH attempts on my Mac. However, macOS does not log SSH failures in a way Wazuh reads by default, which is through journalctl.
                  </p>

                  <p className="text-gray-300 leading-relaxed text-base max-w-3xl mb-6">
                    No SSH logs were being forwarded.
                  </p>

                  <h5 className="text-xl font-display text-white mb-4">
                    Fix: Custom Log Collection
                  </h5>

                  <p className="text-gray-300 leading-relaxed text-base max-w-3xl mb-6">
                    I created a small Bash script to capture failed SSH attempts and write them to a file. Then I edited the Wazuh agent config <code>sudo nano /Library/Ossec/etc/ossec.conf</code> and added <code>syslog /tmp/ssh_activity.log</code>. After restarting the agent, failed SSH attempts appeared in the dashboard.
                  </p>
                </div>
              </div>

              {/* Active Response */}
              <div id="response" className="scroll-mt-20 md:scroll-mt-24">
                <h2 className="text-2xl mb-4">
                  Active Response Development
                </h2>

                <p className="text-gray-300 leading-relaxed text-base max-w-3xl mb-6">
                  I learned how Wazuh executes scripts through testing and iteration. Wazuh passes alert data to scripts as JSON, scripts must handle both add and delete commands, the attacker’s IP must be extracted from the alert, and firewall rules must be added and removed safely.
                </p>

                <p className="text-gray-300 leading-relaxed text-base max-w-3xl mb-6">
                  Implementing my own script, I wrote a Python script that blocks the attacker using iptables, logs the action, and removes the block when Wazuh sends a delete command. For this project Wazuh automatically sends a delete command after 90 seconds. In reality it would almost never be configured to automatically allow access again. This required multiple refinements to get right.
                </p>
              </div>

              {/* Final System */}
              <div id="final" className="scroll-mt-20 md:scroll-mt-24">
                <h2 className="text-2xl mb-4">
                  Final System
                </h2>

                <p className="project-p">
                  The final system works as follows: Hydra launches a brute‑force SSH attack. Wazuh detects the repeated failures and triggers Rule 5763. Wazuh sends an active response command. The Python script blocks the attacker’s IP using iptables. The attack stops immediately. After the alert expires, the script removes the firewall rule. The pipeline is:
                  <br />
                  Kali (Attacker) → Ubuntu Agent → Wazuh Server → Wazuh Indexer → Dashboard.
                  <br />
                  This completes the full detection‑to‑response pipeline.
                </p>
              </div>

              {/* Lessons */}
              <div id="lessons" className="scroll-mt-20 md:scroll-mt-24">
                <h2 className="text-2xl mb-4">
                  Lessons
                </h2>

                <p className="project-p">
                  This project was more about the learning process than the final implementation. I learned more about SIEM systems, rule behavior, active response mechanics, firewall interactions, and configuration. I learned the importance of version compatibility and agent communication with the server.
                </p>

                <p className="project-p">
                  The final solution demonstrates my problem‑solving journey. The iterative process reflects real‑world security engineering, where understanding emerges through experimentation, testing, and refinement.
                </p>
              </div>

              {/* Improvements */}
              <div id="improvements" className="scroll-mt-20 md:scroll-mt-24">
                <h2 className="text-2xl mb-4">
                  Improvements
                </h2>

                <p className="project-p">
                  Looking toward the future, there are things I would like to improve. At the time I completed this project, there were minor things I did not fully understand. Going forward, I want to take full advantage of the SIEM and XDR capabilities that Wazuh supports. I want to expand beyond brute‑force attacks and explore other vulnerabilities and detection scenarios.
                </p>
              </div>

              {/* Conclusion */}
              <div id="conclusion" className="scroll-mt-20 md:scroll-mt-24">
                <h2 className="text-2xl mb-4">
                  Conclusion
                </h2>

                <p className="project-p">
                  This project provided experience with SIEM operations, log analysis, rule‑based detection, and automated response. The process involved significant troubleshooting, but each challenge contributed to a deeper understanding of how a SIEM detects and responds to real brute‑force attacks.
                </p>
              </div>

              {/* Demo */}
              <div id="demo" className="scroll-mt-20 md:scroll-mt-24">
                <h2 className="text-2xl mb-4">
                  Demo
                </h2>

                <p className="project-p">
                  To showcase the full detection and response workflow, I created a presentation and recorded a demonstration walking through the attack simulation, Wazuh alerting, and the automated firewall response in action. This video highlights the real‑time behavior of the system, providing a clear visual representation of how each component interacts. A PDF of the accompanying presentation is also included for additional context.
                </p>

                {/* Video */}
                <div className="mb-6">
                  <video src="/demo.mp4" className="w-full max-w-3xl mx-auto rounded-lg border border-(--border)" controls muted preload="metadata"></video>
                </div>

                {/* PDF */}
                <div className="w-full max-w-3xl mx-auto mb-6 text-transparent bg-clip-text bg-(--accent) text-center">
                  <a href="/presentation.pdf" target="_blank" className="inline-block px-6 py-3 border border-(--border) hover:border-(--accent-border) hover:bg-(--accent-bg) cursor-target font-display transition duration-400">
                    Open PDF
                  </a>
                </div>
              </div>

              {/* Back to Projects */}
              <section className="px-10 pb-32 flex justify-center">
                <button
                  onClick={() => navigate("/projects")}
                  className="inline-flex items-center gap-2 bg-(--accent-bg) text-(--accent) border px-6 py-3 rounded-xl font-display text-lg transition cursor-target cursor-none hover:text-(--text-h)"
                >
                  <VscChevronLeft className="text-2xl" />
                  Back to Projects
                </button>
              </section>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}          
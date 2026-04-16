import Grainient from "../components/Grainient";
import Beams from "../components/Beams";
import ProjectNav from "../components/ProjectNav";
import { VscChevronLeft } from "react-icons/vsc"

const azureNav = [
  { label: "Objective", href: "objective" },
  { label: "Architecture", href: "architecture" },
  { label: "Deployment", href: "deployment" },
  { label: "Data", href: "data_collection" },
  { label: "Attacks", href: "attack_telemetry" },
  { label: "KQL", href: "threats" },
  { label: "Findings", href: "findings" },
  { label: "Analysis", href: "analysis" },
  { label: "Skills", href: "skills" },
  { label: "Conclusion", href: "conclusion" },
];

export default function Azure() {

  return (
    <>
      {/* Background */}
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

      {/* Page Wrapper */}
      <div className="overflow-x-hidden">

        {/* Reusable Navbar */}
        <ProjectNav items={azureNav} />

        {/* Prevent overlap with fixed navbar */}
        <div className="pt-24 md:pt-32">

          {/* Hero Section */}
          <section
            id="azure-hero"
            // className="relative flex items-center ml-0 px-10 py-32"
            className="mt-10 mb-32 px-2 mx-6"
          >
            <div className="max-w-3xl mx-auto text-center font-sans">
              <div className="text-(--text-h)">
                <h1 className="text-4xl md:text-6xl font-display">
                  Azure Honeypot Deployment
                </h1>

                <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto font-sans">
                  A cloud-based honeypot integrated with Microsoft Sentinel to capture, analyze, and visualize real-world attack traffic.
                </p>

                <div className="flex flex-wrap justify-center gap-3 mt-6 font-sans">
                  <span className="text-xs px-3 py-1 bg-(--accent-bg) text-(--accent) rounded-full">
                    Case Study
                  </span>
                  <span className="text-xs px-3 py-1 bg-(--social-bg) rounded">Azure</span>
                  <span className="text-xs px-3 py-1 bg-(--social-bg) rounded">Sentinel</span>
                  <span className="text-xs px-3 py-1 bg-(--social-bg) rounded">KQL</span>
                  <span className="text-xs px-3 py-1 bg-(--social-bg) rounded">Networking</span>
                </div>
              </div>
            </div>
          </section>

          {/* Divider */}
          <div className="ml-0 w-full h-px bg-(--border) mb-20"></div>

          {/* Documentation Sections */}
          <section
            id="documentation"
            className="ml-0 px-10 space-y-20"
          >
            <div className="max-w-3xl mx-auto text-left font-sans">

              {/* Overview */}
              <div id="overview" className="scroll-mt-20 md:scroll-mt-24">
                <h2 className="text-3xl mb-4">
                  Overview
                </h2>

                <p className="project-p">
                  To deepen my understanding of cybersecurity, I decided to build a honeypot utilizing Microsoft Azure. Inspired by a video by Josh Makador, titled Cyber Home Lab. The overall objective was to create a cloud system and expose a vulnerable virtual machine to the internet then plot where the attacks came from. This would demonstrate how dangerous it can be to misconfigure a system, show where attacks come from, and show the process of creating a simple cloud architecture. This case study documents the architecture, methods used, and insights gained throughout the development process.
                </p>
              </div>

              {/* Objective */}
              <div id="objective" className="scroll-mt-20 md:scroll-mt-24">
                <h2 className="text-2xl mb-4">
                  Objectives & Scope
                </h2>

                <p className="project-p">
                  The scope of the project focused on exposing a VM and collecting the attacker’s data. This data would then be used to further understand brute force attacks. While a SIEM (security information and event management) system may be configured to respond automatically to these attacks this project does not include those capabilities. The primary objective was observation, data collection, and threat analysis of brute force attacks.
                </p>
              </div>

              {/* Architecture */}
              <div id="architecture" className="scroll-mt-20 md:scroll-mt-24">
                <h2 className="text-2xl mb-4">
                  Architecture & Network Topology
                </h2>

                <p className="project-p">
                  The honeypot was deployed within a dedicated Azure group with a virtual network that safely exposed the endpoint to the internet while maintaining full visibility into attack activity. The system architecture consisted of the following components:
                </p>

                <ul className="space-y-6 text-(--text) leading-relaxed text-base max-w-3xl mb-6">
                  <li>
                    <h4 className="">Virtual Machine (CORP-NET-EAST-1)</h4>
                    <ul className="ml-10 mt-2 list-disc">
                      <li>
                        <p className="project-p">
                          A windows host that was poorly configured with open ports and protocols to attract brute force attacks and automated bots.
                        </p>
                        <p className="project-p">

                        </p>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <h4 className="">Network Interface (corp-net-east-1894_z1)</h4>
                    <ul className="ml-10 mt-2 list-disc">
                      <li>
                        <p className="project-p">
                          The network interface card of the VM which is responsible for routing and linking traffic between the host to the public IP address and the network security group.
                        </p>

                      </li>
                    </ul>
                  </li>

                  <li>
                    <h4 className="">Public IP Address (CORP-NET-EAST-1-ip)</h4>
                    <ul className="ml-10 mt-2 list-disc">
                      <li>
                        <p className="project-p">
                          This provided the VM with access to the internet allowing attackers to target the honeypot.
                        </p>

                      </li>
                    </ul>
                  </li>

                  <li>
                    <h4 className="">Network Security Group (CORP-NET-EAST-1-nsg)</h4>
                    <ul className="ml-10 mt-2 list-disc">
                      <li>
                        <p className="project-p">
                          The network security group or NSG acted as a firewall. An inbound rule was configured to allow all traffic to any protocol using any port while the outbound rules remained with default settings.
                        </p>

                      </li>
                    </ul>
                  </li>

                  <li>
                    <h4 className="">Azure Monitor & Log Analytics Workspace (LAW-SOC-LAB)</h4>
                    <ul className="ml-10 mt-2 list-disc">
                      <li>
                        <p className="project-p">
                          Log analytics workspace or LAW served as the central logging pipeline. Collecting data from the VM, NSG, Defender, and other azure resources.
                        </p>

                      </li>
                    </ul>
                  </li>

                  <li>
                    <h4 className="">Microsoft Sentinel</h4>
                    <ul className="ml-10 mt-2 list-disc">
                      <li>
                        <p className="project-p">
                          Sentinel served as the SIEM or security information and event management system. It ultimately provided dashboard, analytics rules, incident correlation, and KQL (Kusto Query Language) based capabilities.
                        </p>
                      </li>
                    </ul>
                  </li>
                </ul>

                <div className="relative w-full max-w-3xl mx-auto my-12">
                  <img src="/vnet_topo.png" alt="vnet" className="w-full rounded-lg" />
                  <div className="absolute inset-0 bg-neutral-950/30 rounded-lg"></div>
                </div>
              </div>

              {/* Deployment */}
              <div id="deployment" className="scroll-mt-20 md:scroll-mt-24">
                <h2 className="text-2xl mb-4">
                  Deployment Process
                </h2>

                <p className="project-p">
                  To serve as a folder for all the components I started by creating a resource group, all of the components would later be added to this group. To start a virtual network, vnet-soc-lab, was configured using its default subnet. To further increase accessibility to the machine, all windows defender firewall rules within the VM were disabled allowing all attackers to reach the host VM with no resistance.
                </p>
                <p className="project-p">
                  The VM was then created using a windows 11 image and a standard HDD. The VM was then attached to the virtual network, assigned a network interface and public IP address essentially connecting it to the internet.
                </p>
                <p className="project-p">
                  After the VM was connected to the vnet the network security group, COPR-NET-EAST-1-nsg, was configured. This configuration allowed unrestricted access to the VM as an inbound rule was made to allow all traffic through all protocols and all ports.
                </p>
                <p className="project-p">
                  With the network now configured diagnostic logging was enabled and connected to the VMs log analytics workspace, LAW-SOC-LAB. This allowed Azure monitor, defender and sentinel to begin accepting security events, logs, and other data for analysis.
                </p>
              </div>

              {/* Data Collection and Setup */}
              <div id="data_collection" className="scroll-mt-20 md:scroll-mt-24">
                <h2 className="text-2xl mb-4">
                  Data Collection & Monitoring Setup
                </h2>

                <p className="project-p">
                  Now that the honeypot had been exposed to the public internet the next steps required the configuration of the monitoring and data collection pipeline. This started with the log analytics workspace which served as the repository for all security data.
                </p>
                <p className="project-p">
                  The VM was connected to the workspace enabling Windows Security Events and creating a data collection rule to ensure security related activities were forwarded. Once connected, an instance of sentinel was deployed on top of the workspace, adding analytics rules, incident correlation and KQL capabilities.
                </p>
                <p className="project-p">
                  With sentinel up and running I could begin querying data using KQL tables and KQL code such as SecurityEvents to observe different security events.
                </p>
                <p className="project-p">
                  To implement geolocation analysis, I used a geoip watchlist within the workspace. This watchlist contained IP addresses mapped to their corresponding geographic locations, (city, country, latitude, longitude). Combining this watchlist with attacker IPs in KQL, I was able to enrich raw the logs with geographic information.
                </p>
                <p className="project-p">
                  Finally, a sentinel workbook named Attack Map was implemented using JSON, KQL, and the geoip watchlist. This workbook plotted the attacking IP addresses on an interactive world map. This provided a visual representation of the volume and distribution of the brute force attempts targeted at the honeypot.
                </p>
              </div>

              {/* Attacks */}
              <div id="attack_telemetry" className="scroll-mt-20 md:scroll-mt-24">
                <h2 className="text-2xl mb-4">
                  Attack Telemetry
                </h2>

                <div>
                  <h4 className="text-2xl mb-4">
                    24 Hour Attack Map
                  </h4>
                  <p className="project-p">
                    After configuration and deployment, it was time to gather data and map the attacks. The attacks did not start immediately as they took a little bit of time but after 24 hours there was enough data to map the attacks. Within the first 24 hours the honeypot recorded a large number of attacks. The sentinel successfully mapped the attacking IP addresses to their respective location.
                  </p>
                  <p className="project-p">
                    The majority of the attacks came from Europe more specifically Poland logging close to 30,000 and the Netherlands with 16,000 attacks. The vast majority of these attacks were from automated bots due to the volume and scale of attacks. The first 24 hours highlighted both the scale and geographic distribution of early activity.
                  </p>
                </div>

                <div className="relative w-full max-w-3xl mx-auto my-12">
                  <img src="/attack_day.png" alt="vnet" className="w-full rounded-lg" />

                  <div className="absolute inset-0 bg-neutral-950/30 rounded-lg"></div>
                </div>

                <div>
                  <h4 className="text-2xl mb-4">
                    1-Week Attack Map
                  </h4>
                  <p className="project-p">
                    After a week of remaining online the volume and spread of the attacks only increased. Poland continued to contribute to the highest number of attacks with the total rising to approximately 67,500 attacks. This shows sustained automated activity from the same region observed during the first 24 hours
                  </p>
                  <p className="project-p">
                    Compared to the first 24 hours there was a large increase in attacks originating from the Americas, which early on only contributed very little. This may suggest that different botnets begin only once a system has been online for an increased amount of time.
                  </p>
                  <p className="project-p">
                    One interesting observation is the minimal activity originating from Africa. While this does not imply a lack of cybersecurity threats from the region, it aligns with common global attack traffic patterns that many large scale brute force campaigns are operated from within Europe, Asia, and the Americas.
                  </p>
                  <p className="project-p">
                    This one week map provided a clearer picture into the long term attack patterns. Showing how exposure time correlates with both the volume and diversity of global threats. Suggesting that some botnets wait for a period of time to begin an attack, whether this be a tactic or rather the bot takes its time to find a vulnerable machine. It also suggests that some bots stop all attacks after a certain number of attempts as Taiwan reports the same number of attacks between 24 hours and one week.
                  </p>
                </div>

                <div className="relative w-full max-w-3xl mx-auto my-12">
                  <img src="/attack_week.png" alt="vnet" className="w-full rounded-lg" />

                  <div className="absolute inset-0 bg-neutral-950/30 rounded-lg"></div>
                </div>
              </div>

              {/* KQL and threats */}
              <div id="threats" className="scroll-mt-20 md:scroll-mt-24">
                <h2 className="text-2xl mb-4">
                  Threat Hunting & KQL Queries
                </h2>
                <p className="project-p">
                  To analyze attacker behavior and enrich failed login events with geographic data, I used the following KQL query within Microsoft Sentinel:
                </p>

                <pre className="text-white p-5 rounded-xl font-mono text-sm leading-relaxed whitespace-pre-wrap wrap-break-words">
                  <code>{`
set query_take_max_records=10001;
set truncationmaxsize=67108864;
let GeoIPDB_FULL = _GetWatchlist("geoip");
let WindowsEvents = SecurityEvent;
WindowsEvents
| where EventID == 4625
| order by TimeGenerated desc
| evaluate ipv4_lookup(GeoIPDB_FULL, IpAddress, network)
| summarize FailureCount = count() by IpAddress, latitude, longitude, cityname, countryname
| project
    FailureCount,
    AttackerIp = IpAddress,
    latitude,
    longitude,
    city = cityname,
    country = countryname,
    friendly_location = strcat(cityname, " (", countryname, ")");
    `}
                  </code>
                </pre>

                <p className="project-p">
                  The VM was connected to the workspace enabling Windows Security Events and creating a data collection rule to ensure security related activities were forwarded. Once connected, an instance of sentinel was deployed on top of the workspace, adding analytics rules, incident correlation and KQL capabilities.
                </p>
                <p className="project-p">
                  With sentinel up and running I could begin querying data using KQL tables and KQL code such as SecurityEvents to observe different security events.
                </p>
                <p className="project-p">
                  To implement geolocation analysis, I used a geoip watchlist within the workspace. This watchlist contained IP addresses mapped to their corresponding geographic locations, (city, country, latitude, longitude). Combining this watchlist with attacker IPs in KQL, I was able to enrich raw the logs with geographic information.
                </p>
                <p className="project-p">
                  Finally, a sentinel workbook named Attack Map was implemented using JSON, KQL, and the geoip watchlist. This workbook plotted the attacking IP addresses on an interactive world map. This provided a visual representation of the volume and distribution of the brute force attempts targeted at the honeypot.
                </p>

                <h4 className="text-2xl mb-4">
                  Explanation of the Query
                </h4>
                <p className="project-p">
                  This query performs several functions:
                </p>

                <ul className="space-y-6 text-(--text) leading-relaxed text-base max-w-3xl mb-6">
                  <li>
                    <h4 className="">Increasing Query Limits</h4>
                    <ul className="ml-10 mt-2 list-disc">
                      <li>
                        <p className="project-p">
                          The first two lines raise the maximum number of records and output size the query can return. Ensuring large volumes of attack attempts are not truncated or shortened.
                        </p>

                      </li>
                    </ul>
                  </li>

                  <li>
                    <h4 className="">Load the geoip Watchlist</h4>
                    <ul className="ml-10 mt-2 list-disc">
                      <li>
                        <p className="project-p">
                          A watchlist named geoip is loaded into memory and this file contains IP addresses mapped to locations (latitude, longitude, city, and country). It is used to enhance the attacker’s data with their location.
                        </p>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <h4 className="">Select Windows Security Events</h4>
                    <ul className="ml-10 mt-2 list-disc">
                      <li>
                        <p className="project-p">
                          The SecurityEvent table is aliased as WindowsEvents for readability. This table contains all Windows event logs collected from the VM.
                        </p>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <h4 className="">Filter for Failed Login Attempts</h4>
                    <ul className="ml-10 mt-2 list-disc">
                      <li>
                        <p className="project-p">
                          The query filters the SecurityEvent table for Event ID 4625, which is failed ssh login attempts.
                        </p>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <h4 className="">Sort by Time</h4>
                    <ul className="ml-10 mt-2 list-disc">
                      <li>
                        <p className="project-p">
                          Events are ordered from newest to oldest to prioritize recent activity.
                        </p>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <h4 className="">Perform Geo IP Lookup</h4>
                    <ul className="ml-10 mt-2 list-disc">
                      <li>
                        <p className="project-p">
                          The ipv4_lookup() function matches each attacker IP address against the geoip watchlist with geographic attributes such as:
                        </p>

                        <ul className="ml-14 list-disc mt-2">
                          <li>latitude</li>
                          <li>longitude</li>
                          <li>city</li>
                          <li>country</li>
                        </ul>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <h4 className="">Summarize Attacker Activity</h4>
                    <ul className="ml-10 mt-2 list-disc">
                      <li>
                        <p className="project-p">
                          The query groups events by attacker IP and location, then counts how many failed login attempts each IP generated.
                        </p>

                      </li>
                    </ul>
                  </li>

                  <li>
                    <h4 className="">Format the Output</h4>
                    <ul className="ml-10 mt-2 list-disc">
                      <li>
                        <p className="project-p">
                          The final project statement cleans up the output by renaming fields and creating a friendly_location string for use in the Attack Map workbook.
                        </p>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>


              {/* Findings */}
              <div id="findings" className="scroll-mt-20 md:scroll-mt-24">
                <h2 className="text-2xl mb-4">
                  Findings
                </h2>

                <p className="project-p">
                  The primary objective of the attackers was to gain remote access to the VM most commonly through SSH or RDP. With the end goal to obtain privileges they were not authorized to have. The most frequent attempted usernames were “Admin” and “User” which aligns with common brute force patterns. Targeting default or high privilege accounts.
                </p>
                <p className="project-p">
                  While I find it amusing to imagine a single individual in Poland manually attempting more than 60,000 logins, the data suggests these attacks were automated. The sheer volume and speed of the attempts indicate the use of botnets as opposed to human activity. This is typical of brute force attacks that use bots to constantly scan the internet for vulnerable systems.
                </p>
              </div>

              {/* Analysis and improvements */}
              <div id="analysis" className="scroll-mt-20 md:scroll-mt-24">
                <h2 className="text-2xl mb-4">
                  Analysis
                </h2>

                <p className="project-p">
                  The primary goal of this project was to deploy and expose a system in order to get real data and map attacker behavior. Leaving a system in this state would be very detrimental to any organization and present serious risks. While honeypots can be useful for research or diverting attackers, the majority of the attacks observed in this project were automated. Meaning that a honeypot will only redirect bots to a different possible vulnerability.
                </p>
                <p className="project-p">
                  In the real world no system should ever be exposed with all protocols and ports open. Proper safety measures such as restricting inbound traffic with an allow and block list, enabling firewall, and applying least privilege principles are essential to minimize the attack surface. This project highlighted how quickly an exposed system is targeted, further reinforcing the importance of secure configurations and constant monitoring.
                </p>
              </div>

              {/* Skills demonstrated */}
              <div id="skills" className="scroll-mt-20 md:scroll-mt-24">
                <h2 className="text-2xl mb-4">
                  Skills Demonstrated
                </h2>

                <p className="project-p">
                  This project strengthened my understanding of several core cybersecurity concepts. I gained hands on experience deploying and managing resources in Microsoft Azure. Resources include virtual networks, virtual machines, network security groups, and logging infrastructure. Working with Microsoft Sentinel allowed me to further explore SIEM operations, build workbooks, and parse data using KQL.
                </p>
                <p className="project-p">
                  Experimenting with KQL deepened my ability to query and filter data. The network topology reinforced concepts I learned in my computer networks course. Overall, this project helped bridge academic knowledge with practical security skills.
                </p>
              </div>

              {/* Conclusion */}
              <div id="conclusion" className="scroll-mt-20 md:scroll-mt-24">
                <h2 className="text-2xl mb-4">
                  Conclusion
                </h2>

                <p className="project-p">
                  This project reinforced the importance of proper firewall configuration and secure design. Seeing tens of thousands of attacks within such a small timeframe was a powerful reminder of how quickly an exposed system is attacked. It highlighted the risks organizations face when misconfigurations or vulnerable services are left accessible.
                </p>
                <p className="project-p">
                  Working through this lab improved my cybersecurity skill by giving me hands on experience with Azure security controls, firewall rule management, SIEM configuration and KQL threat hunting. I gained a deeper understanding of how attackers and automated brute force attacks operate. It also reinforced how important monitoring and logging are for detecting such activities for further analysis.
                </p>
                <p className="project-p">
                  In the future I plan to expand this project by enabling active response within the SIEM. This would include automated alerts or active response. I would like to deploy additional VMs including one intentionally configured with weak credential to observe what attackers do after gaining access. This would provide insight into post exploitation behaviors, further enhancing my understanding of real-world attacks.
                </p>
              </div>

              {/* Back to Projects */}
              <section className="px-10 pb-32 flex justify-center">
                <a href="/projects" className="inline-flex items-center gap-2 bg-(--accent-bg) text-(--accent) border px-6 py-3 rounded-xl font-display text-lg transition cursor-target cursor-none hover:text-(--text-h)">
                  <VscChevronLeft className="text-2xl" />
                  Back to Projects
                </a>
              </section>
            </div>
          </section>
        </div>
      </div>

    </>
  );
}          
import React from "react";
import "../styles/Experience.css";

const experiences = [
  {
    title: "Senior Software Engineer",
    company: "Octobot(now Sparq)",
    companyUrl: "https://www.teamsparq.com",
    location: "Remote (Uruguay)",
    type: "Remote",
    period: "08/2022 - 12/2025",
    duration: "3 yrs 5 mos",
    responsibilities: [
      "Led the design and development of scalable web and mobile-first applications using React, Next.js, and Node.js",
      "Architected and maintained backend services with REST and GraphQL APIs following domain-driven design principles",
      "Integrated AI-powered features (LLM-based assistants, intelligent automation, data-driven insights) into existing products",
      "Optimized frontend performance using SSR/SSG, dynamic imports, and reusable UI components, significantly improving Core Web Vitals",
      "Collaborated closely with product managers, designers, and DevOps engineers in a fully remote environment",
      "Mentored engineers through code reviews, architectural guidance, and best practices for testable, maintainable code",
    ],
    skills: [],
    logoImage: "/image/company/octobot(now sparq).png",
  },
  {
    title: "Mid-Senior FullStack Developer",
    company: "WeAreBrain",
    companyUrl: "https://www.wearebrain.com/",
    location: "Remote (Netherlands)",
    type: "Remote",
    period: "08/2019 - 7/2022",
    duration: "3 yrs",
    responsibilities: [
      "Built and maintained full-cycle web applications using Node.js, TypeScript, React, and Vue.js with RESTful APIs and real-time features via Socket.io",
      "Designed and consumed RESTful APIs, integrated third-party services, and implemented secure authentication flows using JWT and encrypted sessions",
      "Worked extensively with relational databases, performing schema migrations and performance tuning for MySQL and PostgreSQL",
      "Introduced modular architectures and reusable components, improving maintainability and delivery speed",
      "Participated in agile development cycles, translating business requirements into scalable technical solutions",
    ],
    skills: [
      "XRP Ledger",
      "XUMM",
      "WalletConnect",
      "Matrix",
      "Synapse",
      "AdonisJS",
      "TypeScript",
      "Node.js",
      "Next.js",
      "React",
      "Socket.io",
      "Twilio",
      "MySQL",
      "PostgreSQL",
      "Redis",
      "Docker",
      "AWS EC2",
      "Tailwind CSS",
      "Radix UI",
    ],
    logoImage: "/image/company/wearebrain.png",
  },
  {
    title: "Fullstack Developer",
    company: "Netinteractive",
    companyUrl: "https://netinteractive.co/",
    location: "Warsaw, Poland",
    type: "On-site",
    period: "07/2017 - 7/2019",
    duration: "2 yrs 1 mo",
    responsibilities: [
      "Developed responsive, high-performance frontend applications with React and Vue.js, ensuring cross-browser compatibility and accessibility",
      "Collaborated with backend teams to integrate APIs and optimize end-user workflows",
      "Delivered reusable UI components and improved frontend performance across multiple client projects",
    ],
    skills: [
      "Vue.js",
      "Vue 2",
      "Vue 3",
      "Vuex",
      "Pinia",
      "BootstrapVue",
      "PrimeVue",
      "Node.js",
      "Express",
      "MySQL",
      "Sequelize",
      "AWS",
      "EC2",
      "RDS",
      "S3",
      "CloudFront",
      "Cognito",
      "Lambda",
      "API Gateway",
      "Docker",
      "Stable Diffusion",
      "Go",
      "ElasticSearch",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
    ],
    logoImage: "/image/company/netinteractive.png",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="card">
      <div className="card-content">
        <div className="section-header">
          <h2 className="section-title">Experience</h2>
        </div>

        <div className="experience-list">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item">
              <a
                href={exp.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="experience-logo"
              >
                <img
                  src={exp.logoImage}
                  alt={`${exp.company} logo`}
                  className="company-logo-img"
                />
              </a>
              <div className="experience-content">
                <h3 className="experience-title">{exp.title}</h3>
                <p className="experience-company">{exp.company}</p>
                <p className="experience-meta">{exp.period}</p>
                <p className="experience-location">{exp.location}</p>
                {/* <ul className="experience-responsibilities">
                  {exp.responsibilities.map((responsibility, idx) => (
                    <li key={idx} className="responsibility-item">{responsibility}</li>
                  ))}
                </ul> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

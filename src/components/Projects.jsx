import React from "react";
import "../styles/Projects.css";

const Projects = () => {
  const projects = [
    {
      id: 9,
      name: "Cuberto",
      liveUrl: "https://cuberto.com/",
      sourceUrl: "https://github.com/claudenes-santos/cuberto",
      thumbnail: "/image/projects/1.jpg",
      tagline:
        "Cuberto is a digital design and technology partner crafting delightful UX/UI, motion, and AI‑enhanced products.",
      duration: "Live Platform",
      technologies: [
        "Product Design",
        "UX/UI",
        "Motion Design",
        "Brand Identity",
        "AI‑enhanced UX",
        "Custom Development",
      ],
    },
    {
      id: 1,
      name: "NexusTrade",
      liveUrl: "https://nexustrade.io/",
      sourceUrl: "https://github.com/claudenes-santos/NextTrade",
      thumbnail: "/image/projects/2.jpg",
      tagline:
        "NexusTrade uses AI agents to research markets, backtest strategies, and deploy automated trading portfolios.",
      duration: "Live Platform",
      technologies: [
        "AI Trading Agents",
        "Market Research",
        "Strategy Backtesting",
        "Portfolio Optimization",
        "Automated Trading",
        "No-code Strategy Builder",
      ],
    },

    {
      id: 13,
      name: "Artist Growth",
      liveUrl: "https://www.artistgrowth.com/",
      sourceUrl: "https://github.com/claudenes-santos/artistGrowth",
      thumbnail: "/image/projects/3.jpg",
      tagline:
        "Artist Growth provides work intelligence for music teams with roster, project, event, and ticket management in one hub.",
      duration: "Live Platform",
      technologies: [
        "Work Intelligence",
        "Roster Management",
        "Project Management",
        "Event Management",
        "Ticketing",
        "Integrations",
        "Analytics",
      ],
    },
    {
      id: 8,
      name: "Coldi.ai-Multi-Tenant-Web-Application",
      liveUrl: "https://coldi.ai/",
      sourceUrl:
        "https://github.com/claudenes-santos/Coldi.ai-Multi-Tenant-Web-Application",
      thumbnail: "/image/projects/4.jpg",
      tagline:
        "Coldi.ai delivers brand-tuned AI talkers for real-time voice conversations, testing, analytics, and usage-based billing.",
      duration: "Live Platform",
      technologies: [
        "AI Voice Agents",
        "Real-time Calling",
        "Conversation Analytics",
        "Bot Testing",
        "Usage Billing",
        "Multi-tenant Platform",
      ],
    },

    {
      id: 11,
      name: "Events Smarter",
      liveUrl: "https://www.eventssmarter.com/",
      sourceUrl: "https://github.com/claudenes-santos/EventSmart",
      thumbnail: "/image/projects/5.jpg",
      tagline:
        "Events Smarter helps you discover, host, stream, and monetize events with built-in ticketing and merch.",
      duration: "Live Platform",
      technologies: [
        "Event Discovery",
        "Ticketing",
        "Live Streaming",
        "Monetization",
        "Merchandising",
        "Event Categories",
      ],
    },
    // {
    //   id: 10,
    //   name: "Refine",
    //   liveUrl: "https://refine.dev/",
    //   sourceUrl: "https://github.com/miraclesprime/foodify-tai",
    //   thumbnail: "/image/projects/6.jpg",
    //   tagline:
    //     "Refine turns your APIs into production‑grade internal apps with AI planning, previews, and deployment.",
    //   duration: "Live Platform",
    //   technologies: [
    //     "AI App Builder",
    //     "Internal Tools",
    //     "React-based Apps",
    //     "Data Integration",
    //     "Web IDE",
    //     "Self-hosting",
    //   ],
    // },
    {
      id: 7,
      name: "here. psychology",
      liveUrl: "https://behere.co/",
      sourceUrl: "https://github.com/claudenes-santos/BeHere",
      thumbnail: "/image/projects/7.jpg",
      tagline:
        "here. psychology helps you slow down with mindful telehealth, studio, and outdoor sessions for wellbeing.",
      duration: "Live Platform",
      technologies: [
        "Mental Wellbeing",
        "Telehealth Sessions",
        "In-studio Therapy",
        "Outdoor Walk Sessions",
        "Mindfulness",
        "Psychologists",
      ],
    },
    // {
    //   id: 5,
    //   name: "Seekadoo",
    //   liveUrl: "https://seekadoo.com/promotions/latest",
    //   sourceUrl: "https://github.com/miraclesprime/kleva-handbags",
    //   thumbnail: "/image/projects/8.jpg",
    //   tagline:
    //     "Seekadoo Safe Search provides ad‑free, curated web results for kids with parent‑approved content.",
    //   duration: "Live Platform",
    //   technologies: [
    //     "Safe Search",
    //     "Ad-free Results",
    //     "Curated Websites",
    //     "Kids Safety",
    //     "Parental Trust",
    //     "Subscriptions",
    //   ],
    // },
    {
      id: 6,
      name: "Campo alle Comete",
      liveUrl: "https://www.campoallecomete.it/",
      sourceUrl: "https://github.com/claudenes-santos/campoal-landing",
      thumbnail: "/image/projects/9.jpg",
      tagline:
        "Campo alle Comete: A place above the world, floating and timeless - premium wine estate experience.",
      duration: "Live Platform",
      technologies: [
        "E-commerce",
        "Wine Estate",
        "Premium Branding",
        "Digital Experience",
        "Cookie Policy",
        "User Experience",
      ],
    },
    {
      id: 11,
      name: "EagleBurgmann",
      liveUrl: "https://www.eagleburgmann.com.au/",
      sourceUrl: "https://github.com/claudenes-santos/eagleburgmann",
      thumbnail: "/image/projects/10.jpg",
      tagline:
        "EagleBurgmann: Leading provider of industrial sealing technology with mechanical seals, supply systems, and zero-emission solutions.",
      duration: "Live Platform",
      technologies: [
        "Industrial Sealing",
        "Mechanical Seals",
        "Supply Systems",
        "Pharma Solutions",
        "Zero Emission Tech",
        "ISO 9001 Certified",
      ],
    },

    {
      id: 2,
      name: "Thorn Lighting",
      liveUrl: "https://www.thornlighting.com.au/en-au",
      sourceUrl: "https://github.com/claudenes-santos/liam-thornton",
      thumbnail: "/image/projects/11.jpg",
      tagline:
        "Thorn Lighting: Expert lighting solutions for indoor, outdoor, controls, and emergency systems with THORNeco economical LED range.",
      duration: "Live Platform",
      technologies: [
        "Lighting Solutions",
        "Indoor Lighting",
        "Outdoor Lighting",
        "Emergency Systems",
        "LED Technology",
        "Controls",
      ],
    },
    {
      id: 12,
      name: "Network After Work",
      liveUrl: "https://networkafterwork.com/",
      sourceUrl: "https://github.com/claudenes-santos/network-after-work",
      thumbnail: "/image/projects/12.jpg",
      tagline:
        "Network After Work: Weekly curated dinners fostering friendships and professional relationships since 2009 with 1M+ attendees.",
      duration: "Live Platform",
      technologies: [
        "Social Networking",
        "Event Management",
        "Membership Platform",
        "Community Building",
        "Professional Network",
        "Dinner Curation",
      ],
    },
    {
      id: 3,
      name: "Mintsa",
      liveUrl: "https://carrymintsa.com/",
      sourceUrl: "https://github.com/claudenes-santos/mintsalonspa",
      thumbnail: "/image/projects/13.jpg",
      tagline:
        "Mintsa: Handmade grandeur - luxury handcrafted clutches, bucket bags, and wedding accessories with unique artisan designs.",
      duration: "Live Platform",
      technologies: [
        "E-commerce",
        "Luxury Fashion",
        "Handcrafted Products",
        "Artisan Design",
        "Wedding Collections",
        "Exclusive Access",
      ],
    },
    {
      id: 4,
      name: "Comodo",
      liveUrl: "https://www.comodo.com/",
      sourceUrl: "https://github.com/claudenes-santos/Comodo",
      thumbnail: "/image/projects/14.jpg",
      tagline:
        "Comodo: Comprehensive website protection with malware scanning, CDN, WAF, DNS, and backup - all optimized for one price.",
      duration: "Live Platform",
      technologies: [
        "Website Security",
        "Malware Protection",
        "CDN",
        "Web Firewall (WAF)",
        "Premium DNS",
        "Automated Backup",
      ],
    },
  ];

  return (
    <section id="projects" className="card projects-section">
      <div className="card-content">
        <div className="section-header">
          <h2 className="section-title">Projects</h2>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={project.id} className="project-card">
              {/* Project Thumbnail */}
              <div className="project-thumbnail">
                <img
                  src={project.thumbnail}
                  alt={project.name}
                  className={`thumbnail-img${index === 3 ? " thumbnail-img--contain" : ""}`}
                />
                <div className="thumbnail-overlay">
                  <div className="project-links">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link live-demo"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
                      </svg>
                      Live Demo
                    </a>
                    <a
                      href={project.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link source-code"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
                      </svg>
                      Source Code
                    </a>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="project-info">
                <h3 className="project-name">{project.name}</h3>
                <p className="project-tagline">{project.tagline}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

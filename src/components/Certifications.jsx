import React from "react";
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import CloudOutlinedIcon from "@mui/icons-material/CloudOutlined";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import FlashOnOutlinedIcon from "@mui/icons-material/FlashOnOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import "../styles/Certifications.css";

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
      credentialUrl: "https://aws.amazon.com/certification/",
      icon: EmojiEventsOutlinedIcon,
    },
    {
      id: 2,
      title: "Google Cloud Professional Data Engineer",
      issuer: "Google Cloud",
      date: "2022",
      credentialUrl: "https://cloud.google.com/certification/",
      icon: CloudOutlinedIcon,
    },
    {
      id: 3,
      title: "Full Stack Web Development Bootcamp",
      issuer: "Udemy",
      date: "2020",
      credentialUrl: "https://www.udemy.com/",
      icon: CodeOutlinedIcon,
    },
    {
      id: 4,
      title: "Advanced JavaScript & React",
      issuer: "Frontend Masters",
      date: "2021",
      credentialUrl: "https://frontendmasters.com/",
      icon: FlashOnOutlinedIcon,
    },
    {
      id: 5,
      title: "Machine Learning Specialization",
      issuer: "Coursera",
      date: "2023",
      credentialUrl: "https://www.coursera.org/",
      icon: PsychologyOutlinedIcon,
    },
  ];

  return (
    <section id="certifications" className="card">
      <div className="card-content">
        <div className="section-header">
          <h2 className="section-title">Certifications</h2>
        </div>

        <div className="certifications-grid">
          {certifications.map((cert) => {
            const IconComponent = cert.icon;
            return (
              <a
                key={cert.id}
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="certification-card"
              >
                <div className="certification-icon">
                  <IconComponent />
                </div>
                <h3 className="certification-title">{cert.title}</h3>
                <p className="certification-issuer">{cert.issuer}</p>
                <p className="certification-date">{cert.date}</p>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certifications;

import React, { useState } from "react";
import "../styles/About.css";

const About = () => {
  const [expanded, setExpanded] = useState(true);

  const fullText = `Senior Software Engineer\n · clean code · real impact\nI love coding. For 9 years, I’ve been writing code, solving my own bugs, and enjoying that rewarding moment when everything finally works. I’d love to bring that experience into a collaboration and build something great together.`;

  const shortText = fullText.slice(0, 600);

  return (
    <section id="about" className="card">
      <div className="card-content">
        <div className="section-header">
          <h2 className="section-title">About</h2>
        </div>

        <div className="about-text">
          <p>{expanded ? fullText : `${shortText}...`}</p>
        </div>
      </div>
    </section>
  );
};

export default About;

import React from "react";
import "../styles/Skills.css";

const Skills = () => {
  return (
    <section id="skills" className="card">
      <div className="card-content">
        <div className="section-header">
          <h2 className="section-title">Technical Skills</h2>
        </div>
        <div className="skills-container">
          <div className="skill-category">
            <h3 className="skill-category-title">Core Languages</h3>
            <div className="skills-list">
              <div className="skill-item">
                Python, Java, Go, C#, JavaScript, TypeScript, PHP
              </div>
            </div>
          </div>
          <div className="skill-category">
            <h3 className="skill-category-title">Frontend Development</h3>
            <div className="skills-list">
              <div className="skill-item">
                React, Next.js, Vue.js, Nuxt.js, Angular (2+), Redux Toolkit
              </div>
              <div className="skill-item">
                HTML5, CSS3, Sass, Bootstrap, Tailwind CSS, Shadcn/ui
              </div>
            </div>
          </div>
          <div className="skill-category">
            <h3 className="skill-category-title">Backend Development</h3>
            <div className="skills-list">
              <div className="skill-item">Node.js, Express.js, NestJS</div>
              <div className="skill-item">Django, Flask, FastAPI</div>
              <div className="skill-item">Spring, Spring MVC, Spring Boot</div>
              <div className="skill-item">ASP.NET</div>
              <div className="skill-item">Laravel, Symfony</div>
              <div className="skill-item">
                REST API & GraphQL API development
              </div>
              <div className="skill-item">
                Authentication and microservices architecture
              </div>
            </div>
          </div>
          <div className="skill-category">
            <h3 className="skill-category-title">Databases & Caching</h3>
            <div className="skills-list">
              <div className="skill-item">
                PostgreSQL, MySQL, MS SQL Server, MongoDB
              </div>
              <div className="skill-item">Redis, Firebase</div>
            </div>
          </div>
          <div className="skill-category">
            <h3 className="skill-category-title">Cloud & DevOps</h3>
            <div className="skills-list">
              <div className="skill-item">AWS, Google Cloud (GCP), Azure</div>
              <div className="skill-item">Docker, CI/CD pipelines</div>
              <div className="skill-item">Cloudflare, Vercel, Netlify</div>
              <div className="skill-item">Linux server environments</div>
            </div>
          </div>
          <div className="skill-category">
            <h3 className="skill-category-title">Web3 & Blockchain</h3>
            <div className="skills-list">
              <div className="skill-item">
                Smart contract interaction, Web3.js, Ethers.js
              </div>
              <div className="skill-item">
                Wallet integration (MetaMask, WalletConnect)
              </div>
              <div className="skill-item">
                EVM-based networks, token interactions
              </div>
              <div className="skill-item">
                Blockchain data integration in web applications
              </div>
            </div>
          </div>
          <div className="skill-category">
            <h3 className="skill-category-title">AI & LLM Integration</h3>
            <div className="skills-list">
              <div className="skill-item">AI/ML service integration</div>
              <div className="skill-item">
                LLM APIs (OpenAI-style), prompt engineering
              </div>
              <div className="skill-item">
                Embeddings, retrieval workflows (RAG basics)
              </div>
              <div className="skill-item">
                Data preprocessing for AI pipelines
              </div>
            </div>
          </div>
          <div className="skill-category">
            <h3 className="skill-category-title">Tools & Testing</h3>
            <div className="skills-list">
              <div className="skill-item">GitHub, GitLab, Bitbucket</div>
              <div className="skill-item">NPM, Webpack, Vite</div>
              <div className="skill-item">Jest, Mocha, Cypress</div>
              <div className="skill-item">Figma, API testing tools</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

import { useState } from "react";
import "./App.css";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  const renderContent = () => {
    switch (activeSection) {

      case "education":
        return (
          <div className="card">
            <h2>Education</h2>

            <div className="section-block">
              <h3>Sri Dharmasthala Manjunatheshwara Polytechnic</h3>
              <p>
                Diploma in Computer Science and Engineering <br />
                Ujire, Karnataka
              </p>
            </div>

            <div className="section-block">
              <h3>Sahyadri College of Engineering and Management</h3>
              <p>
                B.E in Computer Science <br />
                Mangalore, Karnataka
              </p>
            </div>
          </div>
        );

      case "work":
        return (
          <div className="card">
            <h2>Work Experience</h2>

            <div className="section-block">
              <h3>Winsun Global Tech Pvt Ltd</h3>
              <ul>
                <li>Built responsive apps using React.js</li>
                <li>Improved website performance</li>
                <li>Worked with Node.js & MongoDB</li>
              </ul>
            </div>

            <div className="section-block">
              <h3>Zidio Development</h3>
              <ul>
                <li>Developed real-time web projects</li>
                <li>Improved JavaScript & frontend skills</li>
              </ul>
            </div>
          </div>
        );

      case "projects":
        return (
          <div className="card">
            <h2>Projects</h2>

            <div className="section-block">
              <h3>ClauseAI – AI Legal Document Analyzer</h3>
              <ul>
                <li>Summarizes complex legal documents</li>
                <li>Detects risky clauses</li>
                <li>Generates fairness score</li>
              </ul>
            </div>
          </div>
        );

     case "skills":
  return (
    <div className="card">
      <h2>Technical Expertise</h2>

      <div className="skills-category">
        <h3>Frontend Development</h3>
        <div className="skills-badges">
          <span>React.js</span>
          <span>JavaScript </span>
          <span>HTML5</span>
          
         
        </div>
      </div>

      <div className="skills-category">
        <h3>Backend Development</h3>
        <div className="skills-badges">
          <span>Node.js</span>
          <span>Express.js</span>
          <span>REST APIs</span>
          <span>MongoDB</span>
        </div>
      </div>

      <div className="skills-category">
        <h3>Programming & Tools</h3>
        <div className="skills-badges">
          <span>Python</span>
          <span>Git & GitHub</span>
          <span>VS Code</span>
          <span>Postman</span>
        </div>
      </div>

      <div className="skills-category">
        <h3>Core Concepts</h3>
        <div className="skills-badges">
          <span>Data Structures</span>
          <span>OOPS</span>
          <span>DBMS</span>
          <span>Problem Solving</span>
        </div>
      </div>

    </div>
  );

      

      case "contact":
        return (
          <div className="card">
            <h2>Contact Me</h2>

            <div className="contact-links">
              <a href="tel:+919019958310">📞 +91 9019958310</a>
              <a href="mailto:sushmitthas8310@gmail.com">
                📧 sushmitthas8310@gmail.com
              </a>
              <a
                href="https://github.com/SushmithaS05"
                target="_blank"
                rel="noopener noreferrer"
              >
                🔗 GitHub Profile
              </a>
              <a
                href="https://www.linkedin.com/in/sushmitha-shettigar-5a497b327"
                target="_blank"
                rel="noopener noreferrer"
              >
                🔗 LinkedIn Profile
              </a>
            </div>
          </div>
        );

      default:
        return (
          <div className="hero">
            <h1>Sushmitha S</h1>
            <h3>
              Computer Science Engineer 
            </h3>
            

<p>
  I am a forward-thinking Computer Science Engineer with a strong
  passion for designing scalable, efficient, and impactful software
  solutions. With hands-on experience in full-stack development and
  AI-driven applications, I focus on writing clean, maintainable code
  and creating seamless digital experiences.

  My goal is to leverage technology to solve real-world problems,
  continuously evolve my technical expertise, and contribute to
  innovative projects that make a meaningful difference.
</p>

          </div>
        );
    }
  };

  return (
    <div className="container">

      <div className="navbar">
        <div className="logo">Sushmitha S</div>

        <div className="nav-links">
          <button onClick={() => setActiveSection("home")}>Home</button>
          <button onClick={() => setActiveSection("education")}>Education</button>
          <button onClick={() => setActiveSection("work")}>Work</button>
          <button onClick={() => setActiveSection("projects")}>Projects</button>
          <button onClick={() => setActiveSection("skills")}>Skills</button>
          <button onClick={() => setActiveSection("contact")}>Contact</button>

          <a href="/resume.pdf" download className="resume-btn">
            Resume
          </a>
        </div>
      </div>

      <div className="content">
        {renderContent()}
      </div>

    </div>
  );
}

export default App;

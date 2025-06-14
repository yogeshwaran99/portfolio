import React from "react";
import "./about.css";

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-header">
        <h1>About me</h1>
      </div>
      <div className="about-content">
        <p>
          I’m a software developer with a Bachelor’s in Electronics and
          Communication Engineering.
        </p>

        <p>
          I work with languages like <span className="highlight">Java</span>,{" "}
          <span className="highlight">JavaScript</span>,{" "}
          <span className="highlight">Python</span>,{" "}
          <span className="highlight">C</span>, and{" "}
          <span className="highlight">C++</span> to build scalable full-stack
          solutions. My projects typically combine{" "}
          <span className="highlight">Spring Boot</span>,{" "}
          <span className="highlight">SQL</span>,{" "}
          <span className="highlight">MongoDB</span>,{" "}
          <span className="highlight">REST APIs</span>, and{" "}
          <span className="highlight">GraphQL</span> on the backend with{" "}
          <span className="highlight">React</span>,{" "}
          <span className="highlight">HTML</span>, and{" "}
          <span className="highlight">CSS</span> on the frontend for clean and
          efficient applications.
        </p>

        <p>
          My workflow centers around <span className="highlight">Vim</span>,{" "}
          <span className="highlight">Tmux</span>, and{" "}
          <span className="highlight">Linux</span>, along with other developer
          tools. Regularly use <span className="highlight">Docker</span> for
          containerization, <span className="highlight">Postman</span> for API
          testing, and <span className="highlight">GitHub</span> for version
          control.
        </p>
        <p>
          Passionate about problem-solving and actively participating in coding
          challenges on platforms like{" "}
          <a
            href="https://leetcode.com/u/yogeshwaran99"
            target="_blank"
            rel="noopener noreferrer"
            className="highlight"
          >
            LeetCode
          </a>{" "}
          and{" "}
          <a
            href="https://codeforces.com/profile/yogeshwaran99"
            target="_blank"
            rel="noopener noreferrer"
            className="highlight"
          >
            Codeforces
          </a>
          .
        </p>
      </div>
    </section>
  );
}

export default About;

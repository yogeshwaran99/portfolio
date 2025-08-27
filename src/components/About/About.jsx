import "./about.css";

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-header">
        <h1>About</h1>
      </div>
      <div className="about-content">
        <p>
          I’m a  <span className="highlight">software developer </span>with a Bachelor’s in Electronics and
          Communication Engineering.
        </p>

        <p>
          I specialize in building scalable full-stack applications using{" "}
          <span className="highlight">Java</span> and{" "}
          <span className="highlight">JavaScript</span>. My backend development leverages{" "}
          <span className="highlight">Spring Boot</span> and{" "}
          <span className="highlight">SQL</span> to create robust, high-performance APIs, while the frontend is crafted with{" "}
          <span className="highlight">React</span>,{" "}
          <span className="highlight">HTML</span> and{" "}
          <span className="highlight">CSS</span> for responsive and intuitive user experiences.
        </p>


        <p>
          My workflow centers around <span className="highlight">Linux</span>,{" "}
          <span className="highlight">Tmux</span>, and{" "}
          <span className="highlight">Vim</span>, along with other developer
          tools. Regularly use <span className="highlight">Docker</span> for
          containerization, <span className="highlight">cURL</span> for API
          testing, and <span className="highlight">Git</span> for version
          control.
        </p>

        <p>
          Skilled in <span className="highlight">debugging</span> and{" "}
          <span className="highlight">optimization</span> to improve performance, stability, and code efficiency.
        </p>


      </div>
    </section>
  );
}

export default About;

import React, { useState, useEffect } from "react";
import "./navbar.css";

function Nav() {
  const [activeNav, setActiveNav] = useState("#home");

  const navLinks = [
    { id: "#home", label: "Home" },
    { id: "#about", label: "About" },
    { id: "#projects", label: "Projects" },
    { id: "#contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let current = "#home";

      sections.forEach((section) => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        if (window.scrollY >= top - height / 3) {
          current = `#${section.getAttribute("id")}`;
        }
      });

      if (current !== activeNav) {
        setActiveNav(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeNav]);

  return (
    <section className="nav-section">
      <nav className="nav-container">
        <div className="nav-logo">Yogeshwaran</div>
        <div>
          {navLinks.map(({ id, label }) => (
            <a
              key={id}
              href={id}
              className={`nav-link ${activeNav === id ? "active" : ""}`}
              onClick={() => setActiveNav(id)}
            >
              {label}
            </a>
          ))}
        </div>
      </nav>
    </section>
  );
}

export default Nav;

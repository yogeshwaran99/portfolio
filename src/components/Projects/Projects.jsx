import React from "react";
import IMG1 from "../../assets/ecommerce.png";
import IMG2 from "../../assets/to_do_list.png";
import IMG3 from "../../assets/snakegame.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./projects.css";

function Projects() {
  const soloProjects = [
    {
      id: 1,
      title: "E-Commerce",
      img: IMG1,
      description:
        "This project is a full-stack e-commerce application built with Java and Spring Boot (backend), PostgreSQL (database), and React (frontend), featuring JWT-secured RBAC.",
      github: "https://github.com/yogeshwaran99/E-commerce",
    },
    {
      id: 2,
      title: "To-Do List",
      img: IMG2,
      description:
        "This is a simple to-do list application that allows users to add, update, delete, and mark tasks as completed. It is built with the MERN stack and uses Axios for REST API implementation.",
      github: "https://github.com/yogeshwaran99/to-do-list",
    },
    {
      id: 3,
      title: "Snake Game",
      img: IMG3,
      description:
        "The Snake Game in Java involves guiding a snake to eat food, grow, and avoid collisions. Built with Swing, it features random food generation, and a scoring system.",
      github:
        "https://github.com/yogeshwaran99/MiniProjects/tree/main/SnakeGame",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <h1 className="projects-heading">Projects</h1>
      <div className="card-container">
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={30}
          loop={true}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            600: {
              slidesPerView: 2,
            },
            900: {
              slidesPerView: 3,
            },
          }}
        >
          {soloProjects.map((project) => (
            <SwiperSlide key={project.id}>
              <div className="project-card">
                <h3>{project.title}</h3>
                <img
                  src={project.img}
                  alt={project.title}
                  className="project-image"
                />
                <p className="project-description">{project.description}</p>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="project-button"
                >
                  GitHub
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Projects;

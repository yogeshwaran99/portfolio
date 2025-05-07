import React from 'react';
import IMG1 from '../../assets/ecommerce.png';
import IMG2 from '../../assets/to_do_list.png';
import IMG3 from '../../assets/snakegame.png';

import './project.css';

const Project = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'E-Commerce',
      img: IMG1,
      description: 'This project is a full-stack e-commerce application built with Java and Spring Boot (backend), PostgreSQL (database), and React (frontend), featuring JWT-secured RBAC.',
      github: 'https://github.com/yogeshwaran99/E-commerce',
    
    },
    {
      id: 2,
      title: 'To-Do List',
      img: IMG2,
      description: 'This is a simple to-do list application that allows users to add, update, delete, and mark tasks as completed. It is built with the MERN stack and uses Axios for REST API implementation.',
      github: 'https://github.com/yogeshwaran99/to-do-list',
    
    },
    {
      id: 3,
      title: 'Snake Game',
      img: IMG3,
      description: 'The Classic Snake Game in Java involves guiding a snake to eat food, grow, and avoid collisions. Built with Swing, it features smooth movement, random food generation, and a scoring system.',
      github: 'https://github.com/yogeshwaran99/MiniProjects/tree/main/SnakeGame',
    },
  ];

  return (
    <section id="project">
      <h5>Browse My Recent</h5>
      <h2>Projects</h2>
      <div className="container project__container">
        {soloProjects.map((pro) => {
          return (
            <article className="project__item" key={pro.id}>
              <div className="project__item-image">
                <img src={pro.img} alt={pro.title} />
              </div>
              <div className="project__item-content">
                <h3>{pro.title}</h3>
                <p>{pro.description}</p>                              
                <a
                  href={pro.github}
                  target="_blank"
                  className="btn"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Project;

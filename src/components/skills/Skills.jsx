import React from 'react';
import { BsFillPatchCheckFill } from 'react-icons/bs';
import './skills.css';

const skillsData = {
  skills: [
    'Java',
    'Springboot',
    'Javascript',
    'APIs',
    'Python',
    'HTML',
    'C/C++',
    'CSS',
    'SQL',
    'React JS'
  ],
  tools: [
    'Eclipse',
    'IntelliJ IDEA',
    'VS Code',
    'Postman',
    'Git & GitHub',
    'Docker',
    'Linux',
    'Vim',
    'Bash',
    'Android Studio'
  ]
};

const Skills = () => {
  const skill = (items) => {
    return items.map((item, index) => (
      <article key={index} className="skills__details">
        <BsFillPatchCheckFill className="skills__details-icon" />
        <p>{item}</p>
      </article>
    ));
  };

  return (
    <section id="skills">
      <h5>Explore My</h5>
      <h2>Skills</h2>
      <div className="container skills__container">
        <div className="skills__tech">
          <h3>Skills</h3>
          <div className="skills__content">
            {skill(skillsData.skills)}
          </div>
        </div>
        <div className="skills__tools">
          <h3>Tools</h3>
          <div className="skills__content">
            {skill(skillsData.tools)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

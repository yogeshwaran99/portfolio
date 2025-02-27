import React from 'react';
import { BsFillPatchCheckFill } from 'react-icons/bs';
import './skills.css';

const Skills = () => {
  return (
    <section id="skills"> 
      <h5>Explore My</h5>
      <h2>Skills</h2>
      <div className="container skills__container"> 
        <div className="skills__tech"> 
        <h3>Skills</h3>
          <div className="skills__content">
            <article className="skills__details">
            <BsFillPatchCheckFill className="skills__details-icon" />
              <p>Java</p>
            </article>
            <article className="skills__details">
            <BsFillPatchCheckFill className="skills__details-icon" />
              <p>Springboot</p>
            </article>            
            <article className="skills__details">
            <BsFillPatchCheckFill className="skills__details-icon" />
              <p>Javascript</p>
            </article>                       
            <article className="skills__details">
            <BsFillPatchCheckFill className="skills__details-icon" />
              <p>APIs</p>
            </article>  
            <article className="skills__details">
            <BsFillPatchCheckFill className="skills__details-icon" />
              <p>Python</p>
            </article>
            <article className="skills__details">
            <BsFillPatchCheckFill className="skills__details-icon" />
              <p>HTML</p>
            </article>
            <article className="skills__details"> 
            <BsFillPatchCheckFill className="skills__details-icon" />
              <p>C/C++</p>
            </article>
            <article className="skills__details">
            <BsFillPatchCheckFill className="skills__details-icon" />
              <p>CSS</p>
            </article>
            <article className="skills__details">
            <BsFillPatchCheckFill className="skills__details-icon" />
              <p>SQL</p>
            </article>            
            <article className="skills__details">
            <BsFillPatchCheckFill className="skills__details-icon" />
              <p>React JS</p>
            </article> 

          </div>
        </div>
        <div className="skills__tools"> 
          <h3>Tools</h3>
          <div className="skills__content">
            <article className="skills__details">
            <BsFillPatchCheckFill className="skills__details-icon" />
              <p>Eclipse</p>
            </article>
            <article className="skills__details">
            <BsFillPatchCheckFill className="skills__details-icon" />
              <p>IntelliJ IDEA</p>
            </article>
            <article className="skills__details">
            <BsFillPatchCheckFill className="skills__details-icon" />
              <p>VS Code</p>
            </article>            
            <article className="skills__details">
            <BsFillPatchCheckFill className="skills__details-icon" />
              <p>Postman</p>
            </article>
            <article className="skills__details">
            <BsFillPatchCheckFill className="skills__details-icon" />
              <p>Git &  GitHub</p>
            </article>          
            <article className="skills__details">
            <BsFillPatchCheckFill className="skills__details-icon" />
              <p>Docker</p>
            </article>
            <article className="skills__details">
            <BsFillPatchCheckFill className="skills__details-icon" />
              <p>Linux</p>
            </article>       
            <article className="skills__details">
            <BsFillPatchCheckFill className="skills__details-icon" />
              <p>Vim</p>
            </article>   
            <article className="skills__details">
            <BsFillPatchCheckFill className="skills__details-icon" />
              <p>Bash</p>
            </article>       
            <article className="skills__details">
            <BsFillPatchCheckFill className="skills__details-icon" />
              <p>Android Studio</p>
            </article>       
          </div>
        </div>        
      </div>
    </section>
  );
}

export default Skills;

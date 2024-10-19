import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaJava } from 'react-icons/fa';
import { SiDocker, SiJenkins, SiPuppet, SiAnsible } from 'react-icons/si'; // Importing DevOps tool icons
import './Skills.css'; // Import external CSS for styling

function Skills() {
  return (
    <div className="skills-container">
      <h2 className="skills-heading">Programming Languages & Frameworks</h2>
      <div className="skills-icons">
        <div className="skill">
          <FaHtml5 className="icon" />
          <p>HTML5</p>
        </div>
        <div className="skill">
          <FaCss3Alt className="icon" />
          <p>CSS3</p>
        </div>
        <div className="skill">
          <FaJs className="icon" />
          <p>JavaScript</p>
        </div>
        <div className="skill">
          <FaReact className="icon" />
          <p>ReactJS</p>
        </div>
        <div className="skill">
          <FaNodeJs className="icon" />
          <p>NodeJS</p>
        </div>
        <div className="skill">
          <FaPython className="icon" />
          <p>Python</p>
        </div>
        <div className="skill">
          <FaJava className="icon" />
          <p>Java</p>
        </div>
      </div>
      
      <h2 className="skills-heading" style={{ marginTop: '40px' }}>DevOps Tools</h2>
      <div className="skills-icons">
        <div className="skill">
          <SiDocker className="icon" />
          <p>Docker</p>
        </div>
        <div className="skill">
          <SiJenkins className="icon" />
          <p>Jenkins</p>
        </div>
        <div className="skill">
          <SiPuppet className="icon" />
          <p>Puppet</p>
        </div>
        <div className="skill">
          <SiAnsible className="icon" />
          <p>Ansible</p>
        </div>
      </div>
    </div>
  );
}

export default Skills;

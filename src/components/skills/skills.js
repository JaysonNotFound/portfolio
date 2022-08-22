import React from "react";

function Skills() {
  return (
    <div className="section skills" id="skills">
      <h2 className="skill_title">Skills</h2>
      <span className="section_subtitle">Programming Languages & Tools</span>
      <div className="skills_container container grid">
        <div className="skills_content">
          <div className="skills_header">
            <i className="fa-solid fa-code"></i>
            <div>
              <h1 className="skills_title">Frontend development</h1>
            </div>
            <i className="fa-solid fa-angle-down skills_arrow"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;

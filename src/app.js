import React from "react";

import "./styles/app.scss";

const App = () => {
  return (
    <>
      <nav>
        <a href="#">
          <p>JAYSON TEAÑO</p>
        </a>
        <ul>
          <a href="#experiences">
            <li>Experience</li>
          </a>
          <a href="#projects">
            <li>Projects</li>
          </a>
          <a href="#skills">
            <li>Skills</li>
          </a>
          <a href="#educations">
            <li>Educations</li>
          </a>
        </ul>
      </nav>
      <section className="home section" id="home">
        <div className="home_data">
          <h4>Hi, I'am</h4>
          <h1>JAYSON TEAÑO</h1>
          <h2>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur
            assumenda ipsa, natus neque quia quo facilis amet praesentium
            dignissimos in architecto, harum alias sequi. Blanditiis
            reprehenderit atque consectetur minima veniam!
          </h2>
        </div>
        <div className="home_social">
          <a
            className="home_social-icon"
            href="https://www.facebook.com/jhhaii"
            target="_blank"
          >
            <i className="fa-brands fa-facebook-f"></i>
          </a>
          <a
            className="home_social-icon"
            href="https://www.linkedin.com/in/jaysonteano"
            target="_blank"
          >
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
          <a
            className="home_social-icon"
            href="https://github.com/JaysonNotFound"
            target="_blank"
          >
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
      </section>
      <section className="experience section" id="experience">
        <div className="section_header_container">
          <h1 className="section_header">Experience</h1>
        </div>
        <div className="experience_list_container">
          <div className="experience_data_container">
            <div className="experience_data_header_container">
              <h1 className="experience_data_position">Mid Mobile Developer</h1>
              <h3 className="experience_data_date">August 2021 - Present</h3>
            </div>
            <div className="experience_data_sub-header_container">
              <h2 className="experience_data_company">Sprout Solutions</h2>
            </div>
            <div className="experience_data_description_container">
              <p className="experience_data_description-item">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Tenetur assumenda ipsa, natus neque quia quo facilis amet
                praesentium
              </p>
              <p className="experience_data_description-item">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Tenetur assumenda ipsa, natus neque quia quo facilis amet
                praesentium
              </p>
              <p className="experience_data_description-item">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Tenetur assumenda ipsa, natus neque quia quo facilis amet
                praesentium
              </p>
              <p className="experience_data_description-item">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Tenetur assumenda ipsa, natus neque quia quo facilis amet
                praesentium
              </p>
            </div>
          </div>

          <div className="experience_data_container">
            <div className="experience_data_header_container">
              <h1 className="experience_data_position">
                Application Developer
              </h1>
              <h3 className="experience_data_date">
                January 2019 - August 2021
              </h3>
            </div>
            <div className="experience_data_sub-header_container">
              <h2 className="experience_data_company">
                Philippine AXA Life Insurance Corporation
              </h2>
            </div>
            <div className="experience_data_description_container">
              <p className="experience_data_description-item">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Tenetur assumenda ipsa, natus neque quia quo facilis amet
                praesentium
              </p>
              <p className="experience_data_description-item">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Tenetur assumenda ipsa, natus neque quia quo facilis amet
                praesentium
              </p>
              <p className="experience_data_description-item">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Tenetur assumenda ipsa, natus neque quia quo facilis amet
                praesentium
              </p>
              <p className="experience_data_description-item">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Tenetur assumenda ipsa, natus neque quia quo facilis amet
                praesentium
              </p>
            </div>
          </div>

          <div className="experience_data_container">
            <div className="experience_data_header_container">
              <h1 className="experience_data_position">Software Engineer</h1>
              <h3 className="experience_data_date">June 2018 - January 2019</h3>
            </div>
            <div className="experience_data_sub-header_container">
              <h2 className="experience_data_company">Medilink Network Inc.</h2>
            </div>
            <div className="experience_data_description_container">
              <p className="experience_data_description-item">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Tenetur assumenda ipsa, natus neque quia quo facilis amet
                praesentium
              </p>
              <p className="experience_data_description-item">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Tenetur assumenda ipsa, natus neque quia quo facilis amet
                praesentium
              </p>
              <p className="experience_data_description-item">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Tenetur assumenda ipsa, natus neque quia quo facilis amet
                praesentium
              </p>
              <p className="experience_data_description-item">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Tenetur assumenda ipsa, natus neque quia quo facilis amet
                praesentium
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="projects section" id="projects">
        <div className="section_header_container">
          <h1 className="section_header">Projects</h1>
          <h3 className="section_sub-header">
            Here are some of the projects where I was involved in.
          </h3>
        </div>
        <div className="projects_list_container">
          <div className="projects_data_container">
            <div className="projects_data_image_container">
              <img src="#" alt="#" />
            </div>
            <div className="projects_data_content_container">
              <h3 className="projects_data_name">Sprout HR Mobile</h3>
              <div className="projects_data_link_container">
                <a className="projects_data_link-icon" href="#" target="_blank">
                  <i className="">playstore</i>
                </a>
                <a className="projects_data_link-icon" href="#" target="_blank">
                  <i className="">appstore</i>
                </a>
              </div>
              <p className="projects_data_description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A odio
                asperiores dolorem minima quidem nulla, cum quasi, inventore
                consequuntur ut recusandae distinctio dignissimos est molestiae
                blanditiis veniam obcaecati at accusantium.
              </p>
            </div>
          </div>

          <div className="projects_data_container">
            <div className="projects_data_image_container">
              <img src="#" alt="#" />
            </div>
            <div className="projects_data_content_container">
              <h3 className="projects_data_name">Emma by AXA</h3>
              <div className="projects_data_link_container">
                <a className="projects_data_link-icon" href="#" target="_blank">
                  <i className="">playstore</i>
                </a>
                <a className="projects_data_link-icon" href="#" target="_blank">
                  <i className="">appstore</i>
                </a>
              </div>
              <p className="projects_data_description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A odio
                asperiores dolorem minima quidem nulla, cum quasi, inventore
                consequuntur ut recusandae distinctio dignissimos est molestiae
                blanditiis veniam obcaecati at accusantium.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="skills">{/* TODO */}</section>
      <section className="educations">
        <div className="educations_data_container">
          <div className="educations_data_header_container">
            <h1 className="educations_data_school">Mid Mobile Developer</h1>
            <h3 className="educations_data_date">August 2021 - Present</h3>
          </div>
          <div className="experience_data_sub-header_container">
            <h2 className="experience_data_company">Sprout Solutions</h2>
          </div>
          <div className="experience_data_description_container">
            <p className="experience_data_description-item">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur
              assumenda ipsa, natus neque quia quo facilis amet praesentium
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default App;

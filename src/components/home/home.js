import React from "react";
import Blob from "./blob";

import "./home.scss";

function Home() {
  const socials = [
    {
      url: "https://www.facebook.com/jhhaii",
      icon: "fa-brands fa-facebook-f",
    },
    {
      url: "https://www.linkedin.com/in/jaysonteano",
      icon: "fa-brands fa-linkedin-in",
    },

    {
      url: "https://github.com/JaysonNotFound",
      icon: "fa-brands fa-github",
    },
  ];
  const introduction =
    "Software Engineer with strong technical skills gained 4 years of experience building and maintaining applications for multiple platform (ex. Android, iOS, Web, Desktop, and Server-side).";
  return (
    <section className="home section" id="home">
      <div className="home_container container grid">
        <div className="home_content grid">
          <div className="home_social">
            {socials.map((social, i) => (
              <a
                key={i}
                href={social.url}
                className="home_social-icon"
                target="_blank"
              >
                <i className={social.icon}></i>
              </a>
            ))}
          </div>
          <div className="home_image">
            <Blob />
          </div>
          <div className="home_data">
            <h4 className="home_greet">Hi, I'am</h4>
            <h1 className="home_title">Jayson Teaño</h1>
            <h2 className="home_subtitle">I build things to an Apps!</h2>
            <p className="home_description">{introduction}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;

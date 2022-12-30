import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/weather-app.png";
import IMG2 from "../../assets/todos.png";
import IMG3 from "../../assets/fanrec.png";
import IMG4 from "../../assets/redesign.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Weather-app",
    github: "https://github.com/RafalBie/weather-app",
    demo: "https://rafalbie.github.io/weather-app/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Todos",
    github: "https://github.com/RafalBie/TodosWithLocalhost",
    demo: "https://todos-rb.netlify.app/",
  },
  {
    id: 3,
    image: IMG3,
    title: "FAN-workshops",
    github: "https://github.com/RemigiuszT/FAN-Records",
    demo: "https://fan-records.netlify.app/",
  },
  {
    id: 4,
    image: IMG4,
    title: "UX DESIGN",
    github: "",
    demo: "https://uxfol.io/p/homefac/0468ba4c",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__items">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;

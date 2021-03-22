import React from "react";

function Card(props) {
  return (
    <div class="portfolio-content">
      <div className="portfolio-text">
        <h1>{props.title}</h1>
        <hr />
        <h4>{props.tech}</h4>
        <p>{props.description}</p>
        <div className="portfolio-link">
          <div>
            <a
              target="_blank"
              href={`https://github.com/aldrinburgos18/${props.repo}`}
            >
              Link to Github Repository
            </a>
          </div>
          <a target="_blank" href={`${props.deploy}`}>
            Link to Deployed Application
          </a>
        </div>
      </div>
      <div className="portfolio-image">
        <img src={require(`../../assets/img/${props.repo}.png`).default} />
      </div>
    </div>
  );
}

export default Card;

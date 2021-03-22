import React, { useState } from "react";
import Card from "../Card";

function Portfolio() {
  const [projects] = useState([
    {
      title: "Run Buddy",
      description:
        "A website that offers training services to fitness enthusiasts.",
      tech: "HTML/CSS",
      deploy: "https://aldrinburgos18.github.io/run-buddy/",
      repo: "run-buddy",
    },
    {
      title: "Javascript Password Generator",
      tech: "Javascript",
      description:
        "A random password generator that can create a strong password that provides greater security.",
      repo: "JavascriptPasswordGenerator",
      deploy: "https://aldrinburgos18.github.io/JavascriptPasswordGenerator/",
    },
    {
      title: "Taskinator",
      description: "A simple app to keep track of your to-do list.",
      tech: "HTML/CSS/Javascript",
      repo: "taskinator",
      deploy: "https://aldrinburgos18.github.io/taskinator/",
    },
    {
      title: "Taskmaster PRO",
      description:
        "An app that allows the user to monitor their tasks from start to finish.",
      tech: "Javascript/jQuery",
      repo: "taskmaster-pro",
      deploy: "https://aldrinburgos18.github.io/taskmaster-pro/",
    },
    {
      title: "Git-it-done",
      description:
        "A web application that uses GitHub's API to search for open source projects with open issues and pull requests.",
      tech: "Javascript/APIs",
      repo: "git-it-done",
      deploy: "https://aldrinburgos18.github.io/git-it-done/",
    },
    {
      title: "Weather Dashboard",
      description:
        "An application that shows the weather by city. It also shows a 5-day weather forecast.",
      tech: "Javascript/APIs",
      repo: "weather-dashboard",
      deploy: "https://aldrinburgos18.github.io/weather-dashboard/",
    },
    {
      title: "Collector's Haven",
      description:
        "An app for gamers and game collectors, Collectors-Haven allows users to search for games they are interested in buying. This application also shows information about the current value of a selected game and its value over time.",
      tech: "HTML/CSS/Javascript/APIs",
      repo: "collectors-haven",
      deploy: "https://aldrinburgos18.github.io/collectors-haven/",
    },
    {
      title: "Note Taker",
      description: "An application that can be used to write and save notes.",
      tech: "Javascript/ExpressJS",
      repo: "note-taker",
      deploy: "https://burgosnotes.herokuapp.com",
    },
    {
      title: "The-Tech-Blog",
      description:
        "A CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well.",
      tech: "Javascript/ExpressJS/SQL",
      repo: "the-tech-blog",
      deploy: "https://burgos-tech-blog.herokuapp.com/",
    },
    {
      title: "Pizza Hunt",
      description:
        "An app lets users connect with each other based on their love of pizza. In Pizza Hunt, users can share and discuss their dream pizza-topping combinations.",
      tech: "Javascript/ExpressJS/NoSQL",
      repo: "pizza-hunt",
      deploy: "https://secret-peak-80688.herokuapp.com/",
    },
    {
      title: "Budget Tracker",
      description:
        "An app that allows users to add expenses and deposits to their budget with or without a connection.",
      tech: "Javascript",
      repo: "budget-tracker-pwa",
      deploy: "https://thawing-shelf-72208.herokuapp.com/",
    },
    {
      title: "Oh Snap!",
      description:
        "An website for a family friend and budding photographer who needs a no-frills site to display photos.",
      tech: "React",
      repo: "photo-port",
      deploy: "https://aldrinburgos18.github.io/photo-port/",
    },
  ]);

  return (
    <section className="format-content">
      <h1>My Portfolio</h1>
      <hr />
      <br />
      {projects.map((project, i) => (
        <Card
          key={i}
          title={project.title}
          description={project.description}
          tech={project.tech}
          repo={project.repo}
          deploy={project.deploy}
        ></Card>
      ))}
    </section>
  );
}

export default Portfolio;

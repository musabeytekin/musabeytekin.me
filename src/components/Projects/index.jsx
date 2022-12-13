import React from "react";

import Title from "../Title";
import ProjectItem from "./ProjectItem";
import { projects } from "./projectItems";
import "./projects.css";
const Index = () => {
  return (
    <section id="projects" className="container">
      <Title underline={true}>Projects</Title>
      <p>
        I work every day to improve myself. I have developed many projects with
        MongoDB, PostgreSQL, ExpressJS, NodeJS, ReactJS technologies. You can
        review my projects.
      </p>
      {projects.map((project, index) => (
        <ProjectItem {...project} key={index} />
      ))}
    </section>
  );
};

export default Index;

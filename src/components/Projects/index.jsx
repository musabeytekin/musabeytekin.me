import React from "react";

import Title from "../Title";
import ProjectItem from "./ProjectItem";
import "./projects.css";
const Index = () => {
  return (
    <section id="projects" className="container">
      <Title underline={true}>Projects</Title>
      <p>
        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
        aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
        quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat
        sit in iste officiis commodi quidem hic quas.
      </p>
      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-12">
          <ProjectItem />
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <ProjectItem />
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <ProjectItem />
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <ProjectItem />
        </div>
      </div>
    </section>
  );
};

export default Index;

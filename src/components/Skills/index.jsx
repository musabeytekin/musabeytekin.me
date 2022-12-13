import React from "react";
import Title from "../Title";
import "./skills.css";
import SkillBar from "./SkillBar";
const Index = () => {
  return (
    <section id="skills" className="container">
      <Title underline={true}>Skills</Title>
      <p>
        I have developed many front-end projects with HTML, CSS and independent
        from a framework. After combining my learning with JavaScript, I decided
        to specialize in the ReactJs framework.
      </p>
      <div className="row">
        <div className="col-md-6 col-sm-12">
          <SkillBar title="HTML" percent="90" />
          <SkillBar title="CSS" percent="80" />
        </div>
        <div className="col-md-6 col-sm-12">
          <SkillBar title="JavaScript" percent="70" />
          <SkillBar title="ReactJS" percent="75" />
        </div>
        {/* <div className="col-md-6 col-sm-12">
          <SkillBar title="NodeJS" percent="70" />
          <SkillBar title="MongoDB" percent="50" />
          <SkillBar title="ExpressJS" percent="75" />
          <SkillBar title="Python" percent="60" />
        </div>

         */}
      </div>
      <p>
        I started to write APIs that use REST architecture on the backend of my
        projects. I used NodeJS, ExpressJS libraries for this. I am trying to
        improve myself in these areas.
      </p>
      <div className="row">
        <div className="col-md-6 col-sm-12">
          <SkillBar title="NodeJS" percent="70" />
        </div>
        <div className="col-md-6 col-sm-12">
          <SkillBar title="ExpressJS" percent="75" />
        </div>
        <div className="col-md-6 col-sm-12">
          <SkillBar title="REST" percent="60" />
        </div>
      </div>
      <p>
        In database operations, I have worked with many databases, primarily
        MongoDB and PostgreSQL. I've worked on a few major REST API services,
        especially with the MongoDB, ExpressJS, NodeJS trio.
      </p>

      <div className="row">
        <div className="col-md-6 col-sm-12">
          <SkillBar title="MongoDB" percent="70" />
        </div>
        <div className="col-md-6 col-sm-12">
          <SkillBar title="PostgreSQL" percent="75" />
        </div>
      </div>

      <p>
        When I was a third year university student, I worked in the field of
        cyber security. I received training on penetration tests. My first
        internship was on cyber security. I participated in penetration tests. I
        wrote basic hacker tools with Python. I especially paid attention to
        security vulnerabilities in Web services. I paid particular attention to
        security in the backend software I wrote.
      </p>

      <div className="row">
        <div className="col-md-6 col-sm-12">
          <SkillBar title="Software Security" percent="70" />
        </div>
        <div className="col-md-6 col-sm-12">
          <SkillBar title="Python" percent="75" />
        </div>
      </div>

      <p>
        Machine Learning, Data Science, Image Processing etc. I received
        training in artificial intelligence. I made analyzes on datasets using
        python libraries(sklearn, opencv, AB-Test etc.). I have not made such an
        attempt yet, but I have an idea to prepare a beautiful service using
        artificial intelligence technologies. :)
      </p>

      <div className="row">
        <div className="col-md-6 col-sm-12">
          <SkillBar title="Machine Learning" percent="40" />
        </div>
        <div className="col-md-6 col-sm-12">
          <SkillBar title="Data Science" percent="40" />
        </div>
      </div>

      <p>I am currently training on docker and kubernetes.</p>

      <div className="row">
        <div className="col-md-6 col-sm-12">
          <SkillBar title="Docker" percent="20" />
        </div>
        <div className="col-md-6 col-sm-12">
          <SkillBar title="Kubernates" percent="0" />
        </div>
      </div>
    </section>
  );
};

export default Index;

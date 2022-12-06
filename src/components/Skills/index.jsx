import React from "react";
import Title from "../Title";
import "./skills.css";
import SkillBar from "./SkillBar";
const Index = () => {
  return (
    <section id="skills" className="container">
      <Title underline={true}>Skills</Title>
      <p>
        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
        aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
        quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat
        sit in iste officiis commodi quidem hic quas.
      </p>

      <div className="row">
        <div className="col-md-6 col-sm-12">
          <SkillBar title="HTML" percent="90" />
          <SkillBar title="CSS" percent="80" />
          <SkillBar title="JavaScript" percent="70" />
          <SkillBar title="React" percent="75" />
        </div>
        <div className="col-md-6 col-sm-12">
          <SkillBar title="Node" percent="70" />
          <SkillBar title="MongoDB" percent="50" />
          <SkillBar title="Express" percent="75" />
          <SkillBar title="Python" percent="60" />
        </div>
      </div>
    </section>
  );
};

export default Index;

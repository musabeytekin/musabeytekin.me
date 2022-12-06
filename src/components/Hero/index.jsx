import React from "react";
import "./hero.css";
import Typewriter from "typewriter-effect";

const Index = () => {
  return (
    <section id="hero">
      <div className="hero-container">
        <h1 className="animate__animated animate__flipInX">
          Hi, I'm Musa Beytekin
        </h1>
        <div className="typewriter-wrap">
          <p className="animate__animated animate__flipInX">I'm a</p>

          <Typewriter
            options={{
              strings: ["Software Engineer", "Web Developer"],
              autoStart: true,
              loop: true
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Index;

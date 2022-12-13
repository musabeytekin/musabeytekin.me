import Title from "../Title";
import React from "react";
import { BsChevronRight } from "react-icons/bs";
import "./about.css";

export default function Index() {
  return (
    <section id="about" className="container">
      <div>
        <Title underline={true}>About</Title>
        <p className="pt-3">
          My name is Musa Beytekin and I am a 4th year software engineering
          student. I have been interested in software development throughout my
          education life and I am currently trying to deepen my education in
          this field.
        </p>
      </div>
      <div>
        <ul className="p-0">
          <li>
            <BsChevronRight className="text-primary"></BsChevronRight>
            <strong> Birthday: </strong>
            <span>8 May 2001</span>
          </li>
          <li>
            <BsChevronRight className="text-primary"></BsChevronRight>
            <strong> Phone: </strong>
            <span>+90 (553) 738 2982</span>
          </li>
          <li>
            <BsChevronRight className="text-primary"></BsChevronRight>
            <strong> City: </strong>
            <span>Malatya, Turkey</span>
          </li>
          <li>
            <BsChevronRight className="text-primary"></BsChevronRight>
            <strong> Age: </strong>
            <span>21</span>
          </li>
          <li>
            <BsChevronRight className="text-primary"></BsChevronRight>
            <strong> Email: </strong>
            <span>musabeytekin09@gmail.com</span>
          </li>
        </ul>
        <p>
          I am particularly interested in web development and cyber security
          and I am trying to develop projects in these areas. I share the
          projects I made on my own website.
        </p>
      </div>
    </section>
  );
}

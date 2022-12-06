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
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </div>
        <div>
          <Title underline={false}>Software Engineer</Title>
          <p>
            <i>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </i>
          </p>
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
            Officiis eligendi itaque labore et dolorum mollitia officiis optio
            vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor
            incidunt officia tempore. Et eius omnis. Cupiditate ut dicta maxime
            officiis quidem quia. Sed et consectetur qui quia repellendus itaque
            neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui
            repellendus omnis culpa magni laudantium dolores.
          </p>
        </div>
      </section>
  );
}

import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "./projects.css";
import { BiLink } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
const ProjectItem = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="project-item">
      <img
        className="project-item__image"
        src="portfolio-1.jpg"
        alt="project"
      />
      <div className="row w-100 m-0 bg-primary project-links">
        <div className="col-6 text-center p-0">
          <button>
            <a href="#" className="text-white">
              <BiLink />
            </a>
          </button>
        </div>
        <div className="col-6 text-center p-0">
          <button onClick={() => setIsOpen(true)}>
            <a href="#" className="text-white">
              <AiOutlinePlus />
            </a>
          </button>
        </div>
      </div>
      <Lightbox
        open={isOpen}
        close={() => setIsOpen(false)}
        slides={[
          {
            src: "portfolio-1.jpg",
            alt: "image 1",
          },
          {
            src: "profile-img.jpg",
            alt: "image 1",
          },
          {
            src: "portfolio-3.jpg",
            alt: "image 1",
          },
          {
            src: "portfolio-4.jpg",
            alt: "image 1",
          },


        ]}
      />
    </div>
  );
};

export default ProjectItem;

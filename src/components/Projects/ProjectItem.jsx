import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import "yet-another-react-lightbox/styles.css";
import "./projects.css";
import { TbHandClick} from "react-icons/tb";
import { GrView } from "react-icons/gr";
const ProjectItem = ({
  name,
  mainSlide,
  slides,
  link,
  description,
  github
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [autoplay, setAutoplay] = React.useState(true);
  const [delay, setDelay] = React.useState(2200);

  return (
    <div className="project-item">
      <div className="row">
        {slides && slides.length > 0 ? (
          <>
            <div className="col-lg-6 col-sm-12 my-auto">
              <div className="overlay-wrap">
                <img
                  className="project-item__image"
                  src={mainSlide}
                  alt="project"
                  onClick={() => setIsOpen(true)}
                />
                <div className="overlay">
                  <div className="text"><TbHandClick/></div>
                </div>
              </div>
      
              <Lightbox
                open={isOpen}
                close={() => setIsOpen(false)}
                slides={slides}
                slideshow={{
                  autoplay,
                  delay
                }}
                plugins={[Slideshow]}
              />
            </div>
            <div className="col-lg-6 col-sm-12 d-flex justify-content-between flex-column">
              <div>
                <h3 className="project-item__title ">{name}</h3>
                <p className="mt-2 description">{description}</p>
              </div>

              <div className="d-flex align-item-center" style={{ gap: "1rem" }}>
                {link && (
                  <a
                    href={link}
                    className="btn btn-danger"
                    target={"_blank"}
                    rel={"noreferrer"}
                  >
                    Live
                  </a>
                )}
                {github && (
                  <a
                    href={github}
                    className="btn btn-success"
                    target={"_blank"}
                    rel={"noreferrer"}
                  >
                    GitHub
                  </a>
                )}
                <button className="btn btn-warning" onClick={() => setIsOpen(true)}><GrView/></button>
              </div>
            </div>
          </>
        ) : (
          <div className="col-12">
            <h3 className="project-item__title ">{name}</h3>
            <p className="mt-2">{description}</p>
            {github && (
              <a
                href={github}
                className="btn btn-success"
                target={"_blank"}
                rel={"noreferrer"}
              >
                GitHub
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectItem;

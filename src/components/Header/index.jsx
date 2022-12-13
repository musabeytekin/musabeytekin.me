import "./header.css";
import "animate.css";
import OutsideClickHandler from "react-outside-click-handler";
import {
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaHome,
  FaUserAlt,
  FaRegFileAlt,
  FaRegEnvelope
} from "react-icons/fa";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { GiSkills } from "react-icons/gi";
import { useSelector, useDispatch } from "react-redux";
import { closeToggleMenu } from "../../redux/menuSlice";
import profileImg from "./profile-img.jpg";
const Index = () => {
  const isOpen = useSelector((state) => state.menu.isOpen);
  const dispatch = useDispatch();
  return (
    <OutsideClickHandler
      onOutsideClick={() => {
        dispatch(closeToggleMenu());
      }}
    >
      <div
        id="header"
        className={`profile animate__animated ${
          isOpen ? "animate__slideInLeft" : "animate__slideOutLeft"
        } `}
      >
        <img
          className="profile-img img-fluid mt-3 rounded-circle"
          src={profileImg}
          alt=""
        />
        <a href="/" className="profile-name">
          Musa Beytekin
        </a>

        <div className="profile-social">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/Musabeytekin8"
            className="profile-social-link"
          >
            <FaTwitter className="profile-social-icon" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="
            https://www.instagram.com/musabeytekin/"
            className="profile-social-link"
          >
            <FaInstagram className="profile-social-icon" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="
                https://www.github.com/musabeytekin/"
            className="profile-social-link"
          >
            <FaGithub className="profile-social-icon" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="
            https://www.linkedin.com/in/musabeytekin/"
            className="profile-social-link"
          >
            <FaLinkedin className="profile-social-icon" />
          </a>
        </div>

        <nav id="navbar" className="nav-menu">
          <ul>
            <li>
              <a href="#hero" className="nav-link">
                <FaHome className="nav-link-icon" />
                <span>Home</span>
              </a>
              <a href="#about" className="nav-link">
                <FaUserAlt className="nav-link-icon" />
                <span>About</span>
              </a>
              <a href="#skills" className="nav-link">
                <GiSkills className="nav-link-icon" />
                <span>Skills</span>
              </a>
              <a href="#resume" className="nav-link">
                <FaRegFileAlt className="nav-link-icon" />
                <span>Resume</span>
              </a>
              <a href="#projects" className="nav-link">
                <AiOutlineFundProjectionScreen className="nav-link-icon" />
                <span>Projects</span>
              </a>
              <a href="#contact" className="nav-link">
                <FaRegEnvelope className="nav-link-icon" />
                <span>Contact</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </OutsideClickHandler>
  );
};

export default Index;

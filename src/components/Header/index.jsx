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
import { useSelector, useDispatch } from "react-redux";
import { closeToggleMenu } from "../../redux/menuSlice";
const Index = () => {
  const isOpen = useSelector((state) => state.menu.isOpen);
  const dispatch = useDispatch();
  return (
    <OutsideClickHandler onOutsideClick={() => {dispatch(closeToggleMenu())}}>
      <div
        id="header"
        className={`profile animate__animated ${
          isOpen ? "animate__slideInLeft" : "animate__slideOutLeft"
        } `}
      >
        <img
          className="profile-img img-fluid mt-3 rounded-circle"
          src={"./profile-img.jpeg"}
          alt=""
        />
        <a href="/" className="profile-name">
          Musa Beytekin
        </a>

        <div className="profile-social">
          <a
            href="
                https://www.linkedin.com/in/musa-beytekin/"
            className="profile-social-link"
          >
            <FaTwitter className="profile-social-icon" />
          </a>
          <a
            href="
                https://www.linkedin.com/in/musa-beytekin/"
            className="profile-social-link"
          >
            <FaInstagram className="profile-social-icon" />
          </a>
          <a
            href="
                https://www.linkedin.com/in/musa-beytekin/"
            className="profile-social-link"
          >
            <FaGithub className="profile-social-icon" />
          </a>
          <a
            href="
                https://www.linkedin.com/in/musa-beytekin/"
            className="profile-social-link"
          >
            <FaLinkedin className="profile-social-icon" />
          </a>
        </div>

        <nav id="navbar" className="nav-menu">
          <ul>
            <li>
              <a href="#" className="nav-link">
                <FaHome className="nav-link-icon" />
                <span>Home</span>
              </a>
              <a href="#" className="nav-link">
                <FaUserAlt className="nav-link-icon" />
                <span>About</span>
              </a>
              <a href="#" className="nav-link">
                <FaRegFileAlt className="nav-link-icon" />
                <span>Resume</span>
              </a>
              <a href="#" className="nav-link">
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

import React from "react";
import "./contact.css";
import Title from "../Title";
import { SlLocationPin } from "react-icons/sl";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import ContactForm from "./ContactForm";
const Index = () => {
  return (
    <section id="contact" className="container">
      <Title underline={true}>Contact</Title>
      <p>
        To contact me, you can call my phone number,
        reach me via WhatsApp or send an e-mail.
      </p>

      <div className="row">
            <div className="info-item col-lg-4 col-md-12">
              <SlLocationPin className="info-icon" />
              <div className="info-text d-flex justify-content-center align-items-left flex-column">
                <h4>Location</h4>
                <span>44210</span>
                <span>Turkey, Malatya, Battalgazi</span>
              </div>
            </div>
            <div className="info-item col-lg-4 col-md-12">
              <MdEmail className="info-icon" />
              <div className="info-text d-flex justify-content-center align-items-left flex-column">
                <h4>Email</h4>
                <span>musabeytekin09gmail.com</span>
              </div>
            </div>
            <div className="info-item col-lg-4 col-md-12">
              <FaPhoneAlt className="info-icon" />
              <div className="info-text d-flex justify-content-center align-items-left flex-column">
                <h4>Phone</h4>
                <span>+90 (553) 738 29 82</span>
              </div>
            </div>
       
       
      </div>
    </section>
  );
};

export default Index;

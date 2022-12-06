import React from "react";
import "./contact.css";
import Title from "../Title";
import { SlLocationPin } from "react-icons/sl";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useFormik } from "formik";
const Index = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      subject: "",
      message: ""
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    }
  });
  return (
    <section id="contact" className="container">
      <Title underline={true}>Contact</Title>
      <p>
        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
        aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
        quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat
        sit in iste officiis commodi quidem hic quas.
      </p>

      <div className="row">
        <div className="col-lg-5 col-sm-12 mb-4">
          <div className="info">
            <div className="info-item">
              <SlLocationPin className="info-icon" />
              <div className="info-text d-flex justify-content-center align-items-left flex-column">
                <h4>Location</h4>
                <span>44210</span>
                <span>Turkey, Malatya, Battalgazi</span>
              </div>
            </div>
            <div className="info-item">
              <MdEmail className="info-icon" />
              <div className="info-text d-flex justify-content-center align-items-left flex-column">
                <h4>Email</h4>
                <span>musabeytekin09gmail.com</span>
              </div>
            </div>
            <div className="info-item">
              <FaPhoneAlt className="info-icon" />
              <div className="info-text d-flex justify-content-center align-items-left flex-column">
                <h4>Phone</h4>
                <span>+90 (553) 738 29 82</span>
              </div>
            </div>

            <iframe
              src="https://maps.google.com/maps?q=44210&t=&z=13&ie=UTF8&iwloc=&output=embed"
            ></iframe>
          </div>
        </div>
        <div className="col-lg-7 col-sm-12">
          <div className="contact-form">
            <form onSubmit={formik.handleSubmit}>
              <div className="row">
                <div className="col-md-6 col-sm-12">
                  <div className="form-group">
                    <label>Your Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="formName"
                      aria-describedby="nameHelp"
                      onChange={formik.handleChange}
                      value={formik.values.email}
                    />
                  </div>
                </div>
                <div className="col-md-6 col-sm-12">
                  <div className="form-group">
                    <label>Your Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="formEmail"
                      aria-describedby="nameHelp"
                      onChange={formik.handleChange}
                      value={formik.values.email}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 col-sm-12">
                  <div className="form-group">
                    <label>Subject</label>
                    <input
                      type="text"
                      className="form-control"
                      id="formSubject"
                      onChange={formik.handleChange}
                      value={formik.values.email}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 col-sm-12">
                  <div className="form-group">
                    <label>Message</label>
                    <textarea
                      className="form-control"
                      id="formMessage"
                      rows="10"
                      onChange={formik.handleChange}
                      value={formik.values.email}
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="button-wrap">
                <button type="submit" className="btn btn-primary">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;

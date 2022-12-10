import React from "react";
import userIcon from "./user.png";
import { HiOutlineChevronRight } from "react-icons/hi";
import { useFormik } from "formik";
import AnswerForm from "./AnswerForm";
const Message = () => {
  return (
    <div className="row content-section">
      <div className="col-sm-12 col-md-6 mh-50vh">
        <div className="content-card message h-100">
          <div>
            <h2 className="content-card__title">Message Title</h2>
            <p className="content-card__text mt-3">
              Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır
              metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir
              hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak
            </p>
          </div>

          <div className="message-footer">
            <div className="message-footer__left">
              <img src={userIcon} alt="" className="message-footer__img" />
              <div className="user-info">
                <h4>John Doe</h4>
                <span>johndoe@gmail.com</span>
              </div>
            </div>
            <div className="message-footer__right">
              <button className="btn btn-success btn-answer">
                Answer <HiOutlineChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-12 col-md-6 mh-50vh">
        <div className="content-card h-100 answer-area-wrap">
      
          <AnswerForm />
        </div>
      </div>
    </div>
  );
};

export default Message;

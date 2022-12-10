import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
export default function Index() {
  return (
    <Formik
      initialValues={{
        email: "",
        name: "",
        subject: "",
        message: ""
      }}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = "Zorunlu alan";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
        ) {
          errors.email = "Please provide a valid email address";
        }

        if (!values.name) {
          errors.name = "Name Required";
        }
        if (!values.subject) {
          errors.subject = "Subject Required";
        }
        if (!values.message) {
          errors.message = "Message Required";
        }

        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <div className="form-group">
                <label>Your Full Name</label>
                <Field
                  type="text"
                  className="form-control"
                  component="input"
                  name="name"
                  id="formName"
                />
                <ErrorMessage
                  name="name"
                  className="text-danger fw-5"
                  component={"span"}
                />
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="form-group">
                <label>Your Email</label>
                <Field
                  type="email"
                  className="form-control"
                  component="input"
                  name="email"
                  id="formEmail"
                />
                <ErrorMessage
                  name="email"
                  className="text-danger fw-5"
                  component={"span"}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="form-group">
                <label>Subject</label>
                <Field
                  type="text"
                  className="form-control"
                  component="input"
                  name="subject"
                  id="formSubject"
                />
                <ErrorMessage
                  name="subject"
                  className="text-danger fw-5"
                  component={"span"}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="form-group">
                <label>Message</label>
                <Field
                  type="text"
                  className="form-control"
                  component="textarea"
                  rows="10"
                  name="message"
                  id="formMessage"
                />
                <ErrorMessage
                  name="message"
                  className="text-danger fw-5"
                  component={"span"}
                />
              </div>
            </div>
          </div>

          <div className="button-wrap">
            <button
              type="submit"
              className="btn btn-primary"
              disabled={isSubmitting}
            >
              Send
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

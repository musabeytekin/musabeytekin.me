import React from "react";
import { MdSupervisorAccount } from "react-icons/md";
import { BsShieldLockFill } from "react-icons/bs";
import { Formik, Field, Form, ErrorMessage } from "formik";

const Index = () => {
  return (
    <Formik
      initialValues={{
        email: "",
        password: ""
      }}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = "Email Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
        ) {
          errors.email = "Please provide a valid email address";
        }
        if (!values.password) {
          errors.password = "Password Required";
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
          <div className="form-group">
            <label htmlFor="textEmail">Email</label>
            <div className="d-flex align-items-center justify-content-center">
              <MdSupervisorAccount className="login-icon" />
              <Field
                type="email"
                component="input"
                name="email"
                className="form-control"
              />
            </div>
            <ErrorMessage className="text-danger mt-2" name="email" component={"div"} />
          </div>
          <div className="form-group">
            <label htmlFor="textPassword">Password</label>
            <div className="d-flex align-items-center justify-content-center">
              <BsShieldLockFill className="login-icon login-icon-lock" />

              <Field
                type="password"
                component="input"
                name="password"
                className="form-control"
              />
            </div>
            <ErrorMessage className="text-danger mt-2" name="password" component={"div"} />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            disabled={isSubmitting}
          >
            <BsShieldLockFill className="btn-login-icon" />
            Login
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default Index;

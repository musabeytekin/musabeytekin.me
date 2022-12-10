import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
export default function Index() {
  return (
    <Formik
      initialValues={{
        answer: ""
      }}
      validate={(values) => {
        const errors = {};
        if (!values.answer) {
          errors.answer = "Answer Required";
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
          <div className="mb-3 answer-area">
            <Field
              component="textarea"
              name="answer"
              className="form-control"
            />
          </div>
          <button
            type="submit"
            className="btn btn-warning"
            disabled={isSubmitting}
          >
            Send Answer
          </button>
          <ErrorMessage name="answer" className="error-message" component={"span"}/>
        </Form>
      )}
    </Formik>
  );
}

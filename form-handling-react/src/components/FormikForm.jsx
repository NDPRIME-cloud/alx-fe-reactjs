import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const FormikForm = () => {
  // validation schema
  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().min(6, "Min 6 characters").required("Password is required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    console.log("Submitting to API:", values);
    resetForm();
  };

  return (
    <div style={styles.container}>
      <h2>User Registration (Formik)</h2>
      <Formik
        initialValues={{ username: "", email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form style={styles.form}>
          <Field
            type="text"
            name="username"
            placeholder="Username"
            style={styles.input}
          />
          <ErrorMessage name="username" component="p" style={styles.error} />

          <Field
            type="email"
            name="email"
            placeholder="Email"
            style={styles.input}
          />
          <ErrorMessage name="email" component="p" style={styles.error} />

          <Field
            type="password"
            name="password"
            placeholder="Password"
            style={styles.input}
          />
          <ErrorMessage name="password" component="p" style={styles.error} />

          <button type="submit" style={styles.button}>
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
};

const styles = {
  container: { width: "300px", margin: "auto", textAlign: "center" },
  form: { display: "flex", flexDirection: "column", gap: "10px" },
  input: { padding: "8px" },
  button: { padding: "8px", background: "#2196F3", color: "#fff" },
  error: { color: "red", fontSize: "12px" },
};

export default FormikForm;

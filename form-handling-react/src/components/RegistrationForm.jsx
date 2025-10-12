import React, { useState } from "react";

const RegistrationForm = () => {
  // form states
//   const [formData, setFormData] = useState({
//     username: "",
//     email: "",
//     password: "",
//   });
  const [username,setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password,setPassword] = useState("")

  const [error, setError] = useState("");

  // handle input change
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // basic validation
    if (!username || !email || !password) {
      setError("All fields are required!");
      return;
    }

    setError("");

    // simulate API submission
    console.log("Submitting form data to API:",username,email, password);

    // reset
     setUsername("");
     setEmail("");
     setPassword("")
  };

  return (
    <div style={styles.container}>
      <h2>User Registration (Controlled Form)</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={username}
          onChange={ (e)=>e.target.value}
          style={styles.input}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={e=>e.target.value}
          style={styles.input}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={e=>e.target.value}
          style={styles.input}
        />

        {error && <p style={styles.error}>{error}</p>}
        <button type="submit" style={styles.button}>
          Register
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: { width: "300px", margin: "auto", textAlign: "center" },
  form: { display: "flex", flexDirection: "column", gap: "10px" },
  input: { padding: "8px" },
  button: { padding: "8px", background: "#4CAF50", color: "#fff" },
  error: { color: "red" },
};

export default RegistrationForm;

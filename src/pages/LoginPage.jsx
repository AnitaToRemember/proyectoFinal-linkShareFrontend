import { useState } from "react";
import { loginUserService } from '../services/index';
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleForm = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const data = await loginUserService({ email, password });
      console.log(data);
      navigate("/MyLinks");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <section>
      <h1>Login to your account</h1>
      <form onSubmit={handleForm}>
        <fieldset>
          <label htmlFor="email">Email </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </fieldset>

        <fieldset>
          <label htmlFor="password">Password </label>
          <input
            type="password"
            id="password"
            name="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </fieldset>
        <button>Login</button>
        {error ? <p>{error}</p> : null}
      </form>

      <div>
        <h3>
          Do not have an account? <a href="/register">Register</a>
        </h3>
      </div>
    </section>
  );
};

export default LoginPage;

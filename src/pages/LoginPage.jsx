import { useState } from "react";
import { loginUserService } from '../services/index';

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [userName, setUserName] = useState("");

  const handleForm = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await loginUserService({ email, password, userName });
      // Lógica de inicio de sesión con éxito por ejemplo, redirigir al homepage
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
        <fieldset>
          <label htmlFor="userName">Username </label>
          <input
            type="userName"
            id="userName"
            name="userName"
            required
            onChange={(e) => setUserName(e.target.value)}
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

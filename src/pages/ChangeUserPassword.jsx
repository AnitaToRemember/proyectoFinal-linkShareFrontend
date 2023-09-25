import { useState } from "react";
import { registerUserService } from "../services/index";
import "../styles/RegisterPage.css";

const ChangeUserPassword = () => {
  //const [oldPass, setOldpass] = useState("");
  const [pass1, setPass1] = useState("");
  const [pass2, setPass2] = useState("");
  const [error, setError] = useState("");

  const handleForm = async (e) => {
    e.preventDefault();
    setError("");

    if (pass1 !== pass2) {
      setError("Passwords do not match");
      return;
    }

    try {
      await registerUserService({ password: pass1 });

    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <section>
      <h1>Change your password here</h1>
      <form onSubmit={handleForm}>
      <fieldset>
          <label htmlFor="oldPass">Old Password </label>
          <input
            type="password"
            id="oldPass"
            name="oldPass"
            required
            //onChange={(e) => setOldPass(e.target.value)}
          />
        </fieldset>

        <fieldset>
          <label htmlFor="pass1">Password </label>
          <input
            type="password"
            id="pass1"
            name="pass1"
            required
            onChange={(e) => setPass1(e.target.value)}
          />
        </fieldset>

        <fieldset>
          <label htmlFor="pass2">Repeat Password </label>
          <input
            type="password"
            id="pass2"
            name="pass2"
            required
            onChange={(e) => setPass2(e.target.value)}
          />
        </fieldset>

        <button>Save</button>
        {error ? <p>{error}</p> : null}
      </form>

      <div>
         <a href="./account">Cancel</a>
      </div>
    </section>
  );
};

export default ChangeUserPassword;

import { useState } from "react";
import { Link } from "react-router-dom";

function PasswordRecoveryPage() {
  // State para almacenar el correo electrónico, código de confirmación, mensaje de éxito/error, etc.
  const [email, setEmail] = useState("");
  const [confirmationCode, setConfirmationCode] = useState("");
  const [message, setMessage] = useState("");
  const [showConfirmationForm, setShowConfirmationForm] = useState(false);
  const [pass1, setPass1] = useState("");
  const [pass2, setPass2] = useState("");
  const [error, setError] = useState("");

  // Manejar cambios en el correo electrónico
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // Manejar cambios en el código de confirmación
  const handleConfirmationCodeChange = (e) => {
    setConfirmationCode(e.target.value);
  };

  // Enviar el correo electrónico y mostrar el formulario de confirmación
  const handleSubmitEmail = (e) => {
    e.preventDefault();

    if (email) {
      // Mostrar el formulario de confirmación y enviar un mensaje
      setShowConfirmationForm(true);
      setMessage(
        `A recovery mail has been sent to ${email}, please check your inbox.`
      );
    } else {
      setMessage("Please enter a valid email address.");
    }
  };

  // Manejar el envío del formulario de confirmación
  const handleSubmitConfirmationCode = (e) => {
    e.preventDefault();

    if (confirmationCode === "codigo_generado_aleatoriamente") {
      // Ocultar el formulario de confirmación y mostrar el formulario de restablecimiento de contraseña
      setShowConfirmationForm(false);
      setMessage("Password reset successful!");
    } else {
      setMessage("Please enter a valid confirmation code.");
    }
  };

  // Manejar el envío del formulario de restablecimiento de contraseña
  const handleForm = async (e) => {
    e.preventDefault();
    setError("");

    if (pass1 !== pass2) {
      setError("Passwords do not match");
      return;
    }

    try {
      // Aqui debo agregar la lógica para actualizar la contraseña en el servidor
      // await RecoveryService({ password: pass1 });
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="password-recovery-page">
      <h2>Reset your password</h2>
      {showConfirmationForm ? (
        <div>
          {/* Formulario de confirmación de código */}
          <form onSubmit={handleSubmitConfirmationCode}>
            <label>
              Enter the confirmation code sent to your email:
              <input
                type="text"
                value={confirmationCode}
                onChange={handleConfirmationCodeChange}
                placeholder="Confirmation Code"
                required
              />
            </label>
            <button type="submit" className="change-password-button">
              Reset Password
            </button>
          </form>
        </div>
      ) : (
        <div>
          {/* Formulario para enviar el correo electrónico */}
          <form onSubmit={handleSubmitEmail}>
            <label>
              Enter the email linked to your ShareIn account. You will receive a
              code to reset your password:
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Email"
                required
              />
            </label>
            <button type="submit">Send Recovery Mail</button>
          </form>
        </div>
      )}

      {showConfirmationForm ? (
        <section>
          {/* Formulario de restablecimiento de contraseña */}
          <h1>Reset your password</h1>
          <form onSubmit={handleForm}>
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

            <button>
              <Link to="/">Save</Link>
            </button>
            {error ? <p>{error}</p> : null}
          </form>
        </section>
      ) : null}
      <p>{message}</p>
    </div>
  );
}

export default PasswordRecoveryPage;

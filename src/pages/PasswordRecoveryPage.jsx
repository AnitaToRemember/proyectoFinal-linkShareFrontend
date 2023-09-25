import { useState } from "react";

function PasswordRecoveryPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email) {
      setMessage(`A recovery mail has been sent to ${email}`);
    } else {
      setMessage("Please enter a valid email address.");
    }
  };

  return (
    <div className="password-recovery-page">
      <h2>Reset your password</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Enter the email linked to your ShareIn account. There you will receive
          a code to reset your password.
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
      <p>{message}</p>
    </div>
  );
}

export default PasswordRecoveryPage;

import React, { useState } from "react";
import './AccountPage.css';

const AccountPage = () => {
  const [avatar, setAvatar] = useState("/path-to-default-avatar.png"); // Ruta de la imagen de avatar predeterminada
  const [isEditingAvatar, setIsEditingAvatar] = useState(false);
  const [newAvatar, setNewAvatar] = useState(null); // Almacenar la nueva imagen de avatar aquí

  const handleAvatarChange = () => {
    if (newAvatar) {
      
      setAvatar(newAvatar);
      setIsEditingAvatar(false);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setNewAvatar(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section>
      <h1>Your Account</h1>
      <div className="account-details">
        <h2>Profile Information</h2>
        {/* Mostrar la foto de perfil actual */}
        <div className="avatar-container">
          <img src={avatar} alt="Profile Avatar" className="avatar" />
          {isEditingAvatar && (
            <div className="avatar-edit">
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
              />
              <button onClick={handleAvatarChange}>Save</button>
            </div>
          )}
        </div>
        <p><strong>Username:</strong> johndoe</p>
        <p><strong>Email:</strong> john@example.com</p>
        <p><strong>Full Name:</strong> John Doe</p>
        {/* Otros detalles del perfil */}
      </div>
      <div className="account-actions">
        <h2>Account Actions</h2>
        {/* Botón para cambiar la foto de perfil */}
        {isEditingAvatar ? (
          <button onClick={() => setIsEditingAvatar(false)}>Cancel</button>
        ) : (
          <button onClick={() => setIsEditingAvatar(true)}>Change Avatar</button>
        )}
        <button>Edit Profile</button>
        <button>Change Password</button>
        <button>Delete Account</button>
      </div>
    </section>
  );
};

export default AccountPage;


import { useContext, useRef, useState } from "react";
import defaultAvatar from "../assets/default-avatar.png";
import { AuthContext } from "../context/AuthContext";
import { uploadAvatar } from "../services";
import { Link } from "react-router-dom";
import "../styles/AccountPage.css";

const AccountPage = () => {
  const { user, token } = useContext(AuthContext);
  const [avatar, setAvatar] = useState(user ? user.avatar : defaultAvatar)
  let userAvatarURL = user ? user.avatar || defaultAvatar : defaultAvatar;
  const [selectedAvatarFile, setSelectedAvatarFile] = useState(null);
  const [isEditingAvatar, setIsEditingAvatar] = useState(false);
  

  const fileInputRef = useRef(null);

  const showEditAvatar = () => {
    setIsEditingAvatar(true);
  };

  const handleAvatarClick = () => {
    fileInputRef.current.click();
  };

  const handleAvatarChange = (e) => {
    setSelectedAvatarFile(e.target.files[0]);
    setAvatar(URL.createObjectURL(e.target.files[0]));
    userAvatarURL = avatar
  };

  const uploadImage = async (imageFile) => {
    try {
      await uploadAvatar({ imageFile, token });
      setAvatar(URL.createObjectURL(imageFile));
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsEditingAvatar(false);
    if (selectedAvatarFile) {
      uploadImage(selectedAvatarFile);
    }
  };
  

  return (
    <section>
      <h1>Your Account</h1>
      <div className="account-details">
        <h2>Profile Information</h2>
        <div className="avatar-container">
          <img
            key={avatar}
            src={userAvatarURL}
            alt="Profile Avatar"
            className="avatar"
            onClick={showEditAvatar}
          />
          {isEditingAvatar && (
            <div className="avatar-edit">
              <input
                type="file"
                id="fileInput"
                className="custom-file-input"
                accept="image/*"
                onChange={handleAvatarChange}
                ref={fileInputRef}
              />
              <label htmlFor="fileInput">
                <button onClick={handleAvatarClick}> Select the file </button>
              </label>
              <button
                type="submit"
                className="save-button"
                onClick={handleSubmit}
              >
                Send
              </button>
            </div>
          )}
        </div>
        <p>
          <strong>Username:</strong> {user ? user.username : 'N/A'}
        </p>
        <p>
          <strong>Email:</strong> {user ? user.email : 'N/A'}
        </p>
        {/* Otros detalles del perfil */}
      </div>
      <div className="account-actions">
        <h2>Account Actions</h2>
        <button className="change-password-button">
          <Link to="/change-password">Change Password</Link>
        </button>
        <button>Delete Account</button>
      </div>
    </section>
  );
};

export default AccountPage;

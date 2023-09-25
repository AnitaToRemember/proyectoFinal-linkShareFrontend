import { useContext, useState, useEffect } from "react";
import defaultAvatar from '../assets/default-avatar.png'
import '../styles/AccountPage.css';
import { AuthContext } from "../context/AuthContext";

const AccountPage = () => {
  let [avatar, setAvatar] = useState(defaultAvatar); // Ruta de la imagen de avatar predeterminada
  const { user } = useContext(AuthContext)
  if (user.avatar) {
    avatar = user.avatar
  }
  const [isEditingAvatar, setIsEditingAvatar] = useState(false);
  const [newAvatar, setNewAvatar] = useState(null); // Almacenar la nueva imagen de avatar aquí
  const [refreshImage, setRefreshImage] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    setNewAvatar(file)
    const reader = new FileReader()
    reader.onload = (event) => {
      setAvatar(event.target.result)
    }
    reader.readAsDataURL(file)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (newAvatar) {
      console.log("Manu");
      console.log(newAvatar);
      setRefreshImage(true);
    }
  }

  useEffect(() => {
    if (refreshImage) {
      // Realizar alguna acción para cargar la imagen actualizada (puedes realizar una solicitud al servidor si es necesario)
      // Luego, una vez que la imagen se ha actualizado, establecer refreshImage nuevamente en false
      setRefreshImage(false);
    }
  }, [refreshImage]);


  /*const handleAvatarChange = (e) => {
    setNewAvatar(e.target.files[0])
      setAvatar(newAvatar);
      setIsEditingAvatar(false);
    
  };*/

  /*const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setNewAvatar(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };*/
  const handleAvatarClick = () => {
    setIsEditingAvatar(true);
  };
  return (
    <section>
      <h1>Your Account</h1>
      <div className="account-details">
        <h2>Profile Information</h2>
        <div className="avatar-container">
          <img src={`${avatar}?${Date.now()}`}  alt="Profile Avatar" className="avatar" onClick={handleAvatarClick} />
          {isEditingAvatar && (
            <div className="avatar-edit">
              <form onSubmit={handleSubmit}>
                <input type="file" accept="image/*" onChange={handleFileChange}/>
                <button type="submit">Enviar</button>
              </form>
              {/*<input 
                type="file"
                accept="image/*"
                onChange={handleFileChange}
              />
          <button onClick={handleAvatarChange}>Save</button>*/}
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
        {/*{isEditingAvatar ? (
          <button onClick={() => setIsEditingAvatar(false)}>Cancel</button>
        ) : (
          <button onClick={() => setIsEditingAvatar(true)}>Change Avatar</button>
        )}*/}
        <button>Change Password</button>
        <button>Delete Account</button>
      </div>
    </section>
  );
};

export default AccountPage;


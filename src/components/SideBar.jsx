import { useState } from 'react';

function SideBar() {
  // State para rastrear si el menú está abierto o cerrado
  const [menuOpen, setMenuOpen] = useState(false);

  // Función para alternar entre abrir y cerrar el menú
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={`sidebar ${menuOpen ? 'open' : ''}`}>
      {/* Icono de hamburguesa que se puede hacer clic */}
      <div className="hamburger-icon" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      {/* Lista de elementos de menú */}
      <ul className="menu-list">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/services">Settings</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </div>
  );
}

export default SideBar;

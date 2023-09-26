import { useState, useEffect } from 'react';

function SwitchMode() {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem('isDarkMode') === 'true'
  );

  // Use useEffect to update the class and store the state in localStorage
  useEffect(() => {
    document.body.classList.toggle('dark-mode', isDarkMode);
    localStorage.setItem('isDarkMode', isDarkMode);
  }, [isDarkMode]);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="switch-mode">
      <label>
        <input type="checkbox" checked={isDarkMode} onChange={toggleMode} />
        {isDarkMode ? 'Dark mode' : 'Dark mode'}
      </label>
    </div>
  );
}

export default SwitchMode;


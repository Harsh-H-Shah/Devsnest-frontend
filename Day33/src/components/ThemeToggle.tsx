import React, { useContext } from 'react';
import ThemeContext, { ThemeContextType } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { theme, setTheme } = useContext<ThemeContextType>(ThemeContext);
  return (
    <button
      onClick={() => {
        setTheme(!theme);
      }}
    >
      {theme === true ? 'dark' : 'light'}
    </button>
  );
};

export default ThemeToggle;

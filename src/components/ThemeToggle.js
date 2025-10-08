import React, { useCallback } from 'react';
import { useAppContext } from '../contexts/AppContext';
import { ReactComponent as SunIcon } from '../assets/sun.svg';
import { ReactComponent as MoonIcon } from '../assets/moon.svg';

const ThemeToggle = React.memo(() => {
  const { state, dispatch } = useAppContext();
  const { theme } = state;

  console.log('ThemeToggle rendered');

  const toggleTheme = useCallback(() => {
    dispatch({ type: 'TOGGLE_THEME' });
  }, [dispatch]);

  return (
    <button onClick={toggleTheme}>
      {theme === 'light' ? (
        <MoonIcon
          className="lucide lucide-moon-icon lucide-moon"
          width={24}
          height={24}
        />
      ) : (
        <SunIcon
          className="lucide lucide-sun-icon lucide-sun"
          width={24}
          height={24}
        />
      )}
    </button>
  );
});

ThemeToggle.displayName = 'ThemeToggle';

export default ThemeToggle;

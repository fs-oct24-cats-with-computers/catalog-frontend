import { useLayoutEffect, useState } from 'react';

export const useTheme = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem('app-theme') || 'light-mode',
  );

  useLayoutEffect(() => {
    document.documentElement.setAttribute('class', theme);
    localStorage.setItem('app-theme', theme);
    // document.documentElement.classList.add(theme);
  }, [theme]);

  return { theme, setTheme };
};

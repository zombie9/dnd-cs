import React from 'react';
import { ThemeButton } from '../styles/sharedStyles';

import { ThemeType } from '../types';

export const ThemeToggle: React.FC<ThemeType> = ({ theme, toggleTheme }) => {
  return (
    <ThemeButton style={{ marginLeft: '1rem' }} onClick={toggleTheme}>
      <code>{theme === 'light' ? 'DARK' : 'LIGHT'}</code>
    </ThemeButton>
  );
};

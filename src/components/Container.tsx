import React from 'react';

import { ThemeType } from '../types';

import { Header } from './Header';
import { TextInput } from './TextInput';

export const Container: React.FC<ThemeType> = ({ theme, toggleTheme }) => {
  return (
    <>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <TextInput />
    </>
  );
};

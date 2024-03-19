import React from 'react';

import { ThemeButton } from '../../styles/sharedStyles';

interface MenuButtonProps {
  setMenuIsOpen: (value: boolean | ((menuIsOpen: boolean) => boolean)) => void;
}

export const MenuButton: React.FC<MenuButtonProps> = ({ setMenuIsOpen }) => {
  return (
    <>
      <ThemeButton
        style={{ marginRight: '1rem' }}
        onClick={() => setMenuIsOpen((menuIsOpen) => !menuIsOpen)}
      >
        <code>MENU</code>
      </ThemeButton>
    </>
  );
};

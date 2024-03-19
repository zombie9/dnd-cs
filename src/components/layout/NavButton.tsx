import React from 'react';
// import { useNavigate } from 'react-router-dom';

import { ThemeButton } from '../../styles/sharedStyles';

interface NavButtonProps {
  text: string;
  path: string;
  setMenuIsOpen: (boolean: boolean) => void;
}

export const NavButton: React.FC<NavButtonProps> = ({ text, path, setMenuIsOpen }) => {
  // const navigate = useNavigate();
  const handleClick = () => {
    setMenuIsOpen(false);
    console.log('path', path);
    // navigate(path);
  };

  return (
    <>
      <ThemeButton onClick={handleClick}>
        <code>{text}</code>
      </ThemeButton>
    </>
  );
};

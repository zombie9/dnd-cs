import React from 'react';
import { useNavigate } from 'react-router-dom';

import { ROUTES } from '../../constants';
import { useAuth } from '../../context/authContext';
import { ThemeButton } from '../../styles/sharedStyles';

interface MenuButtonProps {
  setMenuIsOpen: (value: boolean | ((menuIsOpen: boolean) => boolean)) => void;
}

const LogoutButton: React.FC<MenuButtonProps> = ({ setMenuIsOpen }) => {
  const { logOut } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    setMenuIsOpen(false);
    logOut()
      .then(() => {
        navigate(ROUTES.LOGIN);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <ThemeButton onClick={() => handleLogout()}>
        <code>LOGOUT</code>
      </ThemeButton>
    </>
  );
};

export default LogoutButton;

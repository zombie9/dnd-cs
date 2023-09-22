import React, { useState } from 'react';
import styled from 'styled-components';

import { ThemeType } from '../types';

import { MenuButton } from './MenuButton';
import { NavButton } from './NavButton';
import { ThemeToggle } from './ThemeToggle';

interface MenuBarProps {
  open: boolean;
}

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.5rem;
  padding: 1rem 0;
  padding-right: 1rem;
  /* box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1); */
  position: fixed;
  top: 0;
  left: 0;
  background: ${({ theme }) => theme.background};
  z-index: 95;
  width: 100vw;

  @media only screen and (min-width: 720px) {
    font-size: 2rem;
  }
`;

const MenuBar = styled.div<MenuBarProps>`
  transition: all 0.2s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1em;
  font-size: 1.5rem;
  padding: 1rem 0;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);
  position: fixed;
  top: ${(props) => (props.open ? '58px' : 0)};
  left: 0;
  height: 2.5rem;
  width: 100vw;
  background: ${({ theme }) => theme.background};
  z-index: 90;

  @media only screen and (min-width: 720px) {
    top: ${(props) => (props.open ? '70px' : 0)};
    font-size: 2rem;
  }
`;

export const Header: React.FC<ThemeType> = ({ theme, toggleTheme }) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  return (
    <>
      <StyledHeader>
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        <code>C H A R A C T E R</code>
        <MenuButton setMenuIsOpen={setMenuIsOpen} />
      </StyledHeader>
      <MenuBar open={menuIsOpen}>
        <NavButton text="SAVE" path="/save" setMenuIsOpen={setMenuIsOpen} />
        <NavButton text="LOAD" path="/load" setMenuIsOpen={setMenuIsOpen} />
      </MenuBar>
    </>
  );
};

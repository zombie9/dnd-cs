import React from 'react';
import styled from 'styled-components';

import { ThemeType } from '../types';

import { Header } from './Header';
import { Persona } from './Persona';
import { Abilities } from './Abilities';

const StyledContainer = styled.div`
  margin: 0 auto;
  padding: 5.6rem 0;
  max-width: 1200px;
`;

export const Container: React.FC<ThemeType> = ({ theme, toggleTheme }) => {
  return (
    <>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <StyledContainer>
        <Persona />
        <Abilities />
      </StyledContainer>
    </>
  );
};

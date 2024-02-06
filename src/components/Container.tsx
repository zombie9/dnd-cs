import React from 'react';
import styled from 'styled-components';

import { ThemeType } from '../types';

import { Header } from './Header';
import { Persona } from './Persona';
import { Abilities } from './Abilities';
import { Skills } from './Skills';
import { Traits } from './Traits';

const StyledContainer = styled.div`
  margin: 0 auto;
  padding: 5.6rem 0;
  max-width: 1200px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr 3fr;
  gap: 1rem;
  margin-bottom: 1rem;
`;

export const Container: React.FC<ThemeType> = ({ theme, toggleTheme }) => {
  return (
    <>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <StyledContainer>
        <Persona />
        <Abilities />
        <Grid>
          <Skills />
          <Traits />
        </Grid>
      </StyledContainer>
    </>
  );
};

import React from 'react';
import styled from 'styled-components';

import { ThemeType } from '../types';

import { Header } from './Header';
import { Persona } from './Persona';
import { Abilities } from './Abilities';
import { Skills } from './Skills';
import { Traits } from './Traits';
import { Spells } from './Spells';
import { Box } from '../styles/sharedStyles';

const StyledContainer = styled.div`
  margin: 0 auto;
  padding: 5.6rem 0;
  max-width: 1200px;
`;

const SkillGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr 3fr;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const SpellGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
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
        <SkillGrid>
          <Skills />
          <Traits />
        </SkillGrid>
        <SpellGrid>
          <Spells />
          <Box />
          <Box />
        </SpellGrid>
      </StyledContainer>
    </>
  );
};

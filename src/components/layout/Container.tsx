import styled from 'styled-components';

import { Persona } from '../character/Persona';
import { Abilities } from '../character/Abilities';
import { Skills } from '../character/Skills';
import { Traits } from '../character/Traits';
import { Spells } from '../character/Spells';
import { Box } from '../../styles/sharedStyles';

const StyledContainer = styled.div`
  margin: 0 auto;
  padding: 5.6rem 0;
  max-width: 1200px;
`;

const SkillGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 4fr 2fr;
  grid-auto-rows: 1fr;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const SpellGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr 3fr;
  gap: 1rem;
`;

export const Container = () => {
  return (
    <>
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
        <Box style={{ minHeight: '17rem' }} />
      </StyledContainer>
    </>
  );
};

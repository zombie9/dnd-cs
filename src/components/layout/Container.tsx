import styled from 'styled-components';

import { Persona } from '../character/Persona';
import { Abilities } from '../character/Abilities';
import { Skills } from '../character/Skills';
import { Traits } from '../character/Traits';
import { Spells } from '../character/Spells';
import { ClassAbilities } from '../character/ClassAbilities';
import { OtherAbilities } from '../character/OtherAbilities';
import { Equipment } from '../character/Equipment';
import { ArmorAndWeapons } from '../character/ArmorAndWeapons';
import { Notes } from '../character/Notes';

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

const EquipmentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  min-height: 27rem;
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
          <ClassAbilities />
          <OtherAbilities />
        </SpellGrid>
        <EquipmentGrid>
          <Equipment />
          <ArmorAndWeapons />
        </EquipmentGrid>
        <Notes />
      </StyledContainer>
    </>
  );
};

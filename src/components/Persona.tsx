import React, { useContext } from 'react';
import styled from 'styled-components';
import { CharacterContext } from '../context/context';

import { Box } from '../styles/sharedStyles';
import { PersonaItemType } from '../types/character';

const IntersectingLabel = styled.label`
  position: absolute;
  font-size: 0.7rem;
  top: -0.5rem;
  left: 0.2rem;
  padding: 0 0.5em;
  z-index: 10;
  background: ${({ theme }) => theme.panel};
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

const PersonaGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  /* grid-template-rows: repeat(2, 1fr); */
  gap: 1rem;
`;

export const Persona: React.FC = () => {
  const { character, setCharacter } = useContext(CharacterContext);
  const persona = character.persona.slice(0, 6);
  console.log('persona', persona);

  const handleChange = (event: React.FormEvent<HTMLInputElement>, index: number) => {
    const personaFields = character.persona;
    const currentPersonaField = personaFields[index];
    const newPersonaField = {
      ...currentPersonaField,
      value: event.currentTarget.value
    };
    personaFields[index] = newPersonaField;
    setCharacter({
      ...character,
      persona: personaFields
    });
    console.log('character.persona', character.persona);
  };

  console.log('character', character);

  return (
    <Wrapper>
      <Box style={{ flexGrow: '1' }}>
        <PersonaGrid>
          {persona.map((personaItem: PersonaItemType, index: number) => {
            return (
              <InputWrapper key={personaItem.label}>
                <IntersectingLabel htmlFor={personaItem.label}>
                  {personaItem.label}
                </IntersectingLabel>
                <input
                  autoComplete="off"
                  type="text"
                  id="name"
                  value={personaItem.value}
                  onChange={(event) => handleChange(event, index)}
                />
              </InputWrapper>
            );
          })}
        </PersonaGrid>
      </Box>
      <Box style={{ maxWidth: '8rem' }}>
        <Row>
          <InputWrapper>
            <IntersectingLabel htmlFor="level">LEVEL</IntersectingLabel>
            <input
              type="text"
              id="level"
              value={character.persona[6].value}
              onChange={(event) => handleChange(event, 6)}
            />
          </InputWrapper>
        </Row>
        <Row>
          <InputWrapper>
            <IntersectingLabel htmlFor="experience">EXPERIENCE</IntersectingLabel>
            <input
              type="text"
              id="experience"
              value={character.persona[7].value}
              onChange={(event) => handleChange(event, 7)}
            />
          </InputWrapper>
        </Row>
      </Box>
    </Wrapper>
  );
};

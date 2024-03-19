import React, { useContext } from 'react';

import { Box } from '../../styles/sharedStyles';

import styled from 'styled-components';

import { CharacterContext } from '../../context/context';

const IntersectingLabel = styled.label`
  position: absolute;
  font-size: 0.7rem;
  top: -0.5rem;
  left: 0.2rem;
  padding: 0 0.5em;
  z-index: 10;
  background: ${({ theme }) => theme.panel};
`;

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const TraitsBox = styled(Box)`
  margin-bottom: 0;
`;

export const Traits: React.FC = () => {
  const { character, setCharacter } = useContext(CharacterContext);
  const { traits } = character;

  const handleChange = (event: React.FormEvent<HTMLTextAreaElement>, index: number) => {
    console.log(index, 'change', event.currentTarget.value);
    const traitsEntries = traits;
    const traitToChange = traitsEntries[index];
    const newTrait = {
      ...traitToChange,
      value: event.currentTarget.value
    };
    traitsEntries[index] = newTrait;
    setCharacter({
      ...character,
      traits: traitsEntries
    });
  };

  return (
    <>
      {traits.map((trait, index) => {
        return (
          <TraitsBox key={`${index}${trait.label}`}>
            <InputWrapper>
              <textarea
                spellCheck="false"
                value={trait.value}
                onChange={(event) => handleChange(event, index)}
              />
              <IntersectingLabel>{trait.label.toUpperCase()}</IntersectingLabel>
            </InputWrapper>
          </TraitsBox>
        );
      })}
    </>
  );
};

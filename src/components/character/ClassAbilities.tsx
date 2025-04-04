import React, { useContext } from 'react';

import { Box } from '../../styles/sharedStyles';

import styled from 'styled-components';

import { CharacterContext } from '../../context/context';

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const IntersectingLabel = styled.label`
  position: absolute;
  font-size: 0.7rem;
  top: -0.5rem;
  left: 0.2rem;
  padding: 0 0.5em;
  z-index: 10;
  background: ${({ theme }) => theme.panel};
`;

export const ClassAbilities: React.FC = () => {
  const { character, setCharacter } = useContext(CharacterContext);
  const { classAbilities } = character;

  const handleChange = (event: React.FormEvent<HTMLTextAreaElement>) => {
    const updatedValue = event.currentTarget.value;
    const updatedField = { ...classAbilities, value: updatedValue };
    setCharacter({
      ...character,
      classAbilities: updatedField
    });
  };

  return (
    <Box>
      <InputWrapper>
        <textarea
          spellCheck="false"
          value={classAbilities?.value}
          onChange={(event) => handleChange(event)}
        />
        <IntersectingLabel>{classAbilities?.label.toUpperCase()}</IntersectingLabel>
      </InputWrapper>
    </Box>
  );
};

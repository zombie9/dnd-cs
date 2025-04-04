import React, { useContext } from 'react';

import { Box } from '../../styles/sharedStyles';

import styled from 'styled-components';

import { CharacterContext } from '../../context/context';

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  textarea {
    min-height: 27rem;
  }
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

export const Notes: React.FC = () => {
  const { character, setCharacter } = useContext(CharacterContext);
  const { notes } = character;

  const handleChange = (event: React.FormEvent<HTMLTextAreaElement>) => {
    const updatedValue = event.currentTarget.value;
    const updatedField = { ...notes, value: updatedValue };
    setCharacter({
      ...character,
      notes: updatedField
    });
  };

  return (
    <Box>
      <InputWrapper>
        <textarea
          spellCheck="false"
          value={notes?.value}
          onChange={(event) => handleChange(event)}
        />
        <IntersectingLabel>{notes?.label.toUpperCase()}</IntersectingLabel>
      </InputWrapper>
    </Box>
  );
};

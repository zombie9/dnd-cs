import React, { useContext } from 'react';

import { Box } from '../styles/sharedStyles';

import styled from 'styled-components';

import { CharacterContext } from '../context/context';

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
  const { character } = useContext(CharacterContext);
  console.log('character', character);

  return (
    <>
      <TraitsBox>
        <InputWrapper>
          <textarea />
          <IntersectingLabel>DESCRIPTION</IntersectingLabel>
        </InputWrapper>
      </TraitsBox>
      <TraitsBox>
        <InputWrapper>
          <textarea />
          <IntersectingLabel>PERSONALITY TRAITS</IntersectingLabel>
        </InputWrapper>
      </TraitsBox>
      <TraitsBox>
        <InputWrapper>
          <textarea />
          <IntersectingLabel>RACIAL TRAITS</IntersectingLabel>
        </InputWrapper>
      </TraitsBox>
      <TraitsBox>
        <InputWrapper>
          <textarea />
          <IntersectingLabel>CLASS ABILITIES</IntersectingLabel>
        </InputWrapper>
      </TraitsBox>
    </>
  );
};

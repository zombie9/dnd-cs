import React from 'react';
import styled from 'styled-components';

import { Box } from '../styles/sharedStyles';

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

export const Persona: React.FC = () => {
  return (
    <Wrapper>
      <Box style={{ flexGrow: '1' }}>
        <Row>
          <InputWrapper>
            <IntersectingLabel htmlFor="name">NAME</IntersectingLabel>
            <input autoComplete="off" type="text" id="name" />
          </InputWrapper>
          <InputWrapper>
            <IntersectingLabel htmlFor="race">RACE</IntersectingLabel>
            <input type="text" id="race" />
          </InputWrapper>
          <InputWrapper>
            <IntersectingLabel htmlFor="alignment">ALIGNMENT</IntersectingLabel>
            <input type="text" id="alignment" />
          </InputWrapper>
        </Row>
        <Row>
          <InputWrapper>
            <IntersectingLabel htmlFor="class">CLASS</IntersectingLabel>
            <input type="text" id="class" />
          </InputWrapper>
          <InputWrapper>
            <IntersectingLabel htmlFor="subclass">SUBCLASS</IntersectingLabel>
            <input type="text" id="subclass" />
          </InputWrapper>
          <InputWrapper>
            <IntersectingLabel htmlFor="background">BACKGROUND</IntersectingLabel>
            <input type="text" id="background" />
          </InputWrapper>
        </Row>
      </Box>
      <Box style={{ maxWidth: '8rem' }}>
        <Row>
          <InputWrapper>
            <IntersectingLabel htmlFor="experience">LEVEL</IntersectingLabel>
            <input type="text" id="level" />
          </InputWrapper>
        </Row>
        <Row>
          <InputWrapper>
            <IntersectingLabel htmlFor="experience">EXPERIENCE</IntersectingLabel>
            <input type="text" id="experience" />
          </InputWrapper>
        </Row>
      </Box>
    </Wrapper>
  );
};

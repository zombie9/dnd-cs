import React from 'react';

import { Box } from '../styles/sharedStyles';

import { skills } from '../models/skills';
import styled from 'styled-components';

const SkillRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.9rem;
`;

const SkillLabel = styled.label`
  font-size: 0.7rem;
  text-transform: uppercase;
`;

const SkillAbility = styled.span`
  color: ${({ theme }) => theme.mid};
  margin-left: 0.5rem;
`;

const SkillModifierBox = styled.div`
  font-size: 0.7rem;
  border: 1px solid ${({ theme }) => theme.secondary};
  margin: 0 0.75rem;
  padding: 0.2rem;
  /* background-color: ${({ theme }) => theme.background}; */
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr 3fr;
  gap: 1rem;
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

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const Skills: React.FC = () => {
  return (
    <Grid>
      <Box style={{ gridRow: '1 / span 2' }}>
        {skills.map((skill, index) => {
          return (
            <SkillRow key={index}>
              <input type="checkbox" id={skill.name} name={skill.name} />
              <SkillModifierBox>+4</SkillModifierBox>
              <SkillLabel htmlFor={skill.name}>
                {skill.name}
                <SkillAbility>{`(${skill.ability})`}</SkillAbility>
              </SkillLabel>
            </SkillRow>
          );
        })}
      </Box>
      <Box>
        <InputWrapper>
          <textarea />
          <IntersectingLabel>PERSONALITY TRAITS</IntersectingLabel>
        </InputWrapper>
      </Box>
      <Box>
        <InputWrapper>
          <textarea />
          <IntersectingLabel>PERSONALITY TRAITS</IntersectingLabel>
        </InputWrapper>
      </Box>
      <Box>
        <InputWrapper>
          <textarea />
          <IntersectingLabel>PERSONALITY TRAITS</IntersectingLabel>
        </InputWrapper>
      </Box>
      <Box>
        <InputWrapper>
          <textarea />
          <IntersectingLabel>PERSONALITY TRAITS</IntersectingLabel>
        </InputWrapper>
      </Box>
    </Grid>
  );
};

import React, { useContext } from 'react';

import { Box } from '../styles/sharedStyles';

import styled from 'styled-components';
import { calculateModifier } from '../utils/mapAbilityModifiers';
import { CharacterContext } from '../context/context';
import { SkillsType } from '../types/character';

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
  min-width: 1rem;
  text-align: center;
  background-color: ${({ theme }) => theme.background};
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
  const { character, setCharacter } = useContext(CharacterContext);
  const { abilities, skills } = character;

  const handleChange = (index: number) => {
    const isProficient = skills[index].proficient;
    const updatedSkills: SkillsType = [...skills];
    updatedSkills[index] = {
      ...updatedSkills[index],
      proficient: !isProficient
    };

    setCharacter({
      ...character,
      skills: updatedSkills
    });
  };

  return (
    <Grid>
      <Box style={{ gridRow: '1 / span 2' }}>
        {skills.map((skillObj, index) => {
          const ability = abilities.find(
            (abilityObject) => abilityObject.ability === skillObj.ability
          );
          const proficientSkill = skillObj.proficient;
          return (
            <SkillRow key={index}>
              <input
                type="checkbox"
                id={skillObj.skill}
                name={skillObj.skill}
                defaultChecked={proficientSkill}
                onChange={() => handleChange(index)}
              />
              <SkillModifierBox>
                {calculateModifier(ability!.score, skillObj.proficient)}
              </SkillModifierBox>
              <SkillLabel htmlFor={skillObj.skill}>
                {skillObj.skill}
                <SkillAbility>{`(${skillObj.ability.slice(0, 3)})`}</SkillAbility>
              </SkillLabel>
            </SkillRow>
          );
        })}
      </Box>
      <Box>
        <InputWrapper>
          <textarea />
          <IntersectingLabel>DESCRIPTION</IntersectingLabel>
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
          <IntersectingLabel>RACIAL TRAITS</IntersectingLabel>
        </InputWrapper>
      </Box>
      <Box>
        <InputWrapper>
          <textarea />
          <IntersectingLabel>CLASS ABILITIES</IntersectingLabel>
        </InputWrapper>
      </Box>
    </Grid>
  );
};

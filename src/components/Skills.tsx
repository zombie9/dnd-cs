import React, { useContext } from 'react';

import { Box } from '../styles/sharedStyles';

import styled from 'styled-components';
import { calculateModifier } from '../utils/mapAbilityModifiers';
import { CharacterContext } from '../context/context';
import { SkillsType } from '../types';

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

const SkillsBox = styled(Box)`
  margin-bottom: 0;
`;

export const Skills: React.FC = () => {
  const { character, setCharacter } = useContext(CharacterContext);
  const { abilities, skills, stats } = character;
  const proficiency = stats[2].score;

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
    <SkillsBox style={{ gridRow: '1 / span 2' }}>
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
              {calculateModifier(ability!.score, skillObj.proficient, proficiency)}
            </SkillModifierBox>
            <SkillLabel htmlFor={skillObj.skill}>
              {skillObj.skill}
              <SkillAbility>{`(${skillObj.ability.slice(0, 3)})`}</SkillAbility>
            </SkillLabel>
          </SkillRow>
        );
      })}
    </SkillsBox>
  );
};

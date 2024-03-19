import React, { useRef, useContext } from 'react';
import styled from 'styled-components';
import { CharacterContext } from '../../context/context';

import { calculateModifier } from '../../utils/mapAbilityModifiers';

import { Box } from '../../styles/sharedStyles';
import { AbilitiesType, StatsType } from '../../types';
// import { AbilitiesType, StatsType } from '../types/character';

const Row = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const IntersectingLabel = styled.label`
  position: absolute;
  font-size: 0.7rem;
  top: -0.5rem;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  padding: 0 0.5em;
  z-index: 10;
  background: ${({ theme }) => theme.panel};
`;

const InputWrapper = styled.div`
  position: relative;
`;

const ModifierBox = styled.div`
  position: absolute;
  font-size: 0.8rem;
  bottom: -0.5rem;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  padding: 0 0.5em;
  z-index: 10;
  background: ${({ theme }) => theme.background};
  border: 1px solid ${({ theme }) => theme.secondary};
  width: 2em;
  text-align: center;
`;

const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

export const Abilities: React.FC = () => {
  const { character, setCharacter } = useContext(CharacterContext);
  const { abilities, stats } = character;
  const abilityRef = useRef<HTMLInputElement>(null);
  const statRef = useRef<HTMLInputElement>(null);

  const handleChange = (
    event: React.FormEvent<HTMLInputElement>,
    abilityType: 'abilities' | 'stats',
    index: number
  ) => {
    const updatedAbilities: AbilitiesType | StatsType = character[abilityType];
    const currentObject = updatedAbilities[index];
    const newObject = {
      ...currentObject,
      score: parseInt(event.currentTarget.value, 10)
    };
    updatedAbilities[index] = newObject;
    setCharacter({
      ...character,
      [abilityType]: updatedAbilities
    });
  };

  return (
    <RowWrapper>
      <Box>
        <Row>
          {abilities.map((abilityObject, index: number) => {
            const { ability, score } = abilityObject;
            return (
              <InputWrapper key={`${ability}-${index}`}>
                <IntersectingLabel htmlFor={ability}>
                  {ability.toLocaleUpperCase()}
                </IntersectingLabel>
                <input
                  style={{ textAlign: 'center', height: '4em' }}
                  type="text"
                  id={ability}
                  ref={abilityRef}
                  value={score}
                  onChange={(event) => handleChange(event, 'abilities', index)}
                />
                <ModifierBox>{calculateModifier(abilityObject.score)}</ModifierBox>
              </InputWrapper>
            );
          })}
        </Row>
      </Box>
      <Box>
        <Row>
          {stats.map((statObject, index) => {
            const { stat, score } = statObject;
            return (
              <InputWrapper key={`${stat}-${index}`}>
                <IntersectingLabel style={{ whiteSpace: 'nowrap' }} htmlFor={stat}>
                  {stat.toLocaleUpperCase()}
                </IntersectingLabel>
                <input
                  style={{ textAlign: 'center', height: '4em' }}
                  type="text"
                  id={stat}
                  ref={statRef}
                  value={score}
                  onChange={(event) => handleChange(event, 'stats', index)}
                />
              </InputWrapper>
            );
          })}
        </Row>
      </Box>
    </RowWrapper>
  );
};

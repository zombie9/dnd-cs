import React, { useRef } from 'react';
import styled from 'styled-components';

import { mapAbilityModifiers } from '../utils/mapAbilityModifiers';

import { Box } from '../styles/sharedStyles';

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
  background: ${({ theme }) => theme.background};
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

const ABILITIES = ['strength', 'intelligence', 'dexterity', 'wisdom', 'constitution', 'charisma'];
const scores = [8, 10, 18, 14, 16, 20];
const HEALTH = ['armour class', 'hit points'];

export const Abilities: React.FC = () => {
  const abilityRef = useRef<HTMLInputElement>(null);

  const calculateModifier = (ability: number) => {
    if (ability !== null) {
      const modifier = mapAbilityModifiers(ability);
      return `${modifier > 0 ? '+' : ''}${modifier}`;
    }
    return 0;
  };

  return (
    <RowWrapper>
      <Box>
        <Row>
          {ABILITIES.map((ability, index) => {
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
                  defaultValue={scores[index]}
                />
                <ModifierBox>{calculateModifier(scores[index])}</ModifierBox>
              </InputWrapper>
            );
          })}
        </Row>
      </Box>
      <Box>
        <Row>
          {HEALTH.map((ability, index) => {
            return (
              <InputWrapper key={`${ability}-${index}`}>
                <IntersectingLabel style={{ whiteSpace: 'nowrap' }} htmlFor={ability}>
                  {ability.toLocaleUpperCase()}
                </IntersectingLabel>
                <input style={{ textAlign: 'center', height: '4em' }} type="text" id={ability} />
              </InputWrapper>
            );
          })}
        </Row>
      </Box>
    </RowWrapper>
  );
};

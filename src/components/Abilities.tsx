import React, { useRef } from 'react';
import styled from 'styled-components';

import { calculateModifier } from '../utils/mapAbilityModifiers';

import { Box } from '../styles/sharedStyles';
import { ABILITIES } from '../models/abilities';
import { STATS } from '../models/stats';

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
  const abilityRef = useRef<HTMLInputElement>(null);
  const statRef = useRef<HTMLInputElement>(null);

  return (
    <RowWrapper>
      <Box>
        <Row>
          {ABILITIES.map((abilityObject, index) => {
            return (
              <InputWrapper key={`${abilityObject.ability}-${index}`}>
                <IntersectingLabel htmlFor={abilityObject.ability}>
                  {abilityObject.ability.toLocaleUpperCase()}
                </IntersectingLabel>
                <input
                  style={{ textAlign: 'center', height: '4em' }}
                  type="text"
                  id={abilityObject.ability}
                  ref={abilityRef}
                  defaultValue={abilityObject.score}
                />
                <ModifierBox>{calculateModifier(abilityObject.score)}</ModifierBox>
              </InputWrapper>
            );
          })}
        </Row>
      </Box>
      <Box>
        <Row>
          {STATS.map((statObject, index) => {
            return (
              <InputWrapper key={`${statObject.stat}-${index}`}>
                <IntersectingLabel style={{ whiteSpace: 'nowrap' }} htmlFor={statObject.stat}>
                  {statObject.stat.toLocaleUpperCase()}
                </IntersectingLabel>
                <input
                  style={{ textAlign: 'center', height: '4em' }}
                  type="text"
                  id={statObject.stat}
                  ref={statRef}
                  defaultValue={statObject.value}
                />
              </InputWrapper>
            );
          })}
        </Row>
      </Box>
    </RowWrapper>
  );
};

import React, { useContext } from 'react';

import { Box } from '../styles/sharedStyles';

import styled from 'styled-components';

import { CharacterContext } from '../context/context';

// const IntersectingLabel = styled.label`
//   position: absolute;
//   font-size: 0.7rem;
//   top: -0.5rem;
//   left: 0.2rem;
//   padding: 0 0.5em;
//   z-index: 10;
//   background: ${({ theme }) => theme.panel};
// `;

// const InputWrapper = styled.div`
//   position: relative;
//   width: 100%;
//   height: 100%;
// `;

const SpellRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const SpellLabel = styled.div`
  font-size: 0.7rem;
`;

export const Spells: React.FC = () => {
  const { character } = useContext(CharacterContext);
  const { spells } = character;

  const handleChange = (index: number) => {
    console.log(index, 'change');
    // const traitsEntries = traits;
    // const traitToChange = traitsEntries[index];
    // const newTrait = {
    //   ...traitToChange,
    //   value: event.currentTarget.value
    // };
    // traitsEntries[index] = newTrait;
    // setCharacter({
    //   ...character,
    //   traits: traitsEntries
    // });
  };

  return (
    <Box>
      {spells.map((spellBlock, index) => {
        const spellList = spellBlock.spells;
        return (
          <div>
            <SpellLabel>{spellBlock.level} LEVEL</SpellLabel>

            {spellList.map((spell) => {
              return (
                <SpellRow>
                  <input
                    type="checkbox"
                    id={spell.label}
                    name={spell.label}
                    defaultChecked={spell.memorised}
                    onChange={() => handleChange(index)}
                  />
                  <SpellLabel>{spell.label}</SpellLabel>
                </SpellRow>
              );
            })}
            <hr />
          </div>
        );
      })}
    </Box>
  );
};

import React, { useContext } from 'react';
import { PlusCircleDotted } from 'react-bootstrap-icons';

import { Box } from '../styles/sharedStyles';

import styled from 'styled-components';

import { CharacterContext } from '../context/context';
import { mapSpellLevel } from '../utils/mapSpellLevel';

const SpellBlock = styled.div`
  margin-bottom: 1.2rem;
`;

const SpellRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.7rem;
  margin-bottom: 0.3rem;
`;

const SpellLabel = styled.div`
  font-size: 0.7rem;
  margin-bottom: 0.4rem;
  display: flex;
  justify-content: space-between;
`;

// const SpellBreak = styled.hr`
//   border: 0.5px dashed ${({ theme }) => theme.secondary};
// `;

const SpellField = styled.input`
  padding: 0.2rem 0.4rem !important;
  font-size: 0.7rem !important;
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
          <SpellBlock>
            <SpellLabel>
              {mapSpellLevel(index)}
              <PlusCircleDotted size={12} />
            </SpellLabel>

            {spellList.map((spell, idx) => {
              return (
                <SpellRow>
                  <input
                    type="checkbox"
                    id={spell.label}
                    name={spell.label}
                    defaultChecked={spell.memorised}
                    onChange={() => handleChange(idx)}
                  />
                  <SpellField
                    type="text"
                    value={spell.label}
                    name={spell.label}
                    onChange={() => handleChange(idx)}
                  />
                </SpellRow>
              );
            })}
            {/* <SpellBreak /> */}
          </SpellBlock>
        );
      })}
      <div style={{ textAlign: 'center' }}>
        <PlusCircleDotted size={14} />
      </div>
    </Box>
  );
};

import React, { useContext } from 'react';
import { PlusCircleDotted } from 'react-bootstrap-icons';

import { Box } from '../styles/sharedStyles';

import styled from 'styled-components';

import { CharacterContext } from '../context/context';
import { mapSpellLevel } from '../utils/mapSpellLevel';
import { spellType } from '../types/spellsType';

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

const SpellField = styled.input`
  padding: 0.2rem 0.4rem !important;
  font-size: 0.7rem !important;
`;

export const Spells: React.FC = () => {
  const { character, setCharacter } = useContext(CharacterContext);
  const { spells } = character;

  const handleSpellChange = (
    event: React.FormEvent<HTMLInputElement>,
    blockIndex: number,
    spellIndex: number
  ) => {
    const spellBlock = spells[blockIndex];
    const spellToUpdate = spellBlock.spells[spellIndex];
    const updatedSpell: spellType = {
      ...spellToUpdate,
      label: event.currentTarget.value
    };
    const spellList = spellBlock.spells;
    spellList[spellIndex] = updatedSpell;
    const newSpellBlock = {
      ...spellBlock,
      spells: spellList
    };
    const updatedSpells = spells;
    updatedSpells[blockIndex] = newSpellBlock;

    setCharacter({
      ...character,
      spells: updatedSpells
    });
    console.log('updatedSpells', updatedSpells);
  };

  const handleMemorisedChange = (blockIndex: number, spellIndex: number) => {
    const spellBlock = spells[blockIndex];
    const spellToUpdate = spellBlock.spells[spellIndex];
    const currentMemorised = spellToUpdate.memorised;
    const updatedSpell: spellType = {
      ...spellToUpdate,
      memorised: !currentMemorised
    };
    const spellList = spellBlock.spells;
    spellList[spellIndex] = updatedSpell;
    const newSpellBlock = {
      ...spellBlock,
      spells: spellList
    };
    const updatedSpells = spells;
    updatedSpells[blockIndex] = newSpellBlock;

    setCharacter({
      ...character,
      spells: updatedSpells
    });
  };

  return (
    <Box>
      {spells.map((spellBlock, blockIndex) => {
        const spellList = spellBlock.spells;
        return (
          <SpellBlock>
            <SpellLabel>
              {mapSpellLevel(blockIndex)}
              <PlusCircleDotted size={12} />
            </SpellLabel>

            {spellList.map((spell, spellIndex) => {
              return (
                <SpellRow>
                  <input
                    type="checkbox"
                    id={spell.label}
                    name={spell.label}
                    defaultChecked={spell.memorised}
                    onChange={() => handleMemorisedChange(blockIndex, spellIndex)}
                  />
                  <SpellField
                    type="text"
                    value={spell.label}
                    name={spell.label}
                    onChange={(event) => handleSpellChange(event, blockIndex, spellIndex)}
                  />
                </SpellRow>
              );
            })}
          </SpellBlock>
        );
      })}
      <div style={{ textAlign: 'center' }}>
        <PlusCircleDotted size={14} />
      </div>
    </Box>
  );
};

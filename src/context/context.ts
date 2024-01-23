import { createContext, Dispatch, SetStateAction } from 'react';
import { sampleCharacter } from '../models/character';
import { CharacterType } from '../types';

type CharacterContextType = {
  character: CharacterType;
  setCharacter: Dispatch<SetStateAction<CharacterType>>;
};

const characterContextDefaultValue = {
  character: sampleCharacter,
  setCharacter: () => {}
};

export const CharacterContext = createContext<CharacterContextType>(characterContextDefaultValue);

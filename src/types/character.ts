import { PersonaType, AbilitiesType, StatsType, SkillsType, TraitsType, SpellsType } from './';

export type CharacterType = {
  id?: string;
  userId: string;
  persona: PersonaType;
  abilities: AbilitiesType;
  stats: StatsType;
  skills: SkillsType;
  traits: TraitsType;
  spells: SpellsType;
};

import { PersonaType } from './personaType';
import { AbilitiesType } from './abilitiesType';
import { StatsType } from './statsType';
import { SkillsType } from './skillsType';
import { TraitsType } from './traitsType';
import { spellsType } from './spellsType';

export type CharacterType = {
  persona: PersonaType;
  abilities: AbilitiesType;
  stats: StatsType;
  skills: SkillsType;
  traits: TraitsType;
  spells: spellsType;
};

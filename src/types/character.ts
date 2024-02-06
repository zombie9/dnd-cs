import { PersonaType } from './personaType';
import { AbilitiesType } from './abilitiesType';
import { StatsType } from './statsType';
import { SkillsType } from './skillsType';

export type CharacterType = {
  persona: PersonaType;
  abilities: AbilitiesType;
  stats: StatsType;
  skills: SkillsType;
};

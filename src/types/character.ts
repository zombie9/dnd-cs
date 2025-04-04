import {
  PersonaType,
  AbilitiesType,
  StatsType,
  SkillsType,
  TraitsType,
  SpellsType,
  ClassAbilitiesType,
  ArmorAndWeaponsType,
  OtherAbilitiesType,
  EquipmentType,
  NotesType
} from './';

export type CharacterType = {
  id?: string;
  userId: string;
  persona: PersonaType;
  abilities: AbilitiesType;
  stats: StatsType;
  skills: SkillsType;
  traits: TraitsType;
  spells: SpellsType;
  classAbilities: ClassAbilitiesType;
  otherAbilities: OtherAbilitiesType;
  armorAndWeapons: ArmorAndWeaponsType;
  equipment: EquipmentType;
  notes: NotesType;
};

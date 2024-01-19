export type PersonaType = {
  name: string;
  race: string;
  alignment: string;
  class: string;
  subclass: string;
  background: string;
  level: string;
  experience: string;
};

export type AbilitiesType = [
  {
    ability: 'strength';
    score: number;
  },
  {
    ability: 'intelligence';
    score: number;
  },
  {
    ability: 'dexterity';
    score: number;
  },
  {
    ability: 'wisdom';
    score: number;
  },
  {
    ability: 'constitution';
    score: number;
  },
  {
    ability: 'charisma';
    score: number;
  }
];

export type StatsType = [
  {
    stat: 'hit points';
    value: number;
  },
  {
    stat: 'armour class';
    value: number;
  },
  {
    stat: 'proficiency';
    value: number;
  }
];

export type SkillsType = [
  {
    name: 'acrobatics';
    ability: 'dexterity';
    proficient: boolean;
  },
  {
    name: 'animal handling';
    ability: 'wisdom';
    proficient: boolean;
  },
  {
    name: 'arcane';
    ability: 'intelligence';
    proficient: boolean;
  },
  {
    name: 'athletics';
    ability: 'strength';
    proficient: boolean;
  },
  {
    name: 'deception';
    ability: 'charisma';
    proficient: boolean;
  },
  {
    name: 'history';
    ability: 'intelligence';
    proficient: boolean;
  },
  {
    name: 'insight';
    ability: 'wisdom';
    proficient: boolean;
  },
  {
    name: 'intimidation';
    ability: 'charisma';
    proficient: boolean;
  },
  {
    name: 'investigation';
    ability: 'intelligence';
    proficient: boolean;
  },
  {
    name: 'medicine';
    ability: 'wisdom';
    proficient: boolean;
  },
  {
    name: 'nature';
    ability: 'intelligence';
    proficient: boolean;
  },
  {
    name: 'perception';
    ability: 'wisdom';
    proficient: boolean;
  },
  {
    name: 'performance';
    ability: 'charisma';
    proficient: boolean;
  },
  {
    name: 'persuasion';
    ability: 'charisma';
    proficient: boolean;
  },
  {
    name: 'religion';
    ability: 'wisdom';
    proficient: boolean;
  },
  {
    name: 'sleight of hand';
    ability: 'dexterity';
    proficient: boolean;
  },
  {
    name: 'stealth';
    ability: 'dexterity';
    proficient: boolean;
  },
  {
    name: 'survival';
    ability: 'constitution';
    proficient: boolean;
  }
];

export type CharacterType = {
  persona: PersonaType;
  abilities: AbilitiesType;
  stats: StatsType;
  skills: SkillsType;
};

export type PersonaType = {
  characterName: string;
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
    score: number;
  },
  {
    stat: 'armour class';
    score: number;
  },
  {
    stat: 'proficiency';
    score: number;
  }
];

export type SkillsType = [
  {
    skill: 'acrobatics';
    ability: 'dexterity';
    proficient: boolean;
  },
  {
    skill: 'animal handling';
    ability: 'wisdom';
    proficient: boolean;
  },
  {
    skill: 'arcane';
    ability: 'intelligence';
    proficient: boolean;
  },
  {
    skill: 'athletics';
    ability: 'strength';
    proficient: boolean;
  },
  {
    skill: 'deception';
    ability: 'charisma';
    proficient: boolean;
  },
  {
    skill: 'history';
    ability: 'intelligence';
    proficient: boolean;
  },
  {
    skill: 'insight';
    ability: 'wisdom';
    proficient: boolean;
  },
  {
    skill: 'intimidation';
    ability: 'charisma';
    proficient: boolean;
  },
  {
    skill: 'investigation';
    ability: 'intelligence';
    proficient: boolean;
  },
  {
    skill: 'medicine';
    ability: 'wisdom';
    proficient: boolean;
  },
  {
    skill: 'nature';
    ability: 'intelligence';
    proficient: boolean;
  },
  {
    skill: 'perception';
    ability: 'wisdom';
    proficient: boolean;
  },
  {
    skill: 'performance';
    ability: 'charisma';
    proficient: boolean;
  },
  {
    skill: 'persuasion';
    ability: 'charisma';
    proficient: boolean;
  },
  {
    skill: 'religion';
    ability: 'wisdom';
    proficient: boolean;
  },
  {
    skill: 'sleight of hand';
    ability: 'dexterity';
    proficient: boolean;
  },
  {
    skill: 'stealth';
    ability: 'dexterity';
    proficient: boolean;
  },
  {
    skill: 'survival';
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

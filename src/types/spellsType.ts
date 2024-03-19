export type SpellType = {
  label: string;
  memorised: boolean;
};

export type SpellsType = {
  level: number;
  spells: SpellType[];
}[];

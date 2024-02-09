export type spellType = {
  label: string;
  memorised: boolean;
};

export type spellsType = {
  level: number;
  spells: spellType[];
}[];

export const mapSpellLevel = (level: number) => {
  let spellLevel = '';
  switch (level) {
    case 0:
      spellLevel = 'CANTRIPS';
      break;
    case 1:
      spellLevel = '1ST LEVEL';
      break;
    case 2:
      spellLevel = '2ND LEVEL';
      break;
    case 3:
      spellLevel = '3RD LEVEL';
      break;
    default:
      spellLevel = `${level}TH LEVEL`;
      break;
  }
  return spellLevel;
};

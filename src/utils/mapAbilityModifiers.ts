export const mapAbilityModifiers = (ability: number) => {
  let modifier;
  switch (true) {
    case ability < 2:
      modifier = -5;
      break;

    case ability < 4:
      modifier = -4;
      break;

    case ability < 6:
      modifier = -3;
      break;

    case ability < 8:
      modifier = -2;
      break;

    case ability < 10:
      modifier = -1;
      break;

    case ability < 12:
      modifier = 0;
      break;

    case ability < 14:
      modifier = 1;
      break;

    case ability < 16:
      modifier = 2;
      break;

    case ability < 18:
      modifier = 3;
      break;

    case ability < 20:
      modifier = 4;
      break;

    default:
      modifier = 5;
  }
  return modifier;
};

export const calculateModifier = (
  ability: number,
  isProficient: boolean = false,
  proficiency: number = 0
) => {
  if (ability !== null) {
    let modifier = mapAbilityModifiers(ability);
    if (isProficient) {
      modifier = modifier + proficiency;
    }
    return `${modifier > 0 ? '+' : ''}${modifier}`;
  }
  return 0;
};

const pluralThreshold = 1
export const p = (amount: number): string =>
  amount > pluralThreshold ? '.plural' : '.singular'

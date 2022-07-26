// https://javascript.info/currying-partials#:~:text=Currying%20is%20an%20advanced%20technique,It%20just%20transforms%20it.
export const getNumbersFromNUpTo = (
  start: number
): ((upTo: number) => number[]) => {
  return (upTo: number): number[] =>
    Array.from({ length: upTo - start + includeLast }, (_, i) => i + start)
}
const includeLast = 1

const fromOne = 1
export const getNumbersFromOneUpTo = getNumbersFromNUpTo(fromOne)

const fromZero = 0
export const getNumbersFromZeroUpTo = getNumbersFromNUpTo(fromZero)

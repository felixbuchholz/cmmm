import { getNumbersFromZeroUpTo } from './getNumbersUpTo'
import { IncomeRangeDefinition } from './types/scenario'

export const getIncomesFromRangeAndIntervall = ({
  rangeStart,
  rangeEnd,
  interval,
}: IncomeRangeDefinition): number[] => {
  const length = (rangeEnd - rangeStart) / interval
  if (length < lengthMin) {
    throw new Error('rangeStart has to be smaller than rangeEnd')
  }
  return getNumbersFromZeroUpTo(length).map(it => rangeStart + it * interval)
}
const lengthMin = 0

export const getIncomesFromRangeDefinitions = (
  incomeRanges: IncomeRangeDefinition[]
): number[] => {
  return incomeRanges.map(it => getIncomesFromRangeAndIntervall(it)).flat()
}

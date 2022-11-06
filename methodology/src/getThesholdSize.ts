import { Size } from './types/scenario'

export const getThesholdSize = (size: Size): number => {
  if (size === null) {
    return sizeThresholdMap[nullIndex].apartment
  }

  if (size <= maxMapIndex) {
    return sizeThresholdMap[size].apartment
  }

  return sizeThresholdMap[restMapIndex].apartment
}

const nullIndex = 0
const maxMapIndex = 6
const restMapIndex = 7

const sizeThresholdMap: { household: number | null; apartment: number }[] = [
  // If we don’t know the amount of people,
  // we assume minimum 1 / minimum apartment size
  { household: null, apartment: 22 },
  { household: 1, apartment: 22 },
  { household: 2, apartment: 30 },
  { household: 3, apartment: 40 },
  { household: 4, apartment: 50 },
  { household: 5, apartment: 56 },
  { household: 6, apartment: 64 },
  { household: Infinity, apartment: 64 },
]

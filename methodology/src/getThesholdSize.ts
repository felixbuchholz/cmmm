import { nullThresholdSize } from './getThresholds'
import { Size } from './types/scenario'

export const getThesholdSize = (size: Size): number => {
  if (size === null) {
    return nullThresholdSize
  }

  return minOfferSize + size * factorSizePerPerson
}
const minOfferSize = 20
const factorSizePerPerson = 15

import { useSelectionContext } from '../../../../state/selection/hooks'
import { FeaturePropertiesKey } from '../../../../types/Vizsualization'

export const useCount = (
  featurePropertiesKey: FeaturePropertiesKey
): number => {
  const data = useSelectionContext('data')
  if (!data) {
    return undefined
  }
  return data.metadata[featurePropertiesKey]
}

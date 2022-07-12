import { MapboxGeoJSONFeature } from 'mapbox-gl'

import { HoverData } from '../../../../types/HoverInfo'
import { FeaturePropertiesKey } from '../../../../types/Vizsualization'

export const getHoverData = (
  feature: MapboxGeoJSONFeature,
  featurePropertiesKey: FeaturePropertiesKey | 'group'
): HoverData => {
  return feature ? feature.properties[featurePropertiesKey] : null
}

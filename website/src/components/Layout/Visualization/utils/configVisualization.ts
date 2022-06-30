import { VisualizationConfig } from '../../../../types/Vizsualization'

import { red, green } from './configMap'

export const getFromConfig = <T extends keyof VisualizationConfig>(
  config: VisualizationConfig[],
  key: T
): VisualizationConfig[T][] => {
  return config.map(it => it[key])
}

export const visualizationConfigs: VisualizationConfig[] = [
  { id: 'reference', featurePropertiesKey: 'suitable', ...red },
  { id: 'comparison', featurePropertiesKey: 'affordable', ...green },
]

export const ids = getFromConfig(visualizationConfigs, 'id')

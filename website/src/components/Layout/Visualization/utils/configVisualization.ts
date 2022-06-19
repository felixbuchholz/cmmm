import { VisualizationConfig } from '../../../../types/Vizsualization'

export const getFromConfig = <T extends keyof VisualizationConfig>(
  config: VisualizationConfig[],
  key: T
): VisualizationConfig[T][] => {
  return config.map(it => it[key])
}

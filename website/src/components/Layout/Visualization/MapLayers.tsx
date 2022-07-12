import { CirclePaint } from 'mapbox-gl'
import React, { FC, useMemo } from 'react'
import { Layer } from 'react-map-gl'

import { useHoverStore } from '../../../state/store/hover'
import { MapLayersConfig, MapLayerConfig } from '../../../types/Vizsualization'

import { getLayerPropsFromConfig } from './utils/configLayer'
import { getHoverData } from './utils/getHoverData'

export const MapLayers: FC<MapLayersConfig> = props => {
  return (
    <>
      <MapBaseLayer {...props} id="data" strokeOpacity={0} />
      <MapHoverLayer
        {...props}
        id="hover"
        colorOpacity={0.8}
        strokeOpacity={0.8}
      />
    </>
  )
}

export const MapBaseLayer: FC<MapLayerConfig> = props => {
  const feature = useHoverStore(state => state.feature)
  const colorOpacity = getHoverColorOpacity(!!feature, props.colorOpacity)

  const layerProps = getLayerPropsFromConfig({
    ...props,
    colorOpacity,
  })

  return <Layer {...layerProps} />
}

const getHoverColorOpacity = (
  hasFeature: boolean,
  initialOpacity: CirclePaint['circle-opacity']
): CirclePaint['circle-opacity'] =>
  hasFeature ? hoverColorOpacity : initialOpacity

const hoverColorOpacity = 0.2

export const MapHoverLayer: FC<MapLayerConfig> = props => {
  const layerProps = getLayerPropsFromConfig(props)
  const feature = useHoverStore(state => state.feature)
  const group = getHoverData(feature, 'group') ?? ''
  const filter = useMemo(() => ['in', 'group', group], [group])

  return <Layer {...layerProps} filter={filter} />
}

/* eslint-disable max-lines-per-function */
import React, { FC } from 'react'
import Map, { Layer, Source } from 'react-map-gl'

import { VisualizationProps } from '../../../types/Vizsualization'
import { mapboxAccessToken } from '../../../utils/environment'

import { TooltipTranslated } from './Tooltip'
import { defaultsSource } from './utils/configSource'

export const Visualization: FC<VisualizationProps> = ({
  mapProps,
  hoverInfo,
  layerProps,
}) => {
  console.log(mapboxAccessToken)
  return (
    <section>
      <Map {...mapProps}>
        <Source {...defaultsSource}>
          <Layer {...layerProps} />
        </Source>
      </Map>
      <TooltipTranslated {...hoverInfo} />
    </section>
  )
}

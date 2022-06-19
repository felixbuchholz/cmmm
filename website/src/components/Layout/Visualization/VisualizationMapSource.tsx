import React from 'react'
import { Source } from 'react-map-gl'

import { FCC } from '../../../types/FCC'

import { defaultsSource } from './utils/configSource'

export const VisualizationMapSource: FCC = ({ children }) => {
  return <Source {...defaultsSource}>{children}</Source>
}

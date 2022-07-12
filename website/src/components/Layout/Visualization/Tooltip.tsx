import { useTranslation } from 'next-export-i18n'
import { CSSProperties, FC } from 'react'

import { useHoverStore } from '../../../state/store/hover'
import { Coordinates, HoverInfo } from '../../../types/HoverInfo'
import { FeaturePropertiesKey } from '../../../types/Vizsualization'

import styles from './tooltip.module.css'
import { getHoverData } from './utils/getHoverData'

const defaultTranslateKey = 'map.tooltipDescription'

export const TooltipHover: FC<{
  featurePropertiesKey: FeaturePropertiesKey
}> = ({ featurePropertiesKey }) => {
  const point = useHoverStore(state => state.point)
  const feature = useHoverStore(state => state.feature)
  const state = getDisplayState(!!feature)
  const data = getHoverData(feature, featurePropertiesKey)

  const tooltipProps = { ...point, data, state }

  return <TooltipTranslated {...tooltipProps} />
}

export const TooltipTranslated: FC<TooltipTranslatedProps> = ({
  data,
  state,
  translateKey = defaultTranslateKey,
  ...rest
}) => {
  const { t } = useTranslation()
  const text =
    data !== null && state === 'active' ? `${data} ${t(translateKey)}` : ''

  return <Tooltip state={state} text={text} {...rest} />
}

type TooltipTranslatedProps = {
  translateKey?: string
  state: DisplayState
} & HoverInfo

export const Tooltip: FC<TooltipProps> = ({ state, text, x, y }) => {
  const style: CSSProperties = {
    transform: `translateX(${x}px) translateY(${y}px)`,
  }

  return (
    <div className={styles.container} data-state={state} style={style}>
      {text}
    </div>
  )
}

type TooltipProps = {
  text: string
  state: DisplayState
} & Coordinates

export const getDisplayState = (bool: boolean): DisplayState => {
  return bool ? 'active' : 'disabled'
}

export type DisplayState = 'active' | 'disabled'

import { useTranslation } from 'next-export-i18n'
import { CSSProperties, FC } from 'react'

import { Coordinates, HoverInfo } from '../../../types/HoverInfo'

import styles from './tooltip.module.css'

export const TooltipTranslated: FC<HoverInfo> = ({ data, x, y }) => {
  const { t } = useTranslation()

  if (!data) {
    return null
  }

  const text = data + ' ' + t('map.tooltipDescription')

  return <Tooltip text={text} x={x} y={y} />
}

export const Tooltip: FC<{ text: string } & Coordinates> = ({ text, x, y }) => {
  const style: CSSProperties = {
    transform: `translateX(${x}px) translateY(${y}px)`,
  }

  return (
    <div className={styles.container} style={style}>
      {text}
    </div>
  )
}

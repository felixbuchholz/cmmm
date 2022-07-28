import { useTranslation } from 'next-export-i18n'
import { FC, useState } from 'react'

import { useSelectionContext } from '../../../state/selection/hooks'

import styles from './mapAlertBar.module.css'
import { Marquee } from './Marquee'

export const useShouldShow = (
  id: string
): { shouldShow: boolean; handleClick: () => void } => {
  const isComparison = id === 'comparison'
  const [isOpen, setIsOpen] = useState(true)
  const isCategoryBuy = useSelectionContext('category') === 'buy'

  const shouldShow = isComparison && isCategoryBuy && isOpen

  const handleClick = (): void => {
    setIsOpen(false)
  }

  return { shouldShow, handleClick }
}

export const MapAlertBarContainer: FC<{ id: string }> = ({ id }) => {
  const { shouldShow, handleClick } = useShouldShow(id)

  if (!shouldShow) {
    return null
  }

  return <MapAlertBar handleClick={handleClick} />
}

export const MapAlertBar: FC<{ handleClick: () => void }> = ({
  handleClick,
}) => {
  return (
    <div className={styles.container}>
      <MapAlertCloseButton handleClick={handleClick} />
      <Marquee>
        <MapAlertBarText />
      </Marquee>
    </div>
  )
}

export const MapAlertCloseButton: FC<{ handleClick: () => void }> = ({
  handleClick,
}) => {
  return (
    <button onClick={handleClick} className={styles.close}>
      ✕
    </button>
  )
}

export const MapAlertBarText: FC = () => {
  const { t } = useTranslation()
  return <div className={styles.alertText}>{t('map.alertDownPayment')}</div>
}

import { useTranslation } from 'next-export-i18n'
import React, { FC } from 'react'

import {
  useSelectionContext,
  useSelectionSend,
} from '../../../state/selection/hooks'
import { WrapperIsActive } from '../../../state/selection/WrapperIsActive'
import { p } from '../../../utils/translatePlurals'

export const OptionsSelectionButtons: FC = () => {
  const { t } = useTranslation()
  const sizeText = useGetSelectSizeButtonText()
  const incomeText = useGetSelectIncomeButtonText()
  const send = useSelectionSend()

  const handleClick = (option: 'SIZE' | 'INCOME'): void => {
    send(`OPEN_MENU_${option}`)
  }

  return (
    <WrapperIsActive states={['menu.mode_options']}>
      <div>
        {t('menuOverview.sizeSelect')}{' '}
        <button className="triangle" onClick={() => handleClick('SIZE')}>
          {sizeText}
        </button>{' '}
        {t('menuOverview.incomeSelect')}{' '}
        <button className="triangle" onClick={() => handleClick('INCOME')}>
          {incomeText}
        </button>
      </div>
    </WrapperIsActive>
  )
}

export const useGetSelectSizeButtonText = (): string => {
  const { t } = useTranslation()
  const [size] = useSelectionContext(['size'])

  return size
    ? size + ' ' + t(`person${p(size)}`)
    : t('menuOverview.sizeSelectButtonEmpty')
}

export const useGetSelectIncomeButtonText = (): string => {
  const { t } = useTranslation()
  const [income] = useSelectionContext(['income'])

  return income
    ? income + ' ' + t('units.euroPerMonth')
    : t('menuOverview.incomeSelectButtonEmpty')
}

import { useTranslation } from 'next-export-i18n'
import React, { FC } from 'react'

import {
  useSelectionContext,
  useSelectionSend,
} from '../../../state/selection/hooks'
import { WrapperIsActive } from '../../../state/selection/WrapperIsActive'

export const ScenarioSelectionButton: FC = () => {
  const { t } = useTranslation()

  const send = useSelectionSend()
  const handleClick = (): void => {
    send('OPEN_MENU_SCENARIO')
  }
  const text = useMenuOverviewScenarioSelectionButtonText()

  return (
    <WrapperIsActive states={['menu.mode_scenario']}>
      <div>
        {t('menuOverview.scenarioSelect')}{' '}
        <button className="triangle" onClick={handleClick}>
          {text}
        </button>
      </div>
    </WrapperIsActive>
  )
}

export const useMenuOverviewScenarioSelectionButtonText = (): string => {
  const { t } = useTranslation()
  const [income, size] = useSelectionContext(['income', 'size'])

  if (!income || !size) {
    return t('menuOverview.scenarioSelectButtonEmpty')
  }
  return t('menuOverview.scenarioSelectButton', { income, size })
}

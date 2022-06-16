import { useTranslation } from 'next-export-i18n'
import React, { FC } from 'react'

import { useSelectionSend } from '../../../state/selection/hooks'
import { useMenuOverviewScenarioSelectionButtonText } from '../Menu/MenuOverviewScenarioSelection'

export const ScenarioSelectionButton: FC = () => {
  const { t } = useTranslation()

  const send = useSelectionSend()
  const handleClick = (): void => {
    send('OPEN_MENU_SCENARIO')
  }
  const text = useMenuOverviewScenarioSelectionButtonText()

  return (
    <div>
      {t('menuOverview.scenarioSelect')}{' '}
      <button onClick={handleClick}>{text}</button>
    </div>
  )
}

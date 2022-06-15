import { useTranslation } from 'next-export-i18n'
import React, { FC } from 'react'

import {
  useSelectionContext,
  useSelectionSend,
} from '../../../state/selection/hooks'

export const MenuOverviewScenarioSelection: FC = () => {
  const { t } = useTranslation()

  return (
    <div>
      <h3>
        {t('menuOverview.scenarioSelect')}
        <MenuOverviewScenarioSelectionButton />
      </h3>
      <small>{t('menuOverview.scenarioSelectExplainer')}</small>
    </div>
  )
}

const useMenuOverviewScenarioSelectionButtonText = (): string => {
  const { t } = useTranslation()
  const [income, size] = useSelectionContext(['income', 'size'])

  if (!income || !size) {
    return t('menuOverview.scenarioSelectButtonEmpty')
  }
  return t('menuOverview.scenarioSelectButton', { income, size })
}

export const MenuOverviewScenarioSelectionButton: FC = () => {
  const send = useSelectionSend()
  const handleClick = (): void => {
    send('OPEN_MENU_SCENARIO')
  }
  const text = useMenuOverviewScenarioSelectionButtonText()

  return <button onClick={handleClick}>{text}</button>
}

import { useTranslation } from 'next-export-i18n'
import React, { FC } from 'react'

import { useSelectionContext } from '../../../state/selection/hooks'
import { ScenarioSelectionButton } from '../Navigation/ScenarioSelectionButton'

export const MenuOverviewScenarioSelection: FC = () => {
  const { t } = useTranslation()
  return (
    <div>
      <h3>
        <ScenarioSelectionButton />
      </h3>
      <small>{t('menuOverview.scenarioSelectExplainer')}</small>
    </div>
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

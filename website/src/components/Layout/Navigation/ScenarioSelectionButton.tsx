import { useTranslation } from 'next-export-i18n'
import React, { FC } from 'react'

import {
  useSelectionContext,
  useSelectionSend,
} from '../../../state/selection/hooks'

export const ScenarioSelectionButton: FC = () => {
  return (
    <div>
      <ScenarioSelectionButtonIntro />
      <ScenarioSelectionButtons />
    </div>
  )
}

export const ScenarioSelectionButtonIntro: FC = () => {
  const { t } = useTranslation()
  return t('menuOverview.scenarioSelect')
}

export const ScenarioSelectionButtons: FC = () => {
  const [income, size] = useSelectionContext(['income', 'size'])

  if (!income || !size) {
    return <ScenarioSelectButtonEmpty />
  }

  return <ScenarioSelectButtonSelected />
}

export const ScenarioSelectButtonEmpty: FC = () => {
  const { t } = useTranslation()
  const handleClick = useHandleClickSendOpenMenuScenario()
  return (
    <button className="triangle" onClick={handleClick}>
      <span className="buttonSpan">
        {t('menuOverview.scenarioSelectEmpty')}
      </span>
    </button>
  )
}

const useHandleClickSendOpenMenuScenario = (): (() => void) => {
  const send = useSelectionSend()
  return (): void => {
    send('OPEN_MENU_SCENARIO')
  }
}

export const ScenarioSelectButtonSelected: FC = () => {
  const { t } = useTranslation()
  const handleClick = useHandleClickSendOpenMenuScenario()
  const [income, size] = useSelectionContext(['income', 'size'])
  return (
    <div className="connectButtons">
      <button className="triangle" onClick={handleClick}>
        <span className="buttonSpan">
          {t('menuOverview.scenarioSelectSize', { size })}
        </span>
      </button>{' '}
      <button onClick={handleClick}>
        <span className="buttonSpan">
          {t('menuOverview.scenarioSelectIncome', { income })}
        </span>
      </button>
    </div>
  )
}

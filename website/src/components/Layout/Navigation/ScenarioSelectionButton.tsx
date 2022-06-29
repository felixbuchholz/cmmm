import { useTranslation } from 'next-export-i18n'
import React, { FC } from 'react'

import {
  useSelectionContext,
  useSelectionSend,
} from '../../../state/selection/hooks'
import { WrapperIsActive } from '../../../state/selection/WrapperIsActive'

export const ScenarioSelectionButton: FC = () => {
  return (
    <WrapperIsActive states={['menu.mode_scenario']}>
      <div>
        <ScenarioSelectionButtonIntro />
        <ScenarioSelectionButtons />
      </div>
    </WrapperIsActive>
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
      {t('menuOverview.scenarioSelectEmpty')}
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
        {t('menuOverview.scenarioSelectSize', { size })}
      </button>{' '}
      <button onClick={handleClick}>
        {t('menuOverview.scenarioSelectIncome', { income })}
      </button>
    </div>
  )
}

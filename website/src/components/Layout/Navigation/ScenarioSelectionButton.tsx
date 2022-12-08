import { useTranslation } from 'next-export-i18n'
import React, { FC } from 'react'

import {
  useResolveStateArrayToBool,
  useSelectionContext,
  useSelectionSend,
} from '../../../state/selection/hooks'
import { scenarioParameters } from '../../../state/selection/scenarios'
import { p } from '../../../utils/translatePlurals'

export const ScenarioSelectionButton: FC = () => {
  return (
    <div>
      <ScenarioSelectionButtons />
    </div>
  )
}

export const ScenarioSelectionButtonIntro: FC = () => {
  const { t } = useTranslation()
  return t('menuOverview.scenarioSelect')
}

export const ScenarioSelectionButtons: FC = () => {
  const isOptionsMode = useResolveStateArrayToBool(['menu.mode_options'])
  const [income, size] = useSelectionContext(['income', 'size'])

  if (!income || !size || isOptionsMode) {
    return (
      <>
        <ScenarioSelectionButtonIntro />
        <ScenarioSelectButtonEmpty />
      </>
    )
  }

  const matchedScenario = scenarioParameters.find(
    it => it.income == income && it.size === size
  )
  const translateKey = matchedScenario.translateKey

  return <ScenarioSelectButtonScenario translateKey={translateKey} />
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

export const ScenarioSelectButtonScenario: FC<{ translateKey: string }> = ({
  translateKey,
}) => {
  const { t } = useTranslation()
  const handleClick = useHandleClickSendOpenMenuScenario()
  const [income, size] = useSelectionContext(['income', 'size'])
  return (
    <div>
      <button className="triangle" onClick={handleClick}>
        <span className="buttonSpan">{t(translateKey)}</span>
        <br />
        <span className="text-black">
          ({size} {t(`person${p(size)}`)}, {income} {t('units.euroPerMonth')})
        </span>
      </button>
    </div>
  )
}

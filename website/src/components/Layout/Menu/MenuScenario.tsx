import { useTranslation } from 'next-export-i18n'
import React, { FC } from 'react'

import { useSelectionSend } from '../../../state/selection/hooks'
import { scenarios } from '../../../state/selection/scenarios'
import { WrapperIsActive } from '../../../state/selection/WrapperIsActive'
import { SelectionStateString } from '../../../types/selectionMachine'
import { p } from '../../../utils/translatePlurals'

export const MenuScenario: FC = () => {
  return (
    <WrapperIsActive states={menuScenarioStates}>
      <div>
        {scenarios.map(({ size, income, translateKey }) => (
          <ScenarioItem
            key={translateKey}
            size={size}
            income={income}
            translateKey={translateKey}
          />
        ))}
      </div>
    </WrapperIsActive>
  )
}

const menuScenarioStates: SelectionStateString[] = [
  'menu.mode_scenario.menu_scenario',
]

export type ScenarioParameters = {
  size: number
  income: number
}

export type ScenarioItemProps = ScenarioParameters & {
  translateKey: string
}

export const ScenarioItem: FC<ScenarioItemProps> = ({
  size,
  income,
  translateKey,
}) => {
  const send = useSelectionSend()
  const handleClick = (props: ScenarioParameters): void => {
    send({ type: 'SELECT_SCENARIO', ...props })
  }
  const { t } = useTranslation()

  return (
    <div>
      <button
        onClick={() => {
          handleClick({ size, income })
        }}
      >
        {size} {t(`person${p(size)}`)} {t(translateKey)}
      </button>{' '}
      ({income} {t('units.euroPerMonth')})
    </div>
  )
}

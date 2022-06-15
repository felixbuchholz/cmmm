import React, { FC } from 'react'

import {
  useResolveStateArrayToBool,
  useSelectionSend,
} from '../../../state/selection/hooks'
import { SelectionStates } from '../../../types/selectionMachine'

export const MenuScenario: FC = () => {
  const isActive = useResolveStateArrayToBool(menuScenarioStates)

  if (!isActive) {
    return null
  }

  return (
    <div>
      <ScenarioItem size={2} income={1200} description="working as a teacher" />
    </div>
  )
}

const menuScenarioStates: SelectionStates[] = [
  'menu.mode_scenario.menu_scenario',
]

export type ScenarioParameters = {
  size: number
  income: number
}

export type ScenarioItemProps = ScenarioParameters & {
  description: string
}

export const ScenarioItem: FC<ScenarioItemProps> = ({
  size,
  income,
  description,
}) => {
  const send = useSelectionSend()
  const handleClick = (props: ScenarioParameters): void => {
    send({ type: 'SELECT_SCENARIO', ...props })
  }

  return (
    <div>
      <button
        onClick={() => {
          handleClick({ size, income })
        }}
      >
        {size} persons {description}
      </button>{' '}
      ({income}€ per month)
    </div>
  )
}

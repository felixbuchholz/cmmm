import React, { FC } from 'react'

import {
  useResolveStateArrayToBool,
  useSelectionSend,
} from '../../../state/selection/hooks'
import { SelectionStates } from '../../../types/selectionMachine'

export const MenuCategory: FC = () => {
  // TODO: MenuIsActiveWrappe with props: SelectionStates[]
  const isActive = useResolveStateArrayToBool(menuCategoryStates)

  if (!isActive) {
    return null
  }

  return (
    <div>
      <CategoryItem
        category="buy"
        description="for Buying here"
        highlight="Small Explanation"
        title="Buying"
      />
    </div>
  )
}

const menuCategoryStates: SelectionStates[] = [
  'menu.mode_scenario.menu_category',
  'menu.mode_options.menu_category',
]

export type ScenarioParameters = {
  income: number
  size: number
}

export type CategoryItemProps = {
  category: string

  title: string
} & ExplainerProps

export const CategoryItem: FC<CategoryItemProps> = ({
  category,
  title,
  ...explainerProps
}) => {
  const send = useSelectionSend()
  const handleClick = (category: string): void => {
    send({ type: 'SELECT_CATEGORY', category })
  }

  return (
    <div>
      <button
        onClick={() => {
          handleClick(category)
        }}
      >
        {title}
      </button>
      <Explainer {...explainerProps} />
    </div>
  )
}

export type ExplainerProps = {
  description: string
  highlight: string
}

export const Explainer: FC<ExplainerProps> = ({ description, highlight }) => {
  return (
    <div>
      <em>{highlight}</em>
      {''}
      {description}
    </div>
  )
}

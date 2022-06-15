import { useTranslation } from 'next-export-i18n'
import React, { FC } from 'react'

import {
  useResolveStateArrayToBool,
  useSelectionSend,
} from '../../../state/selection/hooks'
import { SelectionStates } from '../../../types/selectionMachine'
import { HighlightExplainer } from '../../Typography/HighlightExplainer'

export const MenuCategory: FC = () => {
  // TODO: MenuIsActiveWrapper with props: SelectionStates[]
  const isActive = useResolveStateArrayToBool(menuCategoryStates)

  if (!isActive) {
    return null
  }

  return (
    <div>
      <CategoryItem category="buy" />
    </div>
  )
}

const menuCategoryStates: SelectionStates[] = [
  'menu.mode_scenario.menu_category',
  'menu.mode_options.menu_category',
]

export type CategoryItemProps = {
  category: string
}

export const CategoryItem: FC<CategoryItemProps> = ({ category }) => {
  const send = useSelectionSend()
  const handleClick = (category: string): void => {
    send({ type: 'SELECT_CATEGORY', category })
  }
  const { t } = useTranslation()
  const description = t(`${category}.description`)
  const highlight = t(`${category}.highlight`)

  return (
    <div>
      <h3>
        <button
          onClick={() => {
            handleClick(category)
          }}
        >
          {t(`${category}.categoryConfirm`)}
        </button>
      </h3>
      <HighlightExplainer description={description} highlight={highlight} />
    </div>
  )
}

import { useTranslation } from 'next-export-i18n'
import React, { FC } from 'react'

import { categories } from '../../../state/selection/categories'
import { useSelectionSend } from '../../../state/selection/hooks'
import { WrapperIsActive } from '../../../state/selection/WrapperIsActive'
import { Category, SelectionStateString } from '../../../types/selectionMachine'
import { HighlightExplainer } from '../../Typography/HighlightExplainer'

import styles from './menuParameter.module.css'

export const MenuCategory: FC = () => {
  return (
    <WrapperIsActive states={menuCategoryStates}>
      <div className={styles.container}>
        {categories.map(it => (
          <CategoryItem key={it} category={it} />
        ))}
      </div>
    </WrapperIsActive>
  )
}

const menuCategoryStates: SelectionStateString[] = [
  'menu.mode_scenario.menu_category',
  'menu.mode_options.menu_category',
]

export type CategoryItemProps = {
  category: Category
}

export const CategoryItem: FC<CategoryItemProps> = ({ category }) => {
  const send = useSelectionSend()
  const handleClick = (category: Category): void => {
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

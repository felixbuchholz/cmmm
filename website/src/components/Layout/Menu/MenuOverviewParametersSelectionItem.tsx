import { useTranslation } from 'next-export-i18n'
import React from 'react'

import { WrapperIsActive } from '../../../state/selection/WrapperIsActive'
import { FCC } from '../../../types/FCC'
import { MenuOverviewParametersSelectionProps } from '../../../types/MenusParameter'

export const MenuOverviewParametersSelectionItem: FCC<MenuOverviewParametersSelectionProps> = ({
  activeStates,
  children,
  translateKey,
}) => {
  const { t } = useTranslation()

  return (
    <WrapperIsActive states={activeStates}>
      <div>
        <h3>{children}</h3>

        <small>{t(translateKey)}</small>
      </div>
    </WrapperIsActive>
  )
}

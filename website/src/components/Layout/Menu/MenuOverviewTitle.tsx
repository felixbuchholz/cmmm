import React, { FC } from 'react'

import { languageCode } from '../../../../content/language'
import { menuOverviewTitle } from '../../../../content/menu'

export const MenuOverviewTitle: FC = () => {
  return <div>{menuOverviewTitle[languageCode]}</div>
}

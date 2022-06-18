import React, { FC } from 'react'

import { useSelectionContext } from '../../state/selection/hooks'

export const DebugSelectedDataInfo: FC = () => {
  const data = useSelectionContext('data')
  return (
    <small>
      <em>Last resolved data:</em>
      <blockquote style={{ whiteSpace: 'pre' }}>
        {JSON.stringify(data, null, stringifyIndent)}
      </blockquote>
    </small>
  )
}
const stringifyIndent = 2

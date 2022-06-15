import React, { FC } from 'react'

export type HighlightExplainerProps = {
  description: string
  highlight: string
}

export const HighlightExplainer: FC<HighlightExplainerProps> = ({
  description,
  highlight,
}) => {
  return (
    <small>
      <em>{highlight}</em> {description}
    </small>
  )
}

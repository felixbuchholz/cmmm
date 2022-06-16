import { FC, ReactElement } from 'react'

export type FCC<T = Record<string, unknown>> = FC<
  { children: ReactElement } & T
>

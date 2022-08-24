import { FC, ReactElement } from 'react'

export type FCC<T = Record<string, unknown>> = FC<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  { children: ReactNode | ReactElement<any, any> | null } & T
>

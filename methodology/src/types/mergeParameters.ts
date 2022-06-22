import { Income, Size, Scenario } from './scenario'

type MergeParametersProps = {
  incomes: Income[]
  sizes: Size[]
  scenarios: Scenario[]
}
type MergeParametersReturn = { incomes: Income[]; sizes: Size[] }

export type MergeParameters = (
  props: MergeParametersProps
) => MergeParametersReturn

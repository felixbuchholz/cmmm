type ProcessErrorsProps = unknown
type ProcessErrorsReturn = void
type ProcessErrors = (props: ProcessErrorsProps) => ProcessErrorsReturn

export const processErrors: ProcessErrors = error => {
  console.log(error)
}

import { processErrors } from './processErrors'

describe('_processErrors', () => {
  it('calls console.log', () => {
    const processErrorsParam = 'test'
    console.log = jest.fn()
    processErrors(processErrorsParam)

    expect(console.log).toHaveBeenCalledWith(processErrorsParam)
  })
})

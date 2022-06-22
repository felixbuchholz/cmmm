import { processErrors } from './errors/processErrors'

import main from './index'

const error = new Error('Mocked error')
// jest.mock('./init/initProcess.ts', () => ({
//   initProcess: jest.fn(() => {
//     throw error
//   }),
// }))

jest.mock('./errors/processErrors.ts', () => ({
  processErrors: jest.fn(),
}))

describe('#main', () => {
  // it('calls initProcess', () => {
  //   const numberOfFunctionCalls = 2
  //   main()
  // })
  // it('calls processErrors on error', () => {
  //   main()
  //   expect(processErrors).toHaveBeenCalledWith(error)
  // })
})

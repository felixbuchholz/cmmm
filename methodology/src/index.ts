import { processErrors } from './errors/processErrors'
import { parseData } from './parseData'
import { readData } from './readData'
import { resetOutputDir } from './resetOutputDir'
import { CategoryConfig } from './types/scenario'

const categoryConfigs: CategoryConfig[] = [
  { category: 'buy', dataPathRelative: '../data/buy.csv' },
  { category: 'rent', dataPathRelative: '../data/rent.csv' },
]
const logIndentation = 2

const main = (): void => {
  try {
    resetOutputDir()
    for (const categoryConfig of categoryConfigs) {
      console.log(JSON.stringify({ categoryConfig }, null, logIndentation))
      readData(parseData, categoryConfig)
    }
  } catch (error) {
    processErrors(error)
  }
}

main()

export default main

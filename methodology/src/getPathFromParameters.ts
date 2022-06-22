import * as path from 'path'

import { outputPathRelative } from './resetOutputDir'
import { Category, Income, Size } from './types/scenario'

export const getPathFromParameters = (
  category: Category,
  size: Size,
  income: Income
): string => {
  const directoryRelative = outputPathRelative
  const fileName = `c=${category}&size=${size}&income=${income}`
  const fileSuffix = '.geo.json'
  const filePath = directoryRelative + fileName + fileSuffix
  return path.resolve(__dirname, filePath)
}

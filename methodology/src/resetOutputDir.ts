import * as fs from 'fs'
import * as path from 'path'

export const outputPathRelative = '../output/'

export const resetOutputDir = (): void => {
  const directory = path.join(__dirname, outputPathRelative)
  fs.readdir(directory, (err, files) => {
    if (err) throw err

    for (const file of files) {
      fs.unlink(path.join(directory, file), err => {
        if (err) throw err
      })
    }
  })
}

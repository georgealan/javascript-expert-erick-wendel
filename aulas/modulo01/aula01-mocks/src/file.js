const { readFile } = require('fs/promises')
const { error } = require('./constants')

const DEFAULT_OPTION = {
  maxLines: 3,
  fields: ['id', 'name', 'profession', 'age']
}

class File {
  static async csvToJson(filePath) {
    const content = await readFile(filePath, 'utf8')
    const validation = this.isValid(content)
    if(!validation.valid) throw new Error(validation.error)
  }

  static isValid(csvString, options = DEFAULT_OPTION) {

    // [0] = headers
    // [1] = linha 1
    // [2] = linha 2
    // ...variable = leftovers
    const [headers, ...fileWithoutHeader] = csvString.split(/\r?\n/)

    if (!fileWithoutHeader.length) {
      return {
        error: error.FILE_LENGHT_ERROR_MESSAGE,
        valid: false
      }
    }

  }
}

module.exports = File
const File = require('./src/file')
const { error } = require('./src/constants')
const assert = require('assert')

;(async () => {

  // variables created here will be valid only in each block of execution
  {
    const filePath = './mocks/emptyFile-invalid.csv'
    const expected = new Error(error.FILE_LENGHT_ERROR_MESSAGE)
    const result = File.csvToJson(filePath)
    await assert.rejects(result, expected)
  }

})()

// TODO - Continue in 2. Trabalhando com Mocks 00:26:00
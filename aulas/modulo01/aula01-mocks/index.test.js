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

  {
    const filePath = './mocks/invalid-header.csv'
    const expected = new Error(error.FILE_FIELDS_ERROR_MESSAGE)
    const result = File.csvToJson(filePath)
    await assert.rejects(result, expected)
  }

  {
    const filePath = './mocks/fiveItems-invalid.csv'
    const expected = new Error(error.FILE_LENGHT_ERROR_MESSAGE)
    const result = File.csvToJson(filePath)
    await assert.rejects(result, expected)
  }

  {
    const filePath = './mocks/threeItems-valid.csv'
    const expected = [
      {
        id: 1,
        name: "Ayrton Senna",
        profession: "piloto",
        age: 45
      },
      {
        id: 2,
        name: "Mike Tyson",
        profession: "boxer",
        age: 54
      },
      {
        id: 3,
        name: "Fabio Akita",
        profession: "programmer",
        age: 50
      }
    ]
    const result = await File.csvToJson(filePath)
    assert.deepEqual(result, expected)
  }

})()

const Service = require('./service')
const assert = require('assert')
const { createSandbox } = require('sinon')
const sinon = createSandbox()

const mocks = {
  tatooine: require('../mocks/tatooine.json'),
  alderaan: require('../mocks/alderaan.json'),
}

const BASE_URL_1 = 'https://swapi.dev/api/planets/1/'
const BASE_URL_2 = 'https://swapi.dev/api/planets/2/'

;(async () => {
  /*
  {
    // Need internet connection
    const service = new Service()
    const dados = await service.makeRequest(BASE_URL_2)
    console.log('dados', JSON.stringify(dados))
  }
  */

  const service = new Service()
  const stub = sinon.stub(service, service.makeRequest.name)

  stub.withArgs(BASE_URL_1).resolves(mocks.tatooine)
  stub.withArgs(BASE_URL_2).resolves(mocks.alderaan)

  {
    const expected = {
      name: 'Tatooine',
      surfaceWater: '1',
      appearedIn: 5
    }

    const results = await service.getPlanets(BASE_URL_1)
    assert.deepStrictEqual(results, expected)
  }

  {
    const expected = {
      name: 'Alderaan',
      surfaceWater: '40',
      appearedIn: 2
    }

    const results = await service.getPlanets(BASE_URL_2)
    assert.deepStrictEqual(results, expected)
  }

  /*
    Stubs are used to replace the original method with a fake one. 
    This way, we can control the return value of the method and test different scenarios
    without internet connection, because we are not making a real request to the API.
    With that we save money if the api is paid.
  */

})()
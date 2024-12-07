const http = require('http')

const DEFAULT_USER = {
  username: 'GeorgeAlan',
  password:'123' 
}

const routes = {
  '/contact:get': (req, res) => {
    res.write('contact us page')
    return res.end()
  },
  '/login:post': async (req, res) => {
    for await (const data of req) {

    }
    return res.end()
  },
  default(req, res) {
    Response.writeHead(404)
    return res.end('not found')
  }
}

function handler(req, res) {
  const { url, method } = req
  const routeKey = `${url.toLowerCase()}:${method.toLowerCase()}`
  const chosen = routes[routeKey] || routes.default
  return chosen(req, res)
}

const app = http.createServer(handler)
.listen(3000, () => console.log('running at 3000'))

// TODO continue in 5. Trabalhando com testes end-to-end 00:10:00
const http = require('http') // guarda a importação do módulo
const host = "127.0.0.1"
const port = 3000

const server = http.createServer((request, response) => {
    response.end('New NodeJS test')
})

server.listen(port, host, () => {
    console.log('Servidor em execução...')
})
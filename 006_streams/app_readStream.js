// Streams

const fs = require('fs')

const readStream = fs.createReadStream('./dados.txt')
const writeStream = fs.createWriteStream('./output.txt')

readStream.on('data', (dados) => {
    console.log('#######################################################')
    console.log(dados.toString())
    writeStream.write('\n=============================================\n')
    writeStream.write(dados)
})
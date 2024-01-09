const fs = require('fs')

// reading files
if(fs.existsSync('./dados.csv')){
    let dados = fs.readFileSync('./dados.csv')
    console.log(dados)
    console.log(dados.toString)
}else{
    console.log('File not found.')
}
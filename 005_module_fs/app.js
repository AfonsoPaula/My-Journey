// File System Module

const fs = require('fs')

// reading files
if(fs.existsSync('./dados.csv')){
    let dados = fs.readFileSync('./dados.csv')
    console.log(dados)
    console.log(dados.toString)
}else{
    console.log('File not found.')
}

// write file
fs.writeFile('./dados1.txt', 'Afonso Paula', () =>{
    console.log('Written file.')
})
fs.writeFileSync('./dados2.txt', 'ana silva')

fs.appendFile('./dados1.txt', 'Rui\n', (err) => {
    console.log(err)
})
fs.appendFileSync('./dados1.txt', 'Hugo\n')


console.log('Last operation.')
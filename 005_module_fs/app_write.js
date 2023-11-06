const fs = require('fs')

// write file
fs.writeFile('./dados1.txt', 'Afonso Cruz', () =>{
    console.log('Written file.')
})
fs.writeFileSync('./dados2.txt', 'ana silva')

fs.appendFile('./dados1.txt', 'Rui\n', (err) => {
    console.log(err)
})
fs.appendFileSync('./dados1.txt', 'Hugo\n')
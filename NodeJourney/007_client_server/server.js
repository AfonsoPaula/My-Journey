const http = require('http')
const fs   = require('fs')

const server = http.createServer((req,res) => {

    // prepare the response header
    res.setHeader('Content-Type', 'text/html')

    // prepare the html content 
    fs.readFile('./html_pages/index.html', (err, data) => {
        if(err){
            console.log('An error occurred.')
            res.end()
        }else{
            res.write(data)
            res.end()
        }
    })

})

server.listen(3000, 'localhost', ()=>{ // activate server
    console.log('Servidor iniciado.')
})
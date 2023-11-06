const http = require('http')

const server = http.createServer((req,res) => {

    // header
    res.setHeader('Content-Type', 'text/html')

    res.write('<head><link rel="stylesheet" href="app.css"></head>')
    res.write('<h2>Test 1</h2>')
    res.write('<h3>Test 2 </h3>')
    res.write('<h4>Test 3</h4>')
    res.write('<p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</p>')
    
    res.end()
})

server.listen(3000, 'localhost', ()=>{ // activate server
    console.log('Servidor iniciado.')
})
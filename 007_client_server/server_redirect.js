const http = require('http')
const fs   = require('fs')

const server = http.createServer((req,res) => {

    // prepare the response header
    res.setHeader('Content-Type', 'text/html')

    let html_file = '';
    switch(req.url){
        case '/':
            html_file = './views/index.html'
            res.statusCode = 200;
            break;
        case '/about':
            html_file = './views/about.html'
            res.statusCode = 200;
            break;
        // redirect
        case '/acerca_de':
            res.setHeader('Location', '/about');
            res.statusCode = 301;
            res.end()
            break;
        default:
            html_file = './views/404.html'
            res.statusCode = 404;
            break
    }

    fs.readFile(html_file, (err, data) => {
        
        if(err){
            console.log(err)
            res.end()
        }else{
            res.write(data)
            res.end()
        }
        
    })

    
})

server.listen(3000, 'localhost', ()=>{ 
    console.log('Server started.')
})
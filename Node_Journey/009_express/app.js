const express = require('express')
const morgan = require('morgan')

// create express application
const app = express()

// register the template engine (view engine)
app.set('view engine', 'ejs')
//    By configuring the view engine in this matter, you can render EJS
// views in your Express applicaion without the need to explicity the
// view inevery rendering call.

// listen to requests
app.listen(3000)

// -------------------------------------------------------------------------------------
//                                 routes - without ejs
//
// app.get('/', (req,res) => {
//     // res.send('<h1>Teste</h1>')
//     res.sendFile('./views/home.html', {root: __dirname})
//     // path must be absolute or specify root to res.sendFile
// })
// app.get('/about', (req,res) => {
//     res.sendFile('./views/about.html', {root: __dirname})
// })
// app.get('/services', (req,res) => {
//     res.sendFile('./views/services.html', {root: __dirname})
// })
// app.get('/acerca-de', (req, res) => { // redirect
//     res.redirect('/about')
// })
// app.use((req,res) => {
//     // res.sendFile('./views/404.html', {root: __dirname})
//     // res.status(404).sendFile('./views/404.html', {root: __dirname})
// })                 //pipe
// // 'use' method is used to apply middleware
// // (between req and res)
// // And must always be in last 

// -------------------------------------------------------------------------------------
//                                     middleware
app.use(express.static('public'))
app.use(morgan('Method: :method')) 

// -------------------------------------------------------------------------------------
//                                  routes - with ejs
app.get('/', (req,res) => {
    res.render('home', {title: "Home Page"})
})

app.get('/about', (req,res) => {
    res.render('about',{title: "About us"})
})

app.get('/services', (req,res) => {

    // const servicos = []
    const servicos = [ // collection with 3 objects
        {titulo_servico: "Web Development", descricao: "We develop web pages and apps."},
        {titulo_servico: "Desktop Development", descricao: "We develop desktop apps."},
        {titulo_servico: "Mobile Development", descricao: "We develop mobile apps for Android and iOS."}
    ]

    res.render('services', { title: "Contact us", servicos })
})

app.use((req,res)=>{
    res.status(404).render('404', {title: "Error!"})
})
// -------------------------------------------------------------------------------------
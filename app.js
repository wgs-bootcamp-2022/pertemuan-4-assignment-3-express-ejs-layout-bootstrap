const express = require('express')
const app = express()
const port = 3000
const expressLayouts = require('express-ejs-layouts')

app.use(expressLayouts)
app.set('layout', './layout/home')

app.set('view engine', 'ejs')

app.get('/', (req,res)=>{
    res.render('index',{
        name : "Yahya",
    })
})
app.get('/about', (req,res)=>{
    res.render('about')
})
app.get('/contact', (req,res)=>{
    cont = [
        { name : "Yahya",
          email: "Yahyaz@gmail.com"
        },
        { name : "Budi",
          email: "Budi@gmail.com"
        },        
        { name : "Zack",
          email: "Zack@gmail.com"
        },
    ]
    res.render('contact',{cont})
})

app.use('/', (req, res) => {
    res.status(404)
    res.send('page not found: 404')
})
app.listen(port, ()=> {
    console.log(`Example app listening on port ${port}`)
})
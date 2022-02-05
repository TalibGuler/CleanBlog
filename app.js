const express = require('express')
const ejs = require('ejs')
const app = express()

app.set("view engine", "ejs")

app.use(express.static('public'))

app.get('/', (req,res) =>{
    // const blog = { id: 1, title: "Blog title", description: "Blog description" }
    // res.send(blog)
    res.render('index')
})

app.get('/about',(req,res)=>{
    res.render('about')
})

app.get('/add_post',(req,res)=>{
    res.render('add_post')
})


app.get('/post',(req,res)=>{
    res.render('post')
})

const port = 3000

app.listen(port,()=>{
    console.log(`Sunucu ${port} portunda başlatıldı...`)
})
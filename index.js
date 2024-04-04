require('dotenv').config()

const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/myaccount' , (req, res)=>{
    res.send('Welcom To your Account')
})

app.get('/login', (req, res)=>{
    res.send('<h1>Please Login my Page</h>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
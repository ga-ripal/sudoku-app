const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
const {PORT} =  require('./sudoku-app/config/env.config')

app.use(require('./sudoku-app/routes/index.route'))

app.listen(PORT,()=>{
    console.log(`server started at ${PORT} http://localhost:${PORT}/api`)
})
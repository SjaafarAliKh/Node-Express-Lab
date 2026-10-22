// imports
const express = require("express") //importing express package
const app = express() // creates a express application

app.use(express.static('public'));

app.get('/test', (request, response) => {
    console.log('In test route')
    response.sendFile(__dirname + '/views/test.html')
})

app.get('/', (request, response) => {
    console.log('In homepage route')
    response.sendFile(__dirname + '/views/index.html')
})

app.get('/about', (request, response) => {
    console.log('In about route')
    response.sendFile(__dirname + '/views/about.html')
})

app.listen(3000,()=>{
    console.log("Listening on port " + 3000)
})  

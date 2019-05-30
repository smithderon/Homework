let express = require("express")
let app = express()
var port = 4000
var date = new Date()
app.get(`/`, (request, response)=>{
    response.send("Hello, realm!")
})
app.get("/cats?", (req, res)=> {
    res.send("Meow mix, meow!")
})
app.get("/dogs?", (req, res)=>{
    res.send(`Bow wow`)
})
app.get("/cats?_?and_?dogs?", (req, res)=>{
    res.send("And so, the world learned harmonious existence!")
})
app.get("/greet/?", (req, res) =>{
    var name = req.query.name || "Mine"
    res.send(`Greetings, ${name}.`)
})
app.get("/calc/?", (req, res) =>{
    var age = parseInt(req.query.age)
    if(req.query.age){
    res.send(`It seems you're born in about ${date.getFullYear() - age} `)
    }
})
// app.get(`/pictures(collage)?`, (request, response)=>{
//     response.send("Sei ya!")
// })

app.listen(port, function(){
    console.log("Hey, listen! (on port: " + port )
})
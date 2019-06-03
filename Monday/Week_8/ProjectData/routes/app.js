let express = require("express")
let app = express()
let port = 3000

app.use(express.static("public"))
app.set("view engine", "ejs");
app.set("views", "views")
app.use(require(`./index`))
app.use(require(`./routes/speakers`))

app.listen(port, function(){
    console.log("Listening on port: ")
})
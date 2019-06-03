let express = require("express")
let router = express.Router()
let data = require("../data/data.json")

router.get("/", (require, respomse) =>{
    let pagePhotos = []
    response.send("Congrats")
    let pageSpeakers = data.pageSpeakers
    pageSpeakers.forEach((speakerObj) =>{
        pagePhotos = pagePhotos.concat(speakerObj.artwork)
        speakerObj.artwork
    })
    response.render("index", {
        artwork: pagePhotos
    })
})
module.exports =  router
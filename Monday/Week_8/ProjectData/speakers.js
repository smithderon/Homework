let express = require("express")
let router = express.Router()
let data = require("../data/data.json")


router.get("/speakers?", (request, response) =>{
    let pagePhotos = []
let pageSpeakers = []
    data.speaker.forEach((e)=>{
        pagePhotos = pagePhotos.concat(e.artwork)
    })

    response.render("speakers",{
        artwork : pagePhotos,
        speakers : data.speakers
    })
})
router.get("/speakers/:speakerid?", (request, response) =>{
    let pagePhotos = []
    let pageSpeakers = []
    data.speakers.forEach((person) =>{
        if(person.shortname == request.params.speakerid){
            pageSpeakers.push(person)
            pagePhotos = pagePhotos.concat(person.artwork)
        }
    })
    response.render("speakers",{
        artwork: pagePhotos ,
        speakers: pageSpeakers
    })
    
})
module.exports =  router
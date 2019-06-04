let express = require("express")
let router = express.Router()
let bodyParse = require("body-parser")
router.get("/", (req, res)=>{
    // res.send("Nothing")
    res.render("index")
})
router.use(bodyParse.urlencoded({extended:false}));
router.post("/", (req, res)=>{
    console.log(req.body)
    console.log(req.body.name)
    res.send("Nani Sore")
})

module.exports = router
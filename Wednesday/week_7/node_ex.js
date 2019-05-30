// console.log("HELLO WORLD")

// #2
// console.log(process.argv)
// var sum = 0
// for( var i = 2; i < process.argv.length; i++){
    
//     sum += Number(process.argv[i])
    
// }
// console.log(sum)


// #3
// var fs = require("fs")
// var count = 0
// var file = fs.readFileSync(`${process.argv[2]}`)
// var stringVer = file.toString()
// var splitVer = stringVer.split("\n") 
// console.log(splitVer.length - 1)
// for(var i = 0; i <= stringVer.length; i + 0){
// }

//#4
// var fs = require("fs")
// fs.readFile(`${process.argv[2]}`, function(error, buffer){
//     if (error){
//         console.log(error.message)
//         return
//     }
//     var string = buffer.toString()
//     var split = string.split("\n")
//     var splitCount = split.length
//     console.log(splitCount - 1)
// })

//#5
var fs = require("fs")
var path = require("path")
var file = process.argv[2]
fs.readdir(file, function(error, list){
    for(var i = 0; i <= list.length; i ++){
    path.extname(`${list}`)
    console.log(list)
    }
})

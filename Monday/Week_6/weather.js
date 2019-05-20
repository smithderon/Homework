$(function(){


let apikey = "9361bd03ec7175e9eea92fdf7a717518"
let url = `http://api.openweathermap.org/data/2.5/weather?q=Tokyo`
$.get(url + "&appid=" + apikey)
.done(function(response){


tempConvert(response.main.temp)
})
function tempConvert(kelvin){
    let c = Math.floor(kelvin - 273.15)
    let f = Math.floor(c * 1.8 + 32)

    $(`#temp`).html(`<p> ${c}&#176;C & ${f}&#176;F </p>`)
}
})

fetch(`http://api.openweathermap.org/data/2.5/weather?q=Tokyo&appid=9361bd03ec7175e9eea92fdf7a717518`)
.then((result) =>{
    return result.json()
})
.then((thing)=> console.log(thing))
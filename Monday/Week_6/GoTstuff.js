$(function(){
let url =  "https://anapioficeandfire.com/api/"
//Chrome is obviously far too secure.
function addinfo(factor){
    $("#test").html(factor)
    console.log(factor)
}
for (var i = 1; i < 200; i ++){
    if(i <= 100){
        $.get(url + `characters/` + i)
        .done((newitem) =>{
            addinfo(newitem)
        })
    }
    else if (i > 100){
        $.get( url + `houses/` + i)
        .done(function(requesteditem){
            addinfo(requesteditem)
        })
    }
}
})
//Also not terribly sure what else is wanting to be done with the data so...yeah.
//I was just wanting to make sure that I know how to request it from the API.
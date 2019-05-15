

var deck = [{
    suit: "S",
    value: 1,
    image: "1S.jpg",
}
,{ 
    suit: "S",
    value: 2,
    image: "2S.jpg",
}
,{ 
    suit: "S",
    value: 3,
    image: "3S.jpg",
}
,{ 
    suit: "S",
    value: 4,
    image: "4S.jpg",
}
,{ 
    suit: "S",
    value: 5,
    image: "5S.jpg",
}
,{ 
    suit: "S",
    value: 6,
    image: "6S.jpg",
}
,{ 
    suit: "S",
    value: 7,
    image: "7S.jpg",
}
,{ 
    suit: "S",
    value: 8,
    image: "8S.jpg",
}
,{ 
    suit: "S",
    value: 9,
    image: "9S.jpg",
}
,{ 
    suit: "S",
    value: 10,
    image: "10S.jpg",
}
,{ 
    suit: "S",
    value: 10,
    image: "11S.jpg",
}
,{ 
    suit: "S",
    value: 10,
    image: "12S.jpg",
}
,{ 
    suit: "S",
    value: 10,
    image: "13S.jpg",
}
,{ 
    suit: "C",
    value: 1,
    image: "1C.jpg",
}
,{ 
    suit: "C",
    value: 2,
    image: "2C.jpg",
}
,{ 
    suit: "C",
    value: 3,
    image: "3C.jpg",
}
,{ 
    suit: "C",
    value: 4,
    image: "4C.jpg",
}
,{ 
    suit: "C",
    value: 5,
    image: "5C.jpg",
}
,{ 
    suit: "C",
    value: 6,
    image: "6C.jpg",
}
,{ 
    suit: "C",
    value: 7,
    image: "7C.jpg",
}
,{ 
    suit: "C",
    value: 8,
    image: "8C.jpg",
}
,{ 
    suit: "C",
    value: 9,
    image: "9C.jpg",
}
,{ 
    suit: "C",
    value: 10,
    image: "10.jpg",
}
,{ 
    suit: "C",
    value: 10,
    image: "11C.jpg",
}
,{ 
    suit: "C",
    value: 10,
    image: "12C.jpg",
}
,{ 
    suit: "C",
    value: 10,
    image: "13C.jpg",
}
,{ 
    suit: "D",
    value: 1,
    image: "1D.jpg",
}
,{ 
    suit: "D",
    value: 2,
    image: "2D.jpg",
}
,{ 
    suit: "D",
    value: 3,
    image: "3D.jpg",
}
,{ 
    suit: "D",
    value: 4,
    image: "4D.jpg",
}
,{ 
    suit: "D",
    value: 5,
    image: "5D.jpg",
}
,{ 
    suit: "D",
    value: 6,
    image: "6D.jpg",
}
,{ 
    suit: "D",
    value: 7,
    image: "7D.jpg",
}
,{ 
    suit: "D",
    value: 8,
    image: "8D.jpg",
}
,{ 
    suit: "D",
    value: 9,
    image: "9D.jpg",
}
,{ 
    suit: "D",
    value: 10,
    image: "10D.jpg",
}
,{ 
    suit: "D",
    value: 10,
    image: "11D.jpg",
}
,{ 
    suit: "D",
    value: 10,
    image: "12D.jpg",
}
,{ 
    suit: "D",
    value: 10,
    image: "13D.jpg",
}
,{ 
    suit: "H",
    value: 1,
    image: "1H.jpg",
}
,{ 
    suit: "H",
    value: 2,
    image: "2H.jpg",
}
,{ 
    suit: "H",
    value: 3,
    image: "3H.jpg",
}
,{ 
    suit: "H",
    value: 4,
    image: "4H.jpg",
}
,{ 
    suit: "H",
    value: 5,
    image: "5H.jpg",
}
,{ 
    suit: "H",
    value: 6,
    image: "6H.jpg",
}
,{ 
    suit: "H",
    value: 7,
    image: "7H.jpg",
}
,{ 
    suit: "H",
    value: 8,
    image: "8H.jpg",
}
,{ 
    suit: "H",
    value: 9,
    image: "9H.jpg",
}
,{ 
    suit: "H",
    value: 10,
    image: "10H.jpg",
}
,{ 
    suit: "H",
    value: 10,
    image: "11H.jpg",
}
,{ 
    suit: "H",
    value: 10,
    image: "12H.jpg",
}
,{ 
    suit: "H",
    value: 10,
    image: "13H.jpg",
}
]
let count = 0
var player = document.getElementById("player-hand")
var dealer = document.getElementById("dealer-hand")
var playerList = []
var dealerList = []
var pointP = document.getElementById("playerPoints")
var dealerP = document.getElementById("dealerPoints")
let playerPoints = 0
let dealerPoints = 0
var draw3 =  parseInt(Math.random() *  (52) + 1)

calc = function pointCalc(){
    playerPoints -= playerPoints
    dealerPoints -= dealerPoints
    dealerList.forEach(function(e){
        dealerPoints += e[0].value
    })
    playerList.forEach(function(e){
        playerPoints += e[0].value
    })
    pointP.textContent = playerPoints
    dealerP.textContent = dealerPoints
    if (dealerPoints > 17 && playerPoints < dealerPoints){
        console.log("hoooola")
    }
    else if (playerPoints > 17 && dealerPoints < playerPoints){
        console.log("Hola")
    }
    else{
        null
    }

}
function drawAgain(){
    var draw = parseInt(Math.random() *  (52)+ 1)
    return draw
}
function drawTwo(){
    var draw2 = parseInt(Math.random() *  (52) + 1)
    return draw2
}

document.getElementById("deal-button").addEventListener("click", function(){
    if (count == 0){
    //write dealer logic here
    var draw = parseInt(Math.random() *  (52)+ 1) 
    var draw2 =  parseInt(Math.random() *  (52) + 1)
    var cardp = document.createElement("img")
    var cardP1 = document.createElement("img")
    cardp.setAttribute("src", "JPEG/" + deck[draw].image)
    player.appendChild(cardp)
    cardP1.setAttribute("src", "JPEG/" + deck[draw2].image)
    player.appendChild(cardP1)
    var cardD = document.createElement("img")
    var cardD1 = document.createElement("img")
    dealer.appendChild(cardD)
    dealer.appendChild(cardD1)
    cardD.setAttribute("src","JPEG/blue_back.jpg")
    cardD1.setAttribute("src","JPEG/" + deck[draw3].image)
    count += 1
    console.log(draw)
    var newerCard = deck.splice(draw, 1)
    var newCard = deck.splice(draw2, 1)
    var newestCard = deck.splice(draw3, 1)
    playerList.push(newCard, newerCard)
    dealerList.push(newestCard)
    calc()
}
else if (draw == undefined || draw2 == undefined){
    drawAgain()
    drawTwo()
}
else{
    console.log("It is working, though")
}
});

 
document.getElementById("hit-button").addEventListener("click", function(){
let draw = parseInt(Math.random() *  (52 - 1)) + 1
let draw2 =  parseInt(Math.random() *  (52 - 1)) + 1
if (draw in deck && count >= 1 && draw != undefined && draw2 in deck && draw2 != undefined){
let cardp = document.createElement("img")
let cardD = document.createElement("img")
cardD.setAttribute("src","JPEG/" + deck[draw].image)
cardp.setAttribute("src","JPEG/" + deck[draw2].image)
var newerCard = deck.splice(draw)
var newCard = deck.splice(draw2)
playerList.push(newCard)
dealerList.push(newerCard)
dealer.appendChild(cardD)
player.appendChild(cardp)
calc()
}
else if (draw == undefined || draw2 == undefined){
    drawAgain()
    drawOne()
}
})

 

document.getElementById("btnStand").addEventListener("click", function(){
    //write "Stand" logic here
    if(dealerPoints < 17 && count > 0 && draw in deck){
    var draw = parseInt(Math.random() *  (52 - 1)) + 1
    var cardD = document.createElement("img")
    cardD.setAttribute("src","JPEG/" + deck[draw].image)
    dealer.appendChild(cardD)
    var newerCard = deck.splice(draw)
    dealerList.push(newerCard)
    calc()
    }
    else if((dealerPoints < 17 && count > 0 && draw == undefined)) {
        drawAgain()
    }
    else{
        null
    }
});

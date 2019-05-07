// Write a function that takes a number as an input.
// Have it create an empty array and then push a string into the array as many
// times as the input number
//
// Name the function "finalFunction"

// function finalFunction(number){
//     var string = "Omega"
//     var ha = []
//     for (var i = 0; i < number; i ++){
//         ha.push(string)
//     }
//     return ha
// }

// console.log(finalFunction(2))


 // Return 'hello' if num is 1, 'world' if num is 2, otherwise return 'bye'

// function lvl6exercise1(number){
//     if (number == 1){
//         var thing = "Shammalamma ding-dong"
//     }
//     else if (number == 2){
//         var thing = "Are you not entertained!?"
//     }
//     else{
//         var thing = "Failure"
//     }
//     return thing
//   }

//   console.log(lvl6exercise1(2))


function lvl6exercise3 () {
    // Empty this array using a while loop and return it
    var hiya = ['hello', 'hello', 'hello', 'hello', 'hello', 'hello', 'hello', 'hello', 'hello', 'hello']
    while (hiya.length > 0){
        hiya.pop()
    }
    return hiya
  }

  console.log(lvl6exercise3())
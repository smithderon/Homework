// Positive Numbers

// var arr = [1, 2, 3, 5, 6, 18, 29, 19, 50, 27, -99]

// var ha = arr.filter(function(element){

// return element > 0;
// });
// console.log(ha)


//Even Numbers

// var arr = [1, 2, 3, 5, 6, 18, 29, 19, 50, 27, -99]

// var ha = arr.filter(function(element){


//     return (element % 2 == 0 );
// });
// console.log(ha)

//Squared Numbers

// var arr = [1, 2, 3, 5, 6, 18, 29, 19, 50, 27, -99]

// var ha = arr.map(function(element){


//     return (element * element);
// });
// console.log(ha)

//Cities 1

// var cities = [ 
//     { name: 'Los Angeles', temperature: 60.0}, 
//     { name: 'Atlanta', temperature: 52.0 }, 
//     { name: 'Detroit', temperature: 48.0 }, 
//     { name: 'New York', temperature: 80.0 } ];

// var temps = cities.filter(function(element){

//     return (element["temperature"] < 70)
// })

// console.log(temps)

//Cities 2

// var cities = [ 
//         { name: 'Los Angeles', temperature: 60.0}, 
//         { name: 'Atlanta', temperature: 52.0 }, 
//         { name: 'Detroit', temperature: 48.0 }, 
//         { name: 'New York', temperature: 80.0 } ];
    
//     var temps = cities.forEach(function(element){
    
//         console.log(element["name"])
//     })
    
//     console.log(temps)

//Good Job!

// var people = [ 'Dom', 'Lyn', 'Kirk', 'Autumn', 'Trista', 'Jesslyn', 'Kevin', 'John', 'Eli', 'Juan', 'Robert', 'Keyur', 'Jason', 'Che', 'Ben' ];

// var haha = people.forEach(function(element){

//     console.log("Good job, " + element + "!")
// })

//Sort 1

// var stuff = ["Nani", "Sore", "ka", "za", "Dare", "Kore"]
// var sorted = stuff.sort()

// console.log(sorted)

//Sort 2

// var stuff = ["Nani", "Sore", "ka", "za", "Dare", "Kore"]
// var stuff2 = stuff.sort(function(a, b){
//    if (a.length < b.length)
//    return -1
// })

// Different things that worked and others that didn't:(
// var sorted = function(element){
//     var nani = []
//     for (var i = element.length; i > 0; i --){
//         nani.push(element[i-1])
//     }
//     return nani
// }
//  var sorted = stuff2.map(function(element){
//      thing = -(stuff2[element])

//     return 

//  })
// console.log(stuff2)
//   )

//Sort 3

var arr = [ 
    [1, 3, 4], 
    [2, 4, 6, 8], 
    [3, 6] ];

var what = function(one){
    var hi = one.reduce(function(three, two){
        three = three + two
        return three
    })
    return hi
}

var ha = arr.sort(function(nani, nani2){
        return what(nani) - what(nani2)
}) 

console.log(ha)



let backpack = [];

backpack.push('pokeball')
backpack.push('potion')
backpack.push('pokedollars')

// backpack.shift()
backpack.splice(0, 1)

let foundItem = 'waterstone';
backpack.push(foundItem)

backpack.pop()

// console.log(backpack.length)

backpack.push('great ball', 'antidote', 'revive')

let satchel = backpack.splice(3, 2)

// for(let i = 0; i < backpack.length; i++){
//     console.log(`This is the item at the index of ${i}:`, backpack[i])
// }

if(backpack.length >= 3){
    for(let i = 0; i < 3; i++){
        console.log(backpack[i])
    }
} else {
    for(let i = 0; i < backpack.length; i++){
        console.log(`This is the item at the index of ${i}:`, backpack[i])
    }
}

// console.log(backpack)
// console.log(satchel)

// ---------------------------------------------------------

// let guessMe = 54

// while (guessMe < 100) {
//     console.log('------------', guessMe)
//     if (guessMe % 4 === 0 || guessMe % 5 === 0) {
//         guessMe += 25
//         console.log('divisible by 4 or 5, added 25', guessMe)
//     } else if (guessMe % 3 === 0) {
//         guessMe -= 27
//         console.log('divisible by 3, subtracted 27', guessMe)
//     } else {
//         guessMe += 3
//         console.log('added 3', guessMe)
//     }
//     guessMe += 22
//     console.log('added 22', guessMe)
// }

// console.log('final value', guessMe)
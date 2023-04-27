let backpack = [];

backpack.push('pokeball')
backpack.push('potion')
backpack.push('pokedollars')

// backpack.shift()
backpack.splice(0, 1)

let foundItem = 'waterstone';
backpack.push(foundItem)

backpack.pop()

let itemCount = backpack.length
// console.log(itemCount)

backpack.push('great ball', 'antidote', 'revive')

for(let i = 0; i < 10; i++){
    backpack.push('great ball')
}

// let satchel = backpack.splice(3, 2)
// console.log(satchel)

console.log(backpack)

// for(let i = 0; i < backpack.length; i++){
//     console.log(backpack[i])
// }

if(backpack.length >= 3){
    for(let i = 0; i < 3; i++){
        console.log(backpack[i])
    }
} else {
    for(let i = 0; i < backpack.length; i++){
        console.log(backpack[i])
    }
}

// ---------------------------------------------------------

let guessMe = 54

while (guessMe < 100) {
    console.log('------------', guessMe)
    if (guessMe % 4 === 0 || guessMe % 5 === 0) {
        guessMe += 25
        console.log('divisible by 4 or 5, added 25', guessMe)
    } else if (guessMe % 3 === 0) {
        guessMe -= 27
        console.log('divisible by 3, subtracted 27', guessMe)
    } else {
        guessMe += 3
        console.log('added 3', guessMe)
    }
    guessMe += 22
    console.log('added 22', guessMe)
}

console.log('final value', guessMe)
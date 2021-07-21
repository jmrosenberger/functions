 //---------  FIRST EXERCISE ----------//
//---Introduction: Age in Dog Years---//




const calculateAgeInDogYears = (ageOfPerson) => {

    const ageInDogYears = ageOfPerson / 7

    return ageInDogYears
}

const dogAge = calculateAgeInDogYears(22)


console.log(dogAge)




  //----------  SECOND EXERCISE ----------//
 //---------Practice: Best in Show-------//
 
 


 const dogBreed = (dogBreedInput) => {
     
     if (dogBreedInput === "meow") {
         
         return "I like cats"

        }

         return `my favorite dog breed is ${dogBreedInput}.`       
    }
    
const myFavorite = dogBreed("pitbull terrier")


console.log(`When it comes to pets, ${myFavorite}`)
    
    
    
    
 //----------  THIRD EXERCISE -----------//
//-----------Practice: Addition---------//
    



const add = (x, y, z) => {

    return x + y + z
}

console.log(add(17, 4, 11))




 //----------  FOURTH EXERCISE ----------//
//-----Practice: Self-Driving Cars------//




const go = (direction, speed) => {

    if (speed > 75) {

        return `The car is moving forward at ${speed} mph. SLOW DOWN!`

    }

        return `The car is moving ${direction} at ${speed} mph.`

}


const speedAndDirection = go("uphill", 170)


console.log(speedAndDirection)




 //----------  FIFTH EXERCISE ----------//
//--------Practice: Evens or Odds------//




const evenOrOdd = (num) => {

    if (num % 2 === 0) {

        return "even"

    }

    return "odd"
}

console.log(evenOrOdd(9))


const numArray = [2, 5, 7, 8, 10, 3, 19, 13, 6]


for (const i of numArray) {
    
    console.log(evenOrOdd(i))
}




 //----------  SIXTH EXERCISE ----------//
//------Practice: Double Functions-----//




const words = [
    "The", "killing", "complex", "houses",
    "married", "kittens", "and", "single",
    "soldiers", "and", "their", "kleptomaniacal",
    "families"
]

let newWords = []

const filteredWords = (array) => {

    for (const word of words) {

        if (!word.startsWith("k")) {

             newWords.push(word)
        }
    }
    return newWords
}

const stringArray = (array) => {

    return array.join(" ")
}


const filteredArray = filteredWords(words)


const sentenceArray = stringArray(filteredArray)


console.log(sentenceArray)




 //--------------  SEVENTH EXERCISE ---------------//
//Practice: You Can Tune a Piano, But You Can't...//

 


const isSvenGoingHungry = (num) => {   
    
    if (Math.random() * num < 1) {
        
        console.log("Sven came up empty-handed.  :(")           
              
    } else {
        
        console.log("Sven hooked a tuna!  :)")                          

    }
   
}
 

isSvenGoingHungry(2)




 //--------------  EIGHTH EXERCISE ---------------//
//---Practice: Fast Food (Multiple Parameters)---//




function fastFoodMeal(sandwich, side, drink, dessert) {
    
    return {
        sandwich: sandwich,
        side: side,
        drink: drink,
        dessert: dessert,
    }
}


const takeOutBag = fastFoodMeal("Ultimate Slammer", "Fudge sundae", "Mr. Pepper", "Potato wedges")


console.log(takeOutBag)




 //-------------  NINTH EXERCISE -------------//
//---Practice: Same Chores, Different Days---//




const twice = number => number * 2

twiceTwo = twice(2)
console.log(twiceTwo)  // 4

twiceSix = twice(6)
console.log(twiceSix)  // 12

twiceThirteen = twice(13)
console.log(twiceThirteen)  // 26



const timesFive = number => number * 5

console.log(timesFive(2))
console.log(timesFive(5))



const square = number => number * number

console.log(square(4))
console.log(square(13))


const bigify = (number, operationFunction) => {
    const result = operationFunction(number)
    return result
}


const number = 7

const by2 = bigify(number, twice)
const by5 = bigify(number, timesFive)
const byItself = bigify(number, square)

const trio = number => number * number * number

const thrice = bigify(number, trio)


//-------------------------------------


const person = {
    firstName: "Donald",
    lastName: "McLelland"
}


const trash = person => `${person.firstName} ${person.lastName} took out the trash`

const dishes = person => `${person.firstName} ${person.lastName} washed the dishes`

const laundry = person => `${person.firstName} ${person.lastName} did the laundry`

const mowed = person => `${person.firstName} ${person.lastName} mowed the lawn`

const dusted = person => `${person.firstName} ${person.lastName} dusted the dining room`

const swept = person => `${person.firstName} ${person.lastName} swept the kitchen floor`

console.log(trash(person))

// function dayPlanner(chore, person, day) {
//     return person + trash + "on thursday"
// }

//  console.log(dayPlanner())





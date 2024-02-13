let fullName: string = "Rinaldi Rizqi Fauzi"
let age: number = 25
let isMarried: boolean = false
let statusMarried: string = (isMarried == false) ? "single" : "already married"
let hobbies: string[]
let numberPhone: [string, number]

enum transmission {
    gear = "gear",
    clutch = "clutch",
    automatic = "automatic"
}

type motorCycle = {
    name: string,
    type: string,
    motorbikePlate: string,
    color: string,
    transmission: string,
}

const myMotorCycle: motorCycle = {
    name: "Vario 125 CC",
    type: "Honda",
    motorbikePlate: "AB 2510 XYZ",
    color: "black and white",
    transmission: transmission.automatic
}

hobbies = ["ngoding", "playing games"]

numberPhone = ['My number phone', 6285763063891]

console.log(`My name        : ${fullName}`)
console.log(`My age         : ${age}`)
console.log(`My hobbies     : ${hobbies}`)
console.log(numberPhone[0] + ": " + numberPhone[1])
console.log(`Status married : ${statusMarried}`)
console.log("========My Vehicle========")
console.log(myMotorCycle)

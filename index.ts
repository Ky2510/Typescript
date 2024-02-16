function add(x:number, y:number): number {
   return x + y 
} 
console.log(add(2, 3))

let myAdd = function myAdd(x:number, y:number): number {
    return x + y
}
console.log(myAdd(5, 4))

let myFullName = function buildName(firstName:string, lastName:string) {
    return firstName + " " + lastName
}

let myCallName = function buildName(firstName:string, lastName?:string) {
    if (lastName) {
        return firstName + " " + lastName
    }else if(firstName){
        return firstName
    }

}
console.log(myCallName("Rinaldi"))

let myLastName = function buildName(firstName:string, lastName = "Rizqi Fauzi"){
    return firstName + " " + lastName
}
console.log(myLastName("Rinaldi", "LrvL"))

const arr = [1, 2, 3, 4, 5]
arr.forEach(value => {
    console.log(value)
})

console.log(arr.map(value => (value * 2)))

const arr1 = [1, 2, 3, 4, 5]
arr1.unshift(11)
console.log(arr1)

const arr2 = [1, 2, 3, 4, 5]
arr2.push(6)
console.log(arr2)

function vehicle(name: string, payTax:(cek: boolean) => string) {
    return `Halo ${name}, ${payTax(false)} membayar pajak `
}

function callback(cek: boolean) {
    if (!cek) {
        return "belum" 
    }
    return "sudah"
}
console.log(vehicle("Kyy", callback))

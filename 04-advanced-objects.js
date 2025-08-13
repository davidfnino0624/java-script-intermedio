// ObjetosAvanzados

// PototiposYHerencia
// prototipos

let person = {
    name: 'Dave',
    age: 25,
    greet () {
        console.log(`Hi, this is ${this.name}`)
    }
}

console.log(person.__proto__)

console.log(Object.getPrototypeOf(person))

person.confirmAge = function() {
    console.log(`Tengo ${this.age} años`)
}

console.log(person)

person.confirmAge()

// Herencia

let programer = Object.create(person)

console.log(programer)

programer.confirmAge()
programer.greet()

// Metodos Estaticos y de instancia 

function Person(name, age) {
    this.name = name
    this.age = age
}

Person.prototype.greet = function () {
    console.log(`Hola, soy ${this.name}`)
}

let newPerson = new Person("Brais", 37)
newPerson.greet()

// metodos avanzados
// assign

let person_core = { name: 'David K'}
let person_details = { age: 25, alias: 'kid'}

let fullPerson = Object.assign(person_core, person_details)

console.log(fullPerson)

// keys, values, entries

console.log(Object.keys(fullPerson))
console.log(Object.values(fullPerson))
console.log(Object.entries(fullPerson))
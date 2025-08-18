// Clases avanzadas

class Person {
    constructor(name, age, language){
        this.name = name
        this.age = age
        this.language = language
    }

    greet(){
        console.log(`Hola, mi nombre es ${this.name} y tengo ${this.age} años`)
    }
}

const person1 = new Person('David', 25, 'español')

console.log(person1)

person1.greet()

person1.sayLanguage = function() {
    console.log(`Yo hablo ${this.language}`)
}

person1.sayLanguage()

// clase abstacta

class Animal{
    constructor(nombre, especie, sonido){
        if(new.target === Animal){
            throw new Error(`No se puede instanciar una clase abstracta`)
        }
        this.nombre = nombre,
        this.especie = especie,
        this.sonido = sonido
    }
    makeSound = function(){
        //console.log(`${this.sonido}`)
        throw new Error(`Este metodo tiene que ser implementado por la subclase`)
    }
}

const perro = new Animal(`Tony`, `chandoso`, `waff`)
console.log(perro)

//


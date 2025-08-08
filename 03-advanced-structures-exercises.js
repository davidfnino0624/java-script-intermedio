// 1. Utiliza map, filter y reduce para crear un ejemplo diferente al de la lección

let myNumbersArray = [5, 8, 6, 2, 4, 7, 9]

const arrayMap = myNumbersArray.map(numbers => (numbers*8)/3)

console.log(arrayMap)

const arrayFilter = myNumbersArray.filter(elemento => elemento * 2 < 15)

console.log(arrayFilter)

const arrayReduce = myNumbersArray.reduce((accumulator, currentValue) => accumulator + currentValue - 1, 0)

console.log(arrayReduce)

// 2. Dado un array de números, crea uno nuevo con dichos números elevados al cubo y filtra sólo los números pares

const newArray = myNumbersArray.map(element => element ** 3)

console.log(newArray)

const newArrayFilter = newArray.filter(element => element % 2 === 0)

console.log(newArrayFilter)

// 3. Utiliza flat y flatMap para crear un ejemplo diferente al de la lección






// 4. Ordena un array de números de mayor a menor

// 5. Dados dos sets, encuentra la unión, intersección y diferencia de ellos

// 6. Itera los resultados del ejercicio anterior

// 7. Crea un mapa que almacene información se usuarios (nombre, edad y email) e itera los datos

// 8. Dado el mapa anterior, crea un array con los nombres

// 9. Dado el mapa anterior, obtén un array con los email de los usuarios mayores de edad y transfórmalo a un set

// 10. Transforma el mapa en un objeto, a continuación, transforma el objeto en un mapa con clave el email de cada usuario y como valor todos los datos del usuario
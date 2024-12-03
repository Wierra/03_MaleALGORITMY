const numbers = [-24, -11, 27, 29, -4, -28, -21, -14, 3, -8, 24, 19, -25, -2, -1, 11, 32, -31, 5];

document.body.innerHTML += '<p><h2>Malé algoRITMY</h2></p>'


//všechna čísla
document.body.innerHTML += '<p><h3>Všechny čísla:</h3></p>'
numbers.forEach((numbers) => {
    document.body.innerHTML += `${numbers}, `
})

//druhá mocnina
document.body.innerHTML += '<p><h3>Druhá mocnina čísel:</h3></p>'
numbers.map((numbers) => {
    document.body.innerHTML += `${Math.pow(numbers, 2)}, `
})

//záporná čísla
document.body.innerHTML += '<p><h3>Záporná čísla:</h3></p>'
numbers.map((numbers) => {
    if (numbers < 0) {
        document.body.innerHTML += `${numbers}, `
    }
})

//absolutní hodnoty
document.body.innerHTML += '<p><h3>Absolutní hodnota: </h3></p>'
numbers.map((numbers) => {
    document.body.innerHTML += `${Math.abs(numbers)}, `
})

//sudá čísla
document.body.innerHTML += '<p><h3>Sudá čísla:</h3></p>'
numbers.map((numbers) => {
    if (numbers % 2 === 0) {
        document.body.innerHTML += `${numbers}, `
    }
})

//absolutní hodnota dělitélná třemi
document.body.innerHTML += '<p><h3>Absolutní hodnota dělitélná třemi:</h3></p>'
numbers.map((numbers) => {
    if (Math.abs(numbers) % 3 === 0) {
        document.body.innerHTML += `${numbers}, `
    }
})

//Vzdálenost čísla od čísla 5
document.body.innerHTML += '<p><h3>Vzdálenost čísla od čísla 5:</h3></p>'
numbers.map((numbers) => {
    document.body.innerHTML += `${Math.abs(numbers - 5)}, `
})

//druhá mocnina vzdálenosti čísla od čísla 5
document.body.innerHTML += '<p><h3>Mocnina vzdálenosti čísla od čísla 5:</h3></p>'
numbers.map((numbers) => {
    document.body.innerHTML += `${Math.abs((numbers - 5) ** 2)}, `
})

//počet záporných čísel
document.body.innerHTML += '<p><h3>Počet záporných čísel:</h3></p>'
let negativeNum = 0
for (let num = 0; num < numbers.length; num += 1) {
     if (numbers [num] < 0) {
        negativeNum += 1
        }
}
document.body.innerHTML += negativeNum

//součet všech čísel v poli
let sum = 0
for (let i = 0; i < numbers.length; sum += 1)

//průměr všech čísel v poli


//součet kladných čísle v poli

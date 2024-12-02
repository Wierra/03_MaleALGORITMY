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
document.body.innerHTML += '<p><h3>Absolutní hodnota dělitélná třemi</h3></p>'
numbers.map((numbers) => {
    if (Math.abs(numbers) % 3 === 0) {
        document.body.innerHTML += `${numbers}, `
    }
})

//číslo daleko od čísla 5


//druhá mocnina vzdálenosti čísla od čísla 5


//počet záporných čísel


//součet všech čísel v poli


//průměr všech čísel v poli


//součet kladných čísle v poli

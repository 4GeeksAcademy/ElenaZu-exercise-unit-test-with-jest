// esta es mi función que suma dos números
const sum = (a, b) => {
    return a + b
}

// solo un registro en consola para nosotros.
console.log(sum(7, 3))


const fromEuroToDollar = (euroAmount) => {
    // one euro is:
    let oneEuroIs = {
        "JPY": 127.9, // japan yen
        "USD": 1.2, // us dollar
        "GBP": 0.8, // british pound
    }
    return euroAmount * oneEuroIs.USD;
}

const fromDollarToYen = (dollarAmount) => {
    // one euro is:
    let oneEuroIs = {
        "JPY": 127.9, // japan yen
        "USD": 1.2, // us dollar
        "GBP": 0.8, // british pound
    }

    let euroAmount = dollarAmount * oneEuroIs.USD;
    return Math.floor(euroAmount * oneEuroIs.JPY);
}

const fromYenToPound =(yenAmount) => {
        // one euro is:
        let oneEuroIs = {
            "JPY": 127.9, // japan yen
            "USD": 1.2, // us dollar
            "GBP": 0.8, // british pound
        }
 let euroAmount = yenAmount * oneEuroIs.JPY;

 return  Math.floor(euroAmount * oneEuroIs.GBP);
    
}
// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen , fromYenToPound};
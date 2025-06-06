// cadenaInversa
function cadenaInversa(cadena) {
    return cadena.split('').reverse().join('');
}

module.exports = cadenaInversa;

//caso normal
console.log(cadenaInversa('invertir esta cadena'));

// caso palindromo
console.log(cadenaInversa('reconocer'));
console.log(cadenaInversa('la ruta natural'));
console.log(cadenaInversa('amor a roma'));
console.log(cadenaInversa('somos o no somos'));
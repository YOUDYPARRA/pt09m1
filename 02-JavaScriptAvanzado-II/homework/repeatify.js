String.prototype.repeatify = function(entero) {
    let palabra = '';

    if (entero < 0) {
        return ('Mayor que CERO');
    }
    if (entero === 0) {
        return ('');
    } else {
        salida = entero * palabra
    }
    return salida;
}

console.log('Hola'.repeatify(3));
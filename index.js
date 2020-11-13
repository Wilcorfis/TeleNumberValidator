function telephoneCheck(str) {
    if (str.indexOf("(") === -1 && str.indexOf(")") > -1)
        return false;
    if (str.indexOf(")") - str.indexOf("(") >= 5)
        return false;
    if (str[0] === "-")
        return false;
    //expression irregular
    let tel = str.replace(/-| /g, "");
    if (tel.indexOf("(") < tel.indexOf(")")) {
        tel = tel.replace(/\(|\)/g, "");
    }
    if (tel.length === 10) {
        return true;
    } else if (tel.length === 11 && tel[0] === "1") {
        return true;
    }
    return false;
}
let result=telephoneCheck("1 (555) 555-5555");
alert(result);





/*
La " g " de la que estás hablando al final de tu expresión regular se llama "modificador". La " g "
representa el " modificador global ". Esto significa que su reemplazo reemplazará todas las copias de la
cadena coincidente con la cadena de reemplazo que proporcione.

Una lista de modificadores útiles:

g - Reemplazo global. Reemplaza todas las instancias de la cadena coincidente en el texto proporcionado.
i - Reemplazo sin distinción entre mayúsculas y minúsculas. Reemplace todas las instancias de la cadena coincidente, ignorando las diferencias en el caso.
m - Reemplazo de varias líneas. La expresión regular debe probarse en busca de coincidencias en varias líneas.
Puede combinar modificadores, como g e i, para obtener una búsqueda global que no distinga entre mayúsculas y minúsculas.
*/
<ScriptProcessorNode

function contarVocales(cadena) {
    let texto = cadena.toLowerCase();   
    let conteoVocales = {
        'a': 0,
        'e': 0,
        'i': 0,
        'o': 0,
        'u': 0
    };

    for (let char of texto) {
        if (conteoVocales.hasOwnProperty(char)) {
            conteoVocales[char]++;
        }
    }

    console.log("Conteo de vocales:");
    for (let vocal in conteoVocales) {
        console.log(`${vocal}: ${conteoVocales[vocal]}`);
    }
}

let entradaUsuario = prompt("INGRESAR UNA CADENA DE TEXTO:");
contarVocales(entradaUsuario);



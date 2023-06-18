console.log(`Aplicación calculadora`);
function sumar (){
    const forma = document.getElementById("forma");
    let operandoA = forma["operandoA"];
    let operandoB = forma["operandoB"];
    let resultado = parseInt(operandoA.value) + parseInt(operandoB.value);
    if(isNaN (resultado)) {
        resultado = `No se ha ingresado ningún número`;
    }
    document.getElementById("resultado").innerHTML = `El resultado de la suma es: ${resultado}`;
    console.log(`El resultado es: ${resultado}`);
}
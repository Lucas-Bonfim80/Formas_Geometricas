
function calcularArea_troncodapiramide() {


    // Obtenha os valores inseridos pelo usuário
    // Métodos e propriedades
    // getElementById seleciona o elemento com base no ID. 
    // Também existe o querySelector
    var raioMaior = parseFloat(document.getElementById('raioMaior').value); //20.0
    var raioMenor = parseFloat(document.getElementById('raioMenor').value);
    var altura = parseFloat(document.getElementById('altura').value);

    // Calcule a área do tronco de pirâmide
    // Podemos utilizar a biblioteca Math do javascript
    var area = Math.PI * (raioMaior + raioMenor) * (raioMaior - raioMenor + Math.sqrt(Math.pow(altura, 2) + Math.pow(raioMaior - raioMenor, 2)));

    // Exiba o resultado na página
    document.getElementById('resultadoP').textContent = area.toFixed(2);
    // toFixed limita o valor a "x" casas após a virgúlas.  
}

function calcularArea_quadrado() {

    let ladoq = parseFloat(document.getElementById('ladoq').value);

    let area = Math.pow(ladoq, 2);

    document.getElementById('resultadoQ').innerHTML = area.toFixed(1);
}

function calcularArea_triangulo() {

    let baset = parseFloat(document.getElementById('baset').value);
    let alturat = parseFloat(document.getElementById('alturat').value);

    let area = (baset * alturat) / 2;

    document.getElementById('resultadoT').innerHTML = area.toFixed(1);
}

function calcularArea_circulo() {

    let raio = parseFloat(document.getElementById('raio').value);

    let area = Math.PI * (raio * raio);

    document.getElementById('resultadoC').innerHTML = area.toFixed(2);

}

function calcularArea_retangulo() {

    let BaseR = parseFloat(document.getElementById('BaseR').value);
    let AlturaR = parseFloat(document.getElementById('AlturaR').value);

    let area = (BaseR * AlturaR);

    document.getElementById('resultadoR').innerHTML = area.toFixed(1);
}


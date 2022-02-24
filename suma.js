var num1 = document.getElementById("numero_1");
var num2 = document.getElementById("numero_2");
var resultado;

function suma()
{   
   resultado = Math.floor(parseInt(num1.value) + parseInt(num2.value));
   r.innerHTML = `El resultado es: ${resultado}`;
}

function resta()
{   
   resultado = Math.floor(parseInt(num1.value) - parseInt(num2.value));
   r.innerHTML = `El resultado es: ${resultado}`;
}

function multiplicacion()
{   
   resultado = Math.floor(parseInt(num1.value) * parseInt(num2.value));
   r.innerHTML = `El resultado es: ${resultado}`;
}

function division()
{   
   resultado = (parseFloat(num1.value) / parseFloat(num2.value));
   r.innerHTML = `El resultado es: ${resultado.toFixed(2)}`;
}

var r = document.getElementById("resultado");

var bs = document.getElementById("btn_suma");
bs.addEventListener("click", suma);

var br = document.getElementById("btn_resta");
br.addEventListener("click", resta);

var bm = document.getElementById("btn_multiplicacion");
bm.addEventListener("click", multiplicacion);

var bd = document.getElementById("btn_division");
bd.addEventListener("click", division);
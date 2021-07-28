window.onload = inici;

var numero = "";
var acumulado = 0;

function inici() {

    inicializa();
    let tecla = document.querySelectorAll(".boton");
    for (let i = 0; i < tecla.length; i++) {
        tecla[i].onclick = displayNumber;
    }
}

function displayNumber() {
    document.getElementById("display").style.fontFamily = "Dseg7";
    document.getElementById("display").style.fontSize = "0.4em";
    let pos;
    let hijos = this.parentNode.children;
    for (let i in hijos) {
        if (this == hijos[i]) {
            pos = i;
        }
    }
    let valor = hijos[pos].value;
    // Condicional para los números
    // let valorPantalla = document.getElementById("display").value;

    if (valor >= 0 && valor <= 9) {
        if (numero === 0) {
            numero = "";
        }
        let operador = compruebaOperador();
        if (operador != null) {
            document.getElementById("display").value = numero + valor;
            numero = document.getElementById("display").value;
        } else if (!(valor == "0" && numero == "")) {
            let coma = compruebaComa();
            if (coma == null) {
                document.getElementById("display").value = numero + valor;
                numero = document.getElementById("display").value;
            }
            else if (coma.length == 1) {
                document.getElementById("display").value = numero + valor;
                numero = document.getElementById("display").value;
            }
        }
    }


    if (pos == "1") {
        let operador = compruebaOperador();
        if (operador != null) {
            if (operador.length == 1) {
                document.getElementById("display").value = "0";
                numero = "";
            } else if (operador.length == 2) {
                if (operador[1] == "=") {
                    document.getElementById("display").value = "0";
                    document.getElementById("display1").innerHTML = "";
                    inicializa();
                }
            }
        } else {
            document.getElementById("display").value = "0";
            numero = "";
        }
    }
    if (pos == "2") {
        document.getElementById("display1").innerHTML = "";
        inicializa();
    }

    if (pos == "3") {
        divide(valor);
    }
    if (pos == "4") {
        multiplica(valor);
    }
    if (pos == "8") {
        resta(valor);
    }

    if (pos == "12") {
        suma(valor);
    }

    if (pos == "16") {
        resultado(valor);
    }

    if (pos == "18") {
        coma(valor);
    }
}


function inicializa() {
    document.getElementById("display").value = 0;
    acumulado = 0;
    // numero = "";
    numero = 0;
}

function suma(operando) {
    let operador = compruebaOperador();
    if (operador != null) {
        if (operador.length == 1) {
            if (operador[0] == "=") {
                document.getElementById("display1").innerHTML = `${numero}${operando}`;
            } else
                if (operador[0] == "-") {
                    acumulado -= numero;
                    document.getElementById("display").value = acumulado;
                    document.getElementById("display1").innerHTML = `${acumulado}${operando}`;
                    numero = "";
                } else if (operador[0] == "x") {
                    acumulado = parseFloat(acumulado);
                    acumulado *= parseFloat(numero);
                    document.getElementById("display").value = acumulado;
                    document.getElementById("display1").innerHTML = `${acumulado}${operando}`;
                    numero = "";
                } else if (operador[0] == "÷") {
                    if (acumulado == 0 && numero == "0") {
                        document.getElementById("display").style.fontFamily = "Michroma";
                        document.getElementById("display").style.fontSize = "0.2em";
                        document.getElementById("display").value = `Resultado indefinido`;
                        document.getElementById("display1").innerHTML = ``;
                        numero = "";
                    } else if (numero == "0") {
                        document.getElementById("display").style.fontFamily = "Michroma";
                        document.getElementById("display").style.fontSize = "0.13em";
                        document.getElementById("display").value = `No se puede dividir entre cero`;
                        document.getElementById("display1").innerHTML = ``;
                        numero = "";
                    } else {
                        acumulado /= numero;
                        document.getElementById("display").value = acumulado;
                        document.getElementById("display1").innerHTML = `${acumulado}${operando}`;
                        numero = "";
                    }
                }
                else
                    if (!(operando === "+" && operador[0] == "+")) {
                        // if (operando === "+") {
                        document.getElementById("display1").innerHTML = `${numero}${operando}`;
                    }
        } else {
            if (operador[1] != "=") {
                if (operador[1] == "-") {
                    acumulado -= numero;
                    document.getElementById("display").value = acumulado;
                    document.getElementById("display1").innerHTML = `${acumulado}${operando}`;
                    numero = "";
                }
                if (operador[1] == "+") {
                    acumulado = parseFloat(acumulado);
                    acumulado += parseFloat(numero);
                    document.getElementById("display").value = acumulado;
                    document.getElementById("display1").innerHTML = `${acumulado}${operando}`;
                    numero = "";
                }
                if (operador[1] == "x") {
                    acumulado = parseFloat(acumulado);
                    acumulado *= parseFloat(numero);
                    document.getElementById("display").value = acumulado;
                    document.getElementById("display1").innerHTML = `${acumulado}${operando}`;
                    numero = "";
                }
                if (operador[1] == "÷") {
                    acumulado = parseFloat(acumulado);
                    acumulado /= parseFloat(numero);
                    document.getElementById("display").value = acumulado;
                    document.getElementById("display1").innerHTML = `${acumulado}${operando}`;
                    numero = "";
                }
            } else {
                document.getElementById("display").value = acumulado;
                document.getElementById("display1").innerHTML = `${acumulado}${operando}`;
                numero = "";
            }
        }
    } else {
        acumulado = Number(numero);
        document.getElementById("display1").innerHTML = `${acumulado}${operando}`;
        numero = "";
    }
}

function divide(operando) {
    let operador = compruebaOperador();
    if (operador != null) {
        if (operador.length == 1) {

            if (operador[0] == "=") {
                document.getElementById("display1").innerHTML = `${numero}${operando}`;
            } else

                if (operador[0] == "+") {
                    acumulado += Number(numero);
                    document.getElementById("display").value = acumulado;
                    document.getElementById("display1").innerHTML = `${acumulado}${operando}`;
                    numero = "";
                } else if (operador[0] == "-") {
                    acumulado -= numero;
                    document.getElementById("display").value = acumulado;
                    document.getElementById("display1").innerHTML = `${acumulado}${operando}`;
                    numero = "";
                } else if (operador[0] == "x") {
                    acumulado *= numero;
                    document.getElementById("display").value = acumulado;
                    document.getElementById("display1").innerHTML = `${acumulado}${operando}`;
                    numero = "";
                }
                else
                    if (!(operando === "÷" && operador[0] == "÷")) {
                        document.getElementById("display1").innerHTML = `${numero}${operando}`;
                    }
        } else {
            if (operador[1] != "=") {

                if (operador[1] == "+") {
                    acumulado += Number(numero);
                    document.getElementById("display").value = acumulado;
                    document.getElementById("display1").innerHTML = `${acumulado}${operando}`;
                    numero = "";
                }
                if (operador[1] == "-") {
                    acumulado -= numero;
                    document.getElementById("display").value = acumulado;
                    document.getElementById("display1").innerHTML = `${acumulado}${operando}`;
                    numero = "";
                }
                if (operador[1] == "x") {
                    acumulado *= numero;
                    document.getElementById("display").value = acumulado;
                    document.getElementById("display1").innerHTML = `${acumulado}${operando}`;
                    numero = "";
                }
                if (operador[1] == "÷") {
                    acumulado /= numero;
                    document.getElementById("display").value = acumulado;
                    document.getElementById("display1").innerHTML = `${acumulado}${operando}`;
                    numero = "";
                }

            } else {
                document.getElementById("display").value = acumulado;
                document.getElementById("display1").innerHTML = `${acumulado}${operando}`;
                numero = "";
            }
        }
    } else {
        acumulado = Number(numero);
        document.getElementById("display").value = acumulado;
        document.getElementById("display1").innerHTML = `${acumulado}${operando}`;
        numero = "";
    }
}

function multiplica(operando) {
    let operador = compruebaOperador();
    if (operador != null) {
        if (operador.length == 1) {
            if (operador[0] == "=") {
                document.getElementById("display1").innerHTML = `${numero}${operando}`;
            } else
                if (operador[0] == "+") {
                    acumulado += Number(numero);
                    document.getElementById("display").value = acumulado;
                    document.getElementById("display1").innerHTML = `${acumulado}${operando}`;
                    numero = "";
                } else if (operador[0] == "-") {
                    acumulado -= numero;
                    document.getElementById("display").value = acumulado;
                    numero = "";
                    document.getElementById("display1").innerHTML = `${acumulado}${operando}`;
                } else if (operador[0] == "÷") {
                    if (acumulado == 0 && numero == "0") {
                        document.getElementById("display").style.fontFamily = "Michroma";
                        document.getElementById("display").style.fontSize = "0.2em";
                        document.getElementById("display").value = `Resultado indefinido`;
                        document.getElementById("display1").innerHTML = ``;
                        numero = "";
                    } else if (numero == "0") {
                        document.getElementById("display").style.fontFamily = "Michroma";
                        document.getElementById("display").style.fontSize = "0.13em";
                        document.getElementById("display").value = `No se puede dividir entre cero`;
                        document.getElementById("display1").innerHTML = ``;
                        numero = "";
                    } else {
                        acumulado = parseFloat(acumulado);
                        acumulado /= parseFloat(numero);
                        document.getElementById("display").value = acumulado;
                        document.getElementById("display1").innerHTML = `${acumulado}${operando}`;
                        numero = "";
                    }
                }
                else
                    if (!(operando === "x" && operador[0] == "x")) {

                        document.getElementById("display1").innerHTML = `${numero}${operando}`;
                    }
        } else {
            if (operador[1] != "=") {
                if (operador[1] == "+") {
                    acumulado += Number(numero);
                    document.getElementById("display").value = acumulado;
                    document.getElementById("display1").innerHTML = `${acumulado}${operando}`;
                    numero = "";
                }
                if (operador[1] == "-") {
                    acumulado -= numero;
                    document.getElementById("display").value = acumulado;
                    document.getElementById("display1").innerHTML = `${acumulado}${operando}`;
                    numero = "";
                }
                if (operador[1] == "x") {
                    acumulado *= numero;
                    document.getElementById("display").value = acumulado;
                    document.getElementById("display1").innerHTML = `${acumulado}${operando}`;
                    numero = "";
                }
                if (operador[1] == "÷") {
                    acumulado /= numero;
                    document.getElementById("display").value = acumulado;
                    document.getElementById("display1").innerHTML = `${acumulado}${operando}`;
                    numero = "";
                }
            } else {
                document.getElementById("display").value = acumulado;
                document.getElementById("display1").innerHTML = `${acumulado}${operando}`;
                numero = "";

            }
        }
    } else {
        acumulado = Number(numero);
        document.getElementById("display").value = acumulado;
        document.getElementById("display1").innerHTML = `${acumulado}${operando}`;
        numero = "";
    }
}

function resta(operando) {
    let operador = compruebaOperador();
    if (operador != null) {
        if (operador.length == 1) {
            if (operador[0] == "=") {
                document.getElementById("display1").innerHTML = `${numero}${operando}`;
            } else

                if (operador[0] == "+") {
                    acumulado += Number(numero);
                    document.getElementById("display").value = acumulado;
                    document.getElementById("display1").innerHTML = `${acumulado}${operando}`;
                    numero = "";
                } else if (operador[0] == "x") {
                    acumulado *= numero;
                    document.getElementById("display").value = acumulado;
                    document.getElementById("display1").innerHTML = `${acumulado}${operando}`;
                    numero = "";
                } else if (operador[0] == "÷") {
                    if (acumulado == 0 && numero == "0") {
                        document.getElementById("display").style.fontFamily = "Michroma";
                        document.getElementById("display").style.fontSize = "0.2em";
                        document.getElementById("display").value = `Resultado indefinido`;
                        document.getElementById("display1").innerHTML = ``;
                        numero = "";
                    } else if (numero == "0") {
                        document.getElementById("display").style.fontFamily = "Michroma";
                        document.getElementById("display").style.fontSize = "0.13em";
                        document.getElementById("display").value = `No se puede dividir entre cero`;
                        document.getElementById("display1").innerHTML = ``;
                        numero = "";
                    } else {
                        acumulado /= numero;
                        document.getElementById("display").value = acumulado;
                        document.getElementById("display1").innerHTML = `${acumulado}${operando}`;
                        numero = "";
                    }
                }
                else
                    if (!(operando === "-" && operador[0] == "-")) {
                        document.getElementById("display1").innerHTML = `${numero}${operando}`;
                    }
        } else {
            if (operador[1] != "=") {

                if (operador[1] == "+") {
                    acumulado += Number(numero);
                    document.getElementById("display").value = acumulado;
                    document.getElementById("display1").innerHTML = `${acumulado}${operando}`;
                    numero = "";
                }
                if (operador[1] == "-") {
                    acumulado -= numero;
                    document.getElementById("display").value = acumulado;
                    document.getElementById("display1").innerHTML = `${acumulado}${operando}`;
                    numero = "";
                }
                if (operador[1] == "x") {
                    acumulado *= numero;
                    document.getElementById("display").value = acumulado;
                    document.getElementById("display1").innerHTML = `${acumulado}${operando}`;
                    numero = "";
                }
                if (operador[1] == "÷") {
                    acumulado /= numero;
                    document.getElementById("display").value = acumulado;
                    document.getElementById("display1").innerHTML = `${acumulado}${operando}`;
                    numero = "";
                }
            } else {
                document.getElementById("display").value = acumulado;
                document.getElementById("display1").innerHTML = `${acumulado}${operando}`;
                numero = "";
            }
        }
    } else {
        acumulado = Number(numero);
        document.getElementById("display").value = acumulado;
        document.getElementById("display1").innerHTML = `${acumulado}${operando}`;
        numero = "";
    }
}


function resultado(operando) {
    let operador = compruebaOperador();
    if (operador != null) {

        if (operador.length == 1) {
            if (operador[0] == "+") {
                acumulado = parseFloat(acumulado);
                acumulado += Number(numero);
                document.getElementById("display1").innerHTML += `${numero}${operando}`;
                document.getElementById("display").value = acumulado;
                numero = "";
            } else if (operador[0] == "-") {
                acumulado -= Number(numero);
                document.getElementById("display1").innerHTML += `${numero}${operando}`;
                document.getElementById("display").value = acumulado;
                numero = "";
            } else if (operador[0] == "x") {
                acumulado *= Number(numero);
                document.getElementById("display1").innerHTML += `${numero}${operando}`;
                document.getElementById("display").value = acumulado;
                numero = "";
            } else if (operador[0] == "÷") {
                // 
                if (acumulado == 0 && numero == "0") {
                    document.getElementById("display").style.fontFamily = "Michroma";
                    document.getElementById("display").style.fontSize = "0.2em";
                    document.getElementById("display").value = `Resultado indefinido`;
                    document.getElementById("display1").innerHTML = ``;
                    numero = "";
                } else if (numero == "0") {
                    document.getElementById("display").style.fontFamily = "Michroma";
                    document.getElementById("display").style.fontSize = "0.13em";
                    document.getElementById("display").value = `No se puede dividir entre cero`;
                    document.getElementById("display1").innerHTML = ``;
                    numero = "";
                } else {
                    acumulado /= Number(numero);
                    document.getElementById("display1").innerHTML += `${numero}${operando}`;
                    document.getElementById("display").value = acumulado;
                    numero = "";
                }
            }
        }
    } else {
        acumulado = Number(numero);//***** */
        document.getElementById("display1").innerHTML += `${numero}${operando}`;
    }
}

function coma(operando) {
    let coma = compruebaComa();
    if (coma == null) {
        if (numero == "") {
            numero = 0;
        }
        numero += operando;
        document.getElementById("display").value = numero;
    }
}

function compruebaOperador() {
    let valorPantalla = document.getElementById("display1").innerHTML;
    return valorPantalla.match(/[\x\+\-\÷\=]/g);
}

function compruebaComa() {
    let valorPantalla = document.getElementById("display").value;
    return valorPantalla.match(/[\.]/g);
}
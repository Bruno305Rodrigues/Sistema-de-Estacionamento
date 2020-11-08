const vagas = {
    a1: null,
    a2: null,
    b1: null,
    b2: null,
    c1: null,
    c2: null
};

function entradaDeCarro(carro) {
    var estaTudoCheio = true;

    for (vaga in vagas) {
        if (vagas[vaga] === null) {
            vagas[vaga] = carro;
            estaTudoCheio = false;
            break;
        }
    }
    if (estaTudoCheio) {
        console.log("Estacionamento cheio")
    }
}


function saidaDeCarro(placa, tempo, cor, ano,condicao) {
    var total = 0;
    var valorFinal = 0;
    for (vaga in vagas) {
        if (vagas[vaga] !== null && vagas[vaga].placa === placa) {
            vagas[vaga] = null;
            total = (tempoDePermanecia(tempo) - ((tempoDePermanecia(tempo) * descontoAnodoCarro(ano)) / 100) - descontoCor(cor)); 
            valorFinal = total - ((total *descontoFidelidade(condicao))/100);
            console.log("Total a pagar:" , valorFinal.toFixed(2));

            break;
        }
    }

}


function consultaVaga(nomeVaga) {

    for (vaga in vagas) {

        if (vaga === nomeVaga) {
            if (vagas[vaga] === null) {
                console.log("Esta vaga esta disponível");
                break;

            }
            console.log("Modelo:", vagas[vaga].modelo);

        }
    }
}


function pesquisaPorPlaca(placa) {
    var carroEncontrado = false;
    for (vaga in vagas) {
        if (vagas[vaga] !== null && vagas[vaga].placa === placa) {
            console.log("Vaga:", vaga);
            console.log("Modelo:", vagas[vaga].modelo);
            console.log("Placa:", vagas[vaga].placa);
            console.log("Cor:", vagas[vaga].cor);
            console.log("--------------------")


            carroEncontrado = true;
            break;
        }


    }
    if (!carroEncontrado) {
        console.log("Veículo não encontrado.")
    }
}



function pesquisarPorModelo(modelo) {
    var carroEncontrado = false;
    for (vaga in vagas) {
        if (vagas[vaga] !== null && vagas[vaga].modelo === modelo) {
            console.log("Modelo encontrado na vaga ", vaga);
            console.log("--------------------")
            carroEncontrado = true

        }
    }
    if (!carroEncontrado) {
        console.log("Modelo não encontrado.")
    }
}



function pesquisarPorCor(cor) {
    var carroEncontrado = false;
    for (vaga in vagas) {
        if (vagas[vaga] !== null && vagas[vaga].cor === cor) {
            console.log("Cor encontrada na vaga ", vaga);
            console.log("--------------------")
            carroEncontrado = true

        }
    }
    if (!carroEncontrado) {
        console.log("Cor não encontrada.")
    }
}





function tempoDePermanecia(tempo) {
    var valor = (tempo * 100 / 60)
    return valor.toFixed(2);
}



function descontoCor(cor) {
    if (cor === "Azul") {
        return 10;
    } else if (cor === "Branco") {
        return 15;

    } else if (cor === "Preto") {
        return 20;
    } else {
        return 0;
    }



}



function descontoAnodoCarro(ano) {
    if (ano >= 2010 && ano <= 2015) {
        return 15;
    } else if (ano >= 2000 && ano < 210) {
        return 20;
    } else if (ano < 2000) {
        return 30;
    } else {
        return 0;
    }
}



function descontoFidelidade(condicao) {
    if (condicao === "S") {
        return 50;
    } else {
        return 0;
    }
}



//Execução do código

entradaDeCarro({ modelo: "Fusca", ano: 1973, placa: 1, cor: "azul" });
entradaDeCarro({ modelo: "Monza", ano: 1975, placa: 2, cor: "preto" });
entradaDeCarro({ modelo: "Corsa", ano: 1973, placa: 3, cor: "azul" });
entradaDeCarro({ modelo: "Ferrari", ano: 1975, placa: 4, cor: "preto" });
entradaDeCarro({ modelo: "Corsa", ano: 1973, placa: 5, cor: "azul" });
entradaDeCarro({ modelo: "Corolla", ano: 1975, placa: 6, cor: "preto" });


entradaDeCarro({ modelo: "Camaro", ano: 2018, placa: 2, cor: "prata" });



pesquisaPorPlaca(1);
pesquisaPorPlaca(5);

console.log("-------------");

pesquisarPorModelo("Corsa");
pesquisarPorCor("azul");

console.log("-------------");

consultaVaga("b2");

saidaDeCarro(2, 120, "Azul", 1975,"S");
console.log(vagas);







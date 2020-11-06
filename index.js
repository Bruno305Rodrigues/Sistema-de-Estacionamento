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

    for(vaga in vagas) {
        if(vagas[vaga] === null) {
            vagas[vaga] = carro;
            estaTudoCheio = false;
            break;
        }
    }
    if(estaTudoCheio) {
        console.log("Estacionamento cheio")
    }
}

function saidaDeCarro(placa){
    for(vaga in vagas){
        if(vagas[vaga] !== null && vagas[vaga].placa === placa) {
            vagas[vaga] = null;
            break;
        }
    }

}

function pesquisaCarro(nomeVaga){

        console.log(vagas[nomeVaga]);
}

function pesquisaPorPlaca(placa){
    var carroEncontrado = false;
    for( vaga in vagas){
        if(vagas[vaga] !== null && vagas[vaga].placa === placa){
            console.log("Vaga:" , vaga);
            console.log("Modelo:" , vagas[vaga].modelo);
            console.log("Placa:" , vagas[vaga].placa);
            console.log("Cor:" , vagas[vaga].cor);
            console.log("--------------------")


            carroEncontrado = true;
           break;
        }
        

    }
    if(!carroEncontrado){
        console.log("Veículo não encontrado.")
    }
}


function pesquisarPorModelo(modelo){
    var carroEncontrado = false;
    for( vaga in vagas){
        if(vagas[vaga] !== null && vagas[vaga].modelo === modelo){
            console.log("Modelo encontrado na vaga ", vaga);
            console.log("--------------------")
            carroEncontrado = true
            
        }
    }
    if(!carroEncontrado){
        console.log("Modelo não encontrado.")
    }
}

function pesquisarPorCor(cor){
    var carroEncontrado = false;
    for( vaga in vagas){
        if(vagas[vaga] !== null && vagas[vaga].cor === cor){
            console.log("Cor encontrada na vaga ", vaga);
            console.log("--------------------")
            carroEncontrado = true
            
        }
    }
    if(!carroEncontrado){
        console.log("Cor não encontrada.")
    }
}






entradaDeCarro({modelo: "Fusca", ano: 1973, placa: 1, cor: "azul"});
entradaDeCarro({modelo: "Monza", ano: 1975, placa: 2, cor: "preto"});
entradaDeCarro({modelo: "Corsa", ano: 1973, placa: 3, cor: "azul"});
entradaDeCarro({modelo: "Ferrari", ano: 1975, placa:4, cor: "preto"});
entradaDeCarro({modelo: "Corsa", ano: 1973, placa:5, cor: "azul"});
entradaDeCarro({modelo: "Corolla", ano: 1975, placa: 6, cor: "preto"});

//entradaDeCarro({modelo: "Chevette", ano: 1975, placa: 2, cor: "preto"});
//entradaDeCarro({modelo: "Camaro", ano: 2018, placa: 2, cor: "prata"});
//saidaDeCarro(2);
saidaDeCarro(4);
saidaDeCarro(2);
entradaDeCarro({modelo: "Camaro", ano: 2018, placa: 2, cor: "prata"});



console.log(vagas);
//pesquisaCarro("c1");
pesquisaPorPlaca(1);
pesquisaPorPlaca(5);

console.log("-------------");

pesquisarPorModelo("Corsa");
pesquisarPorCor("azul");

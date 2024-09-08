function calculateWeight(){
    let weight = parseInt(document.querySelector("#weight").value)
    let categoria = document.querySelector("#categoria")
    let texto = document.querySelector("#descrição")

    console.log(weight)

    if(weight <= 52){
        categoria.innerHTML = "Peso Palha"
        texto.innerHTML = "Essa categoria é feminina, se você é homem a sua categoria é PESO MOSCA ( até 57 kg ). O Peso-Palha é a única categoria exclusivamente feminina dentro do UFC. Ela contempla as atletas que pesam até 52 kg. A primeira campeã dessa divisão foi a estadunidense Carla Esparza."
    }else if(weight <= 57 ){
        categoria.innerHTML = "Peso Mosca"
        texto.innerHTML = "Essa categoria é mista. O Peso-mosca engloba os lutadores que pesam até 57 kg. O principal nome histórico dessa categoria é o estadunidense Demetrious Johnson. Ele já defendeu o cinturão 9 vezes e se tornou imbatível."
    }
    else if(weight <= 61 ){
        categoria.innerHTML = "Peso Galo"
        texto.innerHTML = "Essa categoria é mista. Os Peso-Galo, em que competem lutadores de 57 a 61 kg, também têm um nome que melhor os representa: Dominick Cruz, outro estadunidense. Ele foi o primeiro campeão dessa categoria, mas perdeu o cinturão por ter ficado longe dos octógonos por mais de dois anos."
    }
    else if(weight <= 66 ){
        categoria.innerHTML = "Peso Pena"
        texto.innerHTML = "Essa categoria é mista. O principal nome dessa categoria, que é direcionada para os lutadores entre 62 kg a 66 kg, é o brasileiro José Aldo. Ele defendeu o cinturão por sete vezes até ser derrotado pelo irlandês Conor McGregor."
    }
    else if(weight <= 70 ){
        categoria.innerHTML = "Peso Leve"
        texto.innerHTML = "A categoria Peso-Leve é destinada para os lutadores que pesam entre 67 kg a 70 kg. Ela ganhou ainda mais destaque depois da chegada de Conor McGregor, que estava no Peso Pena. O destaque dessa divisão fica por conta dos estadunidenses Frank Edgar, Ben Henderson e B. J. Penn. Hoje em dia, o maior nome do Brasil está nela: Charles ‘Do Bronx’."
    }
    else if(weight <= 77 ){
        categoria.innerHTML = "Peso Meio-Médio"
        texto.innerHTML = "Os Peso Meio-médio são os lutadores que pesam entre 71 kg e 77 kg. Essa categoria é interessante porque poucas pessoas conseguiram chegar perto do domínio dela depois da saída de um nome de peso: Georges St. Pierre, do Canadá, que defendeu o cinturão por nove vezes."
    }
    else if(weight <= 84 ){
        categoria.innerHTML = "Peso Médio"
        texto.innerHTML ="O Peso-Médio, que engloba lutadores de 78 kg a 84 kg, é a categoria mais famosa do UFC entre os brasileiros. E o nome por trás de toda essa fama é Anderson Silva. O paulista é considerado por muitos como o melhor lutador de MMA de todos os tempos."
    }
    else if(weight <= 93 ){
        categoria.innerHTML = "Peso Meio-Pesado"
        texto.innerHTML ="A categoria de Peso no UFC nomeada como Meio-pesado é destinada para os lutadores que pesam entre 85 kg e 93 kg. O primeiro campeão foi o estadunidense Ken Shamrock, em 1997. Depois dele, outros nomes ganharam destaque, mas nenhum foi tão grande quanto Jon Jones."
    }
    else if( weight <= 120){
        categoria.innerHTML = "Peso Pesado"
        texto.innerHTML ="A categoria Peso-Pesado, em que lutam quem pesa de 94 kg a 120 kg, já teve seu momento de glória, mas hoje não brilha tanto assim. Nela, os combates não chegam até o fim na maioria das vezes porque os atletas são bem fortes e com poucos golpes é possível vencer um assalto."
    }
    else {
        categoria.innerHTML = "Fora de Categoria"
        texto.innerHTML ="Acima de 120 kg não há categoria de luta definida pelo regulamento"
    }

    console.log(categoria)
}


//////////////////////////////////////////////////////////////////////////////////////////////////////
// EXEMPLO 4 
// calculo de peso

// function handleCalculateNumber(){
//     let n1 = parseInt(document.querySelector("#n1").value)
//     let n2 = parseInt(document.querySelector("#n2").value)
//     let operation = document.querySelector("select").value
//     let resultado = document.querySelector("h1")

//     console.log(n1)

//     switch(operation){
//         case '+': 
//             calculo = n1 + n2
//             resultado.innerHTML = `O resultado da soma de ${n1} e ${n2} foi = ${calculo}.`
//             break
//         case '-': 
//             calculo = n1 - n2
//             resultado.innerHTML = `O resultado da subtração de ${n1} e ${n2} foi = ${calculo}.`
//             break
//         case 'x': 
//             calculo = n1 * n2
//             resultado.innerHTML = `O resultado da multiplicação de ${n1} e ${n2} foi = ${calculo}.`
//             break
//         case '/': 
//             calculo = n1 / n2
//             resultado.innerHTML = `O resultado da divisão de ${n1} e ${n2} foi = ${calculo}.`
//             break
//     }

// }


//////////////////////////////////////////////////////////////////////////////////////////////////////
// EXEMPLO 3

// function handleAgeVerify(){

//     let texto = document.querySelector("h1")
//     let idade = document.querySelector("#idade").value
    
//     // document.write("Clicado")
//     // texto.innerHTML = "clicado"
//     // texto.innerHTML = idade

//     if(idade >= 65){
//         texto.innerHTML = "voce ganhou entrada franca"
//     }else if(idade >= 18){
//         texto.innerHTML = "voce paga entrada"
//     }else{
//         texto.innerHTML = "tu ta fora da festinha"
//     }
// }


//////////////////////////////////////////////////////////////////////////////////////////////////////
// EXEMPLO 2
// let peso = 81

// if(peso >= 80){
//     document.write(`voce esta acima do peso, com ${peso} Kg`)
// } else if(peso <=60) {
//     document.write(`voce está magro, com ${peso} Kg`)
// }else {
//     document.write(`voce está saudável, com ${peso} Kg`)
// }


//////////////////////////////////////////////////////////////////////////////////////////////////////
// EXEMPLO 1
// let nome = prompt("Olá, qual é o seu nome?")
// let idade = prompt("Qual sua idade?")
// let cidade = prompt("Onde voce mora?")

// // console.log(`olá, meu nome é ${nome}, tenho ${idade} anos, e moro em ${cidade}`)
// document.write(`olá, meu nome é ${nome}, tenho ${idade} anos, e moro em ${cidade}`)
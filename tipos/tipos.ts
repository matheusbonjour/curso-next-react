// string
let nome = 'João'
console.log(nome)
// nome = 28

// numbers
let idade: number = 27
//idade = 'Ana'
idade = 27.5
idade = 10
console.log(idade)

// boolean
let possuiHobbies= false
//possuiHobbies = 1
console.log(possuiHobbies)

//tipos explicitos
let minhaIdade
minhaIdade = 27
// nesse caso nao tenho um number, tenho um tipo dinamico
console.log(typeof minhaIdade)
minhaIdade = 'idade é 27'
console.log(typeof minhaIdade)

//
//let minhaIdade2: number
//let minhaIdade3: any

// array
let hobbies: any[] = ["Cozinhar", "Praticar Esportes"]
console.log(hobbies[0])
console.log(typeof hobbies)

hobbies = [100, 200, 300]

console.log(hobbies)

// tuplas 
let endereco: [string, number, string] = ["Av Principal", 99, ""]
console.log(endereco)

endereco = ["Rua Importante", 1260, "Bloco A"]


console.log(endereco)

// enums 
//  casos em que nao são explicitos os valores de numero 
enum Cor {
    Cinza, // 0
    Verde = 100, //100
    Azul = 10, // 2
    Laranja, 
    Amarelo,
    Vermelho = 100
}


let minhaCor: Cor = Cor.Verde
console.log(minhaCor)

console.log(Cor.Azul)
console.log(Cor.Laranja, Cor.Amarelo)
console.log(Cor. Vermelho)

// O tipo any
let carro: any = 'BMW'
console.log(carro)

carro = {marca:'BMW', ano: 2019}

console.log(carro.ano)


interface Humano {
    nome:string
    idade?:number  // assim pode ter ou nao ter
    [prop: string]: any // assim podemos criar novas 
    saudar(sobrenome: string): void  // 

}

function saudarComOla(pessoa:  Humano) {
    console.log('Ola, ' + pessoa.nome +', tem ' + pessoa.idade +' anos')
}

function mudarNome(pessoa: Humano) {
    pessoa.nome = 'Joana'
}


const pessoa = {
    nome: 'João',
    idade: 27,
    saudar(sobrenome: string) {
        console.log('Olá, meu nome é '
        + this.nome + ' ' + sobrenome)
    }
}

saudarComOla(pessoa)
mudarNome(pessoa)
saudarComOla(pessoa)
pessoa.saudar('Bonjour')
//saudarComOla({nome: 'Jonas', idade: 30, altura: 1.75})


// Classes;;;

class Cliente implements Humano {
    nome: string = ''
    ultimaCompra: Date = new Date
    saudar(sobrenome: string){
        console.log('Olá, meu nome é '
        + this.nome + ' ' + sobrenome)
    }
}

const meuCliente = new Cliente()
meuCliente.nome = 'Han'
saudarComOla(meuCliente)
meuCliente.saudar('Solo')
console.log(meuCliente.ultimaCompra)

// interface Função 
interface FuncaoCalculo {
    (a: number, b: number): number
}

let potencia: FuncaoCalculo

potencia = function(base: number, exp: number): number {
    return Array(exp).fill(base).reduce((t, a) => t * a )
}

console.log(potencia(3,10))
console.log(Math.pow(3,10))
console.log(3 ** 10)
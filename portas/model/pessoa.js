class Pessoa {
    #nome


    constructor(nome) {
        this.#nome = nome
    }

    set nome(nome) {
        this.#nome = nome
    }

    get nome() {
        return this.#nome
    }

}


const p1 = new Pessoa("pedro")

p1.nome = "Ana"

console.log(p1.nome)
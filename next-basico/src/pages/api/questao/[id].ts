export default function Questao(req: { method: string; query: { id: any } }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { id: any; enunciado: string; respostas: string[] }): void; new(): any }; send: { (): void; new(): any } } }) {
    if(req.method == "GET") {
        const id = req.query.id
        res.status(200).json({
            id,
            enunciado: 'Qual é a sua cor preferida?',
            respostas: [
                'Branca', 'Vermelha', 'Amarela', 'Verde'
            ]
        })
    } else {
        res.status(405).send()
    }
}
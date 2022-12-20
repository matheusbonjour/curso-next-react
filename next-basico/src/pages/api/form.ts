const usuarios: any[] = []

export default function Form(req: { method: string }, res: { status: (arg0: number) => { (): any; new(): any; send: { (): void; new(): any } } }) {
    if (req.method === "POST") {
        post(req, res)
    } else if (req.method === "GET") {
        get(req, res)
    } else {
        res.status(405).send()
    }

}

function post(req: { method?: string; body?: any; }, res: { status: any; }) {
    const usuario = JSON.parse(req.body)
    usuarios.push(usuario)
    res.status(200).send()
}

function get(_req: { method: string; }, res: { status: any; }) {
    res.status(200).json(usuarios)
}
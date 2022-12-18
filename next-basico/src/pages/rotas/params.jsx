import { useRouter } from "next/router"
import Link from "next/link"


export default function params() {
    const router = useRouter()
    //console.log(router)
    const id = router.query.id
    const nome = router.query.nome

    return (
        <div>
            <h1>Rotas Parametros: {nome} e {id}</h1>
            <Link href="/rotas">
                <button>Voltar</button>
            </Link>

        </div>
    )
}


// Quando tem o nome da pasta ou arquivo envolvido por [], ela se torna um
// objetdo dinamico

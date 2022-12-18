import Link from "next/link"
import router, { useRouter } from "next/router"

export default function rotas() {
    //const router = useRouter()

    function navegacaoSimples(url) {
        router.push(url)
    }

    function navegacaoComParams() {
        router.push({
            pathname: "/rotas/params",
            query: {
                id: 123,
                nome: 'Maisa'
            }
        })

    }


    return (
        <div>
            <h1>Rotas Index</h1>
            <ul>
                <Link href="/rotas/params?id=12&nome=Ana">
                    <li>Params</li>
                </Link>

                <Link href="/rotas/123/buscar">
                    <li>Buscar</li>
                </Link>

                <Link href="/rotas/123/Matheus">
                    <li>Matheus</li>
                </Link>
            </ul>
            <div style= {{display: "flex", flexDirection: "column", alignItems: "flex-start"}}>
                    <button onClick={() => router.push("/rotas/123/buscar")}>Buscar</button>
                    <button onClick={() => navegacaoSimples("/rotas/123/Matheus")}>Matheus</button>
                    <button onClick={() => navegacaoComParams("/rotas/123/Matheus")}>Params</button>
            </div>
        </div>
    )
}
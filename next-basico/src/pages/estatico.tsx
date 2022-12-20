import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react"

export function getStaticProps() {
    return {
        props: {
            numero: Math.random()
        }
    }
}

export default function Estatico(props: { numero: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined }) {
    return (
        <div>
            <span>Aleatório: {props.numero}</span>
        </div>
    )
}
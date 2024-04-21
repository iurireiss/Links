import { Link } from "react-router-dom";

export function ErrorPage(){
    return(
        <div className="flex w-full min-h-screen text-white justify-center items-center flex-col">
            <h1 className="font-bold text-6xl mb-2">404</h1>
            <h1 className="font-bold text-4xl mb-4">
                Pagina não encontrada
            </h1>
            <p className="italic text-1xl mb-3">
                Você caiu em uma pagina não encontrada
            </p>
            <Link className="bg-gray-50/20 py-1 px-4 rounded" to="/">
                Voltar para home
            </Link>
        </div>
    )
}
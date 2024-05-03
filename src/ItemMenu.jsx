import cart from "./img/cart.png"

export function ItemMenu (props) {
    return (
        <div>
            <div className="w-100 h-19 border rounded-lg bg-[#35332D] border-[#736E65]">
                <img className="rounded-t-lg w-90" src={props.imagem}/>
                <div className="p-5">
                    <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.nome}</p>
                    <p>R${props.preco}</p>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{props.sobre}</p>

                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg focus:outline-none hover:bg-[#f25c05cf] bg-[#f25c05]"><img src={cart} /></a>
                </div>
            </div>   
        </div>
    )
}
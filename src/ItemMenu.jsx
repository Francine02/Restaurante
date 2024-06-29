import cart from "./img/cart.png"

export function ItemMenu({ addItemToCart, ...props}) {

  return (
    <div className="w-full h-full max-h-[40rem] flex flex-col pb-10">
      <div className="bg-[#1B1C20] flex flex-col justify-between h-full"> 
        <img className="h-full max-h-40 object-cover" src={props.imagem} alt={props.nome} /> 
        <div className="p-5 flex flex-col justify-between flex-grow"> 
          <div>
            <p className="mb-2 text-2xl font-bold text-white" id={props.id}>{props.nome}</p>
            <p className="mb-3 text-sm lg:text-2x1 text-gray-300 text-justify">{props.sobre}</p>
          </div>

          <div className="flex justify-between items-end"> 
            <p className="mb-2 text-2x1 text-[#EC4E35]">R${props.preco}</p>
            <a className="inline-flex items-center px-3 py-2 text-white rounded-lg focus:outline-none hover:bg-[#ec4d35c5] bg-[#EC4E35] cursor-pointer">
              <button onClick={() => addItemToCart(props.imagem, props.id, props.preco, props.nome)}><img src={cart} alt="Ícone do carrinho de compras" className="w-6 lg:w-10"/></button>
            </a>
          </div>
        </div>
      </div>
    </div>
    );
}
  


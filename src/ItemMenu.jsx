import cart from "./img/cart.png"

export function ItemMenu(props) {
    return (
      <div className="w-82 flex flex-col">
        <div className="bg-[#1B1C20] flex flex-col justify-between h-full"> 
          <img className="w-full h-40 object-cover" src={props.imagem} alt={props.nome} /> 
          <div className="p-5 flex flex-col justify-between flex-grow"> 
            <div>
              <p className="mb-2 md:text-2xl text-lg font-bold text-white">{props.nome}</p>
              <p className="mb-3 md:text-1x1 text-sm text-gray-300 text-justify">{props.sobre}</p>
            </div>

            <div className="flex justify-between items-end"> 
              <p className="mb-2 text-md text-[#EC4E35]">R${props.preco}</p>
              <a href="#" className="inline-flex items-center px-3 py-2 text-white rounded-lg focus:outline-none hover:bg-[#ec4d35c5] bg-[#EC4E35]">
                <img src={cart} alt="Ícone do carrinho de compras" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
}
  


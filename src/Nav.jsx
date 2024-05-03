import { ItemMenu } from "./ItemMenu";
import { combosSushi, beb, quentes } from "./menu";

export function Nav() {
  const pagNav = [combosSushi, beb, quentes];
  const paginacao = 0;

  return (
    <div className="bg-black text-center text-white pt-20">
      <p className="font-semibold md:text-4xl text-md text-white" id="title">MENU:</p>
      
      <div className="flex justify-center mt-5">
        <div className="ml-5">
          <input id="op-combos" type="radio" name="op-menu" className="w-4 h-4" defaultChecked/>
          <label htmlFor="op-combos" className="ms-2 text-lg">Combos</label>
        </div>

        <div className="ml-5">
          <input id="op-hots" type="radio" name="op-menu" className="w-4 h-4"/>
          <label htmlFor="op-hots" className="ms-2 text-lg">Quentes</label>
        </div>

        <div className="ml-5">
          <input id="op-drinks" type="radio" name="op-menu" className="w-4 h-4"/>
          <label htmlFor="op-drinks" className="ms-2 text-lg">Bebidas</label>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 md:px-20 px-3 py-2 mt-5 gap-10"> 
        {pagNav[paginacao].map(produto => <ItemMenu imagem={produto.imagem} nome={produto.nome} sobre={produto.sobre} preco={produto.preco}/>)}
      </div>
    </div>
  )
}
  
import "./index.css"
import { useState } from "react";
import logo from "./img/icon.ico"
import cart from "./img/cart.png"
import {Nav} from "./Nav"
import { ItemMenu } from "./ItemMenu";
import { combosSushi, quentes, beb } from "./menu";

function App() {
  const pagNav = [combosSushi, quentes, beb];
  const [paginacao, mudarPag] = useState(0);

  return (<>
    <div className="bg bg-fixed">

      <header className="w-full h-15 md:px-20 px-3 flex justify-between fixed bg-black bg-opacity-80">
        <img src={logo} alt="logo" className="w-14"/>

        <div className="flex py-3">
          <h1 className=" text-red-500 font-bold text-1xl">{1}</h1>
          <img src={cart} alt="carrinho" className="w-7 h-7"/>
        </div>
      </header>

      <div className="md:px-20 px-3 md:py-16 py-40">
        <div className="md:py-40 py-2 text-center">
          <p className="font-semibold lg:text-7xl text-4xl text-white">Bem-vindo ao Japa!</p>
          <p className="text-white md:text-lg text-sm pt-6">Descubra no Japa uma fusão de tradição e inovação em cada pedaço de sushi.</p>

          <button type="button" className="mt-10 text-white font-bold rounded-lg lg:text-lg text-md px-5 lg:p-4 py-2.5 me-2 mb-2 bg-[#EC4E35]" disabled>Veja o menu</button>
        </div>

      </div>
    </div>

    <div className="bg-black text-center text-white pt-16">
      <Nav mudarPag={mudarPag}/>

      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:px-20 px-10 py-2 gap-5"> 
          {pagNav[paginacao].map(produto => <ItemMenu imagem={produto.imagem} nome={produto.nome} sobre={produto.sobre} preco={produto.preco}/>)}
      </div>
    </div>  
  </>)
}

export default App

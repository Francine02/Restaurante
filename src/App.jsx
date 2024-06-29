import "./index.css";
import { TelaInicio } from "./TelaInicio";
import { useState } from "react";
import { Nav } from "./Nav";
import { ItemMenu } from "./ItemMenu";
import { combosSushi, quentes, beb } from "./menu";

function App() {
  const pagNav = [combosSushi, quentes, beb];
  const [paginacao, mudarPag] = useState(0);
  const [addCarrinho, setAddCarrinho] = useState([]);
  const [isCarrinhoOpen, setIsCarrinhoOpen] = useState(false);

  const addItemToCart = (imagem, id, preco, nome) => {
    const newItem = { imagem, id, preco, nome };
    setAddCarrinho([...addCarrinho, newItem]);
    console.log(nome, id, preco);
  };

  return (
    <>
      <TelaInicio addCarrinho={addCarrinho} setIsCarrinhoOpen={setIsCarrinhoOpen} isCarrinhoOpen={isCarrinhoOpen} />

      <div className="bg-black text-center text-white pt-16">
        <Nav mudarPag={mudarPag}/>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 px-12 md:px-16 gap-4"> 
          {pagNav[paginacao].map(produto => (
            <ItemMenu 
              addItemToCart={addItemToCart} 
              imagem={produto.imagem} 
              nome={produto.nome} 
              sobre={produto.sobre} 
              preco={produto.preco} 
              key={produto.id} 
              id={produto.id}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;

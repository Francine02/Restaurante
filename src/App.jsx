import "./index.css";
import { TelaInicio } from "./components/TelaInicio";
import { useState } from "react";
import { Nav } from "./components/Nav";
import { ItemMenu } from "./components/ItemMenu";
import { combosSushi, quentes, beb } from "./components/menu";

function App() {
  const pagNav = [combosSushi, quentes, beb]; //Pega os arrays do "menu.js"
  const [paginacao, mudarPag] = useState(0); //Aqui controla a página
  const [addCarrinho, setAddCarrinho] = useState([]); //Controla o que é armazenado no carrinho
  const [isCarrinhoOpen, setIsCarrinhoOpen] = useState(false); //Monitora a funcionalidade de abrir e fechar o carrinho

  const addItemToCart = (imagem, id, preco, nome) => { //Função que recebe os parametros que vão ser recebidos no carrinho e elaserve para adicionar um novo item ao carrinho quando chamada
    const newItem = { imagem, id, preco, nome };
    setAddCarrinho([...addCarrinho, newItem]); //Muda o estado do carrinho com os itens anteriores e os novos da função acima
    console.log(nome, id, preco); //Questão de teste
  };

  return (
    <>
      <TelaInicio addCarrinho={addCarrinho} setIsCarrinhoOpen={setIsCarrinhoOpen} isCarrinhoOpen={isCarrinhoOpen} /> {/* Recebe as props: "addCarrinho" - com os itens adicionados no carrinho. "setIsCarrinhoOpen" - para controle do carrinho aberto ou náo. "isCarrinhoOpen" - o estado atual do carrinho(boolean)*/} 

      <div className="bg-black text-center text-white pt-16">
        <Nav mudarPag={mudarPag}/> {/* A props que permite a navegação é passada*/}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 px-12 md:px-16 gap-4"> 
          {pagNav[paginacao].map(produto => ( //Percorre o menu, de acordo com o valor da paginação, ou seja, a paginação funciona como index.
            <ItemMenu 
              addItemToCart={addItemToCart}  //A children é passada com os itens do carrinho
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

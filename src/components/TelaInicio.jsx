import logo from "../img/icon.ico";
import cart from "../img/cart.png";
import { Carrinho } from "./Carrinho";

export function TelaInicio({ addCarrinho, setIsCarrinhoOpen, isCarrinhoOpen }) { //Recebe do "App.jsx" as funções. "addCarrinho" é o array com os itens do carrinho. As outras childrens se referem ao funcionamento de abrir e fechar o Carrinho.
    const openCar = () => { //Função para mudar o status do carrinho que estava false e abrir ele
        setIsCarrinhoOpen(true);
    };

    const closeCar = () => { //Aqui faz ao contrário e fecha o carrinho.
        setIsCarrinhoOpen(false);
    };

    return (
        <div className="bg bg-fixed">
            <header className="w-full fixed">
                <div className="h-15 px-5 pt-2 md:px-16 flex justify-between bg-black bg-opacity-80">
                    <img src={logo} alt="logo" className="w-14 h-14"/>
                    
                    <div className="flex py-3">
                        <p className="text-red-500 font-bold text-x1">{addCarrinho.length}</p>
                        <button onClick={openCar}><img src={cart} alt="carrinho" className="w-8 h-8"/></button> {/* Aqui ao clicar o estado do carrinho é alterado para ele abrir. */}
                    </div>
                </div>

                {isCarrinhoOpen && <Carrinho onClose={closeCar} car={addCarrinho} />}  {/* Aqui o componente "Carrinho" é renderizado somente se "isCarrinhoOpen" for true. Passando as props "onClose" e "car", com o seu elemento para o Carrinho */}
            </header>

            <div className="py-44 px-8 md:px-16">
                <div className="text-center">
                    <p className="font-semibold text-4xl sm:text-5xl lg:text-7xl text-white">Bem-vindo ao Japa!</p>
                    <p className="text-white text-md md:text-lg pt-6 shadow-lg">Descubra no Japa uma fusão de tradição e inovação em cada pedaço de sushi.</p>

                    <a href="https://www.linkedin.com/in/francine-ccruz/" target="_blank"><button type="button" className="mt-10 text-white font-bold rounded-lg text-md lg:text-xl px-5 lg:p-4 py-2.5 me-2 mb-2 bg-[#EC4E35]">Contato</button></a>
                </div>
            </div>
        </div>
    );
}

import logo from "./img/icon.ico"
import cart from "./img/cart.png"

export function TelaInicio () {
    return (
        <div className="bg bg-fixed">
            <header className="w-full h-15 px-5 pt-2 md:px-16 flex justify-between fixed bg-black bg-opacity-80">
                <img src={logo} alt="logo" className="w-14 h-14"/>
                
                <div className="flex py-3">
                    <p className=" text-red-500 font-bold text-x1">1</p>
                    <img src={cart} alt="carrinho" className="w-8 h-8"/>
                </div>
            </header>
            
            <div className=" py-44 px-8 md:px-16">
                <div className="text-center">
                    <p className="font-semibold text-4xl sm:text-5xl lg:text-7xl text-white">Bem-vindo ao Japa!</p>
                    <p className="text-white text-md md:text-lg pt-6 shadow-lg">Descubra no Japa uma fusão de tradição e inovação em cada pedaço de sushi.</p>

                    <button type="button" className="mt-10 text-white font-bold rounded-lg text-md lg:text-xl px-5 lg:p-4 py-2.5 me-2 mb-2 bg-[#EC4E35]" disabled>Contato</button>
                </div>
            </div>
        </div>
    )
}
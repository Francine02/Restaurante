import logo from "./img/icon.ico"
import cart from "./img/cart.png"
import sushi from "./img/combo.png"
import bg from "./img/background.jpg"
import {Nav} from "./Nav"
import "./index.css"

function App() {
  return (
    <>
    <div style={{backgroundImage: `url(${bg})`}} className="bg-cover w-full">

      <header className="w-full h-15 md:px-20 px-3 py-2 flex justify-between fixed bg-black bg-opacity-30">
        <img src={logo} alt="logo" className="w-10"/>

        <div className="flex py-1">
          <h1 className=" text-red-500 font-bold text-1xl">{1}</h1>
          <img src={cart} alt="carrinho" className="w-7 h-7"/>
        </div>
      </header>

      <div className="grid grid-cols-2 md:px-20 px-3 md:py-16 py-40 gap-1">
        <div className="md:py-40">
          <p className="font-semibold md:text-5xl text-md text-white" id="title">Bem-vindo ao Japa!</p>
          <p className="text-white md:text-md text-sm pt-5">Descubra no Japa uma fusão de tradição e inovação em cada pedaço de sushi.</p>

          <button type="button" class="mt-8 focus:outline-none text-white font-bold focus:ring-4 focus:ring-[#f25c05b0] rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-[#F25C05]" disabled >Veja o menu</button>
        </div>
        <div>
          <img src={sushi} className="md:pl-12" />
        </div>
      </div>
    </div>

    <Nav/>
    </>
  )
}

export default App

import logo from "./img/icon.ico"
import cart from "./img/cart.png"
import sushi from "./img/—Pngtree—ssushi.png"
import bg from "./img/background.jpg"
import {Nav} from "./Nav"
import "./index.css"

function App() {
  return (
    <>
    <div style={{backgroundImage: `url(${bg})`}} className="bg-cover w-full">

      <header className="w-full h-15 md:px-20 px-3 py-2 flex justify-between fixed bg-stone-900 bg-opacity-65 top-0 start-0 border-b border-stone-700">
        <img src={logo} alt="logo" className="w-10"/>

        <div className="flex py-1">
          <h1 className=" text-red-500 font-bold text-1xl">{1}</h1>
          <img src={cart} alt="carrinho" className="w-7 h-7"/>
        </div>
      </header>

      <div className="pt-16">
        <img src={sushi}  />
      </div>
    </div>

    <Nav/>
    </>
  )
}

export default App

import logo from "./img/icon.ico"
import cart from "./img/cart.png"
import {Nav} from "./Nav"
import "./index.css"

function App() {
  return (
    <>
    <header className="w-full h-15 md:px-20 px-3 py-2 flex justify-between">
      <img src={logo} alt="logo" className="w-19"/>

      <div className="flex">
        <h1 className=" text-red-600 font-bold text-1xl">{1}</h1>
        <img src={cart} alt="carrinho" className="w-7 h-7"/>
      </div>
    </header>

    <Nav/>
    </>
  )
}

export default App

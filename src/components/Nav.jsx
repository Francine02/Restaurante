export function Nav(props) {  //Recebe uma props para usar na hora de pegar os elementos de acordo com a página
  return (
    <>
      <p className="font-semibold text-4xl md:text-5xl lg:text-6x1 text-white pt-12 lg:pt-1" id="title">-Menu-</p>
      <div className="grid py-12 place-items-center">
        <div className="grid grid-cols-3 rounded-xl bg-[#1B1C20]">
            <div>
                <input type="radio" id="op-combos" name="op-menu" className="peer hidden" defaultChecked onClick={() => props.mudarPag(0)}/> 
                <label htmlFor="op-combos" className="block cursor-pointer select-none rounded-xl p-4 text-center md:text-xl peer-checked:bg-[#383838] peer-checked:font-bold peer-checked:text-white">Combos</label>
            </div>

            <div>
                <input type="radio" id="op-hots" name="op-menu" className="peer hidden" onClick={() => props.mudarPag(1)}/>
                <label htmlFor="op-hots" className="block cursor-pointer select-none rounded-xl p-4 text-center md:text-xl peer-checked:bg-[#383838] peer-checked:font-bold peer-checked:text-white">Quentes</label>
            </div>

            <div>
                <input type="radio" id="op-drinks" name="op-menu" className="peer hidden" onClick={() => props.mudarPag(2)}/>
                <label htmlFor="op-drinks" className="block cursor-pointer select-none rounded-xl p-4 text-center md:text-xl peer-checked:bg-[#383838] peer-checked:font-bold peer-checked:text-white">Bebidas</label>
            </div>
        </div>
      </div>
    </>
  )
}
  
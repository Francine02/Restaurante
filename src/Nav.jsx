export function Nav() {
    return (
    <div className="bg-black text-center text-white pt-20">
      <p className="font-semibold md:text-4xl text-md text-white" id="title">MENU:</p>
 
      <div className="flex justify-center mt-5">
        <div class="ml-5">
          <input id="op-combos" type="radio" name="op-menu" class="w-4 h-4"/>
          <label htmlFor="op-combos" class="ms-2 text-lg">Combos</label>
        </div>

        <div class="ml-5">
          <input id="op-hots" type="radio" name="op-menu" class="w-4 h-4"/>
          <label htmlFor="op-hots" class="ms-2 text-lg">Quentes</label>
        </div>
      </div>

        <div>
          <input id="op-drinks" type="radio" name="op-menu" class="w-4 h-4"/>
          <label htmlFor="op-drinks" class="ms-2 text-lg">Bebidas</label>
        </div>
    </div>
  )
}
  
export function Carrinho({ onClose, car }) {
    const calculateTotalPrice = () => {
        let total = 0;
        car.forEach(item => {
            total += parseFloat(item.preco); // Usar parseFloat para garantir que estamos somando números
        });
        return total.toFixed(2); // Formatar para 2 casas decimais
    }

    const handleBuy = () => {
        alert("Pedido recebido com sucesso!")

        location.reload()
    }

    return (
        <div className="fixed top-0 right-0 h-full w-64 bg-[#1B1C20] shadow-lg z-50 text-white overflow-y-auto">
            <button onClick={onClose} className="absolute top-4 right-4 font-bold pt-1">X</button>
            <div className="p-4">
                <h2 className="text-2xl font-bold pb-5">Carrinho</h2>
                {car.length === 0 ? (
                    <p className='pt-5'>O carrinho está vazio.</p>
                ) : (
                    car.map((item, index) => (
                        <div key={index} className="flex justify-between items-center py-2">
                            <img src={item.imagem} alt={item.nome} className="pr-4 w-24"/>
                            <div>
                                <p className="mb-2">{item.nome}</p>
                                <p className='text-[#f49283]'>R${item.preco}</p>
                            </div>
                        </div>
                    ))
                )}
                <div style={{display: car.length === 0 ? 'none' : ''}}>
                    <div className="flex justify-between items-center mt-10" >
                        <p className='font-bold'>Total: R${calculateTotalPrice()}</p>
                        <button className=" text-white font-bold rounded-lg p-2 text-md bg-[#EC4E35]" onClick={() => handleBuy()}d>Comprar</button>
                    </div>
                </div>


            </div>
        </div>
    );
}

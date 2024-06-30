export function Carrinho({ onClose, car }) { //Componente com children do pai "TelaInicio". "onClose" é para o funcionamento do carrinho abrir e fechar. "car" é passada com os elementos que existem no "addCarrinho".
    const calculateTotalPrice = () => { //Função para calcular o preço de tudo que tem no carrinho
        let total = 0;
        car.forEach(item => { //Percorre o array Car
            total += parseFloat(item.preco); // Usar parseFloat para garantir que estamos somando números
        });
        return total.toFixed(2); // Formatar para 2 casas decimais
    }

    const handleBuy = () => { //Função para quando finalizar o pedido, aparecer um alerta de compra bem sucedida
        alert("Pedido recebido com sucesso!")

        location.reload() //Atualizar a página após o alerta
    }

    return (
        <div className="fixed top-0 right-0 h-full w-64 bg-[#1B1C20] shadow-lg z-50 text-white overflow-y-auto">
            <button onClick={onClose} className="absolute top-4 right-4 font-bold pt-1">X</button>
            <div className="p-4">
                <h2 className="text-2xl font-bold pb-5">Carrinho</h2> 
                {car.length === 0 ? ( //Verifica se o carrinho está vazio
                    <p className='pt-5'>O carrinho está vazio.</p>
                ) : (
                    car.map((item, index) => (
                        <div key={index} className="flex items-center py-2">
                            <img src={item.imagem} alt={item.nome} className="pr-4 w-24"/>
                            <div className="flex flex-col justify-center">
                                <p className="mb-2">{item.nome}</p>
                                <p className='text-[#f49283]'>R${item.preco}</p>
                            </div>
                        </div>
                    ))
                )}
                <div style={{display: car.length === 0 ? 'none' : ''}}>
                    <div className="flex justify-between items-center mt-10" >
                        <p className='font-bold text-md'>Total: R${calculateTotalPrice()}</p>
                        <button className=" text-white font-bold rounded-lg p-1 text-md bg-[#EC4E35]" onClick={() => handleBuy()}d>Comprar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Home() {
    return (
        <>
            <div className="bg-teal-900 flex justify-center">
                <div className='container grid grid-cols-2 text-white'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>
                            Seja bem-vindo(a)!
                        </h2>
                        <p className='text-xl'>
                            Encontre aqui os melhores medicamentos!
                        </p>
                    </div>

                    <div className="flex justify-center ">
                        <img
                            src="./src/assets/homeimg.png"
                            alt="Imagem Página Home"
                            className='w-2/3'
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
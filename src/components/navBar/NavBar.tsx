function Navbar () {
    return (
        <nav className="bg-baldurs-blue p-4">
            <div className="container mx-auto flex justify-between items-center">
                <a className="text-white text-2xl font-bold flex items-center hover:opacity-70">
                    <img
                        src="/src/assets/logo.png"
                        alt="PharmaVida Logo"
                        className="h-20 mr-2"
                    />
                </a>
                <ul className="flex space-x-4">
                    <li>
                        <a className="text-teal-600 hover:opacity-70">
                            Categorias
                        </a>
                    </li>
                    <li>
                        <a className="text-teal-600 hover:opacity-70">
                            Cadastrar Categoria
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;

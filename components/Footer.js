function Footer() {
    return (
        <footer data-name="footer" className="bg-black text-gray-400 py-16 mt-20">
            <div className="container">
                <div className="grid grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-sm font-bold mb-4">Sobre Nós</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-white">Empresa</a></li>
                            <li><a href="#" className="hover:text-white">Carreiras</a></li>
                            <li><a href="#" className="hover:text-white">Imprensa</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm font-bold mb-4">Ajuda</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-white">Central de Ajuda</a></li>
                            <li><a href="#" className="hover:text-white">Contato</a></li>
                            <li><a href="#" className="hover:text-white">Termos de Uso</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm font-bold mb-4">Legal</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-white">Privacidade</a></li>
                            <li><a href="#" className="hover:text-white">Cookies</a></li>
                            <li><a href="#" className="hover:text-white">Preferências</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm font-bold mb-4">Redes Sociais</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-white">Facebook</a></li>
                            <li><a href="#" className="hover:text-white">Instagram</a></li>
                            <li><a href="#" className="hover:text-white">Twitter</a></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 text-center">
                    <p>&copy; 2024 Netflix Clone. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
}

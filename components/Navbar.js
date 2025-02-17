function Navbar({ onNavigate }) {
    const [isScrolled, setIsScrolled] = React.useState(false);
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav data-name="navbar" className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
            <div className="container flex items-center justify-between py-4">
                <div data-name="nav-logo" className="text-red-600 text-2xl font-bold cursor-pointer" onClick={() => onNavigate('home')}>
                    Rede Filmes
                </div>
                
                {/* Desktop Menu */}
                <div className="hidden md:flex gap-6">
                    <button 
                        onClick={() => onNavigate('home')}
                        className="text-white hover:text-gray-300"
                    >
                        Início
                    </button>
                    <button 
                        onClick={() => onNavigate('series')}
                        className="text-white hover:text-gray-300"
                    >
                        Séries
                    </button>
                    <button 
                        onClick={() => onNavigate('movies')}
                        className="text-white hover:text-gray-300"
                    >
                        Filmes
                    </button>
                    <button 
                        onClick={() => onNavigate('mylist')}
                        className="text-white hover:text-gray-300"
                    >
                        Minha Lista
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button 
                    className="md:hidden text-white"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
                </button>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="absolute top-full left-0 right-0 bg-black bg-opacity-90 md:hidden">
                        <div className="flex flex-col p-4">
                            <button 
                                onClick={() => {
                                    onNavigate('home');
                                    setIsMenuOpen(false);
                                }}
                                className="text-white py-2"
                            >
                                Início
                            </button>
                            <button 
                                onClick={() => {
                                    onNavigate('series');
                                    setIsMenuOpen(false);
                                }}
                                className="text-white py-2"
                            >
                                Séries
                            </button>
                            <button 
                                onClick={() => {
                                    onNavigate('movies');
                                    setIsMenuOpen(false);
                                }}
                                className="text-white py-2"
                            >
                                Filmes
                            </button>
                            <button 
                                onClick={() => {
                                    onNavigate('mylist');
                                    setIsMenuOpen(false);
                                }}
                                className="text-white py-2"
                            >
                                Minha Lista
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}

function Navbar({ onNavigate }) {
    const [isScrolled, setIsScrolled] = React.useState(false);

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
                    REDE FILMES
                </div>
                <div data-name="nav-links" className="flex gap-6">
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
            </div>
        </nav>
    );
}

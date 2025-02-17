function App() {
    const [selectedMovie, setSelectedMovie] = React.useState(null);
    const [selectedSeries, setSelectedSeries] = React.useState(null);
    const [currentPage, setCurrentPage] = React.useState('home');
    const [error, setError] = React.useState(null);

    const handleMovieClick = (movie) => {
        try {
            if (movie) {
                setSelectedMovie(movie);
            }
        } catch (error) {
            reportError(error);
            setError("Erro ao selecionar o filme");
        }
    };

    const handleSeriesClick = (series) => {
        try {
            if (series) {
                setSelectedSeries(series);
            }
        } catch (error) {
            reportError(error);
            setError("Erro ao selecionar a série");
        }
    };

    const handleCloseMovie = () => {
        try {
            setSelectedMovie(null);
        } catch (error) {
            reportError(error);
            setError("Erro ao fechar o filme");
        }
    };

    const handleCloseSeries = () => {
        try {
            setSelectedSeries(null);
        } catch (error) {
            reportError(error);
            setError("Erro ao fechar a série");
        }
    };

    const handleNavigate = (page) => {
        try {
            setCurrentPage(page);
            setSelectedMovie(null);
            setSelectedSeries(null);
        } catch (error) {
            reportError(error);
            setError("Erro ao navegar");
        }
    };

    if (error) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="text-white text-center">
                    <h1 className="text-2xl mb-4">Ops! Algo deu errado.</h1>
                    <p>{error}</p>
                    <button 
                        onClick={() => setError(null)}
                        className="mt-4 bg-red-600 px-4 py-2 rounded"
                    >
                        Tentar novamente
                    </button>
                </div>
            </div>
        );
    }

    const renderPage = () => {
        switch (currentPage) {
            case 'series':
                return (
                    <SeriesPage 
                        onNavigate={handleNavigate} 
                        onSeriesClick={handleSeriesClick}
                    />
                );
            case 'movies':
                return (
                    <div className="min-h-screen bg-[#141414]">
                        <Navbar onNavigate={handleNavigate} />
                        <div className="pt-24">
                            <div className="container mx-auto px-4">
                                <h1 className="text-3xl font-bold mb-8">Filmes</h1>
                                {movieData.recentes && movieData.recentes.length > 0 && (
                                    <MovieList 
                                        title="Lançamentos" 
                                        movies={movieData.recentes}
                                        onMovieClick={handleMovieClick}
                                    />
                                )}
                                {movieData.trending && movieData.trending.length > 0 && (
                                    <MovieList 
                                        title="Tendências Agora" 
                                        movies={movieData.trending}
                                        onMovieClick={handleMovieClick}
                                    />
                                )}
                                {movieData.popular && movieData.popular.length > 0 && (
                                    <MovieList 
                                        title="Populares na Netflix" 
                                        movies={movieData.popular}
                                        onMovieClick={handleMovieClick}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                );
            case 'mylist':
                return <MyListPage onNavigate={handleNavigate} onMovieClick={handleMovieClick} />;
            default:
                return (
                    <div className="min-h-screen bg-[#141414]">
                        <Navbar onNavigate={handleNavigate} />
                        {movieData.featured && movieData.featured.length > 0 && (
                            <Hero movies={movieData.featured} onPlay={handleMovieClick} />
                        )}
                        <div className="relative z-10 mt-[-200px] pb-20">
                            <div className="container mx-auto px-4">
                                {movieData.recentes && movieData.recentes.length > 0 && (
                                    <MovieList 
                                        title="Lançamentos" 
                                        movies={movieData.recentes}
                                        onMovieClick={handleMovieClick}
                                    />
                                )}
                                {movieData.trending && movieData.trending.length > 0 && (
                                    <MovieList 
                                        title="Tendências Agora" 
                                        movies={movieData.trending}
                                        onMovieClick={handleMovieClick}
                                    />
                                )}
                                {movieData.popular && movieData.popular.length > 0 && (
                                    <MovieList 
                                        title="Populares na Netflix" 
                                        movies={movieData.popular}
                                        onMovieClick={handleMovieClick}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                );
        }
    };

    return (
        <div data-name="app">
            {renderPage()}
            {selectedMovie && (
                <MovieDetails 
                    movie={selectedMovie} 
                    onClose={handleCloseMovie}
                />
            )}
            {selectedSeries && (
                <MovieDetails 
                    movie={selectedSeries}
                    onClose={handleCloseSeries}
                />
            )}
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

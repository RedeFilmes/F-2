function App() {
    const [selectedMovie, setSelectedMovie] = React.useState(null);
    const [currentPage, setCurrentPage] = React.useState('home');

    const handleMovieClick = (movie) => {
        try {
            setSelectedMovie(movie);
        } catch (error) {
            reportError(error);
        }
    };

    const handleCloseMovie = () => {
        try {
            setSelectedMovie(null);
        } catch (error) {
            reportError(error);
        }
    };

    const handleNavigate = (page) => {
        try {
            setCurrentPage(page);
            setSelectedMovie(null);
        } catch (error) {
            reportError(error);
        }
    };

    const renderPage = () => {
        switch (currentPage) {
            case 'series':
                return <SeriesPage onNavigate={handleNavigate} />;
            case 'movies':
                return (
                    <div>
                        <Navbar onNavigate={handleNavigate} />
                        <div className="pt-20">
                            <div className="container">
                                <h1 className="text-3xl font-bold mb-8">Filmes</h1>
                                <MovieList 
                                    title="Lançamentos" 
                                    movies={movieData.recentes}
                                    onMovieClick={handleMovieClick}
                                />
                                <MovieList 
                                    title="Tendências Agora" 
                                    movies={movieData.trending}
                                    onMovieClick={handleMovieClick}
                                />
                                <MovieList 
                                    title="Populares na Netflix" 
                                    movies={movieData.popular}
                                    onMovieClick={handleMovieClick}
                                />
                            </div>
                        </div>
                        {selectedMovie && (
                            <MovieDetails 
                                movie={selectedMovie} 
                                onClose={handleCloseMovie}
                            />
                        )}
                    </div>
                );
            case 'mylist':
                return (
                    <div>
                        <Navbar onNavigate={handleNavigate} />
                        <MyListPage onMovieClick={handleMovieClick} />
                        {selectedMovie && (
                            <MovieDetails 
                                movie={selectedMovie} 
                                onClose={handleCloseMovie}
                            />
                        )}
                    </div>
                );
            default:
                return (
                    <div>
                        <Navbar onNavigate={handleNavigate} />
                        <Hero movies={movieData.featured} onPlay={handleMovieClick} />
                        <div className="mt-20 relative z-10">
                            <MovieList 
                                title="Lançamentos" 
                                movies={movieData.recentes}
                                onMovieClick={handleMovieClick}
                            />
                            <MovieList 
                                title="Tendências Agora" 
                                movies={movieData.trending}
                                onMovieClick={handleMovieClick}
                            />
                            <MovieList 
                                title="Populares na Netflix" 
                                movies={movieData.popular}
                                onMovieClick={handleMovieClick}
                            />
                        </div>
                        {selectedMovie && (
                            <MovieDetails 
                                movie={selectedMovie} 
                                onClose={handleCloseMovie}
                            />
                        )}
                    </div>
                );
        }
    };

    return (
        <div data-name="app">
            {renderPage()}
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

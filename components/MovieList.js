function MovieList({ title, movies = [], onMovieClick }) {
    const listRef = React.useRef(null);

    const scroll = (direction) => {
        try {
            const container = listRef.current;
            const scrollAmount = 200 * 4;
            if (container) {
                if (direction === 'left') {
                    container.scrollLeft -= scrollAmount;
                } else {
                    container.scrollLeft += scrollAmount;
                }
            }
        } catch (error) {
            reportError(error);
        }
    };

    if (!movies || !Array.isArray(movies) || movies.length === 0) {
        return null;
    }

    return (
        <div data-name="movie-row" className="movie-row">
            <h2 className="text-xl font-bold mb-4 px-4">{title}</h2>
            <div className="relative group">
                <button 
                    data-name="prev-button"
                    className="carousel-button prev opacity-0 group-hover:opacity-100" 
                    onClick={() => scroll('left')}
                >
                    <i className="fas fa-chevron-left"></i>
                </button>
                <div data-name="movie-list" className="movie-list" ref={listRef}>
                    {movies.map((movie, index) => (
                        <div key={`${movie.id}-${index}`} className="movie-card-container">
                            <MovieCard 
                                movie={movie} 
                                onClick={() => onMovieClick(movie)} 
                            />
                        </div>
                    ))}
                </div>
                <button 
                    data-name="next-button"
                    className="carousel-button next opacity-0 group-hover:opacity-100" 
                    onClick={() => scroll('right')}
                >
                    <i className="fas fa-chevron-right"></i>
                </button>
            </div>
        </div>
    );
}

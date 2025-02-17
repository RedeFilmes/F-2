function MovieList({ title, movies, onMovieClick }) {
    const listRef = React.useRef(null);

    const scroll = (direction) => {
        try {
            const container = listRef.current;
            const scrollAmount = 240 * 4; // Scroll 4 items at once
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

    return (
        <div data-name="movie-row" className="movie-row">
            <div className="container relative">
                <h2 data-name="row-title" className="text-xl font-bold mb-4">{title}</h2>
                <button 
                    data-name="prev-button"
                    className="carousel-button prev" 
                    onClick={() => scroll('left')}
                >
                    <i className="fas fa-chevron-left"></i>
                </button>
                <div data-name="movie-list" className="movie-list" ref={listRef}>
                    {movies.map(movie => (
                        <div key={movie.id} className="movie-card-container">
                            <MovieCard 
                                movie={movie} 
                                onClick={() => onMovieClick(movie)} 
                            />
                        </div>
                    ))}
                </div>
                <button 
                    data-name="next-button"
                    className="carousel-button next" 
                    onClick={() => scroll('right')}
                >
                    <i className="fas fa-chevron-right"></i>
                </button>
            </div>
        </div>
    );
}

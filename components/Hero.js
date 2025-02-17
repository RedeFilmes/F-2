function Hero({ movies, onPlay }) {
    const [currentIndex, setCurrentIndex] = React.useState(0);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => 
                prevIndex === movies.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000); // Change banner every 5 seconds

        return () => clearInterval(timer);
    }, [movies.length]);

    const currentMovie = movies[currentIndex];

    return (
        <div 
            data-name="hero"
            className="hero" 
            style={{ backgroundImage: `url(${currentMovie.backdrop})` }}
        >
            <div className="hero-content">
                <div className="container">
                    <h1 data-name="hero-title" className="hero-title">{currentMovie.title}</h1>
                    <p data-name="hero-description" className="max-w-xl mb-4">{currentMovie.description}</p>
                    <button 
                        data-name="play-button"
                        onClick={() => onPlay(currentMovie)}
                        className="bg-white text-black px-8 py-2 rounded-md hover:bg-opacity-80 flex items-center gap-2"
                    >
                        <i className="fas fa-play"></i> Assistir
                    </button>
                </div>
            </div>
        </div>
    );
}

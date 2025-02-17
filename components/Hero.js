function Hero({ movies = [], onPlay }) {
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const [imageError, setImageError] = React.useState(false);

    React.useEffect(() => {
        if (!movies || !Array.isArray(movies) || movies.length === 0) {
            return;
        }

        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => 
                prevIndex === (movies.length - 1) ? 0 : prevIndex + 1
            );
        }, 5000);

        return () => clearInterval(timer);
    }, [movies]);

    if (!movies || !Array.isArray(movies) || movies.length === 0) {
        return null;
    }

    const currentMovie = movies[currentIndex];
    if (!currentMovie) {
        return null;
    }

    const handleImageError = () => {
        try {
            setImageError(true);
        } catch (error) {
            reportError(error);
        }
    };

    const backgroundStyle = {
        backgroundImage: imageError 
            ? 'linear-gradient(to bottom, #141414, #000000)'
            : `url(${currentMovie.backdrop})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    };

    return (
        <div 
            data-name="hero"
            className="hero" 
            style={backgroundStyle}
            onError={handleImageError}
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

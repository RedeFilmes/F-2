function MovieCard({ movie, onClick }) {
    const [imageError, setImageError] = React.useState(false);

    const handleImageError = () => {
        try {
            setImageError(true);
        } catch (error) {
            reportError(error);
        }
    };

    return (
        <div 
            data-name="movie-card"
            className="relative group cursor-pointer"
            onClick={onClick}
        >
            <img 
                src={imageError ? "https://via.placeholder.com/300x450?text=No+Image" : movie.poster}
                alt={movie.title}
                className="w-full h-[300px] object-cover rounded-md"
                onError={handleImageError}
                loading="lazy"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-300 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 rounded-md">
                <h3 className="text-white text-sm font-bold mb-2">{movie.title}</h3>
                <div className="flex items-center gap-2 relative z-20">
                    <button className="bg-white text-black p-2 rounded-full hover:bg-gray-200">
                        <i className="fas fa-play text-xs"></i>
                    </button>
                    <AddToListButton item={movie} />
                    <span className="text-white text-xs">{movie.year}</span>
                    <span className="text-white text-xs">{movie.duration}</span>
                </div>
            </div>
        </div>
    );
}

function MovieDetails({ movie, onClose }) {
    if (!movie) return null;

    return (
        <div 
            data-name="movie-details"
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 overflow-y-auto"
        >
            <div className="relative w-full max-w-6xl mx-4">
                <button 
                    data-name="close-button"
                    onClick={onClose}
                    className="absolute -top-10 right-0 text-white hover:text-gray-300"
                >
                    <i className="fas fa-times text-2xl"></i>
                </button>
                <div className="bg-zinc-900 rounded-lg overflow-hidden">
                    <div className="aspect-video">
                        <iframe
                            src={`https://www.youtube.com/embed/${movie.videoId}`}
                            width="100%"
                            height="100%"
                            title={movie.title}
                            frameBorder="0"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <div className="p-8">
                        <div className="flex justify-between items-start mb-4">
                            <h2 className="text-3xl font-bold">{movie.title}</h2>
                            <AddToListButton item={movie} />
                        </div>
                        <div className="flex gap-4 mb-4">
                            <span>{movie.year}</span>
                            <span>{movie.duration}</span>
                        </div>
                        <p className="text-gray-300 mb-6">{movie.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

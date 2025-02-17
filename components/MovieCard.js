function MovieCard({ movie, onClick }) {
    return (
        <div 
            data-name="movie-card"
            className="relative group cursor-pointer"
            onClick={onClick}
        >
            <img 
                src={movie.poster} 
                alt={movie.title}
                className="w-full h-[360px] object-cover rounded-md"
                onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://via.placeholder.com/240x360?text=No+Image';
                }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-300 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100">
                <h3 className="text-white text-sm font-bold mb-2">{movie.title}</h3>
                <div className="flex items-center gap-2">
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

function SeriesSeasons({ series }) {
    const [selectedSeason, setSelectedSeason] = React.useState(1);
    const [selectedEpisode, setSelectedEpisode] = React.useState(null);

    const handleEpisodeClick = (episode) => {
        try {
            setSelectedEpisode(episode);
        } catch (error) {
            reportError(error);
        }
    };

    const handleCloseVideo = () => {
        try {
            setSelectedEpisode(null);
        } catch (error) {
            reportError(error);
        }
    };

    return (
        <div data-name="series-seasons" className="mt-8">
            <div className="container">
                <h2 className="text-2xl font-bold mb-6">Temporadas</h2>
                <div className="flex gap-4 mb-8">
                    {series.seasons.map(season => (
                        <button
                            key={season.number}
                            onClick={() => setSelectedSeason(season.number)}
                            className={`px-4 py-2 rounded ${
                                selectedSeason === season.number 
                                ? 'bg-red-600' 
                                : 'bg-gray-800 hover:bg-gray-700'
                            }`}
                        >
                            Temporada {season.number}
                        </button>
                    ))}
                </div>
                <div className="grid gap-4">
                    {series.seasons
                        .find(s => s.number === selectedSeason)
                        ?.episodes.map(episode => (
                            <div 
                                key={episode.number}
                                className="bg-zinc-800 p-4 rounded-lg flex gap-4"
                            >
                                <img 
                                    src={episode.thumbnail} 
                                    alt={episode.title}
                                    className="w-64 h-36 object-cover rounded"
                                />
                                <div>
                                    <h3 className="font-bold mb-2">
                                        {episode.number}. {episode.title}
                                    </h3>
                                    <p className="text-gray-300">{episode.description}</p>
                                    <div className="mt-2">
                                        <button 
                                            onClick={() => handleEpisodeClick(episode)}
                                            className="flex items-center gap-2 hover:text-red-600"
                                        >
                                            <i className="fas fa-play"></i> Assistir
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
            {selectedEpisode && (
                <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
                    <div className="relative w-full max-w-6xl mx-4">
                        <button 
                            onClick={handleCloseVideo}
                            className="absolute -top-10 right-0 text-white hover:text-gray-300"
                        >
                            <i className="fas fa-times text-2xl"></i>
                        </button>
                        <div className="aspect-video">
                            <iframe
                                src={`https://www.youtube.com/embed/${selectedEpisode.videoUrl}`}
                                width="100%"
                                height="100%"
                                title={selectedEpisode.title}
                            ></iframe>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

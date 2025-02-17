function SeriesPage({ onNavigate, onSeriesClick }) {
    const [selectedSeries, setSelectedSeries] = React.useState(null);
    const [seriesList, setSeriesList] = React.useState([]);

    React.useEffect(() => {
        try {
            if (seriesData) {
                // Convert object to array and initialize
                const seriesArray = Object.values(seriesData || {});
                setSeriesList(seriesArray);
            }
        } catch (error) {
            reportError(error);
            setSeriesList([]);
        }
    }, []);

    const handleSeriesSelect = (series) => {
        try {
            if (series) {
                setSelectedSeries(series);
            }
        } catch (error) {
            reportError(error);
        }
    };

    const handleBack = () => {
        try {
            setSelectedSeries(null);
        } catch (error) {
            reportError(error);
        }
    };

    if (!seriesData || Object.keys(seriesData).length === 0) {
        return (
            <div className="pt-20 text-center text-white">
                <p>Nenhuma série disponível no momento.</p>
            </div>
        );
    }

    return (
        <div data-name="series-page">
            <Navbar onNavigate={onNavigate} />
            <div className="pt-20">
                {selectedSeries ? (
                    <div>
                        <div 
                            className="h-[50vh] bg-cover bg-center relative"
                            style={{ backgroundImage: `url(${selectedSeries.backdrop})` }}
                        >
                            <button
                                onClick={handleBack}
                                className="absolute top-4 left-4 bg-black bg-opacity-50 p-2 rounded-full text-white hover:bg-opacity-75"
                            >
                                <i className="fas fa-arrow-left"></i>
                            </button>
                            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent">
                                <div className="container h-full flex items-end pb-10">
                                    <div>
                                        <h1 className="text-5xl font-bold mb-4">
                                            {selectedSeries.title}
                                        </h1>
                                        <p className="max-w-2xl text-lg mb-4">
                                            {selectedSeries.description}
                                        </p>
                                        <div className="flex items-center gap-4">
                                            <button 
                                                className="bg-white text-black px-8 py-2 rounded-md hover:bg-opacity-80 flex items-center gap-2"
                                                onClick={() => onSeriesClick && onSeriesClick(selectedSeries)}
                                            >
                                                <i className="fas fa-play"></i> Assistir
                                            </button>
                                            <AddToListButton item={selectedSeries} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {selectedSeries.seasons && <SeriesSeasons series={selectedSeries} />}
                    </div>
                ) : (
                    <div className="container">
                        <h1 className="text-3xl font-bold mb-8">Séries</h1>
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                            {seriesList.map((series, index) => (
                                <div 
                                    key={`${series.title}-${index}`}
                                    className="cursor-pointer transition-transform hover:scale-105"
                                    onClick={() => handleSeriesSelect(series)}
                                >
                                    <img 
                                        src={series.poster} 
                                        alt={series.title}
                                        className="rounded-lg w-full"
                                        loading="lazy"
                                    />
                                    <h3 className="mt-2 text-center">{series.title}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

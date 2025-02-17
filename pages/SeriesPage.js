function SeriesPage({ onNavigate }) {
    const [selectedSeries, setSelectedSeries] = React.useState(null);

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
                            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent">
                                <div className="container h-full flex items-end pb-10">
                                    <div>
                                        <h1 className="text-5xl font-bold mb-4">
                                            {selectedSeries.title}
                                        </h1>
                                        <p className="max-w-2xl text-lg mb-4">
                                            {selectedSeries.description}
                                        </p>
                                        <AddToListButton item={selectedSeries} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <SeriesSeasons series={selectedSeries} />
                    </div>
                ) : (
                    <div className="container grid grid-cols-4 gap-6">
                        {Object.values(seriesData).map(series => (
                            <div 
                                key={series.title}
                                className="cursor-pointer hover:scale-105 transition-transform"
                                onClick={() => setSelectedSeries(series)}
                            >
                                <img 
                                    src={series.poster} 
                                    alt={series.title}
                                    className="rounded-lg w-full"
                                />
                                <h3 className="mt-2 text-center">{series.title}</h3>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

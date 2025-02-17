function MyListPage({ onMovieClick }) {
    const [myList, setMyList] = React.useState([]);

    React.useEffect(() => {
        setMyList(getMyList());
    }, []);

    return (
        <div data-name="my-list-page" className="pt-20">
            <div className="container">
                <h1 className="text-3xl font-bold mb-8">Minha Lista</h1>
                {myList.length > 0 ? (
                    <div className="grid grid-cols-4 gap-6">
                        {myList.map(item => (
                            <MovieCard 
                                key={item.id} 
                                movie={item} 
                                onClick={() => onMovieClick(item)}
                            />
                        ))}
                    </div>
                ) : (
                    <p className="text-gray-400 text-center py-12">
                        Sua lista está vazia. Adicione filmes e séries para assistir depois.
                    </p>
                )}
            </div>
        </div>
    );
}

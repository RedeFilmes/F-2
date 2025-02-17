function AddToListButton({ item }) {
    const [isInList, setIsInList] = React.useState(false);

    React.useEffect(() => {
        setIsInList(isInMyList(item.id));
    }, [item.id]);

    const handleToggleList = (e) => {
        try {
            e.stopPropagation();
            if (isInList) {
                removeFromMyList(item.id);
            } else {
                addToMyList(item);
            }
            setIsInList(!isInList);
        } catch (error) {
            reportError(error);
        }
    };

    return (
        <button
            data-name="add-to-list-button"
            onClick={handleToggleList}
            className="bg-zinc-800 hover:bg-zinc-700 text-white p-2 rounded-full relative z-30"
            title={isInList ? "Remover da Minha Lista" : "Adicionar à Minha Lista"}
        >
            <i className={`fas ${isInList ? 'fa-check' : 'fa-plus'}`}></i>
        </button>
    );
}

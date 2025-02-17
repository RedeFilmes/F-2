function getMyList() {
    try {
        const savedList = localStorage.getItem('myList');
        return savedList ? JSON.parse(savedList) : [];
    } catch (error) {
        reportError(error);
        return [];
    }
}

function addToMyList(item) {
    try {
        const currentList = getMyList();
        if (!currentList.some(listItem => listItem.id === item.id)) {
            const newList = [...currentList, item];
            localStorage.setItem('myList', JSON.stringify(newList));
            return true;
        }
        return false;
    } catch (error) {
        reportError(error);
        return false;
    }
}

function removeFromMyList(itemId) {
    try {
        const currentList = getMyList();
        const newList = currentList.filter(item => item.id !== itemId);
        localStorage.setItem('myList', JSON.stringify(newList));
        return true;
    } catch (error) {
        reportError(error);
        return false;
    }
}

function isInMyList(itemId) {
    try {
        const currentList = getMyList();
        return currentList.some(item => item.id === itemId);
    } catch (error) {
        reportError(error);
        return false;
    }
}

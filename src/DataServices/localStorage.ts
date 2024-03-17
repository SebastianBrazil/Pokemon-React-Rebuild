const saveToLocalStorage = (savingData: string) => {
    let savedPoke = getLocalStorage();
    if (!savedPoke.includes(savingData)) {
        savedPoke.push(savingData);
    }
    localStorage.setItem("Pokemon", JSON.stringify(savedPoke));
};

const getLocalStorage = () => {
    let localStorageData = localStorage.getItem("Pokemon");
    if (localStorageData === null) {
        return [];
    };
    return JSON.parse(localStorageData);
};

const removeFromLocalStorage = (savingData: string) => {
    let savedPoke = getLocalStorage();
    let removePoke = savedPoke.indexOf(savingData);
    savedPoke.splice(removePoke, 1);
    localStorage.setItem("Pokemon", JSON.stringify(savedPoke));
};

export { saveToLocalStorage, getLocalStorage, removeFromLocalStorage };
const saveToLocalStorage = (savingData: []) => {
    let savedBudget = getLocalStorage();
    if (!savedBudget.includes(savingData)) {
        savedBudget.push(savingData);
    }
    localStorage.setItem("localBudget", JSON.stringify(savedBudget));
};

const getLocalStorage = () => {
    let localStorageData = localStorage.getItem("pokemon");
    if (localStorageData === null) {
        return [];
    };
    return JSON.parse(localStorageData);
};

const removeFromLocalStorage = (savingData: []) => {
    let savedBudget = getLocalStorage();
    let removeExpense = savedBudget.indexOf(savingData);
    savedBudget.splice(removeExpense, 1);
    localStorage.setItem("localBudget", JSON.stringify(savedBudget));
};

export { saveToLocalStorage, getLocalStorage, removeFromLocalStorage };
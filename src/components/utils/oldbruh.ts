import React, { useEffect, useState } from 'react'

// const [searchInput, setSearchInput] = useState<string>('');
// const [isFlipped, setIsFlipped] = useState<boolean>(false);
// const [mainData, setMainData] = useState();

// useEffect(()=>{
//     const getPokeStuff = async () => {
//         const fetchedData = await getLocalStorage(searchInput);
//         setMainData(fetchedData);
//     }
//     adviceData();
// }, [isFlipped])

function getLocalStorage<localStoredPoke>(key: string): localStoredPoke | null {
    const getPoke = localStorage.getItem(key);
    return getPoke ? JSON.parse(getPoke) as localStoredPoke : null;
}
// getLocalStorage('Pokemon');

function setItem<localStoredPoke>(key: string, value: localStoredPoke): void {
    localStorage.setItem(key, JSON.stringify(value));
}
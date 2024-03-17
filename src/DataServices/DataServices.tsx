export const callFetchPoke = async (input: string) => {
    let data;
    try {
        const promise = await fetch(`https://pokeapi.co/api/v2/pokemon/${input}`);
        data = await promise.json();
    } catch {
        data = "Not Found";
    }
    return data;
}

export const fastCallFetchPoke = async (input: string) => {
    const promise = await fetch(`https://pokeapi.co/api/v2/pokemon/${input}`);
    const data = await promise.json();
    return data;
}

export const grabAPI = async (topData: string) => {
    const promise = await fetch(`${topData}`);
    const data = await promise.json();
    return data;
}
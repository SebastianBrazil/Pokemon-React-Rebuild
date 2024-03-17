import { pokeInterface, pokeLocationArr } from "../interfaces/interfaces";

export const callFetchPoke = async (input: string) => {
    try {
        const promise = await fetch(`https://pokeapi.co/api/v2/pokemon/${input}`);
        const data: pokeInterface = await promise.json();

        if (data.id < 650) {
            return data;
        } else {
            // return data;
        }
    } catch {

    }
}

export const grabAPI = async (topData: string) => {
    const promise = await fetch(`${topData}`);
    const data = await promise.json();
    return data;
}
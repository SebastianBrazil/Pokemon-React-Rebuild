import { pokeInterface } from "../interfaces/interfaces";

export const callFetchPoke = async (input: string) => {
    const promise = await fetch(`https://pokeapi.co/api/v2/pokemon/${input}`);
    const data: pokeInterface = await promise.json();
    return data;

    // try {
    //     const promise = await fetch(`https://pokeapi.co/api/v2/pokemon/${input}`);
    //     const data: pokeInterface = await promise.json();
    //     return data;
    // } catch {
    //     console.log("bruh")
    // };
}

export const grabAPI = async (topData: string) => {
    const promise = await fetch(`${topData}`);
    const data = await promise.json();
    return data;
}

// export const popLocateDrillOne = async (topData: string) => {
//     const promise = await fetch(`${topData}`);
//     const data = await promise.json();
//     return data;
// }
// export const popLocate = async (topData: string) => {
//     const promise = await fetch(`${topData}`);
//     const data = await promise.json();
//     return data;
// }
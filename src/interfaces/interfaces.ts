// export interface localStoredPoke {
// pokemon: string[]
// }

export interface pokeInterface {
    abilities: [],
    types: [],
    moves: [],
    name: string,
    id: number,
    sprites: {
        other: {
            ["official-artwork"]: {
                front_default: string,
                front_shiny: string
            }
        }
    },
    species: {
        url: string;
    },
    location_area_encounters: string
}

export interface pokeLocationArr {
    [0]: {
        location_area: {
            name: string
            url: string
        },
        version_details: {
            [0]: {
                version: {
                    name: string
                }
            }
        }
    }
}



export interface pokePropsMove {
    moves: innerPokePropsMove[]
}

interface innerPokePropsMove {
    move: {
        name: string
    }
}

export interface pokePropsType {
    types: innerPokePropsType[]
}

interface innerPokePropsType {
    type: {
        name: string
    }
}

export interface pokePropsAbilities {
    abilities: innerPokePropsAbilities[]
}

interface innerPokePropsAbilities {
    ability: {
        name: string;
    }
}

export interface pokePropsF {
    normalFront: string
}

export interface pokePropsS {
    shinyFront: string
}

export interface pokePropsN {
    name: string
}

export interface pokePropsI {
    id: number
}

export interface pokePropsLNS {
    location: string,
}

export interface pokePropsE {
    species: {
        url: string
    }
}

export interface innerPokePropsE {
    url: string
}
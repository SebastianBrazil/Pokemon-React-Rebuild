import React from 'react'
import { pokePropsF } from '../../interfaces/interfaces'

const NormalPokeImgComponent = (props: pokePropsF) => {
    return (
        <img className="w-44 sm:w-52 -my-3" src={props.normalFront} alt="Normal Pokemon" />
    )
}

export default NormalPokeImgComponent

import React from 'react'
import { pokePropsS } from '../../interfaces/interfaces'

const NormalPokeImgComponent = (props: pokePropsS) => {
    return (
        <img className="w-44 sm:w-52 -my-3" src={props.shinyFront} alt="Shiny Pokemon" />
    )
}

export default NormalPokeImgComponent

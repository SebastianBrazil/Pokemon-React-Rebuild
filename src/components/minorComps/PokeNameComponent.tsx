import React from 'react'
import { pokePropsN } from '../../interfaces/interfaces'

const PokeNameComponent = (props: pokePropsN) => {
    return (
        <p className="text-4xl sm:text-5xl kotta text-center">{props.name[0].toUpperCase() + props.name.substring(1)}</p>
    )
}

export default PokeNameComponent

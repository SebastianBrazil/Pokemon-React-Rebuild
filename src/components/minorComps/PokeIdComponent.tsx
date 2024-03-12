import React from 'react'
import { pokePropsI } from '../../interfaces/interfaces'

const PokeNameComponent = (props: pokePropsI) => {
    return (
        <p className="text-center text-lg sm:text-2xl kotta pt-3 pb-5 lg:pb-0">ID: #{props.id}</p>
    )
}

export default PokeNameComponent

import React, { useEffect, useState } from 'react'
import { innerPokePropsType, pokePropsType } from '../../interfaces/interfaces';

const TypesComponent = (props: pokePropsType) => {
    const [returnType, setReturnType] = useState<string>();

    const getTypes = () => {
        let fill: string = "";
        for (let i = 0; i < props.types.length; i++) {
            switch (i) {
                case 0:
                    fill = ("Type: " + props.types[0].type.name[0].toUpperCase() + props.types[0].type.name.substring(1));
                    break;
                default:
                    fill = (fill + ", " + props.types[i].type.name[0].toUpperCase() + props.types[i].type.name.substring(1));
                    break;
            };
        };
        return fill;
    }

    useEffect(() => {
        setReturnType(getTypes());
    }, [props])

    return (
        <>
            {
                returnType && <p id="eleType" className="text-xl sm:text-2xl kotta sm:h-20 h-16 mt-5 overflow-y-auto">{returnType}</p>
            }
        </>
    )
}

export default TypesComponent

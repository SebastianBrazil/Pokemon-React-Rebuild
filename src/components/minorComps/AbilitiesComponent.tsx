import React, { useEffect, useState } from 'react'
import { pokePropsAbilities } from '../../interfaces/interfaces'

const AbilitiesComponent = (props: pokePropsAbilities) => {
    const [returnAbility, setReturnAbility] = useState<string>();

    const getAbilities = () => {
        let fill: string = "";
        for (let i = 0; i < props.abilities.length; i++) {
            switch (i) {
                case 0:
                    fill = "Abilities: " + props.abilities[i].ability.name[0].toUpperCase() + props.abilities[i].ability.name.substring(1);
                    break;
                default:
                    fill = (fill + ", " + props.abilities[i].ability.name[0].toUpperCase() + props.abilities[i].ability.name.substring(1));
                    break;
            };
        };
        return fill;
    }

    useEffect(() => {
        setReturnAbility(getAbilities());
    }, [props])

    return (
        <>
            {
                returnAbility && <p className="text-xl sm:text-2xl kotta h-16 sm:h-20 overflow-y-auto">{returnAbility}</p>
            }
        </>
    )
}

export default AbilitiesComponent

import React, { useEffect, useState } from 'react'
import { pokePropsE } from '../../interfaces/interfaces'
import { grabAPI } from '../../DataServices/DataServices';

const EvolutionComponent = (props: pokePropsE) => {
    const [returnEvol, setReturnEvol] = useState<string>();

    let returnString: string;

    const getEvol = (props: pokePropsE) => {
        try {
            const popEvol = async () => {
                const dataOne = await grabAPI(`${props.species.url}`);
                const dataTwo = await grabAPI(`${dataOne.evolution_chain.url}`);

                try {
                    const dataValy1 = await grabAPI(`${dataTwo.chain.evolves_to[0].species.url}`);

                    if (dataValy1.id < 650) {
                        returnString = ("Evolution: " + dataTwo.chain.species.name[0].toUpperCase() + dataTwo.chain.species.name.substring(1));

                        for (let i = 0; i < dataTwo.chain.evolves_to.length; i++) {
                            switch (i) {
                                case 0:
                                    setReturnEvol(returnString + " to " + dataTwo.chain.evolves_to[0].species.name[0].toUpperCase() + dataTwo.chain.evolves_to[0].species.name.substring(1));
                                    returnString = (returnString + " to " + dataTwo.chain.evolves_to[0].species.name[0].toUpperCase() + dataTwo.chain.evolves_to[0].species.name.substring(1));
                                    try {
                                        for (let j = 0; j < dataTwo.chain.evolves_to[0].evolves_to.length; j++) {
                                            switch (j) {
                                                case 0:
                                                    const dataValyInner1 = await grabAPI(`${dataTwo.chain.evolves_to[0].evolves_to[0].species.url}`);
                                                    if (dataValyInner1.id < 650) {
                                                        setReturnEvol(returnString + " to " + dataTwo.chain.evolves_to[0].evolves_to[0].species.name[0].toUpperCase() + dataTwo.chain.evolves_to[0].evolves_to[0].species.name.substring(1));
                                                    };
                                                    break;
                                                default:
                                                    const dataValyInner2 = await grabAPI(`${dataTwo.chain.evolves_to[0].evolves_to[j].species.url}`);
                                                    if (dataValyInner2.id < 650) {
                                                        setReturnEvol(returnString + "; " + dataTwo.chain.evolves_to[0].species.name[0].toUpperCase() + dataTwo.chain.evolves_to[0].species.name.substring(1) + " to " + dataTwo.chain.evolves_to[0].evolves_to[j].species.name[0].toUpperCase() + dataTwo.chain.evolves_to[0].evolves_to[j].species.name.substring(1));
                                                    };
                                                    break;
                                            };
                                        };
                                    }catch{
                                        break;
                                    }
                                    break;
                                default:
                                    const dataValy2 = await grabAPI(`${dataTwo.chain.evolves_to[i].species.url}`);
                                    if (dataValy2.id < 650) {
                                        setReturnEvol(returnString + "; " + dataTwo.chain.species.name[0].toUpperCase() + dataTwo.chain.species.name.substring(1) + " to " + dataTwo.chain.evolves_to[i].species.name[0].toUpperCase() + dataTwo.chain.evolves_to[i].species.name.substring(1));
                                        returnString = (returnString + "; " + dataTwo.chain.species.name[0].toUpperCase() + dataTwo.chain.species.name.substring(1) + " to " + dataTwo.chain.evolves_to[i].species.name[0].toUpperCase() + dataTwo.chain.evolves_to[i].species.name.substring(1));
                                        if (dataTwo?.chain?.evolves_to[i]?.evolves_to[0]?.species?.name !== undefined) {
                                            for (let j = 0; j < dataTwo.chain.evolves_to[i].evolves_to.length; j++) {
                                                switch (j) {
                                                    case 0:
                                                        const dataValyInner3 = await grabAPI(`${dataTwo.chain.evolves_to[i].evolves_to[0].species.url}`);
                                                        if (dataValyInner3.id < 650) {
                                                            setReturnEvol(returnString + " to " + dataTwo.chain.evolves_to[i].evolves_to[0].species.name[0].toUpperCase() + dataTwo.chain.evolves_to[i].evolves_to[0].species.name.substring(1));
                                                        };
                                                        break;
                                                    default:
                                                        const dataValyInner4 = await grabAPI(`${dataTwo.chain.evolves_to[i].evolves_to[j].species.url}`);
                                                        if (dataValyInner4.id < 650) {
                                                            setReturnEvol(returnString + "; " + dataTwo.chain.evolves_to[i].species.name[0].toUpperCase() + dataTwo.chain.evolves_to[i].species.name.substring(1) + " to " + dataTwo.chain.evolves_to[i].evolves_to[j].species.name[0].toUpperCase() + dataTwo.chain.evolves_to[i].evolves_to[j].species.name.substring(1));
                                                        };
                                                        break;
                                                };
                                            };
                                        };
                                    };
                                    break;
                            };
                        };
                    } else {
                        setReturnEvol("Evolution: N/A");
                    };
                } catch {
                    setReturnEvol("Evolution: N/A")
                };
            };
            popEvol();
        }catch{
            setReturnEvol("Evolution: N/A");
        }
    }

    useEffect(() => {
        getEvol(props);
    }, [props])


    return (
        <>
            {
                // <p className="text-xl sm:text-2xl kotta h-16 sm:h-20 mb-4 sm:mb-8 overflow-y-auto">{}</p>
                <p className="text-xl sm:text-2xl kotta h-16 sm:h-20 mb-4 sm:mb-8 overflow-y-auto">{returnEvol}</p>
            }
        </>
    )
}

export default EvolutionComponent

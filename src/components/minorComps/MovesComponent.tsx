import React, { useEffect, useState } from 'react'
import { pokePropsMove } from '../../interfaces/interfaces';

const MovesComponent = (props: pokePropsMove) => {
    const [returnMove, setReturnMove] = useState<string>();

    const getAbilities = () => {
        let fill: string = "";
        for (let i = 0; i < props.moves.length; i++) {
            switch (i) {
                case 0:
                    let allCapsMove = props.moves[i].move.name.split("-");
                    for (let j = 0; j < allCapsMove.length; j++) {
                        allCapsMove[j] = allCapsMove[j][0].toUpperCase() + allCapsMove[j].substring(1);
                    }
                    fill = "Moves: " + allCapsMove.join("-");
                    break;
                default:
                    let allCapsMoveFollow = props.moves[i].move.name.split("-");
                    for (let j = 0; j < allCapsMoveFollow.length; j++) {
                        allCapsMoveFollow[j] = allCapsMoveFollow[j][0].toUpperCase() + allCapsMoveFollow[j].substring(1);
                    }
                    fill = (fill + ", " + allCapsMoveFollow.join("-"));
                    break;
            };
        };
        return fill;
    }

    useEffect(() => {
        setReturnMove(getAbilities());
    }, [props])





    return (
        <>
            {
                returnMove && <p className="h-52 mb-10 sm:mb-14 lg:mb-20 text-xl sm:text-2xl kotta overflow-y-auto">{returnMove}</p>
            }
        </>
    )
}

export default MovesComponent

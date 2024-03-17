import React, { useEffect, useState } from 'react'
import heart from "../../assets/heart.png";
import { getLocalStorage } from '../../DataServices/localStorage';
import { checkIfOpen } from '../../interfaces/interfaces';
import { fastCallFetchPoke } from '../../DataServices/DataServices';

const PopupComponent = (props: checkIfOpen) => {
    const [list, setList] = useState<[]>();
    const [sentence, setSentence] = useState<string>();

    useEffect(() => {
        if (props.notFound !== "Available") {
            setList(undefined)
            setSentence(props.notFound)
        } else {
            if (props.check === true) {
                setSentence("Available");
                setList(getLocalStorage());
            } else {
                setSentence("Available");
                setList(undefined);
            }
        }
    }, [props])

    return (
        <>
            {
                (sentence !== "Available" || list) && < div className="absolute 2xl:movePls1 sm:movePls2 movePls3 lg:movePls4" >
                    <div className="hidee ml-6 sm:ml-8 mx-2 favoritesColor w-56 sm:w-80 rounded-2xl sm:rounded-3xl border border-black">
                        {
                            list && list.map((pokeName, index) => {
                                return <div key={index} onClick={() => {
                                     props.returnValue(pokeName);
                                     props.returnEffect(!props.effect);
                                     }} className="flex justify-start ml-5 mt-3 mb-3">
                                    <p className="text-left sm:text-2xl kotta">{pokeName}</p>
                                    <img className="w-8 h-8 ml-3" src={heart} alt="Favorite Heart Inside Favorite List" />
                                </div>
                            })
                        }

                        {
                            sentence !== "Available" &&
                            <div className="flex justify-start ml-5 mt-3 mb-3">
                                <p className="text-left sm:text-2xl kotta">{sentence}</p>
                            </div>
                        }
                    </div>
                </div >
            }
        </>
    )
}

export default PopupComponent

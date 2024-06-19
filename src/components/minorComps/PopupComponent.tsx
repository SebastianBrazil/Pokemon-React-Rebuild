import React, { useEffect, useState } from 'react'
import heart from "../../assets/heart.png";
import { getLocalStorage } from '../../DataServices/localStorage';
import { checkIfOpen } from '../../interfaces/interfaces';
// import { fastCallFetchPoke } from '../../DataServices/DataServices';

const PopupComponent = (props: checkIfOpen) => {
    const [list, setList] = useState<[]>([]);
    const [sentence, setSentence] = useState<string>();

    useEffect(() => {
        if (props.notFound !== "Available") {
            setList([])
            setSentence(props.notFound)
        } else {
            if (props.check === true) {
                setSentence("Available");
                setList(getLocalStorage());
            } else {
                setSentence("Available");
                setList([]);
            }
        }
    }, [props])

    return (
        <>
            {
                (sentence !== "Available" || list.length > 0 ) && < div className="absolute 2xl:movePls1 sm:movePls2 movePls3 lg:movePls4" >
                    <div className="hidee ml-6 sm:ml-8 mx-2 favoritesColor max-h-[200px] hideScrollBar overflow-auto example w-56 sm:w-80 rounded-2xl sm:rounded-3xl border border-black">
                        {
                            list && list.map((pokeName: string, index: number) => {
                                return <div key={index} onClick={() => {
                                     props.returnValue(pokeName);
                                     props.returnEffect(!props.effect);
                                     }} className="flex justify-start ml-5 mt-3 mb-3">
                                    <p className="text-left sm:text-2xl kotta">{pokeName[0].toUpperCase() + pokeName.substring(1)}</p>
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

import React, { useEffect, useState } from 'react'
import { pokeLocationArr, pokePropsLNS } from '../../interfaces/interfaces'
import { grabAPI } from '../../DataServices/DataServices';

const LocComponent = (props: pokePropsLNS) => {
    const [saveData, setSaveData] = useState<string>();

    const pleaseDontBreak = (topData: pokePropsLNS) => {
        let globalLocData: pokeLocationArr;
        let getLocURL: string;
        let drilledLocOne: string;

        const getLocationData = async () => {
            const locationData = await grabAPI(topData.location);
            if (locationData.length !== 0) {
                globalLocData = await locationData;
                getLocURL = await locationData[0].location_area.url;
                const dOne = await grabAPI(getLocURL);
                drilledLocOne = await dOne.location.url;

                const dTwo = await grabAPI(drilledLocOne);
                if (dTwo.id < 567) {
                    const locationName = globalLocData[0].location_area.name.split("-");
                    for (let i = 0; i < locationName.length; i++) {
                        locationName[i] = locationName[i][0].toUpperCase() + locationName[i].substring(1);
                    }
                    setSaveData("Location: " + locationName.join(" ") + ", Pokemon " + globalLocData[0].version_details[0].version.name[0].toUpperCase() + globalLocData[0].version_details[0].version.name.substring(1));
                } else {
                    setSaveData("Location: N/A");
                }
            } else {
                setSaveData("Location: N/A");
            }
        }
        getLocationData();
    }

    useEffect(() => {
        pleaseDontBreak(props);
    }, [props])

    return (
        <>
            {
                saveData && <p className="mx-10 sm:mx-0 mt-5 mb-10 text-center text-xl sm:text-3xl kotta">{saveData}</p>
            }
        </>
    )
}

export default LocComponent

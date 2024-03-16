import React, { useEffect, useState } from 'react'
import { pokePropsB } from '../../interfaces/interfaces'
import { grabAPI } from '../../DataServices/DataServices';

const LocPopComponent = (props: pokePropsB) => {
    const [popLoc, setPopLoc] = useState<string>();

    useEffect(() => {
        if (props.bool === true && props.passed !== "Error") {
            const getLocationDataAgain = async () => {
                const locationData = await grabAPI(props.passed);
                const locationName = locationData[0].location_area.name.split("-");
                for (let i = 0; i < locationName.length; i++) {
                    locationName[i] = locationName[i][0].toUpperCase() + locationName[i].substring(1);
                }
                setPopLoc("Location: " + locationName.join(" ") + ", Pokemon " + locationData[0].version_details[0].version.name[0].toUpperCase() + locationData[0].version_details[0].version.name.substring(1));
            }
            getLocationDataAgain();
        } else {
            setPopLoc("Location: N/A")
        }
    }, [props])

    return (
        <>
            {
                <p className="mx-10 sm:mx-0 mt-5 mb-10 text-center text-xl sm:text-3xl kotta">{popLoc}</p>
            }
        </>
    )
}

export default LocPopComponent

import React, { useEffect, useState } from 'react'
import { pokePropsL } from '../../interfaces/interfaces'
import { grabAPI } from '../../DataServices/DataServices';
import LocDrillOneComponent from './LocDrillOneComponent';

const LocComponent = (props: pokePropsL) => {

    const [saveLocation, setSaveLocation] = useState<string>();

    useEffect(() => {
        const getLocationData = async () => {
            const locationData = await grabAPI(props.location);
            if (locationData.length !== 0) {
                setSaveLocation(locationData[0].location_area.url);
            }else{
                setSaveLocation("Location: N/A");
            }
        }
        getLocationData();
    }, [props])

    // if (saveLocation[0].location_area.name !== "Empty") {
    //     const callLocDrill = async () => {
    //         // const drilledOne = await grabAPI(`${saveLocation[0].location_area.url}`);
    //         setDrilledLocOne(await grabAPI(`${saveLocation[0].location_area.url}`));
    //         setDrilledLocTwo(await grabAPI(`${drilledLocOne.location.url}`));
    //     }
    //     callLocDrill();

    //     // const callLocDrillTwo = async() => {
    //     //     // const drilledOne = await grabAPI(`${saveLocation[0].location_area.url}`);
    //     //     setDrilledLocTwo(await grabAPI(`${drilledLocOne[0].location.url}`));
    //     // }
    //     // callLocDrillTwo();

    //     if (drilledLocTwo.id < 567) {
    //         let locationName = saveLocation[0].location_area.name.split("-");
    //         for (let i = 0; i < locationName.length; i++) {
    //             locationName[i] = locationName[i][0].toUpperCase() + locationName[i].substring(1);
    //         }
    //         setLocation("Location: " + locationName.join(" ") + ", Pokemon " + saveLocation[0].version_details[0].version.name[0].toUpperCase() + saveLocation[0].version_details[0].version.name.substring(1));
    //     } else {
    //         setLocation("Location: N/A");
    //     }
    // } else {
    //     setLocation("Location: N/A");
    // };

    // }, [])

    return (
        <>
            {
                saveLocation && <LocDrillOneComponent location={saveLocation} />
            }
        </>
    )
}

export default LocComponent

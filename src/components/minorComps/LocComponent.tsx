import React, { useEffect, useState } from 'react'
import { pokePropsLNS } from '../../interfaces/interfaces'
import { grabAPI } from '../../DataServices/DataServices';
import LocDrillOneComponent from './LocDrillOneComponent';

const LocComponent = (props: pokePropsLNS) => {

    const [saveLocation, setSaveLocation] = useState<string>();
    const [savePass, setSavePass] = useState<string>();

    useEffect(() => {
        try {
            const getLocationData = async () => {
                const locationData = await grabAPI(props.location);
                if (locationData.length > 0) {
                    setSaveLocation(locationData[0].location_area.url);
                    setSavePass(props.location);
                } else {
                    setSaveLocation("Error");
                    setSavePass("Error");
                }
            }
            getLocationData();
        } catch { 
            setSaveLocation("Error");
            setSavePass("Error");
        }
    }, [props])

    return (
        <>
            {
                saveLocation && savePass && <LocDrillOneComponent location={saveLocation} passed={savePass} />
            }
        </>
    )
}

export default LocComponent

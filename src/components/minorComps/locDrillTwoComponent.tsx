import React, { useEffect, useState } from 'react'
import { pokePropsL } from '../../interfaces/interfaces';
import { grabAPI } from '../../DataServices/DataServices';
import LocPopComponent from './LocPopComponent';

const LocDrillTwoComponent = (props: pokePropsL) => {
    const [locationVer, setLocationVer] = useState<boolean>();

    useEffect(() => {
        try {
            const drillLocateDataTwo = async () => {
                const locationData = await grabAPI(props.location);
                if (locationData.id !== undefined && locationData.id < 567) {
                    setLocationVer(true);
                } else {
                    setLocationVer(false);
                }
            }
            drillLocateDataTwo();
        } catch {
            setLocationVer(false);
        }
    }, [props])


    return (
        <>
            {
                locationVer && <LocPopComponent bool={locationVer} passed={props.passed} />
            }
        </>
    )
}

export default LocDrillTwoComponent

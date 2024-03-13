import React, { useEffect, useState } from 'react'
import { pokePropsL } from '../../interfaces/interfaces';
import { grabAPI } from '../../DataServices/DataServices';

const LocDrillTwoComponent = (props: pokePropsL) => {
    const [location, setLocation] = useState<string>("Loading...");

    useEffect(() => {
        const drillLocateDataTwo = async () => {
            const locationData = await grabAPI(props.location);
            if (locationData.id < 567) {
                setLocation(locationData.id);
            }else{
                setLocation("Location: N/A");
            }
        }
        drillLocateDataTwo();
    }, [props])


    return (
        <>
            <p className="mx-10 sm:mx-0 mt-5 mb-10 text-center text-xl sm:text-3xl kotta">{location}</p>
        </>
    )
}

export default LocDrillTwoComponent

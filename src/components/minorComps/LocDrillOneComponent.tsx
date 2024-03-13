import React, { useEffect, useState } from 'react'
import { pokePropsL } from '../../interfaces/interfaces'
import { grabAPI } from '../../DataServices/DataServices'
import LocDrillTwoComponent from './locDrillTwoComponent';

const LocDrillOneComponent = (props: pokePropsL) => {
    const [drilledLocOne, setDrilledLocOne] = useState<string>();

    useEffect(() => {
        const drillLocateData = async () => {
            const locationData = await grabAPI(props.location);
            setDrilledLocOne(locationData.location.url)
        }
        drillLocateData();
    }, [props])

    return (
        <>
            {
                drilledLocOne && <LocDrillTwoComponent location={drilledLocOne} />
            }
        </>
    )
}

export default LocDrillOneComponent

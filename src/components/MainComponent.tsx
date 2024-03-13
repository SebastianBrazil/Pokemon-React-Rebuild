import React, { useEffect, useState } from 'react'
import blueC from "../assets/blueC.png";
import blackC from "../assets/blackC.png";
import dine from "../assets/dine.png";
import glass from "../assets/glass.png";
import greenC from "../assets/greenC.png";
import greyC from "../assets/greyC.png";
import heart from "../assets/heart.png";
import heartOut from "../assets/heartOut.png";
import plus from "../assets/plus.png";
import redC from "../assets/redC.png";
import yellowC from "../assets/yellowC.png";
import { drilledOneLoc, drilledTwoLoc, pokeInterface, pokeLocationArr } from '../interfaces/interfaces';
import { callFetchPoke, grabAPI } from '../DataServices/DataServices';
import NormalPokeImgComponent from './minorComps/NormalPokeImgComponent';
import ShinyPokeImgComponent from './minorComps/ShinyPokeImgComponent';
import PokeNameComponent from './minorComps/PokeNameComponent';
import PokeIdComponent from './minorComps/PokeIdComponent';

const MainComponent = () => {

    const pokeInterfaceHolder: pokeInterface = {
        abilities: [],
        types: [],
        moves: [],
        name: "Loading...",
        id: 0,
        sprites: {
            other: {
                ["official-artwork"]: {
                    front_default: "Loading...",
                    front_shiny: "Loading..."
                }
            }
        },
        species: {},
        location_area_encounters: "Loading..."
    }

    const pokeLocationArrHolder: pokeLocationArr = {
        [0]: {
            location_area: {
                name: "Empty",
                url: "Empty"
            },
            version_details: {
                [0]: {
                    version: {
                        name: "Empty"
                    }
                }
            }
        }
    }

    const drilledOneLocHolder: drilledOneLoc = {
        location: {
            url: "Empty"
        }
    }

    const drilledTwoLocHolder: drilledTwoLoc = {
        id: 0
    }

    const [isFlipped, setIsFlipped] = useState<boolean>(false);
    const [input, setInput] = useState<string>("bulbasaur");
    const [location, setLocation] = useState<string>("Loading...");

    const [data, setData] = useState<pokeInterface>(pokeInterfaceHolder);
    const [saveLocation, setSaveLocation] = useState<pokeLocationArr>(pokeLocationArrHolder);

    const [drilledLocOne, setDrilledLocOne] = useState<drilledOneLoc>(drilledOneLocHolder);
    const [drilledLocTwo, setDrilledLocTwo] = useState<drilledTwoLoc>(drilledTwoLocHolder);

    function callSearch() {
        if (input.toLowerCase() !== "") {
            setIsFlipped(!isFlipped);
        }
    }

    useEffect(() => {
        const getData = async () => {
            const pokeData = await callFetchPoke(input.toLowerCase());
            setData(pokeData);
        }
        getData();

        console.log(data)

        if (data.id > 649) {
            console.log("hey");
        } else {
            const getLocationData = async () => {
                const locationData = await grabAPI(data.location_area_encounters);
                setSaveLocation(locationData);
            }
            getLocationData();

            console.log(saveLocation)
            // if (saveLocation[0].location_area.name !== "Empty") {
            //     const callLocDrill = async() => {
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
        }
    }, [isFlipped])

    return (
        <div>
            <div>
                <div className="flex justify-center">
                    <img src={blackC} className="w-7 sm:w-14 py-5" alt="Black Dot" />
                </div>

                <div className="invisible 2xl:visible absolute left-44 top-72">
                    <img src={blackC} className="w-14" alt="Black Dot" />
                </div>
                <div className="invisible 2xl:visible absolute right-44 top-72">
                    <img src={blackC} className="w-14" alt="Black Dot" />
                </div>

                <div className="invisible 2xl:visible absolute right-28 bottom-64">
                    <img src={redC} className="w-14" alt="Red Dot" />
                </div>
                <div className="invisible 2xl:visible absolute right-44 bottom-80">
                    <img src={blueC} className="w-14" alt="Blue Dot" />
                </div>
                <div className="invisible 2xl:visible absolute right-60 bottom-64">
                    <img src={greenC} className="w-14" alt="Green Dot" />
                </div>
                <div className="invisible 2xl:visible absolute right-44 bottom-48">
                    <img src={yellowC} className="w-14" alt="Yellow Dot" />
                </div>

                <div className="invisible 2xl:visible absolute left-36 bottom-72">
                    <img src={greyC} className="w-32" alt="Grey Dot" />
                </div>
                <div className="invisible 2xl:visible absolute left-36 bottom-24">
                    <img src={plus} className="w-32" alt="Grey Plus" />
                </div>
            </div>

            <div className="flex justify-center">
                <div className="bgColor mb-12 lg:mb-16 w-11/12 lg:w-3/5">
                    <div className="pt-8 flex justify-center">
                        <PokeNameComponent name={data.name} />
                        <img id="favBtn" className="w-9 h-9 sm:w-12 sm:h-12 ml-5" src={heartOut} alt="Favorite Button" />
                    </div>
                    <PokeIdComponent id={data.id} />

                    <div className="grid lg:flex justify-evenly">
                        <div className="grid grid-cols-1">
                            <p className="text-center text-xl lg:text-3xl kotta">Normal</p>
                            <NormalPokeImgComponent normalFront={data.sprites.other["official-artwork"].front_default} />
                        </div>

                        <div className="grid grid-cols-1">
                            <p className="text-center text-xl lg:text-3xl kotta">Shiny</p>
                            <ShinyPokeImgComponent shinyFront={data.sprites.other["official-artwork"].front_shiny} />
                        </div>
                    </div>

                    <p className="mx-10 sm:mx-0 mt-5 mb-10 text-center text-xl sm:text-3xl kotta">{location}</p>
                </div>
            </div>

            <div className="flex justify-center mb-7">
                <div className="bgColor w-11/12 lg:w-3/5">
                    <div className="pt-8 flex justify-center">
                        <button id="randomPoke" className="randColor w-12 h-12 sm:w-16 sm:h-16 rounded-2xl sm:rounded-3xl flex justify-center items-center border border-black"><img className="sm:w-11 sm:h-11 w-9 h-9" src={dine} alt="Randomize Button" /> </button>
                        <input value={input} onChange={(e) => setInput(e.target.value)} className="searchColor w-56 h-12 sm:w-80 sm:h-16 mx-2 rounded-2xl sm:rounded-3xl border border-black sm:text-2xl kotta pl-3" type="text" placeholder="Search Name Or ID: " />
                        <img onClick={callSearch} className="sm:w-10 sm:h-10 w-8 h-8 mt-2 sm:mt-3" src={glass} alt="search btn" />
                    </div>

                    <div className="absolute 2xl:movePls1 sm:movePls2 movePls3 lg:movePls4">
                        <div id="openFav" className="hidee ml-6 sm:ml-8 mx-2 favoritesColor w-56 sm:w-80 rounded-2xl sm:rounded-3xl border border-black">
                            <div className="flex justify-start ml-5 mt-3 mb-3">
                                <p className="text-left sm:text-2xl kotta">Bulbasaur</p>
                                <img className="w-8 h-8 ml-3" src={heart} alt="Favorite Heart Inside Favorite List" />
                            </div>
                        </div>
                    </div>

                    <div className="grid justify-evenly lg:grid-cols-2 mt-8">
                        <div className="mx-8 sm:mx-36 lg:mx-0 lg:ml-32 lg:pr-5">
                            <p id="eleType" className="text-xl sm:text-2xl kotta sm:h-20 h-16 mt-5 overflow-y-auto">element type</p>
                            <p id="abilities" className="text-xl sm:text-2xl kotta h-16 sm:h-20 overflow-y-auto">all abilities</p>
                            <p id="evol" className="text-xl sm:text-2xl kotta h-16 sm:h-20 mb-4 sm:mb-8 overflow-y-auto">all evolution paths</p>
                        </div>
                        <div className="mx-8 sm:mx-36 lg:mx-0 lg:mr-32">
                            <p className="h-52 mb-10 sm:mb-14 lg:mb-20 text-xl sm:text-2xl kotta overflow-y-auto" id="movesPoke">all moves</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainComponent

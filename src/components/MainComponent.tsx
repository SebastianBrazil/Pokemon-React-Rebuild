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
import { pokeInterface } from '../interfaces/interfaces';
import { callFetchPoke } from '../DataServices/DataServices';
import NormalPokeImgComponent from './minorComps/NormalPokeImgComponent';
import ShinyPokeImgComponent from './minorComps/ShinyPokeImgComponent';
import PokeNameComponent from './minorComps/PokeNameComponent';
import PokeIdComponent from './minorComps/PokeIdComponent';
import LocComponent from './minorComps/LocComponent';
import TypesComponent from './minorComps/TypesComponent';
import AbilitiesComponent from './minorComps/AbilitiesComponent';
import MovesComponent from './minorComps/MovesComponent';
import EvolutionComponent from './minorComps/EvolutionComponent';

const MainComponent = () => {
    const [isFlipped, setIsFlipped] = useState<boolean>(false);
    const [input, setInput] = useState<string>("bulbasaur");

    const [data, setData] = useState<pokeInterface>();

    function callSearch() {
        if (input.toLowerCase() !== "") {
            setIsFlipped(!isFlipped);
        }
    }

    function randomCallSearch() {
        let numby = 1 + Math.floor(Math.random() * 649)
        let stringy = numby as unknown as string;
        setInput(stringy);
        setIsFlipped(!isFlipped);
    }

    const getData = () => {
        const innerGetData = async () => {
            const pokeData = await callFetchPoke(input);
            setData(pokeData);
        }
        innerGetData();
    }

    useEffect(() => {
        getData();
        setInput("");
        setData(undefined);
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

            <div className="flex justify-center h-[608px] sm:h-[664px] lg:h-[440px]">
                <div className="bgColor w-11/12 lg:w-3/5">
                    <div className="pt-8 flex justify-center">
                        {
                            data && <PokeNameComponent name={data.name} />
                        }
                        <img id="favBtn" className="w-9 h-9 sm:w-12 sm:h-12 ml-5" src={heartOut} alt="Favorite Button" />
                    </div>
                    {
                        data && <PokeIdComponent id={data.id} />
                    }

                    <div className="grid lg:flex justify-evenly">
                        <div className="grid grid-cols-1">
                            <p className="text-center text-xl lg:text-3xl kotta">Normal</p>
                            {
                                data && <NormalPokeImgComponent normalFront={data.sprites.other["official-artwork"].front_default} />
                            }
                        </div>

                        <div className="grid grid-cols-1">
                            <p className="text-center text-xl lg:text-3xl kotta">Shiny</p>
                            {
                                data && <ShinyPokeImgComponent shinyFront={data.sprites.other["official-artwork"].front_shiny} />
                            }
                        </div>
                    </div>

                    {
                        data && <LocComponent location={data.location_area_encounters} />
                    }
                </div>
            </div>

            <div className="flex justify-center mt-12 lg:mt-16 mb-7 h-[588px] sm:h-[684px] lg:h-[420px]">
                <div className="bgColor w-11/12 lg:w-3/5">
                    <div className="pt-8 flex justify-center">
                        <button onClick={randomCallSearch} className="randColor w-12 h-12 sm:w-16 sm:h-16 rounded-2xl sm:rounded-3xl flex justify-center items-center border border-black"><img className="sm:w-11 sm:h-11 w-9 h-9" src={dine} alt="Randomize Button" /> </button>
                        <input value={input} onChange={(e) => setInput(e.target.value)} className="searchColor w-56 h-12 sm:w-80 sm:h-16 mx-2 rounded-2xl sm:rounded-3xl border border-black sm:text-2xl kotta pl-3" type="text" placeholder="Search Name Or ID: " />
                        <img onClick={callSearch} className="sm:w-10 sm:h-10 w-8 h-8 mt-2 sm:mt-3" src={glass} alt="search btn" />
                    </div>

                    {/* <div className="absolute 2xl:movePls1 sm:movePls2 movePls3 lg:movePls4">
                        <div id="openFav" className="hidee ml-6 sm:ml-8 mx-2 favoritesColor w-56 sm:w-80 rounded-2xl sm:rounded-3xl border border-black">
                            <div className="flex justify-start ml-5 mt-3 mb-3">
                                <p className="text-left sm:text-2xl kotta">Bulbasaur</p>
                                <img className="w-8 h-8 ml-3" src={heart} alt="Favorite Heart Inside Favorite List" />
                            </div>
                        </div>
                    </div> */}

                    <div className="grid justify-evenly lg:grid-cols-2 mt-8">
                        <div className="mx-8 sm:mx-36 lg:mx-0 lg:ml-32 lg:pr-5">
                            {
                                data && <TypesComponent types={data.types} />
                            }
                            {
                                data && <AbilitiesComponent abilities={data.abilities} />
                            }
                            {
                                data && <EvolutionComponent species={data.species} />
                            }
                        </div>
                        <div className="mx-8 sm:mx-36 lg:mx-0 lg:mr-32">
                            {
                                data && <MovesComponent moves={data.moves} />
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainComponent

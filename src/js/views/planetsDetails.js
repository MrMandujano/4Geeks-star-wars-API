import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import "../../styles/charactersDetails.css";
import { Context } from "../store/appContext";




export const PlanetsDetails = () => {
    const { store, actions } = useContext(Context);

   /*  const [planets, setPlanets] = useState(null); */
    const { position } = useParams()


   /*  useEffect(() => {
        console.log(position);
        async function fetchPlanets() {
            let res = await fetch('https://swapi.dev/api/planets/');
            let data = await res.json();
            setPlanets(data.results);

        }
        fetchPlanets();
    }, []) */


    return (
        <>


            {!!store.planets ? store.planets.filter((_elem, index) => index == position).map(({name,rotation_period,orbital_period,diameter,climate,gravity,terrain,surface_water,population}) => {
                return (

                    <div className="card text-center">
                        <div className="card-header">
                            STAR WARS PLANETS
                        </div>
                        <div className="card-body" id="chD">
                            <h1 className="card-title" id="chTxtT">{name}</h1>
                            <div clasName="container">
                                <div className="row">
                                    <div className="col-5">
                                        <img
                                            src="https://dummyimage.com/600x400/000/fff"
                                        />


                                    </div>
                                    <div className="col-7" id="chaD">
                                        <p className="text-start" id="chTxtD">
                                            What is Lorem Ipsum?
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                        </p>
                                        <div className="container">
                                            <div className="row" id="chTxtI">
                                                <div className="col" id="charDi">
                                                    <p>ROTATION</p>
                                                    <hr id="hrD" />
                                                      {rotation_period}
                                                </div>

                                                <div className="col" id="charDi">
                                                    <p>ORBITAL</p>
                                                    <hr id="hrD" />
                                                        {orbital_period}
                                                </div>
                                                <div className="col" id="charDi">
                                                    <p>DIAMETER</p>
                                                    <hr id="hrD" />
                                                        {diameter}
                                                </div>
                                                <div className="col" id="charDi">
                                                    <p>CLIMATE</p>
                                                    <hr id="hrD" />
                                                        {climate}

                                                </div>
                                                <div className="col" id="charDi">
                                                    <p>GRAVITY</p>
                                                    <hr id="hrD" />
                                                      {gravity}
                                                </div>
                                                <div className="col" id="charDi">
                                                    <p>TERRAIN</p>
                                                    <hr id="hrD" />
                                                      {terrain}
                                                </div>
                                                <div className="col" id="charDi">
                                                    <p>SURFACE</p>
                                                    <hr id="hrD" />
                                                      {surface_water}
                                                </div>
                                                <div className="col" id="charDi">
                                                    <p>POPULATION</p>
                                                    <hr id="hrD" />
                                                      {population}
                                                </div>
                                               
                                               

                                            </div>
                                        </div>
                                      

                                    </div>
                                </div>
                            </div>

                            <button onClick={() => actions.addFavorites(name)} ><i class="fas fa-heart"></i>Add Favorites</button>
                        </div>
                        
                    </div>

                )
            }) : (
                <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            )}

        </>

    );
};

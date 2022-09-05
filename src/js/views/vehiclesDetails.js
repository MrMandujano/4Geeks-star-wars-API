import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import "../../styles/charactersDetails.css";
import { Context } from "../store/appContext";



export const VehiclesDetails = () => {
    const { store, actions } = useContext(Context);

   /*  const [vehicles, setVehicles] = useState(null); */
    const { position } = useParams()

/* 
    useEffect(() => {
        console.log(position);
        async function fetchVehicle() {
            let res = await fetch('https://swapi.dev/api/vehicles/');
            let data = await res.json();
            setVehicles(data.results);

        }
        fetchVehicle();
    }, [])
 */

    return (
        <>


            {!!store.vehicles ? store.vehicles.filter((_elem, index) => index == position).map(({ name,model,manufacturer,cost_in_credits,length,max_atmosphering_speed,crew,passengers,cargo_capacity,consumables,vehicle_class }) => {
                return (

                    <div className="card text-center">
                        <div className="card-header">
                            STAR WARS VEHICLES
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
                                                    <p>MODEL</p>
                                                    <hr id="hrD" />
                                                        {model}
                                                </div>

                                                <div className="col" id="charDi">
                                                    <p>MANUFACTURER</p>
                                                    <hr id="hrD" />
                                                        {manufacturer}
                                                </div>
                                                <div className="col" id="charDi">
                                                    <p>CREDITS</p>
                                                    <hr id="hrD" />
                                                        {cost_in_credits}
                                                </div>
                                                <div className="col" id="charDi">
                                                    <p>LENGHT</p>
                                                    <hr id="hrD" />
                                                        {length}

                                                </div>
                                                <div className="col" id="charDi">
                                                    <p>MAX SPEED</p>
                                                    <hr id="hrD" />
                                                        {max_atmosphering_speed}
                                                </div>
                                               

                                            </div>
                                        </div>
                                        <div className="container">
                                            <div className="row" id="chTxtI">
                                                <div className="col" id="charDi">
                                                    <p>PASSENGERS</p>
                                                    <hr id="hrD" />
                                                        {passengers}
                                                </div>

                                                <div className="col" id="charDi">
                                                    <p>CAPACITY</p>
                                                    <hr id="hrD" />
                                                    {cargo_capacity}

                                                </div>
                                                <div className="col" id="charDi">
                                                    <p>CONSUMABLES</p>
                                                    <hr id="hrD" /> 
                                                    {consumables}

                                                </div>
                                                <div className="col" id="charDi">
                                                    <p>CLASS</p>
                                                    <hr id="hrD" />
                                                    {vehicle_class}

                                                </div>
                                              
                                                <div className="col" id="charDi">
                                                    <p>CREW</p>
                                                    <hr id="hrD" />
                                                    {crew}

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

import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import "../../styles/charactersDetails.css";
import { Context } from "../store/appContext";




export const CharactersDetails = () => {
  const { store, actions } = useContext(Context);

  /* const [people, setPeople] = useState(null); */
  const { position } = useParams()


 /*  useEffect(() => {
    async function fetchPeople() {
      let res = await fetch('https://swapi.dev/api/people/');
      let data = await res.json();
      setPeople(data.results);

    }
    fetchPeople();
  }, [])
 */

  return (
    <>


      {!!store.people ? store.people.filter((_elem, index) => index == position).map(({ name, birth_year, gender, height, mass, hair_color, skin_color, eye_color }) => {
        return (

          <div class="card text-center">
            <div class="card-header">
              STAR WARS CHARACTER
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
                    <p class="text-start" id="chTxtD">
                      What is Lorem Ipsum?
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                    <div class="container">
                      <div class="row" id="chTxtI">
                        <div class="col" id="charDi">
                          <p>BIRTH</p>
                          <hr id="hrD"/>
                          {birth_year}
                        </div>
                        <div class="col" id="charDi">
                          <p>GENDER</p>
                          <hr id="hrD"/>
                          {gender}
                        </div>
                        <div class="col" id="charDi">
                          <p>HEIGHT</p>
                          <hr id="hrD"/>
                          {height}
                        </div>
                        <div class="col" id="charDi">
                          <p>MASS</p>
                          <hr id="hrD"/>
                          {mass}
                        </div>
                        <div class="col" id="charDi">
                          <p>HAIR COLOR</p>
                          <hr id="hrD"/>
                          {hair_color}
                        </div>
                        <div class="col" id="charDi">
                          <p>SKIN COLOR</p>
                          <hr id="hrD"/>
                          {skin_color}
                        </div>
                        <div class="col" id="charDi">
                          <p>EYE COLOR</p>
                          <hr id="hrD"/>
                          {eye_color}
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


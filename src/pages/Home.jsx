import React, { useContext } from "react";
import { Context } from "../store.jsx";
import { CharacterCard } from "../components/CharacterCard.jsx";
import { PlanetCard } from "../components/PlanetCard.jsx";
import { VehicleCard } from "../components/VehicleCard.jsx";

const Home = () => {
    const { store } = useContext(Context);

    return (
        <div className="container mt-4">
            <h2 className="text-warning mb-3">Personajes</h2>
            <div className="d-flex overflow-auto">
                {store.characters.map((character, index) => (
                    <CharacterCard key={index} character={character} />
                ))}
            </div>

            <h2 className="text-warning my-4">Planetas</h2>
            <div className="d-flex overflow-auto">
                {store.planets.map((planet, index) => (
                    <PlanetCard key={index} planet={planet} />
                ))}
            </div>

            <h2 className="text-warning my-4">Vehículos</h2>
            <div className="d-flex overflow-auto">
                {store.vehicles.map((vehicle, index) => (
                    <VehicleCard key={index} vehicle={vehicle} />
                ))}
            </div>
        </div>
    );
};

export default Home;

import React, { useContext } from "react";
import { Context } from "../store.jsx";
import { Link } from "react-router-dom";

export const PlanetCard = ({ planet }) => {
    const { actions } = useContext(Context);

    const id = planet.uid;
    const imageUrl = `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`;

    return (
        <div className="card m-2" style={{ minWidth: "18rem" }}>
            <img
                src={`https://starwars-visualguide.com/assets/img/characters/${planet.uid}.jpg`}
                alt={planet.name}
                className="card-img-top"
                onError={(e) => { e.target.src = "https://starwars-visualguide.com/assets/img/big-placeholder.jpg"; }}
            />

            <div className="card-body">
                <h5 className="card-title">{planet.name}</h5>
                <div className="d-flex justify-content-between">
                    <Link to={`/single/planets/${planet.uid}`} className="btn btn-outline-primary">Más info</Link>
                    <button
                        className="btn btn-outline-warning"
                        onClick={() => actions.toggleFavorite(planet.name)}
                    >
                        🌟
                    </button>
                </div>
            </div>
        </div>
    );
};

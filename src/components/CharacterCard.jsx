import React, { useContext } from "react";
import { Context } from "../store.jsx";
import { Link } from "react-router-dom";

export const CharacterCard = ({ character }) => {
    const { actions } = useContext(Context);

    const id = character.uid;
    const imageUrl = `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`;

    return (
        <div className="card m-2" style={{ minWidth: "18rem" }}>
            <img
                src={`https://starwars-visualguide.com/assets/img/characters/${character.uid}.jpg`}
                alt={character.name}
                className="card-img-top"
                onError={(e) => { e.target.src = "https://starwars-visualguide.com/assets/img/big-placeholder.jpg"; }}
            />

            <div className="card-body">
                <h5 className="card-title">{character.name}</h5>
                <div className="d-flex justify-content-between">
                    <Link to={`/single/people/${character.uid}`} className="btn btn-outline-primary">Más info</Link>
                    <button
                        className="btn btn-outline-warning"
                        onClick={() => actions.toggleFavorite(character.name)}
                    >
                        🌟
                    </button>
                </div>
            </div>
        </div>
    );
};
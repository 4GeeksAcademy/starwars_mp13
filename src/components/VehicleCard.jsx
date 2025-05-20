import React, { useContext } from "react";
import { Context } from "../store.jsx";
import { Link } from "react-router-dom";

export const VehicleCard = ({ vehicle }) => {
    const { actions } = useContext(Context);

    const id = vehicle.uid;
    const imageUrl = `https://starwars-visualguide.com/assets/img/vehicles/${id}.jpg`;

    return (
        <div className="card m-2" style={{ minWidth: "18rem" }}>
            <img src={imageUrl} className="card-img-top" alt={vehicle.name} />
            <div className="card-body">
                <h5 className="card-title">{vehicle.name}</h5>
                <div className="d-flex justify-content-between">
                    <Link to={`/vehicle/${id}`} className="btn btn-outline-primary">Más info</Link>
                    <button
                        className="btn btn-outline-warning"
                        onClick={() => actions.toggleFavorite(vehicle.name)}
                    >
                        ⭐
                    </button>
                </div>
            </div>
        </div>
    );
};

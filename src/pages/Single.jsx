import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Single = () => {
    const { type, id } = useParams();
    const [item, setItem] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`https://www.swapi.tech/api/${type}/${id}`);
                const data = await res.json();
                setItem(data.result);
            } catch (err) {
                console.error("Error al cargar datos del elemento:", err);
            }
        };

        fetchData();
    }, [type, id]);

    const getImageUrl = () => {
        const visualType = type === "people" ? "characters" : type;
        return `https://starwars-visualguide.com/assets/img/${visualType}/${id}.jpg`;
    };

    return (
        <div className="container my-5 text-white">
            {item ? (
                <>
                    <h1 className="text-center mb-4">{item.properties.name}</h1>
                    <div className="text-center">
                        <img
                            src={getImageUrl()}
                            alt={item.properties.name}
                            className="img-fluid mb-4"
                            onError={(e) => {
                                e.target.src = "https://starwars-visualguide.com/assets/img/big-placeholder.jpg";
                            }}
                            style={{ maxHeight: "400px", objectFit: "cover", borderRadius: "8px" }}
                        />
                    </div>

                    <div className="row">
                        {Object.entries(item.properties).map(([key, value]) => (
                            <div className="col-md-4 col-sm-6 my-2" key={key}>
                                <div className="card bg-dark text-white h-100 shadow">
                                    <div className="card-body">
                                        <h5 className="card-title text-warning">
                                            {key.replaceAll("_", " ").toUpperCase()}
                                        </h5>
                                        <p className="card-text">{value}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            ) : (
                <h3 className="text-center">Cargando datos...</h3>
            )}
        </div>
    );
};

export default Single;

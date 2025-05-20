// src/pages/Single.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Single = () => {
    const { type, id } = useParams();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`https://www.swapi.tech/api/${type}/${id}`);
                const json = await res.json();
                setData(json.result);
            } catch (err) {
                console.error("Error al cargar detalle:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [type, id]);

    if (loading) return <p>Cargando...</p>;
    if (!data) return <p>No se encontró información</p>;

    return (
        <div className="container mt-4">
            <h1>{data.properties.name || data.properties.title}</h1>
            <ul>
                {Object.entries(data.properties).map(([key, value]) => (
                    <li key={key}><strong>{key}:</strong> {value}</li>
                ))}
            </ul>
        </div>
    );
};

export default Single;

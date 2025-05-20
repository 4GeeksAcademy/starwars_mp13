import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store.jsx";

const Single = () => {
    const { theid } = useParams();
    const { store } = useContext(Context);
    const [item, setItem] = useState(null);
    const [type, setType] = useState(null);

    useEffect(() => {
        const allData = [
            { data: store.characters, type: "character" },
            { data: store.planets, type: "planet" },
            { data: store.vehicles, type: "vehicle" }
        ];

        for (const { data, type } of allData) {
            const found = data.find(i => i.uid === theid);
            if (found) {
                setItem(found);
                setType(type);
                break;
            }
        }
    }, [store]);

    if (!item) return <div className="text-center mt-5">Cargando...</div>;

    const imageMap = {
        character: `https://starwars-visualguide.com/assets/img/characters/${item.uid}.jpg`,
        planet: `https://starwars-visualguide.com/assets/img/planets/${item.uid}.jpg`,
        vehicle: `https://starwars-visualguide.com/assets/img/vehicles/${item.uid}.jpg`
    };

    return (
        <div className="container mt-5 text-center">
            <img src={imageMap[type]} className="img-fluid mb-4" style={{ maxHeight: "300px" }} />
            <h1>{item.name}</h1>
            <p className="text-muted">UID: {item.uid}</p>
        </div>
    );
};

export default Single;

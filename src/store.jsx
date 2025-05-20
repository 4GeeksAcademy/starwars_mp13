import React, { useState, useEffect, createContext } from "react";

export const Context = createContext(null);

export const injectContext = (PassedComponent) => {
    const StoreWrapper = (props) => {
        const [store, setStore] = useState({
            characters: [],
            planets: [],
            vehicles: [],
            favorites: [],
        });

        const getCharacters = async () => {
            try {
                const res = await fetch("https://www.swapi.tech/api/people");
                const data = await res.json();
                setStore(prev => ({ ...prev, characters: data.results }));
            } catch (err) {
                console.error("Error al obtener personajes", err);
            }
        };

        const getPlanets = async () => {
            try {
                const res = await fetch("https://www.swapi.tech/api/planets");
                const data = await res.json();
                setStore(prev => ({ ...prev, planets: data.results }));
            } catch (err) {
                console.error("Error al obtener planetas", err);
            }
        };

        const getVehicles = async () => {
            try {
                const res = await fetch("https://www.swapi.tech/api/vehicles");
                const data = await res.json();
                setStore(prev => ({ ...prev, vehicles: data.results }));
            } catch (err) {
                console.error("Error al obtener vehículos", err);
            }
        };

        const toggleFavorite = (item) => {
            setStore(prev => {
                const exists = prev.favorites.includes(item);
                return {
                    ...prev,
                    favorites: exists
                        ? prev.favorites.filter(fav => fav !== item)
                        : [...prev.favorites, item],
                };
            });
        };

        useEffect(() => {
            getCharacters();
            getPlanets();
            getVehicles();
        }, []);

        const actions = {
            toggleFavorite,
        };

        return (
            <Context.Provider value={{ store, actions }}>
                <PassedComponent {...props} />
            </Context.Provider>
        );
    };

    return StoreWrapper;
};

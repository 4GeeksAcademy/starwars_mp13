import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store.jsx";

export const Navbar = () => {
    const { store, actions } = useContext(Context);

    return (
        <nav className="navbar navbar-dark bg-dark px-3">
            <Link to="/" className="navbar-brand">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg"
                    height="40"
                    alt="Star Wars"
                />
            </Link>

            <div className="dropdown">
                <button
                    className="btn btn-warning dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    Favoritos <span className="badge bg-dark">{store.favorites.length}</span>
                </button>
                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
                    {store.favorites.length === 0 ? (
                        <li className="dropdown-item text-muted">Sin favoritos</li>
                    ) : (
                        store.favorites.map((fav, index) => (
                            <li key={index} className="dropdown-item d-flex justify-content-between align-items-center">
                                {fav}
                                <button className="btn btn-sm btn-danger ms-2" onClick={() => actions.toggleFavorite(fav)}>
                                    🗑️
                                </button>
                            </li>
                        ))
                    )}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
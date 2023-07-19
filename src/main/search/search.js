import React from "react";
import '../search/search.css';
import lupa from "../../img/lupa.svg";
import { Link } from 'react-router-dom'; 

function Search() {
    return (
        <div className="search-form">
            <form className="search-form__forma">
                <img className="lupa" alt="поиск" src={lupa} />
                <input className="seach-form__input"
                    placeholder="Поиск"
                    type="search"
                    name="search"
                />
            </form>
        </div>
    );
};
export default Search;
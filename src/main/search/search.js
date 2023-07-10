import React from "react";
import '../search/search.css';
import lupa from "../../img/lupa.svg"

function Search() {
    return (
        <div className="search-form">
            <form className="search-form__forma">
                <img className="lupa" alt="поиск" src={lupa} />
                <input className="seach-form__input"
                    placeholder="Скидки"
                    type="search"
                    name="search"
                />
                <button className="search-form__button"

                ></button>
            <button className="account"></button>
            </form>
        </div>
    );
};
export default Search;
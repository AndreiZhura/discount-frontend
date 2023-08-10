import React, {useState} from "react";
import '../search/search.css';
import lupa from "../../img/lupa.svg";
import { Link } from 'react-router-dom';
import enter from "../../img/enter.svg"

function Search(props) {
 

  
    function handleChange(e){
        props.onInputHandler(e.target.value)
    }
   

    return (
        <div className="search-form">
            <form className="search-form__forma" >
                <img className="lupa" alt="поиск" src={lupa} />
                <div className="seach-form__search">
                    <input className="seach-form__input"
                        placeholder="Поиск"
                        type="search"
                        name="search"
                        value={props.search}
                        onChange={handleChange}
                       
                    />
                    <button className="search-form__enter"
                    onClick={props.SearchClick}
                    ></button>
                </div>
            </form>
        </div>
    );
};
export default Search;
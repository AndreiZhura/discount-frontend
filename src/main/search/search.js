import React from "react";
import '../search/search.css';
import lupa from "../../img/lupa.svg";
import { Link } from 'react-router-dom';


function Search(props) {
 

  
    function handleChange(e){
        props.onInputHandler(e.target.value)
    }


    return (
        <div className="search-form">
            {
              props.loggedIn ? <Link className="search-form__link-to-admin" to="/profile">Админ</Link> :
              <Link className="button-to-login"
              to="/signin"
              ></Link>
            }
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
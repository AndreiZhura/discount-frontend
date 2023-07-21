import React from "react";
import './favorites.css';
import Discount from "../discount/discount";
import arrowsDown from '../../img/arrow_to_down.svg'

function Favorites() {
    return (
        <div className="favorites">
         <div className="categories__container ">
                <div className="categories__name">
                    <img className="categories__name-arrows" src={arrowsDown} />
                    <p className="categories__name-title">Категория 1</p>
                </div>
                <div className="favorites__container">
                    <Discount/>
                    <Discount/>
                    <Discount/>
                    <Discount/>
                    <Discount/>
                </div>
            </div>
        </div>

    );
}

export default Favorites;
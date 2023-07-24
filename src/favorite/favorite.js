import React from "react";
import './favorite.css';
import Discount from "../main/discount/discount";
import arrowsDown from '../img/arrow_to_down.svg'

function Favorite() {
    return (
        <div className="favorites">
         <div className="categories__container ">
         <div className="categories__name categories__name_favorites">
                    <p className="categories__name-title categories__name-title_favorites">Избранные</p>
                </div> 
                <div className="favorites__container">
                    <Discount/>
                    <Discount/>
                    <Discount/>
                    <Discount/>
                    <Discount/>
                    <Discount/>
                    <Discount/>
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

export default Favorite;
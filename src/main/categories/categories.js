import React from "react";
import './categories.css';
import Discount from "../discounts/discounts";
import arrowsDown from '../../img/arrow_to_down.svg'


function Categories() {
    return (
        <div className="categories">
            <div className="categories__container">
                <div className="categories__name">
                    <img className="categories__name-arrows" src={arrowsDown} />
                    <p className="categories__name-title">Категория 1</p>
                </div>
                <div className="categories__arrows">
                    <button className="categories__arrow"></button>
                    <Discount />
                    <button className="categories__arrow"></button>
                </div>
            </div>

        </div>
    );
};

export default Categories;
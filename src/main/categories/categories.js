import React from "react";
import './categories.css';
import Discount from "../discounts/discounts";


function Categories() {
    return (
        <div className="categories">     
        <div className="categories__container">
            <p className="categories__name">Название категории </p>
            <div className="categories__arrows">
                <button className="categories__arrow"></button>
                <Discount/>
                <button className="categories__arrow"></button>
            </div>
            </div>   
          
        </div>
    );
};

export default Categories;
import React from "react";
import './categories.css';
import Discounts from "../discounts/discounts";
import arrowsDown from '../../img/arrow_to_down.svg'


function Categories(props) {

    return (
        <div className="categories">
            <div className="categories__container">
                <div className="categories__name">
                    <img className="categories__name-arrows" src={arrowsDown} />
                    <p className="categories__name-title">{props.category.categories}</p>
                </div>
                <Discounts
                    discount={props.discount}
                />
            </div>

        </div>
    );
};

export default Categories;
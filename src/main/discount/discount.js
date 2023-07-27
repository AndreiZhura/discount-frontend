import React from "react";
import './discount';
import SettingsDiscount from "../../settingsDiscount/settingsDiscount";
import { Link } from "react-router-dom";
import { useState } from 'react';


function Discount(props) {

    

    function onTest(){
      console.log(props.discount)
    }
    return (
        <div className="discount">
            <Link className="discount__link" to="/setting" onClick={onTest}>
      
            <div className="discount__main">
                <Link to="/signin" className="discount__setting"></Link>
                <img className="discount__image" src={props.discount.image} />
            </div>
            </Link>

            <div className="discount__container">
                <h3 className="discount__title">
                    {props.discount.name}
                </h3>
                <button className="discount__like"></button>
            </div>

        </div>
    );
}

export default Discount;
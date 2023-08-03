import React from "react";
import './discount';
import SettingsDiscount from "../../settingsDiscount/settingsDiscount";
import { Link } from "react-router-dom";
import { useState } from 'react';


function Discount(props) {

    function DataDiscount(){
     
        props.dataDiscount(props.discount)
    }
    
    return (
        <div className="discount">
            <Link 
            className="discount__link" 
            to="/discount" 
            onClick = {DataDiscount}>

            <div className="discount__main">
                <Link 
                to="/setting" 
                className="discount__setting"
                onClick = {DataDiscount} ></Link>
                
                <img className="discount__image" src={props.discount.image} />
            </div>
            </Link>

            <div className="discount__container">
                <h3 className="discount__title">
                    {props.discount.name}
                </h3>
               
            </div>

        </div>
    );
}

export default Discount;
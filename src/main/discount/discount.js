import React from "react";
import './discount';
import SettingsDiscount from "../../settingsDiscount/settingsDiscount";
import { Link } from "react-router-dom";
import { useState } from 'react';


function Discount(props) {

    const base = `http://localhost:3001/`;



    function DataDiscount() {

        props.dataDiscount(props.discount)
    }

    return (
        <div className="discount">
            <Link
                className="discount__link"
                to="/discount"
                onClick={DataDiscount}>

                <div className="discount__main">
                    <Link
                        to="/setting"
                        className="discount__setting"
                        onClick={DataDiscount} ></Link>
                    {
                        < img className="discount__image" src={`${base}` + `${props.discount.image}`} />
                    }
                </div>
            </Link>



        </div>
    );
}

export default Discount;
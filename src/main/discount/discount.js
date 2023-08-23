import React from "react";
import './discount';
import SettingsDiscount from "../../settingsDiscount/settingsDiscount";
import { Link } from "react-router-dom";
import { useState } from 'react';
import { BASE_URL } from "../../constants/constants";

function Discount(props) {

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
                    {
                        props.loggedIn ?
                            <Link
                                to="/setting"
                                className={props.cardSize ? "discount__setting" : "discount__setting discount__setting_big" }
                                onClick={DataDiscount} ></Link> : <></>
                    }
                    {
                        < img className="discount__image" src={`${BASE_URL}` + `${props.discount.image}`} />
                    }
                </div>
            </Link>
        </div>
    );
}

export default Discount;
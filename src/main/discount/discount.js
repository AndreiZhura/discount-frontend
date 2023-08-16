import React from "react";
import './discount';
import SettingsDiscount from "../../settingsDiscount/settingsDiscount";
import { Link } from "react-router-dom";
import { useState } from 'react';


function Discount(props) {

    const BASE_URL = 'https://api.andreizhura.nomoredomains.club/';

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
                                className="discount__setting"
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
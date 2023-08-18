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

    props.discount.image.map((value)=>{
        console.log( `${BASE_URL}` + `${value.path}`)
    })

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
                        props.discount.image.map((value) =>{
                            < img className="discount__image" src={`${BASE_URL}` + `${value.path}`} />
                        })
                    }
                </div>
            </Link>



        </div>
    );
}

export default Discount;
import React from "react";
import './favorite.css';
import Discount from "../main/discount/discount";
import '../settingsDiscount/settingsDiscount.css'
import { Link } from "react-router-dom";


function Favorite(props) {


    const filterArrayDiscount = props.discount.filter((filter) => {
        return filter.name.trim().toLowerCase().includes(props.search.toLowerCase())
    })

    return (
        <div className="favorites">
                <div className="setting__buttons look__button">
                    <Link to='/'>
                        <button className="setting__button">Назад</button>
                    </Link>
                </div>
            <div className="favorites__container">
                {props.search === "" ?
                    props.discount.map((value, id) => {
                        return (
                            <Discount
                                key={id}
                                discount={value}
                                dataDiscount={props.dataDiscount}
                                loggedIn = {props.loggedIn}
                            />
                        );
                    }) :
                    filterArrayDiscount.map((value, id) => {
                        return (
                            <Discount
                                key={id}
                                discount={value}
                                cardSize = {props.cardSize}
                                dataDiscount={props.dataDiscount}
                                loggedIn = {props.loggedIn}
                            />
                        );
                    })
                }


            </div>
        </div>


    );
}

export default Favorite;
import React from "react";
import './favorite.css';
import Discount from "../main/discount/discount";


function Favorite(props) {


    const filterArrayDiscount = props.discount.filter((filter) => {
        return filter.name.trim().toLowerCase().includes(props.search.toLowerCase())
    })

    console.log(props.loggedIn)
    return (
        <div className="favorites">
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
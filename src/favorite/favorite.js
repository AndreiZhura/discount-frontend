import React from "react";
import './favorite.css';
import Discount from "../main/discount/discount";


function Favorite(props) {


    console.log(props.search)

    const filterArrayDiscount = props.discount.filter((filter) => {
        return filter.name.trim().toLowerCase().includes(props.search.toLowerCase())
    })


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
                            />
                        );
                    }) :
                    filterArrayDiscount.map((value, id) => {
                        return (
                            <Discount
                                key={id}
                                discount={value}
                                dataDiscount={props.dataDiscount}
                            />
                        );
                    })
                }


            </div>
        </div>


    );
}

export default Favorite;
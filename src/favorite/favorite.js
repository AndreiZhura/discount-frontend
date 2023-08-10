import React from "react";
import './favorite.css';
import Discount from "../main/discount/discount";
import arrowsDown from '../img/arrow_to_down.svg'

function Favorite(props) {

    console.log("ghjdthrf")

    return (
        <div className="favorites">
            <div className="favorites__container">
                {
                    props.filterArrayDiscount.map((value) => {
                        <Discount
                            discount={value}
                        />
                    })

                }

            </div>
        </div>


    );
}

export default Favorite;
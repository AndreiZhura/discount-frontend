import React from "react";
import './favorite.css';
import Discount from "../main/discount/discount";
import arrowsDown from '../img/arrow_to_down.svg'

function Favorite(props) {
    console.log('search')
    console.log(props.search)
    console.log('favorite')
    console.log(props.discount)

    return (
        <div className="favorites">
            <div className="categories__container ">

                <div className="favorites__container">
                    {




                    }
                </div>
            </div>
        </div>

    );
}

export default Favorite;
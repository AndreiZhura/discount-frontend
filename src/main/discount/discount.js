import React from "react";
import './discount';



function Discount(props) {
    return (
        <div className="discount">
            <div className="discount__main">
                <button className="discount__setting"></button>
                <img className="discount__image" src={props.discount.image} />
            </div>
            <div className="discount__container">
                <h3 className="discount__title">
                  {props.discount.name}
                </h3>
                <button className="discount__like discount__like_add"></button>
            </div>

        </div>
    );
}

export default Discount;
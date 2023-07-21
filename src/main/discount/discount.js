import React from "react";
import './discount';
import pyaterochka from '../../img/pyaterochka.webp'


function Discount() {
    return (
        <div className="discount">
            <div className="discount__main">
                <button className="discount__setting"></button>
                <img className="discount__image" src={pyaterochka} />
            </div>
            <div className="discount__container">
                <h3 className="discount__title">
                    Пятерочка
                </h3>
                <button className="discount__like discount__like_add"></button>
            </div>

        </div>
    );
}

export default Discount;
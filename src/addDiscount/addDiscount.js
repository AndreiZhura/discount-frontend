import React from "react";
import './addDiscount.css';
import { useState } from "react";

function AddDiscount() {

    const [clickPopup, setClickPopup] = useState(true);

    const handleOpenPopup = () =>{
        setClickPopup(true);
    }

    const handleClosePopup = () =>{
        setClickPopup(false);
    }

    return (
        <>        
        <div className="discount-add">
            <div className="discount-add__container">
            <button className="discount-add__button" onClick={handleOpenPopup}></button>
            </div>
        </div>
        <div className={clickPopup ? "popup" : "popup popup_none"}>
         <div className="popup__container">
         <button className="popup__close" onClick={handleClosePopup}>X</button>
         <form className="popup__form"></form>
         </div>
        </div>
        </>
    );
};

export default AddDiscount;
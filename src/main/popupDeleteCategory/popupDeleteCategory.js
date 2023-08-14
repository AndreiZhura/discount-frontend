
import React from "react";
import './popupDeleteCategory.css'



function PopupDeleteCategories(props) {


    return (
        <section className={props.popupClose ? 'popup' : 'popup_none'}>
            <div className="popup__main">
                <button className="popup__button" onClick={props.handlePopup}>X</button>
                <p className="popup__text">{props.popupInform}</p>
                
                <button className={props.popupDelete ? 'popup__close' : 'popup_none'} onClick={props.handleDeleteCategory} >Удалить</button>

            </div>
        </section>
    );

}

export default PopupDeleteCategories;
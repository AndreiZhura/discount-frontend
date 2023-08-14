
import React from "react";
import './popupDeleteCategory.css'



function PopupDeleteCategories(props) {

    return (
        <section className="popup">
        <div className="popup__main">
            <button className="popup__button" type="button" id="closeButtonProfile"></button>

                <button className="popup__save " type="submit" id="popupProfileButtonSave">Сохранить</button>
            
        </div>
    </section>
    );

}

export default PopupDeleteCategories;
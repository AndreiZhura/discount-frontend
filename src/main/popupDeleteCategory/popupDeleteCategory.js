
import React, {useState} from "react";
import './popupDeleteCategory.css'



function PopupDeleteCategories(props) {


    return (
        <section className={props.popupClose ? 'popup' : 'popup_none'}>
        <div className="popup__main">
            <button className="popup__button" onClick={props.handlePopup}>X</button>
                 <p className="popup__text">Вы не можете удалить категорию пока не удалите все скидки</p>
                <button className="popup__close" onClick={props.handlePopup} >Закрыть</button>
            
        </div>
    </section>
    );

}

export default PopupDeleteCategories;
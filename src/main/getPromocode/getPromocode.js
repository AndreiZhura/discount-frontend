import React from "react";
import '../../settingsDiscount/settingsDiscount.css'

function GetPromocode(props) {

    const date = new Date(props.value.date)

    function handlePromoDelete(e) {
        e.preventDefault();
        props.DeletePromo(props.value._id)
    }



    return (
        <>
            <div className="input__promocode">
                {
                    props.value.description ? <p className={props.value.description.length > 200
                        ?
                        "input__text setting__text-size look__text-padding input__text_description-promocode input__text_big"
                        :
                        "input__text setting__text-size look__text-padding input__text_description-promocode input__text_small"}>{props.value.description}</p> : <></>
                }
                <p className="input__add-promocode input__text-padding setting__text-size">{props.value.promocode}</p>
                <p className="input__add-date input__text-padding setting__text-size">до {date.toLocaleDateString()}</p>
                {
                    props.loggedIn ?
                        <button className="bascet-delete" onClick={handlePromoDelete}></button>
                        : <></>
                }
            </div>
        </>
    );
}

export default GetPromocode;
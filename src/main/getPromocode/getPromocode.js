import React from "react";
import '../../settingsDiscount/settingsDiscount.css'

function GetPromocode(props) {

    const date = new Date(props.value.date)

    function handlePromoDelete(e) {
        e.preventDefault();
        props.DeletePromo(props.value._id)
    }

    if(props.value.description){

    }

    return (
        <>
            <div className="input__promocode">
                {
                    props.value.description ?   <p className="input__text input__text_description-promocode">{props.value.description}</p>: <></>
                }
                <p className="input__add-promocode look__text-padding">{props.value.promocode}</p>
                <p className="input__add-date look__add-date look__text-padding">до {date.toLocaleDateString()}</p>
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
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
                <input type="text" placeholder="Промокод" defaultValue={props.value.promocode} className="input__add-promocode" />
                <input type="text" className="input__add-date" placeholder="До __ __ ______г." defaultValue={date.toLocaleDateString()} />
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
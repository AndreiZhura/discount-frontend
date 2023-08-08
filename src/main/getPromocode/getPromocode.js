import React from "react";
import '../../settingsDiscount/settingsDiscount.css'

function GetPromocode(props) {


    //const base = `http://localhost:3001/`;

    const date = new Date(props.value.date)

    function handlePromoDelete(){
        console.log(props.value._id)
        props.onPromoDelete(props.value._id)
     }

    return (
        <>
            <div className="input__promocode">
                <input type="text" placeholder="Промокод" value={props.value.promocode} className="input__add-promocode" />
                <input type="text" className="input__add-date" placeholder="До __ __ ______г." value={date.toLocaleDateString()} />
                <button className="bascet-delete" onClick={handlePromoDelete}></button>
            </div>
        </>
    );
}

export default GetPromocode;
import React from "react";
import '../../settingsDiscount/settingsDiscount.css'
import '../../lookDiscount/lookDiscount.css'

function GetPromocodePeople(props) {

    const date = new Date(props.value.date)

    return (
        <>
            <div className="input__promocode">
                {
                    props.value.description ? <p className="input__text input__text_description-promocode">{props.value.description}</p> : <></>
                }
                <p className="input__add-promocode look__text-padding look__promocode-margin">{props.value.promocode}</p>
                <p className="input__add-date look__add-date look__text-padding">до {date.toLocaleDateString()}</p>
            </div>
        </>
    );
}

export default GetPromocodePeople;
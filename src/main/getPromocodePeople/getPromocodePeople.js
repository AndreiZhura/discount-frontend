import React from "react";
import '../../settingsDiscount/settingsDiscount.css'
import '../../lookDiscount/lookDiscount.css'
import '../../settingsDiscount/settingsDiscount.css'

function GetPromocodePeople(props) {

    const date = new Date(props.value.date)

    return (
        <>
         <div className={ props.value.promocode ? "look__promocode" : "look__none"}>
                {
                    props.value.description ? <p className="look__text look__text-padding look__text_description-promocode look__font-size">{props.value.description}</p> : <></>
                }
                {
                    props.value.promocode ?   
                    <p className="look__add-promocode look__text-padding look__font-size">{props.value.promocode}</p>:<></>
                }
                <p className="look__add-date look__text-padding look__font-size">до {date.toLocaleDateString()}</p>
            </div>
        </>
    );
}

export default GetPromocodePeople;
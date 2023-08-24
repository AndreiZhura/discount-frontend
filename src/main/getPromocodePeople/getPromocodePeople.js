import React from "react";
import '../../settingsDiscount/settingsDiscount.css'
import '../../lookDiscount/lookDiscount.css'

function GetPromocodePeople(props) {

    const date = new Date(props.value.date)

    console.log(props.value.description.length)

    return (
        <>
            <div className={ props.value.promocode ? "input__promocode" : "input__promocode input__promocode_no-promocode"}>
                {
                    props.value.description ? <p className={props.value.description.length > 200
                        ?
                        "input__text look__text-padding input__text_description-promocode input__text_big"
                        : 
                        "input__text look__text-padding input__text_description-promocode input__text_small"}>{props.value.description}</p> : <></>
                }
                {
                    props.value.promocode ?   
                    <p className="input__add-promocode look__text-padding look__promocode-margin">{props.value.promocode}</p>:<></>
                }
                <p className="input__add-date look__add-date look__text-padding">до {date.toLocaleDateString()}</p>
            </div>
        </>
    );
}

export default GetPromocodePeople;
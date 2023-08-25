import React from "react";
import '../../settingsDiscount/settingsDiscount.css'
import '../../lookDiscount/lookDiscount.css'
import '../../settingsDiscount/settingsDiscount.css'

function GetPromocodePeople(props) {

    const date = new Date(props.value.date)

    console.log(props.value.description.length)

    return (
        <>
         <div className={ props.value.promocode ? "input__promocode" : "input__promocode input__promocode_no-promocode"}>
                {
                    props.value.description ? <p className="look__text">{props.value.description}</p> : <></>
                }
                {
                    props.value.promocode ?   
                    <p className="look__add-promocode">{props.value.promocode}</p>:<></>
                }
                <p className="look__add-date">до {date.toLocaleDateString()}</p>
            </div>
        </>
    );
}

export default GetPromocodePeople;
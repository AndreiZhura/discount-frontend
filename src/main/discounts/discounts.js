import React from "react";
import './discounts.css'
import Discount from "../discount/discount";
import AddDiscount from "../addDiscount/addDiscount";



function Discounts(props) {
    console.log(props.category._id)
    console.log(props.discount.category)
    return (
        <div className="discounts">

            {
                props.discount.length === 0 ? <AddDiscount /> :
                    props.category._id === props.discount.category ?
                        <Discount
                            discount={props.discount}
                        />:
                        <></>
            }
            <AddDiscount />

        </div>
    );
}

export default Discounts;
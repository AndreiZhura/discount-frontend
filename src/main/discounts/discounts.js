import React from "react";
import './discounts.css'
import Discount from "../discount/discount";
import AddDiscount from "../addDiscount/addDiscount";



function Discounts(props) {

    return (
        <div className="discounts">

            {
                props.discount.length === 0 ? <AddDiscount /> :
                    props.category._id === props.discount.category ?
                        <Discount
                            discount={props.discount}
                            func =  {props.func}
                        />:
                        <></>
            }
            <AddDiscount />

        </div>
    );
}

export default Discounts;
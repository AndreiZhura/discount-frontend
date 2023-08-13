import React, {useState} from "react";
import './discounts.css'
import Discount from "../discount/discount";
import AddDiscount from "../addDiscount/addDiscount";



function Discounts(props) {
    return (
        <div className="discounts">

            {
                props.discount.length === 0 ? <></> :
                    props.discount.map((discount, id) => {
                        return (
                            props.category._id === discount.category ?
                                <Discount
                                    key={discount._id}
                                    discount={discount}
                                    dataDiscount={props.dataDiscount}
                                    loggedIn = {props.loggedIn}
                                /> : <></>
                        );
                    })
            }
            <AddDiscount
              handleAddDiscount = {props.handleAddDiscount}
              category = {props.category}
              infoCategoryID = {props.infoCategoryID}
              loggedIn = {props.loggedIn}
            />
        </div>
    );
}

export default Discounts;
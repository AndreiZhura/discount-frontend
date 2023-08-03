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
                                    key={id}
                                    discount={discount}
                                    dataDiscount={props.dataDiscount}
                                  
                                /> : <></>
                        );
                    })
            }
            <AddDiscount
              handleAddDiscount = {props.handleAddDiscount}
              category = {props.category}
              infoCategoryID = {props.infoCategoryID}
            />
        </div>
    );
}

export default Discounts;
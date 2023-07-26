import React from "react";
import './discounts.css'
import Discount from "../discount/discount";
import AddDiscount from "../addDiscount/addDiscount";



function Discounts() {
    return (
        <div className="discounts">
            <Discount />
            <AddDiscount/>
          
        </div>
    );
}

export default Discounts;
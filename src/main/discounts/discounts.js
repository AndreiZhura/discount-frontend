import React from "react";
import './discounts.css'
import Discount from "../discount/discount";
import AddDiscount from "../addDiscount/addDiscount";



function Discounts(props) {
    return (
        <div className="discounts">
            {
                    props.discount.length === 0 ? <p>Добавьте акцию</p> :
                        props.discount.map((discount) => {
                            return (
                                <Discount
                                    discount={discount}
                                />
                            );
                        })
                }
            <AddDiscount/>
          
        </div>
    );
}

export default Discounts;
import React from "react";
import './discounts.css'
import Discount from "../discount/discount";
import AddDiscount from "../addDiscount/addDiscount";



function Discounts(props) {

    return (
        <div className="discounts">

            {
                props.discount.length === 0 ? <h1>dsdsfsdfsdf</h1> :
                    props.discount.map((discount, id) => {
                        return (
                            props.category._id === discount.category ?
                                <Discount
                                    key={id}
                                    discount={discount}
                                    func={props.func}
                                /> : <></>
                        );
                    })
            }
            <AddDiscount />
        </div>
    );
}

export default Discounts;
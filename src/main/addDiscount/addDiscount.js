import React from "react";
import '../discount/discount'
import './addDiscount';
import addDiscount from '../../img/addDiscount.svg'

function AddDiscount(){
    return(
        <div className="discount">
            <div className="discount__main">
                <img className="discount__add" src={addDiscount} />
            </div>
        </div>
    );
}

export default AddDiscount;
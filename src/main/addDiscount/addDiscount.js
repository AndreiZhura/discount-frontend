import React from "react";
import '../discounts/discounts'
import { Link } from "react-router-dom";

import addDiscount from '../../img/addDiscount.svg'

function AddDiscount(){
    return(
        <div className="discount">
            <Link className="discount__main" to='/add-discount'>
                <img className="discount__add" src={addDiscount} />
            </Link>
        </div>
    );
}

export default AddDiscount;
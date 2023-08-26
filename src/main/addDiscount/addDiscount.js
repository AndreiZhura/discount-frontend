import React from "react";
import '../discounts/discounts'
import { Link } from "react-router-dom";
import addDiscount from '../../img/addDiscount.svg'

function AddDiscount(props) {

    function categoriesID() {
        props.infoCategoryID(props.category._id)
    }

    return (
        <>
            {
                props.loggedIn ?
                <div className="discount">
                    <Link className="discount__main" to='/add-discount' onClick={categoriesID}>
                        <img className="discount__add" src={addDiscount} alt="добавление категории"/>
                    </Link>
                </div>
                :
                <></>

            }
        </>

    );
}

export default AddDiscount;
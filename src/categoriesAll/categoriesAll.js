import React from "react";
import '../favorite/favorite.css';
import Discount from "../main/discount/discount";
import '../settingsDiscount/settingsDiscount.css'
import { Link } from "react-router-dom";



function СategoriesAll(props) {
 
    console.log(props.categoriesAll)
    console.log(props.categoriesID)
    return (
        <div className="favorites">
        <div className="setting__buttons look__button">
            <Link to='/'>
                <button className="setting__button" onClick={props.handleBackButton}>Назад</button>
            </Link>
        </div>
    <div className="favorites__container">
        {
            props.categoriesAll.map((value, id) => {
                return (
                    props.categoriesID._id === value.category ?
                    <Discount
                        key={id}
                        discount={value}
                        dataDiscount={props.dataDiscount}
                        loggedIn = {props.loggedIn}
                    />:<></>
                );
            }) 
         
        }


    </div>
</div>


);
}

export default СategoriesAll;
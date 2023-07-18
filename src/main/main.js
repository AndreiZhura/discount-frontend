import React from "react";
import './main.css';
import Search from "./search/search";
import Discount from "./discounts/discounts";
import AddDiscount from '../addDiscount/addDiscount';



function Main(props) {

    return (
        <>
        <main className="main">
         <Search/>
        </main>

        </>
    );
}

export default Main;
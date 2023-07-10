import React from "react";
import './main.css';
import Search from "./search/search";
import Discount from "./discounts/discounts";
import AddDiscount from '../addDiscount/addDiscount';



function Main(props) {

    return (
        <>
        <main className="main">
         <h1 className="main__title">Скидки, акции, промокоды! </h1>
         <Search/>
         <Discount/>
        </main>
        <AddDiscount/>
        </>
    );
}

export default Main;
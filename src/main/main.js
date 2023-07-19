import React from "react";
import './main.css';
import Search from "./search/search";
import Categories from "./categories/categories";
import AddDiscount from '../addDiscount/addDiscount';



function Main(props) {

    return (
        <>
        <main className="main">
         <Search/>
         <Categories/>
        </main>

        </>
    );
}

export default Main;
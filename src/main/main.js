import React from "react";
import './main.css';
import Search from "./search/search";
import Categories from "./categories/categories";
import AddCategories from "./addCategories/addCategories";



function Main(props) {

    return (
        <>
        <main className="main">
         <Search/>
         <Categories/>
         <Categories/>
         <AddCategories/>
        </main>

        </>
    );
}

export default Main;
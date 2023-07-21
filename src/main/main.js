import React from "react";
import './main.css';
import Search from "./search/search";
import Categories from "./categories/categories";
import AddCategories from "./addCategories/addCategories";
import Favorites from "./favorites/favorites";



function Main(props) {

    return (
        <>
        <main className="main">
         <Search/>
         <Favorites/>
        </main>

        </>
    );
}

export default Main;
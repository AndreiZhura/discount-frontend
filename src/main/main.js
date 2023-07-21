import React from "react";
import './main.css';
import Search from "./search/search";
import Categories from "./categories/categories";
import AddCategories from "./addCategories/addCategories";
import Footer from "./footer/footer";



function Main(props) {

    return (
        <>
            <main className="main">
                <Search />
                <Categories />
                <Categories />
                <AddCategories />
            </main>
            <Footer />
        </>
    );
}

export default Main;
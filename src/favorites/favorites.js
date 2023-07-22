import React from "react";
import './favorites';
import Favorite from "../favorite/favorite";
import Search from "../main/search/search";
import Footer from "../main/footer/footer";

function Favorites() {
    return (
    <>
    <Search/>
    <Favorite/>
    <Footer/>
    </>);
}

export default Favorites;
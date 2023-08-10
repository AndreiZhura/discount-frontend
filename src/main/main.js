import React, { useState } from "react";
import './main.css';
import Search from "./search/search";
import Categories from "./categories/categories";
import AddCategories from "./addCategories/addCategories";
import Favorite from '../favorite/favorite'
import Footer from "./footer/footer";



function Main(props) {

    const [search, setSearch] = useState('');
    const [click, setClick] = useState(false);


    function onInputHandler(value) {
        setSearch(value);
    }

    function SearchClick(e) {
        e.preventDefault()
        if (search === "") {
            setClick(false)
        } else {
            setClick(true)
        }


    }



    return (
        <>
            <main className="main">
                <Search
                    search={search}
                    onInputHandler={onInputHandler}
                    SearchClick={SearchClick}
                />

                {click === true ?
                props.discount.map((value)=>{
                    <Favorite
                    search={search}
                    discount={value}
                    /> 
                }):
                    props.category.length === 0 ? <></> :
                        props.category.map((category, id) => {
                            return (
                                <Categories
                                    key={id}
                                    category={category}
                                    discount={props.discount}
                                    onChange={props.onChange}
                                    dataDiscount={props.dataDiscount}
                                    infoCategoryID={props.infoCategoryID}
                                />
                            )
                        })}


                <AddCategories
                    handleNewCategory={props.handleNewCategory}
                />
            </main>
            <Footer />
        </>
    );
}

export default Main;
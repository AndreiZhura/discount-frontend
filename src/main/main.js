import React, { useState } from "react";
import './main.css';
import Search from "./search/search";
import Categories from "./categories/categories";
import AddCategories from "./addCategories/addCategories";
import Favorite from '../favorite/favorite'
import PopupDeleteCategories from './popupDeleteCategory/popupDeleteCategory'
import Footer from "./footer/footer";



function Main(props) {

    const [search, setSearch] = useState('');
    const [click, setClick] = useState(false);

    const [popupInform, setPopupInform] = useState('');
    const [popupClose, setPopupClose] = useState(false);
    const [popupDelete, setPopupDelete] = useState(false);
    const [categoryId, setCAtegoryId] = useState('');
    const [cardSize, setCardSize] = useState(true)

    function onInputHandler(value) {
        setCardSize(false);
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
      
    function handleBackButton(){
        setClick(false)
    }


    function handlePopup(text, bool) {
        if (text, bool) {
            setPopupInform(text);
            setPopupDelete(bool);
            setPopupClose(!popupClose);
        }
        else if (text, bool === false) {
            setPopupInform(text);
            setPopupDelete(bool);
            setPopupClose(!popupClose);
        }
        else {
            setPopupClose(!popupClose);
        }
    }

    function handleDeleteCategory() {
        props.DeleteCategory(categoryId);
        setPopupClose(!popupClose);
    }

    return (
        <>
            <main className="main">
                <PopupDeleteCategories
                    popupInform={popupInform}
                    popupClose={popupClose}
                    handlePopup={handlePopup}
                    popupDelete={popupDelete}
                    handleDeleteCategory={handleDeleteCategory}
                />
                <Search
                    search={search}
                    onInputHandler={onInputHandler}
                    SearchClick={SearchClick}
                    loggedIn={props.loggedIn}
                />

                {click === true ?

                    <Favorite
                        search={search}
                        cardSize = {cardSize}
                        discount={props.discount}
                        dataDiscount={props.dataDiscount}
                        loggedIn={props.loggedIn}
                        handleBackButton = {handleBackButton}
                    />
                    :
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
                                    loggedIn={props.loggedIn}
                                    handlePopup={handlePopup}
                                    setCAtegoryId={setCAtegoryId}
                                    handleUpdateCategory = {props.handleUpdateCategory}
                                    handleAllCAtegories = {props.handleAllCAtegories}
                                    handleCategories = {props.handleCategories}
                                />
                            )
                        })}

                {
                    click === true ? <></> :
                        <AddCategories
                            handleNewCategory={props.handleNewCategory}
                            loggedIn={props.loggedIn}
                        />
                }
            </main>
            <Footer />
        </>
    );
}

export default Main;
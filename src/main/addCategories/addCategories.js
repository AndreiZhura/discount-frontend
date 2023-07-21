import React from "react";
import '../addCategories/addCategories.css'
import '../categories/categories.css'
import AddCategory from '../../img/addCategory.svg';

function AddCategories() {
    return (
        <div className="add-categories">
            <div className="categories__container">
                <div className="categories__name">
                    <img className="categories__name-arrows" src={AddCategory} />
                    <p className="categories__name-title">Добавить категорию</p>
                </div>
            </div>
        </div>
    );
};

export default AddCategories;
import React, { useState } from 'react';
import '../addCategories/addCategories.css'
import '../categories/categories.css'
import AddCategory from '../../img/addCategory.svg';

function AddCategories() {

    const [newCategory, setNewCategory] = useState(false)

    function handleChange() {
        setNewCategory(!newCategory);
    }

    return (
        <>
            <div className='add-categoriesies'>
                <div className='categories__container'>
                    <div className='categories__name'>
                        <button className='categories__button' onClick={handleChange}>
                            <img className='categories__name-arrows categories__name-plus' src={AddCategory} />
                        </button>
                        <p className='categories__name-title'>Добавить новую категорию</p>
                    </div>
                    <form className={newCategory ? "add-categoriesy__form" : "add-categiries__none"}>
                        <input className='add-categoriesy__text' type='text' placeholder='Добавьте категорию' />
                        <button className='add-categiries__data'>Добавить</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default AddCategories;
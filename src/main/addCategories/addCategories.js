import React, { useState } from 'react';
import '../addCategories/addCategories.css'
import '../categories/categories.css'
import AddCategory from '../../img/addCategory.svg';

function AddCategories(props) {

    const [newCategory, setNewCategory] = useState(false);
    const [categoryName, setCAtegoryName] = useState('')

    function handleChange() {
        setNewCategory(!newCategory);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.handleNewCategory(categoryName)
    }

    function handleCategory(evt) {
        setCAtegoryName(evt.target.value);
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
                    <form className={newCategory ? "add-categoriesy__form" : "add-categiries__none"} onSubmit={handleSubmit} >
                        <input className='add-categoriesy__text' type='text' placeholder='Добавьте категорию' onChange={handleCategory}/>
                        <button className='add-categiries__data'>Добавить</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default AddCategories;
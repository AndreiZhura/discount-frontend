import Discounts from "../discounts/discounts";
import arrowsDown from '../../img/arrowsDown.svg'
import '../../settingsDiscount/settingsDiscount.css'
import { useState } from "react";
import { Link } from "react-router-dom";



function Categories(props) {
    

    const [updateCategory, setUpdateCategory] = useState(false);
    const [updateCategoryText, setUpdateCategoryText] = useState('')

    function onClickButtonDelete() {
        const positionCategory = props.discount.map((value) => {
            return value.category === props.category._id
        })

        const filterCategory = positionCategory.filter((filter) => {
            return filter === true
        })
        if (filterCategory.length !== 0) {
            const notDelete = 'данную категорию нельзя удалять пока не удаленны все карточки';
            props.handlePopup(notDelete, false);
            props.setCAtegoryId(props.category._id);
        } else {
            const deleteCategory = 'вы уверенны что хотите удалить данную категорию';
            props.handlePopup(deleteCategory, true);
            props.setCAtegoryId(props.category._id);
        }
    }

    function onClickButtonUpdate() {
        setUpdateCategory(!updateCategory)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.handleUpdateCategory(updateCategoryText, props.category._id)
        setUpdateCategory(!updateCategory)
    }

    function handleCategory(evt) {
        setUpdateCategoryText(evt.target.value);
    }

    function handleAllCategoriesData(){
        props.handleAllCAtegories(props.discount)
        props.handleCategories(props.category)
    }

  


    return (
        <div className="categories">
            <div className="categories__container">
                <div className="categories__name-and-delete">

                    <div className="categories__name">
                        <img className="categories__name-arrows" src={arrowsDown}  alt="стрелочка вниз"/>
                        <p className="categories__name-title">{props.category.categories}</p>

                    </div>
                    <div className="categories__all">
                       <Link to="/categories-all" className="categories__all_button" onClick={handleAllCategoriesData}> Показать все</Link>
                    </div>
                    <div className={props.loggedIn ?"categories__buttons" : "categories__buttons_none"}>
                        <button className="bascet-delete_category" onClick={onClickButtonDelete}></button>
                        <button className="categories__buttons-update" onClick={onClickButtonUpdate}></button>

                    </div>
                </div>
                {
                    updateCategory ?
                        <form className="add-categoriesy__form"
                            onSubmit={handleSubmit}
                        >
                            <input className='add-categoriesy__text'
                                type='text'
                                placeholder='обновите категорию'
                                onChange={handleCategory} />
                            <button
                                className='add-categiries__data'
                            >Обновить</button>
                        </form>
                        :
                        <></>
                }
                <Discounts
                    category={props.category}
                    discount={props.discount}
                    dataDiscount={props.dataDiscount}
                    infoCategoryID={props.infoCategoryID}
                    handleAddDiscount={props.handleAddDiscount}
                    loggedIn={props.loggedIn}
                />

            </div>

        </div>
    );
};

export default Categories;
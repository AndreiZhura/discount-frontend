import Discounts from "../discounts/discounts";
import arrowsDown from '../../img/arrowsDown.svg'
import '../../settingsDiscount/settingsDiscount.css'
import { useState } from "react";




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


    return (
        <div className="categories">
            <div className="categories__container">
                <div className="categories__name-and-delete">

                    <div className="categories__name">
                        <img className="categories__name-arrows" src={arrowsDown} />
                        <p className="categories__name-title">{props.category.categories}</p>
                        {props.loggedIn ?
                            <button className="categories__buttons-update" onClick={onClickButtonUpdate}></button> : <></>
                        }

                    </div>
                    {
                        props.loggedIn ?
                            <button className="bascet-delete bascet-delete_category" onClick={onClickButtonDelete}></button> : <></>
                    }
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
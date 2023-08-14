import Discounts from "../discounts/discounts";
import arrowsDown from '../../img/arrow_to_down.svg'
import '../../settingsDiscount/settingsDiscount.css'




function Categories(props) {

    function onClickButton(){
       const positionCategory =  props.discount.map((value)=>{
            return value.category === props.category._id
        })

        const filterCategory = positionCategory.filter((filter)=>{
            return filter === true
        })
        if(filterCategory.length !== 0 ){
          console.log('данную категорию нельзя удалять пока не удаленны все карточки')
        }
       

        
    }

    return (
        <div className="categories">
            <div className="categories__container">
                <div className="categories__name">
                    <img className="categories__name-arrows" src={arrowsDown} />
                    <p className="categories__name-title">{props.category.categories}</p>
                    <button className="bascet-delete bascet-delete_category" onClick={onClickButton}></button>
                </div>
                    <Discounts
                        category={props.category}
                        discount={props.discount}
                        dataDiscount={props.dataDiscount}
                        infoCategoryID = {props.infoCategoryID}
                        handleAddDiscount = {props.handleAddDiscount}
                        loggedIn = {props.loggedIn}
                    />
                
            </div>

        </div>
    );
};

export default Categories;
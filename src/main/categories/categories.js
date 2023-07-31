import Discounts from "../discounts/discounts";
import arrowsDown from '../../img/arrow_to_down.svg'
import AddDiscount from "../addDiscount/addDiscount";



function Categories(props) {
 
    return (
        <div className="categories">
            <div className="categories__container">
                <div className="categories__name">
                    <img className="categories__name-arrows" src={arrowsDown} />
                    <p className="categories__name-title">{props.category.categories}</p>
                </div>

                    <Discounts
                    
                        category={props.category}
                        discount={props.discount}
                        func={props.func}
                    />
                
            </div>

        </div>
    );
};

export default Categories;
import Discounts from "../discounts/discounts";
import arrowsDown from '../../img/arrow_to_down.svg'


function Categories(props) {
    //console.log(props.discount.name)
    //console.log( props.category)
    return (
        <div className="categories">
            <div className="categories__container">
                <div className="categories__name">
                    <img className="categories__name-arrows" src={arrowsDown} />
                    <p className="categories__name-title">{props.category.categories}</p>
                </div>
                {
                    props.discount.length === 0 ? <p>Добавьте акцию</p> :
                        props.discount.map((discount) => {
                            return (
                                <Discounts
                                    category={props.category}
                                    discount={discount}
                                />
                            );
                        })
                }
            </div>

        </div>
    );
};

export default Categories;
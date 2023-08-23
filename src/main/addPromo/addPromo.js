import React from "react";
import '../../settingsDiscount/settingsDiscount'

function AddPromo(props) {



    return (
        <>

            <div className="input__promocode">
                <textarea
                    className="input__text input__text_description-promocode"
                    id="add-text"
                    name="add-text"
                    placeholder="описание промокода"
                    onChange={props.handlePromocodeDescription}
                >
                </textarea>
                <input type="text"
                    placeholder="Промокод"
                    className="input__add-promocode"
                    onChange={props.handlePromocode}
                />
                <input type="date"
                    className="input__add-date"
                    placeholder="До __ __ ______г."
                    onChange={props.handleData}
                />
            </div>

        </>
    );
}

export default AddPromo;
import React from "react";
import '../../settingsDiscount/settingsDiscount'

function AddPromo(props){


    return(
        <>
      
             <div className="input__promocode">
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
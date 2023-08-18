import React, { useState } from "react";
import '../../settingsDiscount/settingsDiscount'

function AddPromoSetting(props) {
     

    const [description, setDescription] = useState('')
    const [promocode, setPromocode] = useState('');
    const [date, setDate] = useState('');
 
    
    function handleSubmitPromo(e){
        e.preventDefault();
        props.handlePromo(description,promocode, date,props.infoDiscount._id)
        props.setCounter(0);
    }

   function handleDescription(e){
    setDescription(e.target.value)
   }

    function handlePromocode(e) {
        setPromocode(e.target.value);
    }

    function handleData(e) {
        setDate(e.target.value);
    }


    return (
        <>
            <div>
                <div className="input__promocode">
                <textarea
                    className="input__text input__text_description-promocode"
                    id="add-text"
                    name="add-text"
                    placeholder="описание промокода"
                    onChange={handleDescription}
                >
                </textarea>
                    <input type="text"
                        placeholder="Промокод"
                        className="input__add-promocode"
                        onChange={handlePromocode}
                    />
                    <input type="date"
                        className="input__add-date"
                        placeholder="До __ __ ______г."
                        onChange={handleData}
                    />
                </div>
                <button className="setting__button setting__buttons_add-discount" onClick={handleSubmitPromo}  >СОХРАНИТЬ</button>
            </div>

        </>
    );
}

export default AddPromoSetting;
import React, { useState } from "react";
import '../../settingsDiscount/settingsDiscount'
import settingLogo from '../../img/setting.svg'
import addPictures from '../../img/add-pictyres.svg'
import plusAdd from '../../img/plusAdd.svg'


function DiscountAdd(props) {
    const [name, setName] = useState('');
    const [image, setImage] = useState(null);
    const [description, setDescription] = useState('');
    const [promocode, setPromocode] = useState('');
    const [link, setLink] = useState('');
    const [barcode, setBarcode] = useState('');
    const [date, setDate] = useState(null);
    const [category, setCategory] = useState('')

    
    function handleSubmit(e) {
        e.preventDefault();
        setCategory(props.categoryID)
        props.handleAddDiscount(name,image,description,promocode,link,barcode,date,props.categoryID);

    }

    function handleName(e) {
        setName(e.target.value)
    }

    function handleImage(e) {
        setImage(e.target.value)
    }

    function handleDescription(e) {
        setDescription(e.target.value);
    }

    function handlePromocode(e) {
        setPromocode(e.target.value);
    }

    
    function handleLink(e) {
        setLink(e.target.value);
    }
    
    function handleBarcode(e){
        setBarcode(e.target.value);
    }
    
    function handleData(e) {
        setDate(e.target.value);
    }

    

    return (
        <div className="settings">
            <form className="setting" onSubmit={handleSubmit}>
                <div className="setting__logo">
                    <img src={settingLogo} />
                    <p className="setting__text">НАСТРОЙКИ</p>
                </div>
                <input
                    className="setting__name-discount"
                    type="text"
                    placeholder="Название скидки"
                    onChange={handleName}
                />
                <div className="input__file">
                    <input type="text"
                        onChange={handleImage}
                        className="input__file-add"
                        placeholder="Добавить картинку"
                        name="add-file"
                        id="add-file" />
                    <img className="input-file-img" src={addPictures} />
                    <label for="add-file" className="input__file-label">Добавить картинку</label>
                </div>
                <textarea
                    className="input__text"
                    id="add-text"
                    name="add-text"
                    placeholder="Описание данного сервиса..."
                    onChange={handleDescription}></textarea>
                <p className="input__add-text" for='add-text'>Описание промокода</p>
                <div className="input__promocode">
                    <input type="text"
                        placeholder="Промокод"
                        className="input__add-promocode"
                        onChange={handlePromocode}
                    />
                    <input type="text"
                        className="input__add-date"
                        placeholder="До __ __ ______г."
                        onChange={handleData}
                    />
                </div>
                <button className="input__button-promocode" for='add-text'>Добавить промокод</button>
                <input
                    type="text"
                    className="input__add-link"
                    placeholder="Добавить ссылку"
                    onChange={handleLink}
                />
                <div className="input__barcode">
                    <input
                        type="text"
                        className="input__barcode-add"
                        placeholder="Добавить штрихкоде"
                        name="add-barcode"
                        id="add-barcode"
                        onChange={handleBarcode}
                    />
                    <img className="input-barcode-img" src={plusAdd} />
                    <label for="add-barcode" className="input__file-barcode">Добавить штрихкод</label>
                </div>
                <div className="setting__buttons setting__buttons_add-discount">
                    <button className="setting__button">СОХРАНИТЬ</button>
                </div>
            </form>
        </div>
    );
}

export default DiscountAdd;
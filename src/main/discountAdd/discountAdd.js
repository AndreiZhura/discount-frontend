import React, { useState } from "react";
import '../../settingsDiscount/settingsDiscount'
import settingLogo from '../../img/setting.svg'
import addPictures from '../../img/add-pictyres.svg'
import plusAdd from '../../img/plusAdd.svg'
import AddPromo from "../addPromo/addPromo";


function DiscountAdd(props) {
    const [counter, setCounter] = useState(true);
    const [name, setName] = useState('');
    const [image, setImage] = useState(null);
    const [description, setDescription] = useState('');
    const [link, setLink] = useState('');
    const [barcode, setBarcode] = useState('');
    const [promocode, setPromocode] = useState('');
    const [date, setDate] = useState('');

    const [save, setSave] = useState(false);


    function SaveCArd() {
        setSave(!save)
    }

    function handleClick() {
        setCounter(!counter)
    }



    function handleSubmit(e) {
        e.preventDefault();
        props.handleAddDiscount(name, image, description, link, barcode, props.categoryID, promocode, date,);

    }

    function handleName(e) {
        setName(e.target.value)
    }

    function handleImage(e) {

        setImage(e.target.files[0])
    }

    function handleDescription(e) {

        setDescription(e.target.value);
    }

    function handlePromocode(e) {
        setPromocode(e.target.value);
    }

    function handleData(e) {
        console.log(e.target.value)
        setDate(e.target.value);
    }

    function handleLink(e) {

        setLink(e.target.value);
    }

    function handleBarcode(e) {
        setBarcode(e.target.files[0]);

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
                    <input type="file"
                        onChange={handleImage}
                        className="input__file-add"
                        placeholder="Добавить картинку"
                        name="add-file"
                        multiple
                        accept="image/png, image/jpeg"
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
                {
                counter ? <></>:
                    <AddPromo
                        handlePromocode={handlePromocode}
                        handleData={handleData} />

                }
                {
                    counter ?
                        <button className="input__button-promocode" for='add-text' onClick={handleClick} >Добавить промокод</button>
                        : <></>
                }

                <input
                    type="text"
                    className="input__add-link"
                    placeholder="Добавить ссылку"
                    onChange={handleLink}
                />
                <div className="input__barcode">
                    <input
                        type="file"
                        className="input__barcode-add"
                        placeholder="Добавить штрихкоде"
                        name="add-barcode"
                        multiple
                        accept="image/png, image/jpeg"
                        id="add-barcode"
                        onChange={handleBarcode}
                    />
                    <img className="input-barcode-img" src={plusAdd} />
                    <label for="add-barcode" className="input__file-barcode">Добавить штрихкод</label>
                </div>
                <div className="setting__buttons setting__buttons_add-discount">
                    <button className="setting__button" >СОХРАНИТЬ</button>
                </div>
            </form>
        </div>
    );
}

export default DiscountAdd;
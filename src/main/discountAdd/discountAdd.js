import React, { useState } from "react";
import '../../settingsDiscount/settingsDiscount'
import settingLogo from '../../img/setting.svg'
import addPictures from '../../img/add-pictyres.svg'
import plusAdd from '../../img/plusAdd.svg'
import AddPromo from "../addPromocode/addPromocode";


function DiscountAdd(props) {

    const [name, setName] = useState('');
    const [image, setImage] = useState(null);
    const [description, setDescription] = useState('');
    const [promocode, setPromocode] = useState('');
    const [link, setLink] = useState('');
    const [barcode, setBarcode] = useState('');
    const [date, setDate] = useState(null);
    const [counter, setCounter] = useState(0);
    const [save, setSave] = useState(false);

    function SaveCArd() {
        setSave(!save)
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (save && counter === 0) {
            props.handleAddDiscount(name, image, description, link, barcode, props.categoryID);
        }
        if (save && counter !== 0) {
            console.log(name, image, description, link, barcode, promocode, date, props.categoryID)
            props.handleAddDiscount(name, image, description, link, barcode, promocode, date, props.categoryID);
        }
        else {
            console.log('проверка')
        }

    }

    const handleClick = () => {
        setCounter(counter + 1);
        console.log(counter);
    };

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
        console.log(e.target.value)
        setPromocode(e.target.value);
    }


    function handleLink(e) {

        setLink(e.target.value);
    }

    function handleBarcode(e) {
        setBarcode(e.target.files[0]);

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
                    <input type="file"
                        onChange={handleImage}
                        className="input__file-add"
                        placeholder="Добавить картинку"
                        name="add-file"
                        accept="uploads/*"
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
                    Array.from(Array(counter)).map((id, index) => {
                        return (
                            <AddPromo
                                key={id}
                                handlePromocode={handlePromocode}
                                handleData={handleData} />
                        );
                    })
                }


                <button className="input__button-promocode" for='add-text' onClick={handleClick} >Добавить промокод</button>

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
                        accept="uploads/*"
                        id="add-barcode"
                        onChange={handleBarcode}
                    />
                    <img className="input-barcode-img" src={plusAdd} />
                    <label for="add-barcode" className="input__file-barcode">Добавить штрихкод</label>
                </div>
                <div className="setting__buttons setting__buttons_add-discount">
                    <button className="setting__button" onClick={SaveCArd}>СОХРАНИТЬ</button>
                </div>
            </form>
        </div>
    );
}

export default DiscountAdd;
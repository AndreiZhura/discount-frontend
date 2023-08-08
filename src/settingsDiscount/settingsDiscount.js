import React, { useState } from "react";
import './settingsDiscount.css'
import settingLogo from '../img/setting.svg';
import addPictures from '../img/add-pictyres.svg'
import plusAdd from '../img/plusAdd.svg'
import { Link } from "react-router-dom";
import GetPromocode from "../main/getPromocode/getPromocode";


function SettingsDiscount(props) {
    const base = `http://localhost:3001/`;


    function handleDiscountDelete() {
        props.onCardDelete(props.infoDiscount._id);
    }


    const handleSubmit = (e) => {
        e.preventDefault();
    }



    return (
        <div className="settings">
            <form className="setting" onSubmit={handleSubmit}>
                <div className="setting__logo">
                    <img src={settingLogo} />
                    <p className="setting__text">НАСТРОЙКИ</p>
                </div>
                <input className="setting__name-discount" type="text" placeholder="Название скидки" value={props.infoDiscount.name} />
                {
                    props.infoDiscount.image ?
                        <div className="input__file-container" >
                            <button className="input__file-delete">X</button>
                            <img className="input__file input__file_pull" src={`${base}` + `${props.infoDiscount.image}`} />
                        </div>
                        :
                        <div className="input__file">
                            <input type="file" className="input__file-add" placeholder="Добавить картинку" name="add-file" id="add-file" />
                            <img className="input-file-img" src={addPictures} />
                            <label for="add-file" className="input__file-label">Добавить картинку</label>
                        </div>
                }
                <textarea className="input__text" id="add-text" name="add-text" placeholder="Описание данного сервиса..." >{props.infoDiscount.description}</textarea>
                <p className="input__add-text" for='add-text'>Описание промокода</p>
                {
                    props.promocode.length === 0 ? <></> :
                        props.promocode.map((value, key) => {
                            return (
                                props.infoDiscount._id === value.position ?
                                    <GetPromocode
                                        key={key}
                                        value={value}
                                    /> : <></>
                            );
                        })





                }
                <button className="input__button-promocode" for='add-text'>Добавить промокод</button>
                <input type="text" className="input__add-link" placeholder="Добавить ссылку" />
                {
                    props.infoDiscount.barcode ?
                        <div className="input__barcode-container">
                            <img className="input__barcode-image" src={`${base}` + `${props.infoDiscount.barcode}`} />
                        </div>
                        :
                        <div className="input__barcode">
                            <input type="file" className="input__barcode-add" placeholder="Добавить штрихкоде" name="add-barcode" id="add-barcode" />
                            <img className="input-barcode-img" src={plusAdd} />
                            <label for="add-barcode" className="input__file-barcode">Добавить штрихкод</label>
                        </div>
                }
                <div className="setting__buttons">
                    <button className="setting__button">СОХРАНИТЬ</button>
                    <Link to='/'>
                        <button className="setting__button" onClick={handleDiscountDelete}>УДАЛИТЬ ПРЕДЛОЖЕНИЕ</button>
                    </Link>
                </div>
            </form>
        </div>

    );

}

export default SettingsDiscount;
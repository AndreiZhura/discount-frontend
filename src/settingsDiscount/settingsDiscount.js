import React from "react";
import './settingsDiscount.css'
import settingLogo from '../img/setting.svg';
import addPictures from '../img/add-pictyres.svg'
import plusAdd from '../img/plusAdd.svg'


function SettingsDiscount(props) {
    console.log(props.infoDiscount)
    return (
        <div className="settings">
            <form className="setting">
                <div className="setting__logo">
                    <img src={settingLogo} />
                    <p className="setting__text">НАСТРОЙКИ</p>
                </div>
                <input className="setting__name-discount" type="text" placeholder="Название скидки" value={props.infoDiscount.name} />
                {
                    props.infoDiscount.image ?
                        <div className="input__file-container" >
                            <button className="input__file-delete">X</button>
                            <img className="input__file input__file_pull" src={props.infoDiscount.image} />
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
                <div className="input__promocode">
                    <input type="text" placeholder="Промокод" value={props.infoDiscount.link} className="input__add-promocode" />
                    <input type="text" className="input__add-date" placeholder="До __ __ ______г." value={props.infoDiscount.date} />
                </div>
                <button className="input__button-promocode" for='add-text'>Добавить промокод</button>
                <input type="text" className="input__add-link" placeholder="Добавить ссылку" />
                {
                    props.infoDiscount.barcode ?
                        <div className="input__barcode-container">
                            <img className="input__barcode-image" src={props.infoDiscount.barcode} />
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
                    <button className="setting__button">УДАЛИТЬ ПРЕДЛОЖЕНИЕ</button>
                </div>
            </form>
        </div>

    );

}

export default SettingsDiscount;
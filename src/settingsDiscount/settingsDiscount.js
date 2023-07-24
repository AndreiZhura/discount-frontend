import React from "react";
import './settingsDiscount.css'
import settingLogo from '../img/setting.svg';
import addPictures from '../img/add-pictyres.svg'
import plusAdd from '../img/plusAdd.svg'


function SettingsDiscount() {
    return (
        <div className="settings">
            <form className="setting">
                <div className="setting__logo">
                    <img src={settingLogo} />
                    <p className="setting__text">Настройки</p>
                </div>
                <div className="input__file">
                    <input type="file" className="input__file-add" placeholder="Добавить картинку" name="add-file" id="add-file" />
                    <img className="input-file-img" src={addPictures} />
                    <label for="add-file" className="input__file-label">Добавить картинку</label>
                </div>
                <textarea className="input__text" id="add-text" name="add-text" placeholder="Описание данного сервиса..."></textarea>
                <button className="input__add-text" for='add-text'>Описание промокода</button>
                <div className="input__promocode">
                    <input type="text" placeholder="промокод" className="input__add-promocode" />
                    <input type="text" className="input__add-date" placeholder="до __ __ ____г." />
                </div>
                <button className="input__button-promocode" for='add-text'>Добавить промокод</button>
                <input type="text" className="input__add-link" placeholder="Добавить ссылку" />
                <div className="input__barcode">
                    <input type="file" className="input__barcode-add" placeholder="Добавить штрихкоде" name="add-barcode" id="add-barcode" />
                    <img className="input-barcode-img" src={plusAdd} />
                    <label for="add-barcode" className="input__file-label">Добавить штрихкод</label>
                </div>
                <div className="setting__buttons">
                    <button className="setting__button">Сохранить</button>
                    <button className="setting__button">Удалить предложение</button>
                </div>
            </form>
        </div>

    );

}

export default SettingsDiscount;
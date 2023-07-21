import React from "react";
import './settingsDiscount.css'
import settingLogo from '../img/setting.svg';
import addPictures from '../img/add-pictyres.svg'


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
                <input type="text" className="input__text" />
                <input type="text" />
                <input type="date" />
                <input type="text" />
                <input type="text" />
            </form>
        </div>
    );

}

export default SettingsDiscount;
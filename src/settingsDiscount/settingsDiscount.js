import React from "react";
import './settingsDiscount.css'
import settingLogo from '../img/setting.svg';


function SettingsDiscount(){
    return(
        <div className="settings">
            <form className="setting">
              <div className="setting__logo">
               <img src={settingLogo} />
               <p className="setting__text">Настройки</p>
              </div>
              <input type="file"/>
              <input type="text"/>
              <input type="text"/>
              <input type="date"/>
              <input type="text"/>
              <input type="text"/>
            </form>
        </div>
    );

}

export default SettingsDiscount;
import React, { useState } from "react";
import './settingsDiscount.css'
import settingLogo from '../img/setting.svg';
import addPictures from '../img/add-pictyres.svg'
import plusAdd from '../img/plusAdd.svg'
import { Link } from "react-router-dom";
import GetPromocode from "../main/getPromocode/getPromocode";
import AddPromoSetting from "../main/addPromocodeSetting/addPromocodeSetting";
import { BASE_URL } from "../constants/constants";


function SettingsDiscount(props) {
    const [counter, setCounter] = useState(0);
    const [name, setName] = useState(props.infoDiscount.name);
    const [description, setDescription] = useState(props.infoDiscount.description);
    const [link, setLink] = useState(props.infoDiscount.link);


    function handleClick() {
        setCounter(!counter)
    }

    function handleDiscountDelete() {
        props.onCardDelete(props.infoDiscount._id);
    }



    function handleSubmit(e) {
        e.preventDefault();
        props.handleUpdateDiscountText(name,  description, link,  props.infoDiscount.category,props.infoDiscount._id);
       
    }

    function handleName(e) {
        setName(e.target.value)
    }

  

    function handleDescription(e) {
        setDescription(e.target.value);
    }


    function handleLink(e) {
        setLink(e.target.value);
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
                value={name} 
                onChange={handleName}
                />
                {
                    props.infoDiscount.image ?
                        <div className="input__file-container" >
                            <img className="input__file input__file_pull" src={`${BASE_URL}` + `${props.infoDiscount.image}`} />
                        </div>
                        :
                        <div className="input__file">
                            <input 
                            type="file" 
                            className="input__file-add" 
                            placeholder="Добавить картинку" 
                            name="add-file" id="add-file"
                            />
                            <img className="input-file-img" src={addPictures} />
                            <label for="add-file" className="input__file-label">Добавить картинку</label>
                        </div>
                }
                <textarea 
                className="input__text" 
                id="add-text" 
                name="add-text" 
                value={description} 
                onChange={handleDescription}
                >
                </textarea>
                <p className="input__add-text" for='add-text'>Описание промокода</p>
                {
                    props.promocode.length === 0 ? <></> :
                        props.promocode.map((value, key) => {
                            return (
                                props.infoDiscount._id === value.position ?
                                    <GetPromocode
                                        key={key}
                                        value={value}
                                        DeletePromo = {props.DeletePromo}
                                        loggedIn={props.loggedIn}
                                    /> : <></>
                            );
                        })
                }
                {
                    Array.from(Array(counter)).map((id, index) => {
                        return (
                            <AddPromoSetting
                                key = {id}
                                index = {index}
                                infoDiscount = {props.infoDiscount}
                                setCounter={setCounter}
                                handlePromo={props.handlePromo}
                            />
                        );
                    })
                }
                {
                    counter === 0 ?
                        <button className="input__button-promocode" for='add-text' onClick={handleClick} >Добавить промокод</button>
                        : <></>
                }
                <input 
                type="text" 
                className="input__add-link" 
                placeholder="Добавить ссылку"
                value={link}
                onChange={handleLink}
                />
                {
                    props.infoDiscount.barcode ?
                        <div className="input__barcode-container">

                            <img className="input__barcode-image" src={`${BASE_URL}` + `${props.infoDiscount.barcode}`} />
                        </div>
                        :
                        <div className="input__barcode-container">

                        </div>
                }
                <div className="setting__buttons">
                    <button className="setting__button" onClick={handleSubmit} >СОХРАНИТЬ</button>
                    <Link to='/'>
                        <button className="setting__button" onClick={handleDiscountDelete}>УДАЛИТЬ ПРЕДЛОЖЕНИЕ</button>
                    </Link>
                </div>
            </form>
        </div>

    );

}

export default SettingsDiscount;
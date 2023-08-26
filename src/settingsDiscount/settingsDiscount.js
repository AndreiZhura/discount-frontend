import React, { useState } from "react";
import './settingsDiscount.css'
import settingLogo from '../img/setting.svg';
import addPictures from '../img/add-pictyres.svg'
import { Link } from "react-router-dom";
import GetPromocode from "../main/getPromocode/getPromocode";
import AddPromoSetting from "../main/addPromocodeSetting/addPromocodeSetting";
import { BASE_URL } from "../constants/constants";


function SettingsDiscount(props) {
    const [counter, setCounter] = useState(0);
    const [name, setName] = useState(props.infoDiscount.name);
    const [description, setDescription] = useState(props.infoDiscount.description);
    const [link, setLink] = useState(props.infoDiscount.link);
    const [fullTerms, setFullTerms] = useState(props.infoDiscount.fullTerms);


    function handleClick() {
        setCounter(!counter)
    }

    function handleDiscountDelete() {
        props.onCardDelete(props.infoDiscount._id);
    }



    function handleSubmit(e) {
        e.preventDefault();
        props.handleUpdateDiscountText(name, description, link, fullTerms, props.infoDiscount.category, props.infoDiscount._id);

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


    function handleFullTerms(e) {
        setFullTerms(e.target.value)
    }


    return (
        <div className="settings">
            <form className="setting" onSubmit={handleSubmit}>
                <div className="setting__logo">
                    <img src={settingLogo}  alt="логотип"/>
                    <p className="setting__text ">НАСТРОЙКИ</p>
                </div>
                <input
                    className="setting__name-discount setting__text-size"
                    type="text"
                    value={name}
                    onChange={handleName}
                />
                {
                    props.infoDiscount.image ?
                        <div className="input__file-container" >
                            <img className="input__file input__file_pull" src={`${BASE_URL}` + `${props.infoDiscount.image}`} alt="изображение" />
                        </div>
                        :
                        <div className="input__file">
                            <input
                                type="file"
                                className="input__file-add"
                                placeholder="Добавить картинку"
                                name="add-file" id="add-file"
                            />
                            <img className="input-file-img" src={addPictures} alt="изображение картинки" />
                            <label for="add-file" className="input__file-label">Добавить картинку</label>
                        </div>
                }
                <textarea
                    className="input__text setting__text-size"
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
                                        DeletePromo={props.DeletePromo}
                                        loggedIn={props.loggedIn}
                                    /> : <></>
                            );
                        })
                }
                {
                    Array.from(Array(counter)).map((id, index) => {
                        return (
                            <AddPromoSetting
                                key={id}
                                index={index}
                                infoDiscount={props.infoDiscount}
                                setCounter={setCounter}
                                handlePromo={props.handlePromo}
                            />
                        );
                    })
                }
                {
                    counter === 0 ?
                        <button className="input__button-promocode setting__text-size" for='add-text' onClick={handleClick} >Добавить промокод</button>
                        : <></>
                }
                <input
                    type="text"
                    className="input__add-link setting__text-size"
                    placeholder="Добавить ссылку"
                    value={link}
                    onChange={handleLink}
                />
                {
                    props.infoDiscount.barcode ?
                        <div className="input__barcode-container">

                            <img className="input__barcode-image" src={`${BASE_URL}` + `${props.infoDiscount.barcode}`}  alt="штрихкоде"/>
                        </div>
                        :
                        <div className="input__barcode-container ">

                        </div>
                }
                {
                    props.infoDiscount.fullTerms ?
                        <div className="full-terms-add">
                            <label className="full-terms-add-title input__add-text">Добавить полные условия</label>
                            <textarea
                                type="text"
                                className="full-terms-add-input input__text input__text_description-promocode setting__text-size"
                                placeholder="Добавить полные условия"
                                value={fullTerms}
                                onChange={handleFullTerms}
                            ></textarea>
                        </div>
                        :
                        <div className="full-terms-add">
                            <label className="full-terms-add-title input__add-text">Добавить полные условия</label>
                            <textarea
                                type="text"
                                className="full-terms-add-input input__text input__text_description-promocode setting__text-size "
                                placeholder="Добавить полные условия"
                                onChange={handleFullTerms}
                            ></textarea>
                        </div>
                }

                <div className="setting__buttons">
                    <button className="setting__button setting__text-size" onClick={handleSubmit} >СОХРАНИТЬ</button>
                    <Link to='/'>
                        <button className="setting__button setting__text-size" onClick={handleDiscountDelete}>УДАЛИТЬ ПРЕДЛОЖЕНИЕ</button>
                    </Link>
                </div>
            </form>
        </div>

    );

}

export default SettingsDiscount;
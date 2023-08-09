import React from "react";
import '../settingsDiscount/settingsDiscount.css'
import './lookDiscount.css'
import GetPromocode from "../main/getPromocode/getPromocode";
import { Link } from "react-router-dom";
import addPictures from '../img/add-pictyres.svg'

function LookDiscount(props) {

    const base = `http://localhost:3001/`;

    return (
        <div className="settings">
            <div className="setting" >

                <input className="setting__name-discount" type="text" placeholder="Название скидки" defaultValue={props.infoDiscount.name} />
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
                                        handleDeletePromo={props.handleDeletePromo}
                                    /> : <></>
                            );
                        })
                }
                <button className="button__link">
                    <a href={props.infoDiscount.link} target="_blan" className="button__text">
                        Перейти на страницу акции
                    </a>
                </button>
          
                
                {
                    props.infoDiscount.barcode ?
                        <div className="input__barcode-container">
                            <img className="input__barcode-image" src={`${base}` + `${props.infoDiscount.barcode}`} />
                        </div>
                        :
                        <div className="input__barcode">
                            <input type="file" className="input__barcode-add" placeholder="Добавить штрихкоде" name="add-barcode" id="add-barcode" />
                            <label for="add-barcode" className="input__file-barcode">Добавить штрихкод</label>
                        </div>
                }
                <div className="setting__buttons">
                    <Link to='/'>
                        <button className="setting__button">Назад</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default LookDiscount;
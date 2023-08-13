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

                <input 
                className="setting__name-discount" 
                type="text" placeholder="Название скидки" 
                defaultValue={props.infoDiscount.name} />
                {
                    props.infoDiscount.image ?
                        <div className="look__file-container" >
                            <img className="look__file-container" 
                            src={`${base}` + `${props.infoDiscount.image}`} />
                        </div> : <></>
                }


                <textarea 
                className="input__text" 
                id="add-text" 
                name="add-text" 
                placeholder="Описание данного сервиса..." 
                defaultValue = {props.infoDiscount.description} ></textarea>
                <p className="input__add-text" for='add-text'>Описание промокода</p>
                {
                    props.promocode.length === 0 ? <></> :
                        props.promocode.map((value) => {
                            return (
                                props.infoDiscount._id === value.position ?
                                    <GetPromocode
                                        key={value._id}
                                        value={value}
                                        handleDeletePromo={props.handleDeletePromo}
                                        loggedIn={props.loggedIn}
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
                        <div className="look__file-container">
                            <img className="look__file-container" src={`${base}` + `${props.infoDiscount.barcode}`} />
                        </div>
                        :
                        <>
                        </>
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
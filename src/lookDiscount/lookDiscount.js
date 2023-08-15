import React from "react";
import '../settingsDiscount/settingsDiscount.css'
import './lookDiscount.css'
import GetPromocodePeople from "../main/getPromocodePeople/getPromocodePeople";
import { Link } from "react-router-dom";

function LookDiscount(props) {

    const base = `http://localhost:3001/`;

    return (
        <div className="settings">
            <div className="setting" >

                <p className="setting__name-discount look__text-padding " >{props.infoDiscount.name}</p>
                {
                    props.infoDiscount.image ?
                        <div className="look__file-container" >
                            <img className="look__file-image" 
                            src={`${base}` + `${props.infoDiscount.image}`} />
                        </div> : <></>
                }


                <p
                className="input__text">{props.infoDiscount.description}</p>
                <p className="input__add-text" for='add-text'>Описание промокода</p>
                {
                    props.promocode.length === 0 ? <></> :
                        props.promocode.map((value) => {
                            return (
                                props.infoDiscount._id === value.position ?
                                    <GetPromocodePeople
                                        key={value._id}
                                        value={value}
                                    /> : <></>
                            );
                        })
                }
                <button className="button__link">
                    <a href={props.infoDiscount.link} target="_blank" className="button__text">
                        Перейти на страницу акции
                    </a>
                </button>


                {
                    props.infoDiscount.barcode ?
                        <div className="look__file-container">
                            <img className="look__file-image" src={`${base}` + `${props.infoDiscount.barcode}`} />
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
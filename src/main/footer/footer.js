import React from "react";
import './footer.css';
import { Link } from "react-router-dom";

function Footer(){
    return(
        <footer className="footer">
         <div className="footer__container">
            <Link to="/favorites" className="footer__favorite-like"></Link>
            <button className="footer__group">Название группы</button>
            <button className="footer__connect">Обратная связь</button>
         </div>
         <div className="secret-button">
           <Link to="/signin" className="secret-button__link">Войти</Link>
         </div>
        </footer>
    );
}

export default Footer;
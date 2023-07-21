import React from "react";
import './footer.css';

function Footer(){
    return(
        <footer className="footer">
         <div className="footer__container">
            <button className="footer__favorite-like"></button>
            <button className="footer__group">Название группы</button>
            <button className="footer__connect">Обратная связь</button>
         </div>
        </footer>
    );
}

export default Footer;
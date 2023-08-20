import React, { useState } from "react";
import './footer.css';


function Footer(props) {

    const [fullTermsText, setFullTermsText] = useState(false);

    function handleFullTermsText() {
        setFullTermsText(!fullTermsText);
    }
//footer footer_no-full-terms
    return (
        <footer className={props.infoDiscount ? "footer footer_full-terms" : "footer footer_no-full-terms"}>
            {
                props.infoDiscount ?
                    <div className="full-terms">
                        <button className="full-terms__buttons" onClick={handleFullTermsText}>Полные условия</button>
                        {
                            fullTermsText ?
                                <p className="full-terms__text"> здесь будет текст полных условий</p>
                                :
                                <></>
                        }
                    </div>
                    :
                    <></>
            }
            <div className="footer__container">
                <a className="footer__group" href="https://vk.com/travel_skidki" target="_blank">Vse Skidki</a>
                <a className="footer__connect" href="https://vk.com/im?sel=-220114557  " target="_blank">ОБРАТНАЯ СВЯЗЬ</a>
            </div>
        </footer>
    );
}

export default Footer;
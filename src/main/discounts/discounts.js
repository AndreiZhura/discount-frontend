import React, {useState} from "react";
import './discounts.css'
import Discount from "../discount/discount";
import AddDiscount from "../addDiscount/addDiscount";

import { Swiper, SwiperSlide } from 'swiper/react';
import { BASE_URL } from "../../constants/constants";

import 'swiper/css';



function Discounts(props) {
    console.log(props.discount)
    return (
        <div className="discounts">
           <Swiper
                spaceBetween={50}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
              
                { props.discount.length === 0 ? <></> :
                     props.discount.map((value)=>{
                           return(
                            props.category._id === value.category ?
                            <SwiperSlide>
                                    <div className="discount">
                                    <div className="discount__main">
                                        < img className="discount__image" src={`${BASE_URL}` + `${value.image}`} />
                                    </div>
                                </div>
                            </SwiperSlide> : <></>
                           )
                     })
                }
    
            </Swiper>
            <AddDiscount
              handleAddDiscount = {props.handleAddDiscount}
              category = {props.category}
              infoCategoryID = {props.infoCategoryID}
              loggedIn = {props.loggedIn}
            />
        </div>
    );
}

export default Discounts;
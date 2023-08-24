import React, { useState } from "react";
import './discounts.css'
import Discount from "../discount/discount";
import AddDiscount from "../addDiscount/addDiscount";

import { Swiper, SwiperSlide } from 'swiper/react';
import { BASE_URL } from "../../constants/constants";
import { Link } from "react-router-dom";

import 'swiper/css';



function Discounts(props) {


    function DataDiscount() {
        props.dataDiscount(props.discount)
        console.log(props.discount)
    }


    return (
        <div className="discounts">
            <Swiper
                spaceBetween={10}
                slidesPerView={2}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >

                {props.discount.length === 0 ? <></> :
                    props.discount.map((discount, id) =>{
                        return (
                            props.category._id === discount.category ?
                                <SwiperSlide>
                                  <Discount
                                    key={discount._id}
                                    discount={discount}
                                    dataDiscount={props.dataDiscount}
                                    loggedIn = {props.loggedIn}
                                /> 
                                </SwiperSlide> : <></>
                        )
                    })
                }

            </Swiper>
            <AddDiscount
                handleAddDiscount={props.handleAddDiscount}
                category={props.category}
                infoCategoryID={props.infoCategoryID}
                loggedIn={props.loggedIn}
            />
        </div>
    );
}

export default Discounts;
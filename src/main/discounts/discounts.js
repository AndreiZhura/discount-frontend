import React, { useState } from "react";
import './discounts.css'
import Discount from "../discount/discount";
import AddDiscount from "../addDiscount/addDiscount";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { BASE_URL } from "../../constants/constants";
// Import Swiper styles
import 'swiper/css';
import { Link } from "react-router-dom";



function Discounts(props) {
    return (
        <>
            <Swiper
                spaceBetween={50}
                slidesPerView={2}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {
                    props.discount.map((value) => {
                        return (
                            <SwiperSlide>
                                <div>
                                <Link
                                to="/setting"
                                className="discount__setting"
                               ></Link> 
                                <img className="discount__slide" alt="поиск" src={`${BASE_URL}` + `${value.image}`} />
                                </div>
                            </SwiperSlide>
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
            <div className="discounts">

                {
                    props.discount.length === 0 ? <></> :
                        props.discount.map((discount, id) => {
                            return (
                                props.category._id === discount.category ?
                                    <Discount
                                        key={discount._id}
                                        discount={discount}
                                        dataDiscount={props.dataDiscount}
                                        loggedIn={props.loggedIn}
                                    /> : <></>
                            );
                        })
                }
                <AddDiscount
                    handleAddDiscount={props.handleAddDiscount}
                    category={props.category}
                    infoCategoryID={props.infoCategoryID}
                    loggedIn={props.loggedIn}
                />
            </div>
        </>

    );
}

export default Discounts;
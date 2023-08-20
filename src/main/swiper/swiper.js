import React, { useState } from "react";


import AddDiscount from "../addDiscount/addDiscount";

import { Swiper, SwiperSlide } from 'swiper/react';
import { BASE_URL } from "../../constants/constants";

import 'swiper/css';



function MYSwiper(props) {

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
                                <div className="discount">
                                    <div className="discount__main">
                                        < img className="discount__image" src={`${BASE_URL}` + `${value.image}`} />
                                    </div>
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
        </>

    );
}

export default MYSwiper;
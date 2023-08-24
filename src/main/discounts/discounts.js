import React, { useState } from "react";
import './discounts.css'
import Discount from "../discount/discount";
import AddDiscount from "../addDiscount/addDiscount";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
//import 'swiper/css/navigation';
import 'swiper/css/pagination';
//import 'swiper/css/scrollbar';



function Discounts(props) {

    return (
        <div className="discounts">
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={10}
                slidesPerView={2}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {props.discount.length === 0 ? <></> :
                    props.discount.map((discount, id) => {
                        return (
                            props.category._id === discount.category ?
                                <SwiperSlide>
                                    <Discount
                                        key={discount._id}
                                        discount={discount}
                                        dataDiscount={props.dataDiscount}
                                        loggedIn={props.loggedIn}
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
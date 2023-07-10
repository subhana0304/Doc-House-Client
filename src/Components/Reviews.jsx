import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";


const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('review.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className="px-10 md:px-20 my-10 md:mx-10">
            <Swiper
                slidesPerView={2}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode]}
                className="mySwiper"
            >
                {
                    reviews.map(review => <SwiperSlide key={review.id}>
                        <div className="border p-4 md:p-10 rounded">
                            <div className="flex justify-between items-center">
                                <div className="md:flex items-center">
                                    <img className="w-[65px] h-[65px] rounded-full border border-[#F7A582]" src={review.image_name} alt="" />
                                    <div className="md:ms-10">
                                        <h3 className="text-xl font-semibold">{review.name}</h3>
                                        <p className="text-sm">{review.profession}</p>
                                    </div>
                                </div>
                                <div>
                                    <img src="../../public/review.png" alt="" />
                                </div>
                            </div>
                            <div>
                                <p className="text-sm mt-5">{review.description}</p>
                            </div>
                        </div>
                    </SwiperSlide>)
                }

            </Swiper>
        </div>
    );
};

export default Reviews;
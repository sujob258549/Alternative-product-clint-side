
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import '@smastrom/react-rating/style.css'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';



// import required modules
// import { Pagination } from 'swiper/modules';
import { useState } from 'react';
import { Rating } from '@smastrom/react-rating';
import { Autoplay,Pagination, Navigation } from 'swiper/modules'
// import { IoTennisball } from 'react-icons/io5';

export default function RatingSlider() {
    const [data, setdata] = useState([])

    fetch('../../../public/fecdata.json')
        .then(res => res.json())
        .then(data => {
            setdata(data)
        })
    return (
        <>
            <Swiper
                loop={true}
                autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                }}
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Pagination, Navigation]}
                classNameName="mySwiper"
            >

                {
                    data.map(item => (
                        <div key={item.name}>
                            <SwiperSlide>
                                <div className="bg-gray-200 rounded-lg p-8 text-center max-h-80 flex flex-col justify-between">
                                    <div>
                                        <p className="font-bold uppercase">{item.name}</p>
                                        <p className="text-xl font-light italic text-gray-700">{item.description}</p>
                                        <div className="flex justify-center items-center space-x-2 mt-4 ">
                                            <Rating
                                                style={{ maxWidth: 150 }}
                                                value={item.rating}
                                                readOnly
                                            />
                                        </div>



                                    </div>
                                </div>

                            </SwiperSlide>
                        </div>
                    ))
                }

            </Swiper>
        </>
    );
}





// export default function App() {
//   return (
//     <>
//       <Swiper
//         slidesPerView={3}
//         spaceBetween={30}
//         pagination={{
//           clickable: true,
//         }}
//         modules={[Pagination]}
//         classNameName="mySwiper"
//       >
//         <SwiperSlide>Slide 1</SwiperSlide>
//         <SwiperSlide>Slide 2</SwiperSlide>
//         <SwiperSlide>Slide 3</SwiperSlide>
//         <SwiperSlide>Slide 4</SwiperSlide>
//         <SwiperSlide>Slide 5</SwiperSlide>
//         <SwiperSlide>Slide 6</SwiperSlide>
//         <SwiperSlide>Slide 7</SwiperSlide>
//         <SwiperSlide>Slide 8</SwiperSlide>
//         <SwiperSlide>Slide 9</SwiperSlide>
//       </Swiper>
//     </>
//   );
// }

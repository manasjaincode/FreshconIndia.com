"use client"
import Image from 'next/image'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";


const Review = () => {
    const TestimonialData = 
    [
        {
            "id": 1,
             "review":"An Instant Kitchen Essential",
             "content":"I can't believe how much time I've saved since I started using these pre-cooked chickpeas and rajma! As a working mom, I need quick meal solutions, and these products are a lifesaver. The taste is just like homemade, and I love that there are no preservatives. It’s become a staple in my kitchen.",
             "name":"Seema Paliwal",
             "role":"Powai",
        },
        {
            "id": 2,
            "review":"Perfect for Quick, Healthy Meals",
            "content":"I’m always looking for healthy, easy-to-cook ingredients, and these pre-cooked kabuli chana are a game-changer. I’ve made chana masala, hummus, and even tossed them into my salads for extra protein. The fact that they don’t need refrigeration is such a bonus. Highly recommend for anyone short on time but big on flavor!",
            "name":"Chaitanya Panicker",
            "role":"Bandra",
        },
        {
            "id": 3,
            "review":"Fresh, Flavorful, and Convenient",
            "content":"I was skeptical about the 'no preservatives' claim, but these corn kernels are fantastic! They taste fresh and sweet, just like they were freshly harvested. I use them in everything from salads to stir-fries, and I’m so happy I don’t have to worry about them going bad quickly. A must-have for busy kitchens.",
            "name":"Shubham Tiwari",
            "role":"Andheri(E)",
        },

    ]
  return (
    <>
      <section className="text-gray-600 py-8 lg:py-16">
                <div className="">
                 <div className="lg:max-w-[1300px] px-4 md:px-8 mx-auto">
                   <div className="flex flex-col text-center w-full mb-10">
                    <h1 className="lg:text-4xl text-3xl font-extrabold title-font mb-4 text-green-900">Reviews</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-800">
                    Our customers aren’t just consumers; they are creators. They’ve taken our products and woven them into the fabric of their daily lives. Here’s what they have to say:
                   </p>
                </div>
                        {/* Swiper start  */}
                        <Swiper
                            slidesPerView={2}
                            spaceBetween={30}
                            freeMode={true}
                            loop={true}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false
                            }}

                            modules={[FreeMode, Pagination, Autoplay]}
                            breakpoints={{
                                276: {
                                    slidesPerView: 1,
                                },
                                768: {
                                    slidesPerView: 2,
                                },
                                1024: {
                                    slidesPerView: 3,
                                },
                            }}
                            className="mySwiper">
                            {
                                TestimonialData.map((data) => {
                                    return (
                                        <SwiperSlide key={data.id}>  
                                        <div>
                                          <div className="w-full text-gray-600">
                                            <div className="h-full rounded-2xl border  bg-white border-gray-300">
                                              <p className="leading-relaxed mb-2 text-lg font-bold px-5 pt-5">{data.review}</p>
                                              
                                              <p className="leading-relaxed mb-6 text-[15px] px-5">&quot; {data.content} &quot;</p>
                                              <div className="inline-flex items-center bg-gray-100 px-5 pt-2 pb-[6px] rounded-b-2xl w-full">
                                                {/* <Image src={data.image} alt="" className="w-12 h-12 rounded-full object-cover object-center" width={80} height={100}></Image> */}
                                                <span className="flex-grow flex flex-col pl-4">
                                                  <span className="font-semibold text-neutral-800">{data.name}</span>
                                                  <span className="text-gray-600 text-sm">{data.role}</span>
                                                </span>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        </SwiperSlide>
                                    )
                                })
                            }
                        </Swiper>
                    </div>
                </div>
            </section>
    </>
  )
}

export default Review
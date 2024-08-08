import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import {FaStar} from "react-icons/fa6"
import { Avatar } from "flowbite-react";
import proPic from "../assets/profile.jpg";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

const Review = () => {
  return (
    <div className='my-12 px-4 lg:px-24'>
        <h2 className='text-5xl font-bold text-center mb-10 leading-snug'>Our Customers </h2>
        <div>
        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'> 
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>
                {/* text*/}
                <div className='mt- 7'>
                    <p className='mb-5'>I have bought many e-books there and have been generally happy with the ones I have chosen. But I have not bought any soft or hard-covered books. In general though, they have a great assortment in the fields I like. </p>
                    <Avatar 
                    alt="avatar of Jesa"
                    img={proPic}
                    rounded
                    className='w-10 mb-4'

                    />
                    <h5 className='text-lg font-medium'>Mark Ping</h5>
                    <p className='text-base'>CE0,ABC Company</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'> 
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>
                {/* text*/}
                <div className='mt- 7'>
                    <p className='mb-5'>I am very happy with my book purchases on this site . Whether I buy Kindle e-books or whether I buy books to be shipped to my home, I have always been very happy. I have in excess of books in my Kindle library  </p>
                    <Avatar 
                    alt="avatar of Jesa"
                    img={proPic}
                    rounded
                    className='w-10 mb-4'

                    />
                    <h5 className='text-lg font-medium'>Debra Harrison</h5>
                    <p className='text-base'>Book and Art Collector</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'> 
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>
                {/* text*/}
                <div className='mt- 7'>
                    <p className='mb-5'> The purchasing experience is simplified with detailed descriptions, reviews, and personalized recommendations, aiding informed decisions. E-books offer instant accessibility, while physical books often have efficient delivery systems. </p>
                    <Avatar 
                    alt="avatar of Jesa"
                    img={proPic}
                    rounded
                    className='w-10 mb-4'

                    />
                    <h5 className='text-lg font-medium'>Chris Baird</h5>
                    <p className='text-base'>Self-Publishing Secrets Checklist Creator </p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'> 
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>
                {/* text*/}
                <div className='mt- 7'>
                    <p className='mb-5'>The book was well-paced and has a certain rhythm to the story lines. Skillful writing, realistic as well as unique characters especially the hero, and a plot full of twists and turns puts The Torah Codes in the top of my “Best Books I’ve Read” list. </p>
                    <Avatar 
                    alt="avatar of Jesa"
                    img={proPic}
                    rounded
                    className='w-10 mb-4'

                    />
                    <h5 className='text-lg font-medium'>Beth Barany</h5>
                    <p className='text-base'>NLP Master Practitioner</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'> 
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>
                {/* text*/}
                <div className='mt- 7'>
                    <p className='mb-5'> Author takes some liberties in logic and there are a couple of “he did not just go there” moments, but his writing style overcomes any of that kind of criticism. This book is one that most Dan Brown fans will really enjoy.. </p>
                    <Avatar 
                    alt="avatar of Jesa"
                    img={proPic}
                    rounded
                    className='w-10 mb-4'

                    />
                    <h5 className='text-lg font-medium'>Ezra Barany</h5>
                    <p className='text-base'>Blogger</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'> 
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>
                {/* text*/}
                <div className='mt- 7'>
                    <p className='mb-5'>I read  reviews and when I purchase a book first I'll check it's practicality .If it's practical in life then I'll go on purchase the book which i felt good.But for me while purchasing book I don't care about good reviews and bad reviews</p>
                    <Avatar 
                    alt="avatar of Jesa"
                    img={proPic}
                    rounded
                    className='w-10 mb-4'

                    />
                    <h5 className='text-lg font-medium'>Sai Sreekar</h5>
                    <p className='text-base'>Writer</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'> 
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>
                {/* text*/}
                <div className='mt- 7'>
                    <p className='mb-5'>I have bought many e-books there and have been generally happy with the ones I have chosen.  In general though, they have a great assortment in the fields . Sometimes I'm led to a book by reading an enthusiastic review though.. </p>
                    <Avatar 
                    alt="avatar of Jesa"
                    img={proPic}
                    rounded
                    className='w-10 mb-4'

                    />
                    <h5 className='text-lg font-medium'>Jenny Doughty</h5>
                    <p className='text-base'>Sales Executive </p>
                </div>
            </div>
        </SwiperSlide>
        
        
        
        
      </Swiper>
        </div>
        </div>
  )
}

export default Review
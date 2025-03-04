import React from 'react';
import dynamic from 'next/dynamic';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Dynamically import the Slider component without server-side rendering
const Slider = dynamic(() => import('react-slick'), { ssr: false });

const TestimonialData = [
    {
        id: 1,
        name: "Ananya",
        text: "I can't get enough of Sahari Hub's collections. They have everything from chic dresses to comfortable everyday wear. Simply amazing!",
        img: "https://picsum.photos/101/101"
    },
    {
        id: 2,
        name: "Harsh",
        text: "Sahari Hub's men's collection is stylish and comfortable. Perfect for any occasion!",
        img: "https://picsum.photos/102/102"
    },
    {
        id: 3,
        name: "Ankit",
        text: "Sahari Hub has become my favorite store. The quality is consistently excellent, and the customer service is outstanding.",
        img: "https://picsum.photos/103/103"
    },
    {
        id: 4,
        name: "Akshat",
        text: "Every purchase from Sahari Hub has been a delight. The clothes are fashionable, well-made, and the shipping is always quick.",
        img: "https://picsum.photos/104/104"
    },
    {
        id: 5,
        name: "Rajat",
        text: "I love how Sahari Hub keeps up with the latest trends. Their new arrivals always have something fresh and exciting.",
        img: "https://picsum.photos/105/105"
    }
];

const Testimony = () => {
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: 'linear',
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
            {
                breakpoint: 10000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className='py-10 font-inter'>
            <div className='container mx-auto'>
                {/* Header Section */}
                <div className='text-center mb-10 max-w-[600px] mx-auto'>
                    <h1 className='text-4xl font-bold'>Testimonials</h1>
                    <p className='text-xl font-medium text-primary'>What our customers are saying</p>
                </div>

                {/* Testimonial Cards */}
                <div>
                    <Slider {...settings}>
                        {TestimonialData.map((data) => (
                            <div key={data.id} className='my-6'>
                                <div className='flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl bg-yellow-50 relative'>
                                    <div className='mb-4 flex gap-6 items-center'>
                                        <img src={data.img} alt={data.name} className='rounded-full w-20 h-20' />
                                        <h1 className='text-2xl font-bold text-black'>{data.name}</h1>
                                    </div>
                                    <div className='flex flex-col items-center gap-4'>
                                        <div className='space-y-3'>
                                            <p className='text-xs text-gray-600 '>{data.text}</p>
                                        </div>
                                    </div>
                                    <p className='text-black/20  text-9xl font-serif absolute -top-6 right-0'>,,</p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Testimony;

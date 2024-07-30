import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Products = () => {
  const cardData = [
    { image: "/assets/images/shirt.png", title: "Product 1", price: 19.99 },
    { image: "/assets/images/shirt2.png", title: "Product 2", price: 29.99 },
    { image: "/assets/images/shirt3.png", title: "Product 3", price: 39.99 },
    { image: "/assets/images/shirt4.png", title: "Product 4", price: 49.99 },
    { image: "/assets/images/shirt5.png", title: "Product 5", price: 59.99 },
    { image: "/assets/images/shirt6.png", title: "Product 6", price: 69.99 },
    { image: "/assets/images/shirt7.png", title: "Product 7", price: 79.99 },
    { image: "/assets/images/shirt8.png", title: "Product 8", price: 89.99 },
    { image: "/assets/images/shirt9.png", title: "Product 9", price: 99.99 },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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
    <div className="w-full overflow-hidden py-12 font-inter">
      <div className="container mx-auto px-4">
        <div className="flex flex-col justify-center items-center py-4">
          <div className="text-4xl font-bold">Trending Products</div>
          <p className="text-xl px-2 text-center">
            Select from a wide variety of clothing range hand picked by experts
            for you
          </p>
        </div>
        <div className="mx-[-15px]">
          <Slider {...settings}>
            {cardData.map((card, index) => (
              <div key={index} className="px-2">
                <Card {...card} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

const Card = ({ image, title, price }) => {
  return (
    <div
      className="bg-white rounded-lg border border-gray-300 shadow-md overflow-hidden h-[400px] flex flex-col"
      data-aos="zoom-in"
      data-aos-once="true"
    >
      <div className="relative flex-grow bg-gray-100">
        <Image 
          src={image} 
          alt={title} 
          fill 
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          style={{ objectFit: 'contain' }}
        />
      </div>
      <div className="bg-white flex flex-col border-t border-gray-300 justify-between p-4">
        <div>
          <h2 className="text-lg font-semibold mb-2">{title}</h2>
          <p className="text-gray-600 font-bold">${price.toFixed(2)}</p>
        </div>
        <button className="bg-orange-600 text-white mt-4 py-2 rounded-full px-4 font-semibold shadow-gray-400 shadow-md duration-300 hover:bg-white hover:text-orange-700 hover:border hover:border-orange-700">
          Order Now
        </button>
      </div>
    </div>
  );
};

export default Products;

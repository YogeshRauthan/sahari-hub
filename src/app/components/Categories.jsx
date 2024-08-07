import React from "react";
import { FaStar } from "react-icons/fa6";

const ProductsData = [
  {
    id: 1,
    src: "/assets/images/winter03.png",
    title: "Winter Wear",
    description:
      "This Winter style yourself with Sahari Hub's Latest Collection",
  },
  {
    id: 2,
    src: "/assets/images/shirt2.png",
    title: "Men Fashion",
    description: "Discover stylish men's clothing at Sahari Hub!",
  },
  {
    id: 3,
    src: "/assets/images/women01.png",
    title: "Women Fashion",
    description: "Explore trendy and elegant women's fashion at Sahari Hub!",
  },
];

const Categories = () => {
  const handleOrderNow = () => {
    const phoneNumber = "918745092024";
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="py-10">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className=" text-center mb-24">
          <h1
            data-aos="fade-up"
            data-aos-once="true"
            className="text-4xl font-bold"
          >
            Our Top Categories
          </h1>
          <p
            data-aos="fade-up"
            data-aos-once="true"
            className="text-xl text-gray-700 px-2"
          >
            Choose from our best categories selected for you.
          </p>
        </div>

        {/* Body Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center py-2">
          {ProductsData.map((data) => (
            <div
              key={data.id}
              data-aos="zoom-in"
              data-aos-once="true"
              className=" rounded-2xl py-2 bg-gray-100 hover:bg-black/80 hover:text-white relative shadow-xl duration-300 group max-w-[300px]"
            >
              {/* image section */}
              <div className="h-[100px]">
                <img
                  src={data.src}
                  alt=""
                  className="max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md"
                />
              </div>

              {/* details section */}
              <div className="p-4 text-center">
                {/* star rating */}
                <div className="w-full flex items-center justify-center gap-1">
                  <FaStar className="text-orange-600" />
                  <FaStar className="text-orange-600" />
                  <FaStar className="text-orange-600" />
                  <FaStar className="text-orange-600" />
                  <FaStar className="text-orange-600" />
                </div>
                <h1 className="text-xl font-bold">{data.title}</h1>
                <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                  {data.description}
                </p>
                <button
                  className="bg-orange-600 hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-orange-600"
                  onClick={handleOrderNow}
                >
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;

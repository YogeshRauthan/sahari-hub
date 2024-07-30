import React from "react";
import Slider from "react-slick";

const ImageList = [
  {
    id: 1,
    img: "/assets/images/heroimg5.png",
    title: "Latest शहरी Fashion Just For You",
    description: "At affordable prices",
  },
  {
    id: 2,
    img: "/assets/images/heroimg9.png",
    title: "20% off on all Men's Wear",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam, totam animi. Ad et quidem autem ipsam vitae mollitia, ex distinctio!",
  },
  {
    id: 3,
    img: "/assets/images/heroimg4.png",
    title: "70% off on all Products Sale",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam, totam animi. Ad et quidem autem ipsam vitae mollitia, ex distinctio!",
  },
];

const Hero = () => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="relative overflow-hidden min-h-[550px] bg-[#FFF8E6] flex justify-center items-center duration-200">
      {/* background section */}
      <div className="hidden lg:block h-[500px] w-[500px] bg-[#FFCDA6] absolute -top-1/3 right-2/3 rounded-full rotate-45"></div>
      <div className="h-[700px] w-[700px] bg-[#FFCDA6] absolute top-1/4 lg:left-1/2  rounded-full rotate-45"></div>

      {/* hero section */}
      <div className=" container pb-2 sm:pb-0">
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div key={data.id}>
              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* text content section */}
                <div className="flex flex-col justify-center gap-4 pt-2 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                  <h1
                    data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-once="true"
                    className="text-5xl sm:text-6xl lg:text-7xl font-bold ml-2 md:ml-4 lg:ml-6"
                  >
                    {data.title}
                  </h1>
                  {/* <p
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="100"
                    className="text-sm ml-2"
                  >
                    {data.description}
                  </p> */}
                  <div
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="100"
                    data-aos-once="true"
                  >
                    <button className="ml-2 md:ml-4 lg:ml-6 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:scale-105 duration-200 text-white py-2 px-4 rounded-full shadow-md shadow-gray-400 border border-yellow-700">
                      Order Now
                    </button>
                  </div>
                </div>

                {/* image section */}
                <div className="order-1 sm:order-2">
                  <div
                    data-aos="zoom-in"
                    data-aos-once="true"
                    className=" relative z-10"
                  >
                    <img
                      src={data.img}
                      alt="fashion img"
                      className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-105 lg:scale-125 object-contain mx-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;

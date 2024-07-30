const About = () => {
  return (
    <div className="bg-[#FFF2D7] py-10 font-inter">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="img1 w-full lg:w-1/2">
            <img
              src="/assets/images/aboutus1.jpg"
              alt="aboutus_image"
              className="rounded-md w-[600px] h-auto"
              data-aos="fade-up"
              data-aos-once="true"
            />
          </div>
          <div className="content1 flex flex-col items-center lg:items-start w-full lg:w-1/2">
            <h2 className="text-4xl md:text-6xl lg:text-8xl font-bold lg:font-medium mb-6">
              About Us
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-center lg:text-left">
              Welcome to Sahari Hub, your go-to shopping brand for the latest
              trends in fashion. At Sahari Hub, we pride ourselves on offering
              stylish and affordable clothing that caters to both urban and
              rural tastes. Our mission is to make fashion accessible to
              everyone, regardless of location, by providing a diverse range of
              high-quality apparel at catchy prices. Whether you're looking for
              the newest urban trends or classic rural styles, Sahari Hub has
              something for everyone. Join us in celebrating fashion that
              combines affordability, style, and accessibility. Shop with us
              today and elevate your wardrobe without breaking the bank!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

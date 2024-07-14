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
            <h2 className="text-4xl md:text-6xl lg:text-8xl font-medium mb-6">About Us</h2>
            <p className="text-base md:text-lg lg:text-xl text-center lg:text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea iusto
              optio architecto dicta sapiente ipsam maiores ab dolores, quaerat
              recusandae ex reprehenderit quia tempore unde laborum magnam porro
              omnis qui corporis eum ipsum? Reprehenderit sit, id ab sint nemo
              ad ut dolores. Aspernatur fugiat nemo voluptatibus illum aliquam
              aliquid blanditiis natus error libero, provident consequuntur
              impedit architecto at sed facere expedita ut ratione sit enim
              maiores similique?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
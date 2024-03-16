const Banner = () => {
  return (
    <div>
      <div
        className="hero h-[600px] rounded-2xl text-white mt-14 "
        style={{
          backgroundImage: "url(https://i.ibb.co/t2JGkQZ/Rectangle-1.png)",
        }}
      >
        <div className="hero-overlay  bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content ">
          <div className="">
            <h1 className="mb-5 text-3xl leading-relaxed md:leading-[76px] md:text-[52px] mx-auto max-w-[900px] font-bold">
              Discover an exceptional cooking class tailored for you!
            </h1>
            <p className="mb-5 md:text-lg text-base  font-normal max-w-[930px] mx-auto text-white text-opacity-70 ">
              We provide exceptional cooking classes which taken by our master
              class chefs who are recognized through out the world.Each mentor
              take exceptional care of our each student and help them with
              everything to reach there goal throughout the program .
            </p>
            <div className="flex items-center justify-center gap-8">
              <button className="btn bg-[#0be58a] text-black border-transparent hover:text-white rounded-full px-8 py-4">
                Explore Now
              </button>
              <button className="btn hover:bg-[#0be58a] hover:text-black btn-primary rounded-full px-8 py-4">
                Our Feedback
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

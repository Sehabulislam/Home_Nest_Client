import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router";
import { FaArrowRightLong, FaLocationDot } from "react-icons/fa6";

const Slider = () => {
  return (
    <div className="w-11/12 mx-auto md:w-full">
      <Swiper
        autoplay={{
          delay: 2000,
        }}
        modules={[Autoplay]}
        className="h-150 rounded-b-2"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="flex justify-start items-center px-10 bg-[url(https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg)] bg-no-repeat h-full bg-cover bg-center rounded-b-2xl">
            <div className="space-y-5 ">
              <span >
                <FaLocationDot size={150} className="text-white"/>
              </span>
              <h1 className="text-5xl md:text-7xl flex items-center font-bold text-white">
                Find Your <br /> Dream Home
              </h1>
              <p className="text-white">
                Discover handpicked properties that match your lifestyle.
                <br /> Buy, sell, or rent — all in one trusted place where your
                dream home awaits.
              </p>
              <Link
                to={"/allProperties"}
                className="btn btn-ghost mt-5 bg-green-800 text-white "
              >
                Visit All Properties <FaArrowRightLong />
              </Link>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="flex justify-between items-center px-5 md:px-15 rounded-b-2xl bg-[url(https://images.unsplash.com/photo-1558036117-15d82a90b9b1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170)] bg-no-repeat h-full bg-cover bg-center ">
            <div className="space-y-5 text-white ">
              <h1 className="text-4xl md:text-7xl font-bold">
                Modern Living,
                <br />
                <em className="text-green-800"> Made Simple</em>
              </h1>
              <p className="mt-50">
                Explore premium apartments and modern houses built for comfort
                and style.
                <br /> Experience seamless living with smart search, verified
                listings, and easy contact.
              </p>
              <Link
                to={"/allProperties"}
                className="btn btn-ghost border border-gray-100 mt-10"
              >
                Buy Home <FaArrowRightLong />
              </Link>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="w-full p-2 flex justify-start items-center md:px-15 rounded-b-2xl bg-[url(https://images.pexels.com/photos/7031607/pexels-photo-7031607.jpeg)] bg-no-repeat h-full bg-cover bg-center">
            <div className="space-y-5 md:mt-80">
              <h1 className="text-4xl md:text-7xl font-bold">
                Invest in Your <em className="text-yellow-600">Future</em>
              </h1>
              <p className="mt-80 md:mt-0">
                Grow your wealth with the best property deals in town. From urban apartments to peaceful retreats — find
                investments that last a lifetime.
              </p>
              <Link
                to={"/allProperties"}
                className="btn btn-ghost bg-black text-white "
              >
                Explore Properties <FaArrowRightLong />
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;

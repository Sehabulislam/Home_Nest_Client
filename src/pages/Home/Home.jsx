import FeaturedProperties from "./FeaturedProperties";
import Partner from "./Partner";
import Slider from "./Slider";
import Testimonials from "./Testimonials";
import WhyChoose from "./WhyChoose";

const propertiesPromise = fetch('http://localhost:3000/featuredProperties').then(res => res.json())

const Home = () => {
  return (
    <div>
      {/* slider  */}
      <div>
        <Slider></Slider>
      </div>
      {/* partner */}
      <div className="py-5 md:py-10">
        <h1 className="text-4xl font-bold text-center">Our Partner</h1>
      <Partner></Partner>
      </div>
      <div className="py-5 md:py-10">
        <h1 className="text-4xl font-bold text-center">Featured Real Estate</h1>
        <div className="mt-6">
          <FeaturedProperties propertiesPromise={propertiesPromise}></FeaturedProperties>
        </div>
      </div>
      <div  className="py-5 md:py-10">
        <WhyChoose></WhyChoose>
      </div>
      <div  className="py-5 md:py-10">
        <h1 className="text-4xl font-bold text-center">Testimonials</h1>
        <Testimonials></Testimonials>
      </div>
    </div>
  );
};

export default Home;


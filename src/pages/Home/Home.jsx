import FeaturedProperties from "./FeaturedProperties";
import Partner from "./Partner";
import Slider from "./Slider";

const propertiesPromise = fetch('http://localhost:3000/featuredProperties').then(res => res.json())

const Home = () => {
  return (
    <div>
      {/* slider  */}
      <div>
        <Slider></Slider>
      </div>
      {/* partner */}
      <div className="py-5">
        <h1 className="text-3xl font-bold text-center">Our Partner</h1>
      <Partner></Partner>
      </div>
      <div className="py-5">
        <h1 className="text-3xl font-bold text-center">Featured Real Estate</h1>
        <div className="mt-6">
          <FeaturedProperties propertiesPromise={propertiesPromise}></FeaturedProperties>
        </div>
      </div>
    </div>
  );
};

export default Home;


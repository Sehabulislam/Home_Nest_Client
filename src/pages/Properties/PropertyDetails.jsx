import { RiHomeSmileFill } from "react-icons/ri";
import { FaArrowLeft, FaStar } from "react-icons/fa";
import { useLoaderData, useNavigate } from "react-router";

const PropertyDetails = () => {
  const {propertyName,price,location,category,postedDate,seller_Name,seller_Photo,seller_Email,rating,} = useLoaderData();
  const navigate = useNavigate();
  return (
    <div className="max-w-8xl mx-auto h-full grid grid-cols-2 py-5 gap-5">
      <div className="">
        <h1 onClick={()=>navigate('/allProperties')} className="text-white btn bg-black rounded-full mb-2"><FaArrowLeft size={20}/></h1>
        <img
          src="https://img.freepik.com/premium-photo/modern-cottage-house-architecture-concept-property-neighborhood-real-estate-property-insurance-property-architecture-housing-suburban-house-architecture-residential-building_474717-200092.jpg?semt=ais_incoming&w=740&q=80"
          alt=""
          className="w-full h-147 object-cover rounded-l-2xl"
        />
      </div>
      <div className="space-y-3 py-10">
        <h1 className="text-4xl font-bold flex items-center gap-2">
          <RiHomeSmileFill />
          {propertyName}
        </h1>
        <h1 className="text-3xl font-semibold btn  btn-neutral">{price}</h1>
        <h2><span className="font-semibold">Location : </span>{location}</h2>
        <h1><span className="font-semibold">Category : </span>{category}</h1>
        <h1><span className="font-semibold">Posted Date :</span> {postedDate}</h1>
        <div className="space-y-2">
          <h1 className="font-semibold">Posted by : </h1>
          <div className="flex items-center gap-2">
            <img
              src={seller_Photo}
              alt=""
              className="w-25 h-25 object-cover rounded-2xl"
            />
            <div className="">
              <h1 className="text-xl font-bold">Name : {seller_Name}</h1>
              <h1>Email : {seller_Email}</h1>
            </div>
          </div>
        </div>
        <h1 className="text-lg flex items-center gap-2 font-semibold">Rating : <span className="text-4xl flex items-center gap-1">{rating} <FaStar /></span> 
 </h1>
        <h1><span className="font-semibold">Reviews : </span></h1>
        <div className="grid grid-cols-2 gap-5">
          <div className="text-center space-y-2 w-full">
            <div className="rating">
              <div className="mask mask-star" aria-label="1 star"></div>
              <div className="mask mask-star" aria-label="2 star"></div>
              <div className="mask mask-star" aria-label="3 star"></div>
              <div className="mask mask-star" aria-label="4 star"></div>
              <div
                className="mask mask-star"
                aria-label="5 star"
                aria-current="true"
              ></div>
            </div>
            <h1>
              “The house is very clean and nicely decorated. The location is great, with both the market and school nearby.”
            </h1>
            <img
              src="https://media.istockphoto.com/id/1349663583/photo/close-up-of-face-of-smiling-man-in-shirt-jacket-guy-with-gray-hair-stubble-in-old-age-is.jpg?s=612x612&w=0&k=20&c=AsFR1jVK1xxReVRS6bPKRybjlJTC8y-FHfeyFszFEn8="
              alt=""
              className="w-20 h-20 object-cover rounded-full mx-auto"
            />
            <h1 className="text-xl font-semibold">Liam</h1>
          </div>
          <div className="text-center space-y-2 w-full">
        <div className="rating">
          <div className="mask mask-star" aria-label="1 star"></div>
          <div className="mask mask-star" aria-label="2 star"></div>
          <div className="mask mask-star" aria-label="3 star"></div>
          <div className="mask mask-star" aria-label="4 star"></div>
          <div
            className="mask mask-star"
            aria-label="5 star"
            aria-current="true"
          ></div>
        </div>
        <h1>“The house is modern and well-maintained. It’s in a quiet neighborhood, close to shops and public transport.”</h1>
        <img src="https://media.istockphoto.com/id/1299360138/photo/fit-man-standing-outdoors-in-a-city.jpg?s=612x612&w=0&k=20&c=MF7v7Fb98NwFCyDrO7bs9Zp4zSZ3b8BGp0oknHSjGws=" alt="" className="w-20 h-20 object-cover rounded-full mx-auto"/>
        <h1 className="text-xl font-semibold">James</h1>
      </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;

// সম্পূর্ণ ইনফো দেখাবে:

// Property Name

// Description

// Price

// Location

// Category

// Image

// Posted Date

// Posted by (Name, Email, Photo)

// এর নিচে থাকবে:
// Ratings & Reviews Section

// Rating (1-5 star)

// Short Review text

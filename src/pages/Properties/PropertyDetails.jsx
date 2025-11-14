import { RiHomeSmileFill } from "react-icons/ri";
import { FaArrowLeft, FaStar } from "react-icons/fa";
import { useLoaderData, useNavigate } from "react-router";
import { TbCoinTakaFilled } from "react-icons/tb";
import useAxios from "../../hooks/useAxios";
import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../context/AuthProvider";

const PropertyDetails = () => {
  const axiosInstance = useAxios();
  const [star, setStar] = useState(1);
  const { user } = useContext(AuthContext);
  const {
    propertyName,
    image,
    price,
    location,
    category,
    postedDate,
    seller_Name,
    seller_Photo,
    seller_Email,
    rating,
    review,
  } = useLoaderData();

  const navigate = useNavigate();
  const handleRatingChange = (e) => {
    const selectValue = e.target.value;
    setStar(selectValue);
  };
  const handleRating = (e) => {
    e.preventDefault();
    const review = e.target.message.value;
    e.target.reset();
    const ratingData = {
      propertyName: propertyName,
      image: image,
      reviewerName: user?.displayName,
      reviewer_Email : user?.email,
      ratings: star,
      postedData: new Date().toISOString().split("T")[0],
      review: review,
    };
    axiosInstance.post("/myRatings", ratingData).then((data) => {
      toast.success("Thank you for your ratings.");
    });
  };
  return (
    <div>
      <div className="max-w-8xl mx-auto h-full grid md:grid-cols-2 py-5 gap-5">
        <div className="">
          <h1
            onClick={() => navigate("/allProperties")}
            className="text-white btn bg-black rounded-full mb-2"
          >
            <FaArrowLeft size={20} />
          </h1>
          <img
            src={image}
            alt=""
            className="w-full h-100 md:h-147 object-cover rounded-2xl md:rounded-l-2xl"
          />
        </div>
        <div className="space-y-3 py-10">
          <h1 className="text-4xl font-bold flex items-center gap-2">
            <RiHomeSmileFill />
            {propertyName}
          </h1>
          <h1 className="text-3xl font-semibold btn  btn-neutral flex items-center w-60">
            <TbCoinTakaFilled />
            {price}
          </h1>
          <h2>
            <span className="font-semibold">Location : </span>
            {location}
          </h2>
          <h1>
            <span className="font-semibold">Category : </span>
            {category}
          </h1>
          <h1>
            <span className="font-semibold">Posted Date :</span> {postedDate}
          </h1>
          <div className="space-y-2">
            <h1 className="font-semibold">Posted by : </h1>
            <div className="flex items-center gap-2">
              <img
                src={seller_Photo}
                alt=""
                className="w-20 md:w-25 h-20 md:h-25 object-cover rounded-2xl"
              />
              <div className="">
                <h1 className="text-xl font-bold">Name : {seller_Name}</h1>
                <h1>Email : {seller_Email}</h1>
              </div>
            </div>
          </div>
          <h1 className="text-lg flex items-center gap-2 font-semibold">
            Rating :{" "}
            <span className="text-4xl flex items-center gap-1">
              {rating} <FaStar />
            </span>
          </h1>
          <h1>
            <span className="font-semibold">Reviews : </span>
          </h1>
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
                “The house is very clean and nicely decorated. The location is
                great, with both the market and school nearby.”
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
              <h1>
                {" "}
                {review
                  ? review
                  : "“The house is modern and well-maintained. It’s in a quiet neighborhood, close to shops and public transport.”"}
              </h1>
              <img
                src="https://media.istockphoto.com/id/1299360138/photo/fit-man-standing-outdoors-in-a-city.jpg?s=612x612&w=0&k=20&c=MF7v7Fb98NwFCyDrO7bs9Zp4zSZ3b8BGp0oknHSjGws="
                alt=""
                className="w-20 h-20 object-cover rounded-full mx-auto"
              />
              <h1 className="text-xl font-semibold">James</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-2xl mx-auto p-5 mb-5 shadow-xl rounded-2xl">
        <h1 className="text-2xl text-center font-semibold">Click to rate</h1>
        <div className="rating rating-xl flex justify-center ">
          <input
            type="radio"
            name="rating-1"
            className="mask mask-star"
            aria-label="1 star"
            value={1}
            defaultChecked
            onChange={handleRatingChange}
          />
          <input
            type="radio"
            name="rating-1"
            className="mask mask-star"
            aria-label="2 star"
            value={2}
            onChange={handleRatingChange}
          />
          <input
            type="radio"
            name="rating-1"
            className="mask mask-star"
            aria-label="3 star"
            value={3}
            onChange={handleRatingChange}
          />
          <input
            type="radio"
            name="rating-1"
            className="mask mask-star"
            aria-label="4 star"
            value={4}
            onChange={handleRatingChange}
          />
          <input
            type="radio"
            name="rating-1"
            className="mask mask-star"
            aria-label="5 star"
            value={5}
            onChange={handleRatingChange}
          />
        </div>
        <form onSubmit={handleRating}>
          <div className="flex justify-center my-4">
            <button type="submit" className="btn btn-neutral">
              Submit Ratings
            </button>
          </div>
          <div className="mt-2">
            <textarea
              name="message"
              placeholder="Enter Your Review"
              className="textarea textarea-lg w-full"
            ></textarea>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PropertyDetails;

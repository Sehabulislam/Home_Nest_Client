import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import axios from "axios";
const MyRatings = () => {
  const { user } = useContext(AuthContext);
  const [ratings, setRatings] = useState([]);
  useEffect(() => {
    if (user?.email) {
      axios(`http://localhost:3000/myRatings?email=${user.email}`).then(
        (data) => {
          setRatings(data.data);
        }
      );
    }
  }, [user?.email]);
  return (
    <div className="">
      <h1 className="text-4xl font-bold text-center py-5">My Ratings</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {ratings.map((myRating) => (
          <div className="md:h-60 grid md:grid-cols-2 items-center gap-3 rounded-xl shadow-lg shadow-gray-300 overflow-hidden">
            <img
              src={myRating.image}
              alt=""
              className="h-full rounded-t-2xl md:rounded-l-xl object-cover w-full"
            />
            <div className="p-2 md:py-5 ">
              <h1 className="text-2xl font-bold">{myRating.propertyName}</h1>
              <h1>Review By : {myRating.reviewerName}</h1>
              <h1>Star : {myRating.ratings}</h1>
              <p>{myRating.review}</p>
              <h2>Date : {myRating.postedData}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyRatings;

import React from "react";

const MyRatings = () => {
  return (
    <div className="">
      <h1 className="text-4xl font-bold text-center py-5">My Ratings</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="h-50 flex flex-col md:flex-row items-center gap-3 rounded-xl shadow-lg shadow-gray-300">
        <img src="https://cdn.confident-group.com/wp-content/uploads/2024/12/27103036/types-of-real-estate-overview-scaled.jpg" alt="" className="h-full rounded-l-xl"/>
        <div className="">
          <h1 className="text-2xl font-bold">2-BHK Flat in Dhanmondi</h1>
          <h1>Review By : Sehabul Islam</h1>
          <h1>Star : 5</h1>
          <p>Compact studio flat perfect for students and young professionals</p>
          <h2>Date : 14/11/2025</h2>
        </div>
      </div>
      <div className="h-50 flex flex-col md:flex-row  items-center gap-3 rounded-xl shadow-lg shadow-gray-300">
        <img src="https://cdn.confident-group.com/wp-content/uploads/2024/12/27103036/types-of-real-estate-overview-scaled.jpg" alt="" className="h-full rounded-l-xl"/>
        <div className="">
          <h1 className="text-2xl font-bold">2-BHK Flat in Dhanmondi</h1>
          <h1>Review By : Sehabul Islam</h1>
          <h1>Star : 5</h1>
          <p>Compact studio flat perfect for students and young professionals</p>
          <h2>Date : 14/11/2025</h2>
        </div>
      </div>
      </div>
    </div>
  );
};

export default MyRatings;

// Reveiewer Nam

// Property Name

// Star Rating

// Short Review

// Date

// Property Thumbnail
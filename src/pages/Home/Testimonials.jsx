import React from "react";

const Testimonials = () => {
  return (
    <div className="max-w-7xl mx-auto grid md:grid-cols-3 lg:grid-cols-5 gap-10 md:gap-5 py-5">
      <div className="text-center space-y-2">
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
        <h1>“HomeNest made finding my first apartment simple and stress-free. The listings were accurate, and the team was really helpful!”</h1>
        <img src="https://images.pexels.com/photos/7366187/pexels-photo-7366187.jpeg" alt="" className="w-20 h-20 object-cover rounded-full mx-auto"/>
        <h1 className="text-xl font-semibold">Sarah Johnson</h1>
      </div>
      <div className="text-center space-y-2">
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
        <h1>“I sold my house through HomeNest within a week. The process was transparent, smooth, and completely hassle-free!”</h1>
        <img src="https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg" alt="" className="w-20 h-20 object-cover rounded-full mx-auto"/>
        <h1 className="text-xl font-semibold">Emily Carter</h1>
      </div>
      <div className="text-center space-y-2">
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
        <h1>“Excellent service! I loved how I could filter properties by price and area. The platform saved me a lot of time and effort.”</h1>
        <img src="https://images.pexels.com/photos/8353841/pexels-photo-8353841.jpeg" alt="" className="w-20 h-20 object-cover rounded-full mx-auto"/>
        <h1 className="text-xl font-semibold">Ahmed Khan</h1>
      </div>
      <div className="text-center space-y-2">
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
        <h1>“Very user-friendly website. I was able to find a rental apartment near my office in just a few clicks. Highly recommended!”</h1>
        <img src="https://images.pexels.com/photos/30151279/pexels-photo-30151279.jpeg" alt="" className="w-20 h-20 object-cover rounded-full mx-auto"/>
        <h1 className="text-xl font-semibold">Olivia & James Brown</h1>
      </div>
      <div className="text-center space-y-2">
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
        <h1>“We found our dream home through HomeNest! The process was smooth, and the support team guided us every step of the way.”</h1>
        <img src="https://img.freepik.com/free-photo/portrait-successful-young-businessman-with-his-arms-crossed-looking-camera_23-2148176207.jpg?semt=ais_hybrid&w=740&q=80" alt="" className="w-20 h-20 object-cover rounded-full mx-auto"/>
        <h1 className="text-xl font-semibold">Sehabul Islam</h1>
      </div>
    </div>
  );
};

export default Testimonials;

import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid justified">
             Welcome to Restro Inn, where we strive to provide a seamless and enjoyable dining experience for all our guests. Our reservation system is designed to make it easy for you to secure your spot at our restaurant, whether you're planning a romantic dinner for two or a gathering with friends and family. With our user-friendly online reservation form, you can quickly input your details, including the number of guests, preferred date, and time, and we'll take care of the rest. Our system automatically checks for table availability and confirms your reservation in real-time, ensuring that you can dine with us stress-free. For those who prefer to make reservations over the phone, our dedicated team is always available to assist you. We value your time and strive to accommodate your preferences, so you can focus on enjoying our delicious cuisine and warm hospitality. Join us at Restro Inn for an unforgettable dining experience, where every reservation is treated with care and attention to detail.
            </p>
            <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

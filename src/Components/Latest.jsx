import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import party from "../assets/party.jpg"
import pumpkin from "../assets/pumpkin.jpg"
import pre from "../assets/pre.jpg"
import triangle from "../assets/triangle.jpg"
import paint from "../assets/paint.jpg"
const posts = [
  {
    title: "Halloween Days ",
    desc: "That's wonderful to hear that your Halloween event is ready to go! If you need any further assistance or have additional requests, feel free to let me know. Wishing you and the little ones a fantastic and spooktacular Halloween celebration at your daycare! 🎃👻✨",
    img: party,
    date: "Oct 27 2023",

  },
  {
    title: "Pumpkin Art",
    desc: "Showcase the amazing pumpkin art created by the children. You can have a designated area for the display or create a small exhibition.Encourage parents and caregivers to admire and appreciate the unique designs crafted by the little ones.",
    img: pumpkin,
    date: "Oct 27 2023",

  },
  {
    title: "Labour Day",
    desc: "That's fantastic! I'm glad to hear that your Labor Day event is ready to go. If there's anything else you need assistance with or if you have any other requests, feel free to let me know. I'm here to help! Wishing you a successful and enjoyable Labor Day celebration at your daycare. 🎉👩‍👧‍👦🛠️",
    img: pre,
    date: "Aug 29 2023",

  },
  // Add the fourth and fifth slides with the same image as the first one
  {
    title: "Triangle",
    desc: "Certainly! I'm glad to hear that your events are ready. If you ever need assistance in the future or have any other requests, feel free to reach out. Best of luck with your Triangle Competition and Painting events at your daycare! 🎨🔺✨",
    img: triangle,
    date: "Jun 28 2023",

  },
  {
    title: "Paintting",
    desc: "TCertainly! I'm glad to hear that your events are ready. If you ever need assistance in the future or have any other requests, feel free to reach out. Best of luck with your Triangle Competition and Painting events at your daycare! 🎨🔺✨",
    img: paint,
    date: "Jun 23 2023",

  },
];

const Latest = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Adjusted autoplay speed for better responsiveness
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="  bg-[#FFF5EB] pt-10 py-10">
      <div className="mx-auto px-4 md:px-8">
        <h1 className='text-2xl md:text-4xl text-center lg:mb-12 md:mb-12 mb-4 font-semibold  font-[bitter]'>
          Latest New And Updates
        </h1>
        <Slider {...settings}>
          {posts.map((item, key) => (
            <div key={key} className="mx-2 pe-5">
              <a href={item.href}>
                <img src={item.img} loading="lazy" alt={item.title} className="w-[400px] h-[300px] object-cover rounded-lg" />
                <div className="mt-3 space-y-2">
                  <span className="block text-gray-600 text-sm">{item.date}</span>
                  <h3 className="text-lg text-black duration-150 group-hover:text-indigo-600 font-semibold">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm duration-150 group-hover:text-gray-800">{item.desc}</p>
                </div>
              </a>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Latest;

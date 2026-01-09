import React from "react";
import { FaInstagram, FaTwitter, FaFacebook, FaYoutube, FaLinkedin, FaTiktok, FaPinterest, FaSpotify } from "react-icons/fa";
import ImgGrid from "../../components/ImgGrid";

const About = () => {
  const socials = [
    { icon: <FaInstagram />, label: "HIM AND HER SHOW" },
    { icon: <FaTwitter />, label: "MICHAEL BOSSTICK" },
    { icon: <FaFacebook />, label: "HIM AND HER SHOW" },
    { icon: <FaYoutube />, label: "HIM AND HER SHOW" },
    { icon: <FaLinkedin />, label: "MICHAEL BOSSTICK" },
    { icon: <FaTiktok />, label: "HIM AND HER SHOW" },
    { icon: <FaPinterest />, label: "LAURYN BOSSTICK" },
    { icon: <FaSpotify />, label: "MICHAEL BOSSTICK" },
  ];

  return (
    <div className="max-w-[1600px] mx-auto px-4 md:px-16 py-12 space-y-24">

      {/* HER Section */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
        <div className="md:w-1/2 flex justify-center">
          <img
            src="https://image2url.com/images/1761480297292-86443ebb-79e3-4caf-8a64-9eb2c96a03d8.png"
            alt="Lauryn Bosstick"
            className="rounded-2xl shadow-lg w-full max-w-xl h-80 md:h-[480px] object-cover"
          />
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 space-y-4">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-500 uppercase">HER</h2>
          <h1 className="text-3xl md:text-5xl italic font-normal text-gray-900">Lauryn Bosstick</h1>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            Lauryn Bosstick is a multi-hyphenate entrepreneur, podcaster,
            investor, best-selling author, and creator behind wellness + beauty
            brand The Skinny Confidential.
          </p>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            In 2011, Bosstick launched her brand with a blog that still features uncensored advice on entrepreneurship, skincare, relationships, and wellness, eventually leading to the creation of her product line, including the award-winning Ice Roller and De-Puffing Face Oil.
          </p>
        </div>
      </div>

      {/* HIM Section */}
      <div className="flex flex-col md:flex-row-reverse items-center md:items-start gap-8 md:gap-12">
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <img
            src="https://image2url.com/images/1761480324019-348ab8be-f0e6-42f4-8511-54fff7c1ba26.png"
            alt="Michael Bosstick"
            className="rounded-2xl shadow-lg w-full max-w-md md:max-w-lg h-80 md:h-[480px] object-cover"
          />
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 space-y-4">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-500 uppercase">HIM</h2>
          <h1 className="text-3xl md:text-5xl italic font-normal text-gray-900">Michael Bosstick</h1>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            Michael Bosstick is the founder and CEO of Dear Media, a media powerhouse with a content, community, and commerce model that helps creators develop digital channels, live events, and commerce brands. Michael is an investor and brand incubator with multiple commerce brands under his belt. In 2016, with his wife Lauryn, Michael co-created and co-hosts the HIM & HER Show.
          </p>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            As CEO, he continues to grow Dear Media with unique digital strategies, operating over 80 channels and paving the way for top digital talent.
          </p>
        </div>
      </div>

      {/* Socials Section */}
      <div className="text-center px-4 md:px-8 py-12">
        <h1 className="text-4xl md:text-5xl text-brown-900 py-8">OUR SOCIALS</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 justify-items-center">
          {socials.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center gap-2 hover:scale-105 transition-transform duration-300 cursor-pointer">
              <div className="text-3xl text-brown-800">{item.icon}</div>
              <p className="text-brown-800 text-sm md:text-base text-center">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Image Grid Section */}
      <ImgGrid />
    </div>
  );
};

export default About;

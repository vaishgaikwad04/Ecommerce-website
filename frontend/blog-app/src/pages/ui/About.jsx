import React from "react";
import { FaInstagram, FaTwitter, FaFacebook, FaYoutube, FaLinkedin, FaTiktok, FaPinterest, FaSpotify } from "react-icons/fa";
import ImgGrid from "../../components/ImgGrid";

const About = () => {
  return (
    <div className="max-w-8xl mx-24 px-4 py-8 space-y-20">

   {/* HER Section */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
        <div className="md:w-1/2 flex justify-center">
          <img
            src="https://image2url.com/images/1761480297292-86443ebb-79e3-4caf-8a64-9eb2c96a03d8.png"
            alt="Lauryn Bosstick"
            className="rounded-2xl shadow-lg w-full max-w-xl h-100 md:h-120 object-cover"
          />
        </div>
        <div className="md:w-1/2 mt-16 space-y-4">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-500 uppercase">HER</h2>
          <h1 className="text-3xl md:text-5xl italic font-normal text-gray-900">
            Lauryn Bosstick
          </h1>
          <p className="text-gray-700 mt-16 text-base md:text-lg">
            Lauryn Bosstick is a multi-hyphenate entrepreneur, podcaster,
            investor, best-selling author, and creator behind wellness + beauty
            brand The Skinny Confidential.
          </p>
          <p className="text-gray-700 text-base md:text-lg">
            In 2011, Bosstick launched her brand with a blog that, to this day,
            still features uncensored advice spanning everything from
            entrepreneurship, skincare, relationships, wellness and more,
            which eventually led to the creation and launch of her product line,
            with the first items being the award-winning Ice Roller and
            De-Puffing Face Oil.
          </p>
        </div>
      </div>

   {/* HIM Section */}
<div className="flex flex-col md:flex-row-reverse items-center md:items-start gap-12 px-6 md:px-16 py-12">
  {/* Image */}
  <div className="md:w-1/2 flex justify-center md:justify-end">
    <img
      src="https://image2url.com/images/1761480324019-348ab8be-f0e6-42f4-8511-54fff7c1ba26.png"
      alt="Michael Bosstick"
      className="rounded-2xl shadow-lg w-full max-w-md md:max-w-lg object-cover"
    />
  </div>

  {/* Text */}
  <div className="md:w-1/2 space-y-6 mt-34">
    <h2 className="text-2xl font-semibold text-gray-500 uppercase">HIM</h2>
    <h1 className="text-4xl md:text-5xl italic font-normal text-gray-900">
      Michael Bosstick
    </h1>

    <p className="text-gray-700 text-base leading-relaxed mt-16">
      Michael Bosstick is the founder and CEO of Dear Media, a groundbreaking
      media powerhouse with a true content, community, and commerce model that
      helps creators develop digital channels, live community events, and
      omnichannel commerce brands. Michael is also an investor and brand
      incubator who has built multiple commerce brands. Michael has participated
      as a founder, operator, marketer, and investor. In 2016 with his wife
      Lauryn Bosstick, Michael co-created and still co-hosts the HIM & HER Show
      which has become one of the most recognizable podcasts/vodcasts worldwide.
    </p>

    <p className="text-gray-700 text-base leading-relaxed">
      Michael currently operates Dear Media as CEO and continues to invest in
      unique growth strategies leveraging digital channels to create digital
      first brands and commerce businesses. Dear Media currently boasts over 80
      unique channels and continues to break barriers and pave the way for
      best-in-class digital talent.
    </p>
  </div>
</div>


 {/* Socials Section */}
      <div className="text-center px-4 md:px-8 text-2xl py-12">
        <h1 className="text-4xl md:text-5xl text-brown-900 py-12">OUR SOCIALS</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 md:gap-8 justify-items-center">
          {[
            { icon: <FaInstagram />, label: "HIM AND HER SHOW" },
            { icon: <FaTwitter />, label: "MICHAEL BOSSTICK" },
            { icon: <FaFacebook />, label: "HIM AND HER SHOW" },
            { icon: <FaYoutube />, label: "HIM AND HER SHOW" },
            { icon: <FaLinkedin />, label: "MICHAEL BOSSTICK" },
            { icon: <FaTiktok />, label: "HIM AND HER SHOW" },
            { icon: <FaPinterest />, label: "LAURYN BOSSTICK" },
            { icon: <FaSpotify />, label: "MICHAEL BOSSTICK" },
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center gap-2">
              <div className="text-3xl text-brown-800">{item.icon}</div>
              <p className="text-brown-800 text-sm md:text-base text-center">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
<ImgGrid/ >
    </div>
  );
};

export default About;

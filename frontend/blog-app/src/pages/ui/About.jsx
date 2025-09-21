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
            src="./her.png"
            alt="Lauryn Bosstick"
            className="rounded-2xl shadow-lg w-full h-full max-w-6xl object-cover"
          />
        </div>
        <div className="md:w-1/2 px-30 py-55 space-y-4">
          <h2 className="text-2xl font-semibold text-gray-500 uppercase">HER</h2>
          <h1 className="text-4xl md:text-7xl italic font-normal text-gray-900">
            Lauryn Bosstick
          </h1>
          <p className="text-gray-700 text-2xl mt-29 w-300">
            Lauryn Bosstick is a multi-hyphenate entrepreneur, podcaster,
            investor, <br />
            best-selling author, and creator behind wellness + beauty brand The <br />
            Skinny Confidential.
          </p>
          <p className="text-gray-700 text-2xl py-4 w-300">
            In 2011, Bosstick launched her brand with a blog that, to this day,
            still <br />
            features uncensored advice spanning everything from entrepreneurship,<br />
            skincare, relationships, wellness and more, which eventually led to the<br />
            creation and launch of her product line, with the first items being the <br />
            award-winning Ice Roller and De-Puffing Face Oil.
          </p>
        </div>
      </div>

    {/* HIM Section */}
<div className="flex flex-col md:flex-row-reverse items-center md:items-start gap-8 md:gap-12">
  <div className="md:w-1/2 flex justify-end -mt-20 md:-mt-38">
    <img
      src="./him.png"
      alt="Michael Bosstick"
      className="rounded-2xl shadow-lg w-full h-full ml-4 max-w-6xl object-cover"
    />
  </div>
  <div className="md:w-1/2 px-20 py-26 space-y-4">
    <h2 className="text-2xl font-semibold text-gray-500 uppercase">HIM</h2>
    <h1 className="text-4xl md:text-7xl italic font-normal text-gray-900">
      Michael Bosstick
    </h1>
    <p className="text-gray-700 text-2xl mt-20 w-300">
      Michael Bosstick is the founder and CEO of Dear Media, a
      groundbreaking media powerhouse with a true content, community, and
      commerce model that helps creators develop digital channels, live
      community events, and omnichannel commerce brands. Michael is also
      an investor and brand incubator who has built multiple commerce
      brands. Michael has participated as a founder, operator, marketer,
      & investor. In 2016 with his wife Lauryn Bosstick, Michael
      co-created and still co-hosts the HIM & HER Show which has become
      one of the most recognizable podcasts/vodcasts worldwide.
    </p>
    <p className="text-gray-700 text-2xl py-4 w-310">
      Michael currently operates Dear Media as CEO and continues to invest
      in unique growth strategies leveraging digital channels to create
      digital first brands and commerce businesses. Dear Media currently
      boasts over 80 unique channels and continues to break barriers and
      pave the way<br></br> for best-in-class digital talent.
    </p>
  </div>
</div>

  <div className="text-center text-2xl py-10 mt-24">
      <h1 className="text-6xl text-brown-900 py-12">OUR SOCIALS</h1>

      {/* Grid with 2 rows, 4 per row */}
      <div className="grid grid-cols-4 gap-8 py-12 justify-items-center">
        
        {/* Instagram */}
        <div className="flex items-center gap-2 py-14">
          <FaInstagram className="text-3xl text-brown-800" />
          <p className="text-brown-800">HIM AND HER SHOW</p>
        </div>

        {/* Twitter */}
        <div className="flex items-center gap-2">
          <FaTwitter className="text-3xl text-brown-800" />
          <p className="text-brown-800">MICHAEL BOSSTICK</p>
        </div>

        {/* Facebook */}
        <div className="flex items-center  gap-2">
          <FaFacebook className="text-3xl text-brown-800" />
          <p className="text-brown-800">HIM AND HER SHOW</p>
        </div>

        {/* YouTube */}
        <div className="flex items-center gap-2">
          <FaYoutube className="text-3xl text-brown-800" />
          <p className="text-brown-800">HIM AND HER SHOW</p>
        </div>

        {/* LinkedIn */}
        <div className="flex items-center gap-2">
          <FaLinkedin className="text-3xl text-brown-800" />
          <p className="text-brown-800">MICHAEL BOSSTICK</p>
        </div>

        {/* TikTok */}
        <div className="flex items-center gap-2">
          <FaTiktok className="text-3xl text-brown-800" />
          <p className="text-brown-800">HIM AND HER SHOW</p>
        </div>

        {/* Pinterest */}
        <div className="flex items-center gap-2">
          <FaPinterest className="text-3xl text-brown-800" />
          <p className="text-brown-800">LAUARYL BOSSTICK</p>
        </div>

        {/* Spotify */}
        <div className="flex items-center gap-2">
          <FaSpotify className="text-3xl text-brown-800" />
          <p className="text-brown-800">MICHAEL BOSSTICK</p>
        </div>
      </div>
    </div>
<ImgGrid/>
    </div>
  );
};

export default About;

import React, { useState } from "react";
import {
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaYoutube,
  FaLinkedin,
  FaTiktok,
  FaPinterest,
  FaSpotify,
} from "react-icons/fa";
import EpisodeGrid from "../../components/ImgGrid";

const Show = () => {
  const [videoPlaying, setVideoPlaying] = useState(false);
  const videoId = "zj4AP5pvqBg"; // YouTube video ID

  return (
    <div className="bg-gray-100 py-16 min-h-screen">
      {/* Cover Page With Video Embed */}
      <div className="relative mx-30  w-300 h-screen flex items-center justify-center">
        {/* Background Cover Image */}
        <img
          src="./cover.png"
          alt="Cover"
          className="absolute inset-0 w-full h-auto object-cover"
        />

        <div className="relative z-10 text-center text-white px-6 flex flex-col items-center">


          {/* Video Embed / Play Button */}
          {videoPlaying ? (
            <div className="w-440 h-[90vh] mb-57 md:h-[130vh] mx-auto rounded-2xl overflow-hidden shadow-lg">
              <iframe
                className="w-300 mx-auto h-full "
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                frameBorder="0"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
                title="Him and Her Show Video"
              ></iframe>
            </div>
          ) : (
            <button
              onClick={() => setVideoPlaying(true)}
              className="w-28 h-28 bg-red-600 flex items-center justify-center shadow-lg hover:bg-red-700 transition rounded-xl"
            >
              {/* Red triangle play button */}
              <div className="w-0 h-0 border-l-[24px] border-l-white border-t-[16px] border-t-transparent border-b-[16px] border-b-transparent ml-1"></div>
            </button>
          )}
        </div>

        {/* Logo floating above bottom */}
       
      </div>

      {/* Main Content Section */}
      <div className=" max-w-8xl mx-14 md:px-18 px-8">
        <div className="text-left mt-28 mb-8">
          <h2 className="text-5xl font-normal italic">Welcome to</h2>
          <h1 className="text-5xl pb-6 md:text-6xl font-semibold leading-tight "  style={{  color: "var(--color-dark-blue)" }}>
            THE HIM AND HER SHOW
          </h1>
        </div>

        <div className="flex py-10 flex-col md:flex-row gap-10">
          {/* Text Content */}
          <div className="md:w-1/2 mt-8 text-gray-700 text-lg space-y-10">
            <p>
              Lauryn Evarts Bosstick, the creator of The Skinny Confidential, a
              blog, book, podcast and YouTube channel. Lauryn helps women live
              their best lives by sharing everything from wellness & beauty to
              business & real-life tips.
            </p>
            <p>
              Michael Bosstick, a serial entrepreneur and brand builder, is
              currently the CEO of the female-focused network, Dear Media, and
              CEO of Bosstick Media, a holding company with ownership in multiple
              direct-to-consumer brands and businesses.
            </p>

            {/* Stats */}
            <div className="flex flex-col sm:flex-row gap-10 py-4">
              <div>
                <h1 className="font-semibold text-xl py-4 text-black">
                  500+ million
                </h1>
                <h3 className="text-lg font-semibold text-gray-800">
                  Episodes downloaded
                </h3>
                <ul className="list-disc ml-5 mt-2 space-y-1">
                  <li>World’s Leading Professionals</li>
                  <li>Top Entrepreneurs</li>
                  <li>Celebrities</li>
                </ul>
              </div>

              <div>
                <h1 className="font-semibold text-xl py-4 text-black">13K+</h1>
                <h3 className="text-lg font-semibold text-gray-800">
                  Five-star reviews
                </h3>
                <ul className="list-disc ml-5 mt-2 space-y-1">
                  <li>Wellness Advice</li>
                  <li>Business Hacks</li>
                  <li>How to Level Up Your Life</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="md:w-1/2 flex justify-center">
         
            <img
              src="./couple.png"
              alt="Couple"
              className="rounded- ml-12 shadow-lg w-full max-w-[800px] h-140 object-cover"
            />
          </div>
        </div>
      </div>

    {/* Socials Section */}
         <div className="text-center px-4 md:px-8 text-2xl py-18">
           <h1 className="text-4xl md:text-5xl text-brown-900 py-8">OUR SOCIALS</h1>
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

      {/* Mark Consuelos Section */}
      <div className="max-w-8xl mt-24 mx-12 bg-white shadow-lg overflow-hidden flex flex-col md:flex-row gap-12 p-6">
        <div className="md:w-[600px] flex-shrink-0">
          <img
            src="https://tscpodcast.com/wp-content/uploads/2025/09/LuAnn-de-Lesseps-887-768x768.png"
            alt="Mark Consuelos"
            className="w-full h-auto object-cover rounded-xl"
          />
        </div>

        <div className="md:w-2/2 flex flex-col  justify-center ml-38">
          <h1 className="text-xl md:text-6xl  italic mt-26 text-gray-700 mb-12">
            LuAnn de Lesseps

          </h1>
          <h3 className="text-xl  text-gray-700 mb-3">
            Countess LuAnn de Lesseps Gets Real About RHONY, Enjoying Life Unapologetically, & Life As A Cabaret Star
          </h3>
          <p className="text-gray-600 text-xl py-4 leading-relaxed">
            #886: Join us as we sit down with Mark Consuelos – actor & TV host, best known
            for his role on <em>All My Children</em> & as co-host of <em>Live with Kelly & Mark</em> alongside his
            wife, Kelly Ripa. In this episode, Mark gets real about what success means to
            him, how he & Kelly have…
          </p>

          <button
            className="mt-6 text-xl self-start hover:underline transition"
            style={{ color: "var(--color-dark-blue)" }}
          >
            Learn More
          </button>
        </div>
      </div>
      <EpisodeGrid/>
    </div>
  );
};

export default Show;

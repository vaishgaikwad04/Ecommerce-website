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
  const videoId = "zj4AP5pvqBg";

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* HERO */}
    {/* HERO */}
<section className="relative max-w-7xl mx-auto px-4 py-20">
  <div className="relative h-[70vh] rounded-3xl overflow-hidden shadow-xl">
    {/* Background Image */}
    <img
      src="https://image2url.com/images/1761480270979-1c0aad73-de39-4eaa-a7d8-f4237f433092.png"
      alt="Cover"
      className="absolute inset-0 w-full h-full object-cover"
    />

    {/* Overlay */}
    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
      {videoPlaying ? (
        <iframe
          className="absolute inset-0 w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
          frameBorder="0"
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
          title="Show Video"
        />
      ) : (
        <button
          onClick={() => setVideoPlaying(true)}
          className="w-24 h-24 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition"
        >
          <div className="w-0 h-0 border-l-[20px] border-l-white border-t-[14px] border-t-transparent border-b-[14px] border-b-transparent ml-1" />
        </button>
      )}
    </div>
  </div>
</section>


      {/* INTRO */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-4xl italic text-gray-600 mb-2">Welcome to</h2>
        <h1
          className="text-5xl md:text-6xl font-semibold mb-10"
          style={{ color: "var(--color-dark-blue)" }}
        >
          THE HIM AND HER SHOW
        </h1>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              Lauryn Evarts Bosstick is the creator of The Skinny Confidential,
              helping women live better lives through wellness, beauty, and
              business insights.
            </p>
            <p>
              Michael Bosstick is a serial entrepreneur and CEO of Dear Media,
              building some of today’s most influential brands.
            </p>

            <div className="grid sm:grid-cols-2 gap-8 pt-6">
              <div>
                <h3 className="text-2xl font-semibold text-black">
                  500+ Million
                </h3>
                <p className="font-medium">Episodes Downloaded</p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-black">13K+</h3>
                <p className="font-medium">Five-Star Reviews</p>
              </div>
            </div>
          </div>

        <img
  src="https://yt3.googleusercontent.com/mrHbgaTqzQmRcBOVOr19WVPtfBfy3Y89syLex3IikbmY1MHdy4CFvmx_d5o0B6RB9iJfYBd2sA=s900-c-k-c0x00ffffff-no-rj"
  alt="Couple"
  className="w-full h-[400px] md:h-[460px] lg:h-[500px] rounded-2xl object-cover shadow-lg"
/>

        </div>
      </section>

      {/* SOCIALS */}
      <section className="bg-white py-20">
        <h2 className="text-center text-4xl font-semibold mb-12">
          Our Socials
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-5xl mx-auto">
          {[
            FaInstagram,
            FaTwitter,
            FaFacebook,
            FaYoutube,
            FaLinkedin,
            FaTiktok,
            FaPinterest,
            FaSpotify,
          ].map((Icon, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-3 text-gray-700 hover:text-pink-500 transition"
            >
              <Icon size={28} />
              <span className="text-sm font-medium">Follow Us</span>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURE EPISODE */}
      <section className="max-w-7xl mx-auto px-4 py-24">
        <div className="bg-white rounded-3xl shadow-xl grid md:grid-cols-2 gap-12 p-10 items-center">
          <img
            src="https://tscpodcast.com/wp-content/uploads/2025/09/LuAnn-de-Lesseps-887-768x768.png"
            alt="Guest"
            className="rounded-xl w-full object-cover"
          />

          <div>
            <h2 className="text-4xl italic mb-6 text-gray-700">
              LuAnn de Lesseps
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Join us for a deep conversation on success, balance, and growth
              with one of television’s most iconic personalities.
            </p>
            <button
              className="text-lg font-semibold hover:underline"
              style={{ color: "var(--color-dark-blue)" }}
            >
              Learn More →
            </button>
          </div>
        </div>
      </section>

      <EpisodeGrid />
    </div>
  );
};

export default Show;

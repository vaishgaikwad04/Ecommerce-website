import React from "react";

const episodes = [
  {
    name: "LuAnn de Lesseps",
    episode: "HIM + HER SHOW EPISODE 887",
    img: "https://tscpodcast.com/wp-content/uploads/2025/09/LuAnn-de-Lesseps-887-300x300.png",
  },
  {
    name: "Mark Consuelos",
    episode: "HIM + HER SHOW EPISODE 886",
    img: "https://tscpodcast.com/wp-content/uploads/2025/09/130-300x300.png",
  },
  {
    name: "Jess Jacobs",
    episode: "HIM + HER SHOW EPISODE 885",
    img: "https://tscpodcast.com/wp-content/uploads/2025/09/Coterie-885-300x300.png",
  },
  {
    name: "Q&A Part 2",
    episode: "HIM + HER SHOW EPISODE 884",
    img: "https://tscpodcast.com/wp-content/uploads/2025/09/ML-QA-Pt-1-300x300.png",
  },
  {
    name: "Q&A Part 1",
    episode: "HIM + HER SHOW EPISODE 883",
    img: "https://tscpodcast.com/wp-content/uploads/2025/09/ML-QA-Pt-2-300x300.png",
  },
  {
    name: "LuAnn de Lesseps",
    episode: "HIM + HER SHOW EPISODE 882",
    img: "https://tscpodcast.com/wp-content/uploads/2025/08/Michael-Bosstick-877-300x300.png",
  },
  {
    name: "Mark Consuelos",
    episode: "HIM + HER SHOW EPISODE 881",
    img: "https://tscpodcast.com/wp-content/uploads/2025/08/Mimi-Evarts-876-300x300.png",
  },
  {
    name: "Jess Jacobs",
    episode: "HIM + HER SHOW EPISODE 880",
    img: "https://tscpodcast.com/wp-content/uploads/2025/08/Vami-Hari-875-300x300.png",
  },
  {
    name: "Q&A Part 2",
    episode: "HIM + HER SHOW EPISODE 879",
    img: "https://tscpodcast.com/wp-content/uploads/2025/08/The-Burnouts-874-300x300.png",
  },
  {
    name: "Q&A Part 1",
    episode: "HIM + HER SHOW EPISODE 878",
    img: "https://tscpodcast.com/wp-content/uploads/2025/07/Gary-Sage-Brecka-866-300x300.png",
  },
  {
    name: "Extra Episode 1",
    episode: "HIM + HER SHOW EPISODE 877",
    img: "https://tscpodcast.com/wp-content/uploads/2025/07/Courtney-Swan-863-300x300.png",
  },
  {
    name: "Extra Episode 2",
    episode: "HIM + HER SHOW EPISODE 876",
    img: "https://tscpodcast.com/wp-content/uploads/2025/06/Holly-Madison-854-300x300.png",
  },
   {
    name: "Extra Episode 1",
    episode: "HIM + HER SHOW EPISODE 877",
    img: "https://tscpodcast.com/wp-content/uploads/2025/06/Lauryn-Preg-Solo-855-300x300.png",
  },
  {
    name: "Extra Episode 2",
    episode: "HIM + HER SHOW EPISODE 876",
    img: "https://tscpodcast.com/wp-content/uploads/2025/06/Josie-Rushing-851-300x300.png",
  },
];

const EpisodeGrid = () => {
  // Split episodes for 3 rows
  const firstRow = episodes.slice(0, 5); // first 4 episodes
  const secondRow = episodes.slice(4, 10); // next 6 episodes
  const thirdRow = episodes.slice(10); // remaining episodes

  const renderRow = (row) => (
    <div className="flex overflow-x-auto space-x-8 mb-6 scrollbar-thin scrollbar-thumb-gray-100 justify-center scrollbar-track-white px-6">
      {row.map((ep, index) => (
        <div
          key={index}
          className="flex-shrink-0 w-64 md:w-74 rounded-xl overflow-hidden relative group cursor-pointer"
        >
          <img
            src={ep.img}
            alt={ep.name}
            className="w-full h-80 object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
            <h3 className="text-lg font-semibold">{ep.name}</h3>
            <p className="text-sm mt-1">{ep.episode}</p>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="w-full py-10 bg-gray-50 mt-24">
      {renderRow(firstRow)}
      {renderRow(secondRow)}
      {renderRow(thirdRow)}
    </div>
  );
};

export default EpisodeGrid;

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
  const secondRow = episodes.slice(4, 9); // next 6 episodes
  const thirdRow = episodes.slice(10); // remaining episodes

  const renderRow = (row) => (
    <div className="flex overflow-x-auto space-x-8 mb-6 scrollbar-thin scrollbar-thumb-gray-50 justify-center scrollbar-track-white px-6">
      {row.map((ep, index) => (
        <div className="relative group overflow-hidden rounded">
          <img
            src={ep.img}
            alt={ep.name}
            className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition duration-300"></div>

          <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
            <h3 className="text-lg font-semibold">{ep.name}</h3>
            <p className="text-sm">{ep.episode}</p>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="w-full py-10 mt-24">
      {renderRow(firstRow)}
      {renderRow(secondRow)}
      {renderRow(thirdRow)}
    </div>
  );
};

export default EpisodeGrid;

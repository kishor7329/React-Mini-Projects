// Player.jsx
import React, { useEffect, useState } from "react";

const Player = ({ title }) => {
  const [error, setError] = useState("");

  const apiKey = "AIzaSyApXg-SQCwXgrpXcqbLeC9Xg4tfG4cJrd8"; // your key

  useEffect(() => {
    const fetchTrailer = async () => {
      try {
        const res = await fetch(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=${encodeURIComponent(
            title + " trailer"
          )}&maxResults=1&key=${apiKey}`
        );
        const data = await res.json();
        if (!data.items || !data.items.length) {
          throw new Error("No trailer found");
        }
        const id = data.items[0].id.videoId;
        // directly redirect
        window.open(
          `https://www.youtube.com/watch?v=${id}`,
          "_blank",
          "noopener,noreferrer"
        );
      } catch (err) {
        setError(err.message);
      }
    };

    if (title) {
      fetchTrailer();
    }
  }, [title]);

  return (
    <div>
      {error && (
        <a
          href={`https://www.youtube.com/results?search_query=${encodeURIComponent(
            title + " trailer"
          )}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Watch on YouTube
        </a>
      )}
    </div>
  );
};

export default Player;
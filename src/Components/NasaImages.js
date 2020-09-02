import React, { useState, useEffect } from "react";
import axios from "axios";
import Timeout from "await-timeout";

function NasaImages() {
  const [getImages, showImages] = useState([]);

  useEffect(() => {
    async function fetchNasaImages() {
      const res = await axios.get("https://apodapi.herokuapp.com/api/?count=5");
      await Timeout.set(5000);
      showImages(res.data);
    }
    fetchNasaImages();
  }, []);

  if (getImages.length === 0) {
    return (
      <img
        alt="some info"
        src="https://media1.giphy.com/media/3oEjI6SIIHBdRxXI40/200.gif"
      />
    );
  }

  return (
    <div>
      <div></div>
      <div>
        {getImages.map((image) => (
          <img key={image.url} alt={image.description} src={image.url} />
        ))}
      </div>
    </div>
  );
}

export default NasaImages;

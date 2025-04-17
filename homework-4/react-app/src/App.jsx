import { useState } from "react";
import "./App.css";
import { CatImg } from "./components/catImagesGallery/catImages";
import { RandomUserFetcher } from "./components/randomUserFetcher/randomUserFetcher";
import { DynamicCounter } from "./components/simpleCounter/dinamicCounter";

function App() {
  const [catImages, setCatImages] = useState([]);
  const resetButton = () => {
    setCatImages([]);
  };

  function fetchCatImages() {
    fetch("https://api.thecatapi.com/v1/images/search?limit=10")
      .then((response) => response.json())
      .then((data) => setCatImages(data))
      .catch(console.error())
  }

  return (
    <>
      <DynamicCounter />
      <br />
      <RandomUserFetcher />
      <br />
      <br />
      <div className="div-show">
        <button onClick={fetchCatImages}>Fetch Cat Images</button>
        {catImages.length > 0 && <button onClick={resetButton}>Clear</button>}
      </div>

      {catImages.length > 0 && (
        <div className="div-url">
          {catImages.map((url, index) => (
            <CatImg key={index} url={url} />
          ))}
        </div>
      )}
    </>
  );
}

export default App;

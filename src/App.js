import React from "react";
import "./App.css";
import Hls from "hls.js";

function App() {
  React.useEffect(() => {
    if (Hls.isSupported()) {
      var video = document.getElementById("video");
      var videoSrc =
        "https://6180c994cb835402.mediapackage.eu-west-1.amazonaws.com/out/v1/b2f0e35c4de8461a9ea8c4e347b8822a/index.m3u8";
      const s = new Hls();
      s.loadSource(videoSrc);
      s.attachMedia(video);
    } else {
      console.log("not suppoerted");
    }
  }, []);

  return (
    <div className="App">
      <h1>Video</h1>
      <video controls id="video"></video>
    </div>
  );
}

export default App;

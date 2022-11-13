// import 'video-react/dist/video-react.css'; 

import React from 'react';
// import { Player } from 'video-react';


 const VideoApp=() => {
  return (
    // <Player >
    //   <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
    // </Player>
    <>
    <video width="640" height="480" 
       src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" 
       autoPlay
       controls>
  {/* Sorry, your browser doesn't support HTML5 <code>video</code>,
  but you can download this video from the */}
  <a href="https://archive.org/details/Popeye_forPresident" target="_blank">
    Internet Archive</a>. 
</video>
    </>
  );
};

export default VideoApp;
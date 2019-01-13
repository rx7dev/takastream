import React from "react";

const VideoComments = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div className="content">
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoComments;

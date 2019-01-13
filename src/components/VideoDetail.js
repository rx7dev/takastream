import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div className="content">
      <div className="ui embed">
        <iframe
          title="title"
          src={videoSrc}
          frameBorder="0"
          allowFullscreen="allowfullscreen"
        />
      </div>
    </div>
  );
};

export default VideoDetail;

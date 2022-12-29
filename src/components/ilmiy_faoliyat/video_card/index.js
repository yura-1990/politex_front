import React from "react";
import { VideoCardWrapper } from "./style";
import VideoIcon from "@/assets/icons/video-icon.png";

function VideoCard({ data }) {
  return (
    <VideoCardWrapper>
      <div className="container">
        <iframe
          src={data.videourl}
          className="video"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>

        <div className="content">{data?.title}</div>
      </div>
    </VideoCardWrapper>
  );
}

export default VideoCard;

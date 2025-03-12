import React, { useRef, useEffect } from "react";
import FooterLeft from "./FooterLeft";
import FooterRight from "./FooterRight";
import "./VideoCard.css";

const VideoCard = (props) => {
  const {
    url,
    username,
    description,
    song,
    likes,
    shares,
    comments,
    saves,
    profilePic,
    setVideoRef,
    autoplay,
  } = props;
  const videoRef = useRef(null);

  useEffect(() => {
    if (autoplay) {
      // videoRef.current.play();
    }
  }, [autoplay]);

  const onVideoPress = () => {
    if (videoRef.current.paused) {
      // videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };
  return (
    <div className="video">
      <video
        onClick={onVideoPress}
        ref={(ref) => {
          videoRef.current = ref;
          setVideoRef(ref);
        }}
        className="player"
        loop
        controls
      >
        <source src={url} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="bottom-controls">
        <div className="footer-left">
          <FooterLeft
            username={username}
            description={description}
            song={song}
          />
        </div>
        <div className="footer-right">
          <FooterRight
            likes={likes}
            shares={shares}
            comments={comments}
            saves={saves}
            profilePic={profilePic}
          />
        </div>
      </div>
    </div>
  );
};

export default VideoCard;

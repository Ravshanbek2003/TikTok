import React, { useEffect, useState, useRef } from "react";
import "./App.css";
import VideoCard from "./components/VideoCard";
import TopNavbar from "./components/TopNavbar";

// This array holds information about different videos
const videoUrls = [
  {
    url: "https://ia902907.us.archive.org/11/items/video1_202503/video1.mp4",
    profilePic: "https://picsum.photos/200",
    username: "deler_04",
    description:
      "vine n1 tik tok videolar #tiktok #trend #reels #qizlar #instagram #narminjan #mira #pubg #pubgm",
    song: "",
    likes: 430,
    comments: 13,
    saves: 23,
    shares: 1,
  },
  {
    url: "https://ia802907.us.archive.org/9/items/video2_202503/video2.mp4",
    profilePic: "https://picsum.photos/200",
    username: "pompaloq",
    description: " ",
    song: " ",
    likes: "13.4K",
    comments: 3121,
    saves: 254,
    shares: 420,
  },
  {
    url: "https://ia601303.us.archive.org/6/items/video3_202503/video3.mp4",
    profilePic: "https://picsum.photos/200",
    username: "sheyxmuz",
    description:
      "tik tok 2023 trend music  obuna bulamiz #instagram #tiktok #qizlar #trend #reels #uzmir #mira",
    song: " ",
    likes: 5438,
    comments: 238,
    saves: 12,
    shares: 117,
  },
  {
    url: "https://ia903205.us.archive.org/20/items/video4_202503/video4.mp4",
    profilePic: "https://picsum.photos/200",
    username: "pandacha09",
    description:
      "узбекча тренд #uzbek #uzb #trend #rek #shorts #shortvideo #uzbekistan #tiktokuz",
    song: " ",
    likes: 300,
    comments: 3,
    saves: 3,
    shares: 100,
  },
  {
    url: "https://ia801807.us.archive.org/24/items/video5_202503/video5.mp4",
    profilePic: "https://picsum.photos/200",
    username: "faruktutkus",
    description:
      "Wait for the end | Im RTX 4090 TI | #softwareengineer #softwareengineer #coding #codinglife #codingmemes ",
    song: "orijinal ses - Computer Science",
    likes: 9689,
    comments: 230,
    saves: 1037,
    shares: 967,
  },
  {
    url: "https://ia601303.us.archive.org/18/items/video7_202503/video7.mp4",
    profilePic: "https://picsum.photos/200",
    username: "azik009",
    description: "Lol nvm #compsci #chatgpt #ai #openai #techtok",
    song: " ",
    likes: 4300,
    comments: 123,
    saves: 23,
    shares: 10,
  },
  {
    url: "https://ia902906.us.archive.org/7/items/video6_202503/video6.mp4",
    profilePic: "https://picsum.photos/200",
    username: "alone",
    description: "ЧИНГИЗ  ХАСБИК ТИК ТОК #shorts #chingiz #чингиз",
    song: " ",
    likes: 400,
    comments: 23,
    saves: 3,
    shares: 10,
  },
];

function Home() {
  const [videos, setVideos] = useState([]);
  const videoRefs = useRef([]);

  useEffect(() => {
    setVideos(videoUrls);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.8, // Adjust this value to change the scroll trigger point
    };

    // This function handles the intersection of videos
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const videoElement = entry.target;
          videoElement.play();
        } else {
          const videoElement = entry.target;
          videoElement.pause();
        }
      });
    };

    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );

    // We observe each video reference to trigger play/pause
    videoRefs.current.forEach((videoRef) => {
      observer.observe(videoRef);
    });

    // We disconnect the observer when the component is unmounted
    return () => {
      observer.disconnect();
    };
  }, [videos]);

  // This function handles the reference of each video
  const handleVideoRef = (index) => (ref) => {
    videoRefs.current[index] = ref;
  };

  return (
    <div className="app">
      <div className="container">
        <TopNavbar className="top-navbar" />
        {/* Here we map over the videos array and create VideoCard components */}
        {videos.map((video, index) => (
          <VideoCard
            key={index}
            index={index}
            username={video.username}
            description={video.description}
            song={video.song}
            likes={video.likes}
            saves={video.saves}
            comments={video.comments}
            shares={video.shares}
            url={video.url}
            profilePic={video.profilePic}
            setVideoRef={handleVideoRef(index)}
            autoplay={index === 0}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;

import { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination } from 'swiper/modules';

import videoSrc from '../../assets/mixkit-countryside-meadow-4075-medium.mp4';

import './swiper.css';

export default () => {
  const videoRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  // const swiperRef = useRef(null);

  useEffect(() => {
    // const swiperInstance = swiperRef.current?.swiper;
    // if (!swiperInstance) {
    //   return;
    // }

    // const handleScroll = e => {
    //   e.preventDefault();
    //   if (e.deltaY < 0) {
    //     swiperInstance.slideNext();
    //   } else {
    //     swiperInstance.slidePrev();
    //   }
    // };
    // swiperRef.current.addEventListener('wheel', handleScroll);

    const handleTimeUpdate = () => {
      setCurrentTime(videoRef.current.currentTime);
    };

    const handleLoadedMetadata = () => {
      setDuration(videoRef.current.duration);
    };
    videoRef.current.addEventListener('timeupdate', handleTimeUpdate);
    videoRef.current.addEventListener('loadedmetadata', handleLoadedMetadata);

    return () => {
      // swiperRef.current.removeEventListener('wheel', handleScroll);
      videoRef.current.removeEventListener('timeupdate', handleTimeUpdate);
      videoRef.current.removeEventListener(
        'loadedmetadata',
        handleLoadedMetadata,
      );
    };
  }, []);

  const handleProgressChange = e => {
    videoRef.current.currentTime = e.target.value;
    console.log(e.target.value);
    videoRef.current.play();
  };
  const togglePlay = () => {
    if (videoRef.current) {
      const isPaused = videoRef.current.paused;
      if (isPaused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };

  return (
    <>
      <Swiper
        id="myswiper"
        className="items"
        loop={true}
        modules={[Mousewheel, Pagination]}
        mousewheel={true}
        spaceBetween={1}
        slidesPerView={1}
        direction={'vertical'}
        onSlideChange={() => console.log('slide change')}
        onSwiper={swiper => console.log(swiper)}
      >
        <SwiperSlide className="overlay-p">
          <div className="videocontainer">
            <video
              className="swipervideo"
              width="100%"
              height="300px"
              ref={videoRef}
              src={videoSrc}
              type="video/mp4"
              muted
              controlsList="nodownload noplaybackrate nofullscreen noremoteplayback"
            />
          </div>
          <div className="overlay" onClick={togglePlay}></div>
          <div className="overlay-2">
            <input
              className="progress-bar"
              type="range"
              min="0"
              max={duration}
              value={currentTime}
              onChange={handleProgressChange}
            />
            <button className="overlay-button" onClick={togglePlay}>
              {videoRef.current && videoRef.current.paused ? '播放' : '暂停'}
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
      </Swiper>
    </>
  );
};

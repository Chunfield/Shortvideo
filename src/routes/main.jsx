// import { useState, useRef, useEffect } from 'react';

// function Mainarea() {
//   const [currentScrollIndex, setCurrentScrollIndex] = useState(0); // 初始化当前滚动索引
//   const scrollContainerRef = useRef(null); // 用于访问DOM节点的引用

//   const handleScroll = () => {
//     const { scrollTop, clientHeight, scrollHeight } =
//       scrollContainerRef.current;
//     // 检查是否滚动到底部
//     if (scrollTop + clientHeight >= scrollHeight) {
//       // 切换到下一个div
//       setCurrentScrollIndex(prevIndex => (prevIndex + 1) % 2);
//       // 滚动回顶部
//       scrollContainerRef.current.scrollTop = 0;
//     }
//   };
//   useEffect(() => {
//     const container = scrollContainerRef.current;
//     if (container) {
//       container.addEventListener('scroll', handleScroll);
//       return () => container.removeEventListener('scroll', handleScroll); // 组件卸载时移除监听器
//     }
//   }, []);
//   const getItemStyle = index => {
//     if (index === currentScrollIndex) {
//       return {
//         display: 'block',
//         height: '100%', // 确保div填满容器高度以触发滚动
//       };
//     }
//     return {
//       display: 'none',
//     };
//   };
//   return (
//     <div className="maincontainer">
//       <div
//         className="scrollcontainer"
//         ref={scrollContainerRef}
//         style={{ overflowY: 'scroll' }}
//       >
//         <div
//           className="scrollitems"
//           style={{ ...getItemStyle(0), backgroundColor: 'red' }}
//         ></div>
//         <div
//           className="scrollitems"
//           style={{ ...getItemStyle(1), backgroundColor: 'blue' }}
//         ></div>
//       </div>
//     </div>
//   );
// }
// export default Mainarea;
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import './swiper.css';

export default () => {
  return (
    <Swiper
      className="items"
      spaceBetween={1}
      slidesPerView={1}
      direction="vertical"
      onSlideChange={() => console.log('slide change')}
      onSwiper={swiper => console.log(swiper)}
    >
      <SwiperSlide>
        <video
          className="swipervideo"
          width="100%"
          height="300px"
          controls
          src="path_to_your_video1.mp4"
          type="video/mp4"
          muted
          controlsList="nodownload noplaybackrate nofullscreen noremoteplayback"
        />
      </SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
    </Swiper>
  );
};

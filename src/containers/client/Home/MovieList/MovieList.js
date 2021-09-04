import React, { useState } from 'react'
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper/core';
import './MovieList.scss'
import { FaInfoCircle, FaWallet,FaRegPlayCircle,FaPlay} from 'react-icons/fa'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Button, ButtonGroup, Image } from 'react-bootstrap';
import ModalVideo from 'react-modal-video'
SwiperCore.use([Autoplay, Pagination, Navigation]);
export default function MovieList() {
  const [isOpen, setOpen] = useState(false)
  let getvideoid = (url) => (url.split("embed/")[1].substring(0))




  return (
    <div style={{ backgroundColor: "#111111ff", height:"100vh" }}>
      
      <div className="container">
      <h3 className="text-white">
        Phim đang chiếu
      </h3>
        <Swiper
          slidesPerView={5}
          spaceBetween={10}
          slidesPerGroup={2}
        // autoplay={{
        //   delay: 1500,
        //   disableOnInteraction: false,
        // }}
        // loop={true}
        // loopFillGroupWithBlank={true}
        >
          <SwiperSlide >
            <Image style={{borderRadius:"5px"}} className="img-movie" src="http://movieapi.cyberlearn.vn/hinhanh/godzilla-vs-kong_gp01.jpg "></Image>
            <div className="hover-movie">
              <ButtonGroup className="btnmovie" >
                <Button className="btnDetail"> <FaInfoCircle />Chi Tiết</Button> <Button className="btnBuy"><FaWallet />Mua Vé</Button>
              </ButtonGroup>
              <div className="trailer">
                <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId={getvideoid('https://www.youtube.com/embed/DRCEto_MHSI')} onClose={() => setOpen(false)} />

                <div className="ic-play" onClick={() => setOpen(true)}><FaPlay/></div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <Image className="img-movie" src="http://movieapi.cyberlearn.vn/hinhanh/hon-ma-co-don_gp01.jpg"></Image>
            <div className="hover-movie"></div>
          </SwiperSlide>
          <SwiperSlide>
            <Image className="img-movie" src="http://movieapi.cyberlearn.vn/hinhanh/hon-ma-co-don_gp01.jpg"></Image>
            <div className="hover-movie"></div>
          </SwiperSlide>
          <SwiperSlide>
            <Image className="img-movie" src="http://movieapi.cyberlearn.vn/hinhanh/hon-ma-co-don_gp01.jpg"></Image>
            <div className="hover-movie"></div>
          </SwiperSlide>


        </Swiper>
      </div>
    </div>
  )
}

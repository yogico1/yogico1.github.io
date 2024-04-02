// Import Swiper React components swiper swipr
import { Swiper, SwiperSlide } from 'swiper/react'; //components import
// import required modules
import { Navigation } from 'swiper'; //navigation modules import
import { Pagination } from 'swiper'; //pagination modules import
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation'; //navigation css import
import 'swiper/css/pagination'; //pagination css import
//비디오 태그
import './css/section_01.css'

//  <Player src='https://leshwan.cafe24.com/video/yogico.mp4' width="100%" loop="true"autoPlay isFullscreen/>

function Visual(){
    return (
     <>
     <seciton className="p_l_d_b">
          <div style={{position:'relative',zIndex:'2'}}>
         <video id="vid"autoplay=""className="vide_wrapper"src="https://amkiri.hgodo.com/video/yogico_001.mp4" 
                width="100%;" muted="muted" preload="auto"loop="true" playsinline="true" pop="false" >
          </video>
          
          </div>   
      </seciton>
     </>
    )
  }
  
  export default Visual
  
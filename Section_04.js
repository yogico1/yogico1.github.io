// Import Swiper React components swiper swipr
import { Swiper, SwiperSlide } from 'swiper/react'; //components import
// import required modules
import { Navigation } from 'swiper'; //navigation modules import
import { Pagination ,Autoplay} from 'swiper'; //pagination modules import
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation'; //navigation css import
import 'swiper/css/pagination'; //pagination css import
function Section_04(){
    return(
      <>
         <section class="p_l_d_b2">
            <div id="office_wrapper">
            <p class="tit">YOGI CORPORATION INFO</p>
            <Swiper
               modules={[Navigation,Pagination,Autoplay]} // Navigation, Pagination 추가
               slidesPerView={1.5}
               spaceBetween={50}
               navigation={true} // navigation 옵션 활성화 
               autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                  
                }}
               className='mySwiper'
               >
               <SwiperSlide>
                     <img src="https://yogibo.kr/yogico/img/banner/middle_banner_01.jpg" 
                      style={{width:'100%',cursor:'pointer'}}/>
               </SwiperSlide>
               <SwiperSlide>
                     <img src="https://yogibo.kr/yogico/img/banner/middle_banner_02.jpg" 
                     style={{width:'100%',cursor:'pointer'}}/>
               </SwiperSlide> 
               <SwiperSlide>
                     <img src="https://yogibo.kr/yogico/img/banner/middle_banner_03.jpg"
                     style={{width:'100%',cursor:'pointer'}}/>
               </SwiperSlide>               
            </Swiper>
            </div>
         </section>
      </>      
    )
  }
  export default Section_04
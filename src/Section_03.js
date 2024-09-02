
function Section_03(){
    return(
       <>
       <section class="p_l_d_b2">
          <div class="brand_wrapper row aos-init aos-animate" data-aos="fade-up" data-aos-duration="500">

             <div class="brand_inner col-lg-6 banner_01" onClick={()=>window.open('https://yogibo.kr/','_blank')}>
                <div class="brand_dim"></div>
                <div class="brand_img">
                   <img src="https://yogibo.kr/yogico/img/icon/yogibo_banner.png" alt=""/>
                </div>
                <div class="brand_logo yogi_logo">
                   <img src="https://yogibo.kr/web/img/icon/logo.png" alt=""  style={{width: "140px"}}/>
                </div>
                <div class="brand_line yogibo_line_img">
                   <img src="https://yogibo.kr/yogico/img/icon/g_on.png" alt=""
                    style={{width: "18px"}}/>
                </div>
             </div>

             <div class="brand_inner col-lg-6 banner_02" onClick={()=>window.open('https://betterair.kr/','_blank')}>
                <div class="brand_dim"></div>
                <div class="brand_img ">
                  <img src="https://yogibo.kr/yogico/img/banner/betterair_banner.png" alt="beterair"/>
                  </div>
                <div class="brand_logo better_logo">
                   <img src="https://yogibo.kr/yogico/img/icon/betterair_white.png"
                   style={{width: "240px"}}
                   />
                </div>
                <div class="brand_line better_line_img">
                  <img src="https://yogibo.kr/yogico/img/icon/b_on.png" alt="아이콘"  
                  style={{width: "30px"}}/></div>
             </div>

             <div class="brand_inner col-lg-6 banner_03" style={{marginTop:"20px!important"}}
             onClick={()=>window.open('/service','_blank')}>
                <div class="brand_dim"></div>
                <div class="brand_img ">
                  <img src="https://yogibo.kr/yogico/img/banner/hrf_banner.jpg" alt="HRF배너"/>
                  </div>
             </div>
             <div class="brand_inner col-lg-6 banner_04" style={{marginTop:"20px!important"}}>
             </div>
          </div>

       </section>
       </>
    )
} 
export default Section_03
function Footer(){
    return(
        <>
        <div id="footerWrap" class="light ani2">
           <div class="footer container">
              <div class="row">
                 <div class=" col-xl-4 col-md-4 col-sm-12 col-xs-12">
                    <p class="logo" >
                      <img src="https://yogibo.kr/yogico/img/icon/Signature03.png"/></p>
                 </div>  
                 <div class=" col-xl-4 col-md-4 col-sm-12 col-xs-12">
                    <p>
                      <ul>
                        <li>서울시 강남구 봉은사로 125, 2층 201호</li>
                        <li>㈜요기코퍼레이션</li>
                      </ul>
                    </p>
                    <p>
                      <ul>
                        <li>평일 10:00 - 17:30<br/>점심 12:50 - 14:00 <br/>휴일 토,일,공휴일</li>
                      </ul>
                    </p>
                </div>            
                <div class=" col-xl-4 col-md-4 col-sm-12 col-xs-12">
                    <ul>
                        <li style={{cursor:'pointer',fontSize:'15px'}} 
                          onClick={()=>window.open('https://yogico.kr/#/partners')}>
                        <strong>파트너스 &nbsp;<img src="http://yogibo.kr//web/img/icon/new/arrow_right.svg" style={{width:'7px'}}/></strong></li>
                        <li style={{cursor:'pointer',fontSize:'15px'}} 
                          onClick={()=>window.open('https://yogico.kr/#/careers2')}>
                            <strong>입사지원 &nbsp;<img src="http://yogibo.kr//web/img/icon/new/arrow_right.svg" style={{width:'7px'}}/></strong>
                          </li>
                        <li>02-557-0920</li>
                        <li>partner@yogico.kr</li>
                    </ul>
                </div>
              </div>
           </div>     
        </div>
        <div id="footerBottom">
          <div class="txt">
            <p>Making Lifestyle Better</p>
          </div>
          <div class="jump-mask"></div>
            <figure>
                <img src="https://yogibo.kr/yogico/img/banner/img_footer_bottom11.jpg" alt="" class="footer_img"/>
                <img src="https://yogibo.kr/yogico/img/banner/m_main_05.jpg" alt="" class="footer_img_m" style={{display:'none'}}/>
            </figure>
        </div>
       </>
    )
}
export default Footer
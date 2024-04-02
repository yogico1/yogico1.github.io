import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';

function Section_01(){
    return(
        <>
        <section class="p_l_d_b2">
            <div class="section_01_wrapper">
                <div class="section_01_inner" style={{padding:'0'}}>
                    <div class="img_section aos-init aos-animate" style={{padding:'0'}}  data-aos="fade-up" data-aos-duration="600">
                        <img src="https://yogibo.kr/yogico/img/section/section_01_01.jpg" 
                        style={{width:'100%'}}/>
                   </div>                  
                </div>
                <div class="section_01_inner text_info">
                    <div class="text_info_left aos-init aos-animate"  data-aos="fade-up" data-aos-duration="900">
                        <p class="text_01">
                            Yogi Corporation Inc.</p>
                        <p class="text_02">
                            와우/열정/변화/성장/우리 </p>
                        <p class="text_03">
                            <ul>
                                <li>고객에게는 ‘와우’ 고객경험을 통해 감동을 주고 동료와는 ‘열정’을 나누어 
                                건강한 ‘성장’을 이뤄내며 결과적으로 ‘우리’ 사회에 긍정적인 ‘변화’를 
                                일으킵니다 </li>
                            </ul>
                        </p>
                        <p class="text_04">
                            <dl>
                                <dt><span>WOW</span></dt>
                                <dd>물심양면으로 고객에게 새롭고 즐거운 '와우' 경험을 선물합니다</dd>
                            </dl>
                        </p>
                        <p class="text_04">
                            <dl>
                                <dt><span>PASSION</span></dt>
                                <dd>어제보다 더 나은 오늘을 만들기 위해 우리의 열정을 불태웁니다</dd>
                            </dl>                    
                        </p>
                        <p class="text_04">
                            <dl>
                                <dt><span>CHANGE</span></dt>
                                <dd>내일 지구가 멸망할지라도 두려워하지 않고 오늘을 이겨냅니다</dd>
                            </dl>
                        </p>
                        <p class="text_04">
                            <dl>
                                <dt><span>SCALE UP</span></dt>
                                <dd>직원과 회사의 균형있는 성장과 성공을 통해 최고의 성과를 만듭니다</dd>
                            </dl>                     
                        </p>
                        <p class="text_04">
                            <dl>
                                <dt><span>WE-NESS</span></dt>
                                <dd>하나된 ‘우리’를 통해 협력의 가치를 극대화하고 멋진 세상을 함께 만듭니다</dd>
                            </dl>
                        </p>
                    </div>

                    <div class="text_info_right">
                        <div class="circle">
                            <ul>
                                <li><img src="https://yogibo.kr/yogico/img/icon/circle_01.png" alt=""/></li>
                                <li><img src="https://yogibo.kr/yogico/img/icon/circle_02.png" alt=""/></li>
                                <li><img src="https://yogibo.kr/yogico/img/icon/circle_03.png" alt=""/></li>
                                <li><img src="https://yogibo.kr/yogico/img/icon/circle_04.png" alt=""/></li>
                                <li><img src="https://yogibo.kr/yogico/img/icon/circle_05.png" alt=""/></li>
                            </ul>
                        </div>            
                    </div>
                </div>   
                
                <div class="section_01_inner">
                    <div class="img_section aos-animate"  data-aos="fade-up" data-aos-duration="1100">
                        <ul>
                            <li><img src="https://yogibo.kr/yogico/img/section/section_01_02.jpg" style={{width:'100%'}}/></li>
                            <li class="img_section_top"><img src="https://yogibo.kr/yogico/img/section/section_01_03.jpg" style={{width:'100%'}}/></li>
                        </ul>
                    </div>
                    <div class="img_section_02 aos-animate"  data-aos="fade-up" data-aos-duration="1300">
                        <ul>
                            <li><img src="https://yogibo.kr/yogico/img/section/section_01_05.jpg" style={{width:'100%'}}/></li>
                            <li class="img_section_top"><img src="https://yogibo.kr/yogico/img/section/section_01_04.jpg" style={{width:'100%'}}/></li>
                        </ul>
                    </div>
                </div> 
                <div class="section_01_inner aos-animate"  data-aos="fade-up" data-aos-duration="1600">
                    <div class=" make_info">
                        <div class="make_left">
                            <dl>
                                <dt>요기코퍼레이션은 스마트 라이프스타일 브랜드 플랫폼으로,
                                    브랜드와 관련 기술 개발을 통해 국내외 라이프스타일
                                    시장을 변화시킵니다
                                </dt>
                                <dd>
                                    <ul>
                                        <li class="make_logo"><img src="https://yogibo.kr/yogico/img/icon/make_better_02.png"style={{width:'100%'}}/></li>
                                        <li class="make_img">
                                            <img src="https://yogibo.kr/yogico/img/section/make_img_01.jpg" style={{width:'100%'}}/>
                                        </li>
                                    </ul>
                                </dd>
                            </dl>
                        </div>
                        <div class="make_right">
                            <p><img src="https://yogibo.kr/yogico/img/section/make_img_02.jpg" style={{width:'100%'}}/></p>
                            <p class="make_right_hide"><img src="https://yogibo.kr/yogico/img/section/make_img_01.jpg" style={{width:'100%',display:'none'}}/></p>
                        </div>
                    </div>
                </div>
            </div>          
        </section>        
        </>
    )
}

export default Section_01
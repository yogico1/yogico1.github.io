import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
function Careers_01(props){
    return(
        <>
            <div class="careers_wrapper tabcontent"  id="tab1">
            <div class="section_01_inner">
                <div class="section_01_inner"  style={{padding:'0'}}>
                    <div class="seciton_lifestyle">
                        <div class="careers_section_title">회사소개</div>
                        <div class="section_life_style_left">
                            <img src="https://yogibo.kr/yogico/img/icon/symbol_02.jpg"/>
                        </div>
                        <div class="section_life_style_right">
                            요기코퍼레이션은 어제보다 더 멋진 오늘이 되길 바라고,
                            오늘보다 더 희망적인 내일을 기대하는 마음으로 우리 일상에 필요한
                            라이프 스타일 브랜드를 개발하고 만듭니다. 단순히 하나의 제품을
                            만드는 것에 만족하지 않고 명확한 정체성,스타일,성격,가치관,철학을
                            성립하는 과정을 통해 더 많은 사람들의 삶의 가치를 높이는 것을 추구합니다
                        </div>
                    </div>
                </div>
                <div class="section_01_inner"  style={{padding:'0'}}>
                    <div class="careers_search">
                        <div class="careers_search_inner">
                          <div class="careers_search_title">인재상</div>
                            <div class="careers_search_sub">
                                <dl>
                                    <dt>목적적 사고</dt>
                                    <dd>반복의 일상에서 벗어나기 위해 분명한 목적을 가지고 그 목적을 이루기 위해 최선을 다하는 분</dd>
                                </dl>
                            </div>
                            <div class="careers_search_sub">
                                <dl>
                                    <dt>풍부한 상상력</dt>
                                    <dd>멋진 라이프스타일을 만들기 위해 다양한 사고와 시각의 상상을 현실로 이뤄내고 싶은 분 </dd>
                                </dl>
                            </div>
                            <div class="careers_search_sub">
                                <dl>
                                    <dt>타협없는 정직</dt>
                                    <dd>어떠한 직무와 업무 속에서도 자신, 동료, 회사를 절대 속이지 않으며 정직을 최우선시 여기는 분 </dd>
                                </dl>
                            </div>
                            <div class="careers_search_sub">
                                <dl>
                                    <dt>행복의 가치 </dt>
                                    <dd>자신, 동료, 고객이 느낄 수 있는 신선한 행복의 가치를 만들고 그 가치를 선물하고 싶은 분  </dd>
                                </dl>
                            </div>
                            <div class="careers_search_sub">
                                <dl>
                                    <dt>새로운 도전</dt>
                                    <dd>동료에게는 새로움을, 고객에게는 감동을 선물하기 위해 도전을 두려워하지 않고 실행에 옮겨보고 싶은 분 </dd>
                                </dl>
                            </div>
                            <div class="careers_search_sub">
                                <dl>
                                    <dt>Work is Play </dt>
                                    <dd>어차피 해야 할 일이라면 생각의 전환을 통해, 일을 놀이로 생각하고 그 가치 창출의 게임을 즐기고 싶은 분  </dd>
                                </dl>
                            </div>
                            <div class="careers_search_sub">
                                <dl>
                                    <dt>혼자가 아닌 함께  </dt>
                                    <dd>개인의 잠재력을 극대화하기 위해 동료애와 인간미를 바탕으로 동료들과 함께 일하는 것을 즐길 수 있는 분 </dd>
                                </dl>
                            </div>
                            <div class="careers_search_img">
                                <ul>
                                    <li onClick={()=>window.open('https://yogibo.kr/why/awesomepeople.html','_blank')}
                                    style={{cursor:'pointer'}}>
                                        <img src="https://yogibo.kr/yogico/img/careers/awsome_01.jpg"/>
                                    </li>
                                    <li>
                                    <Link to="/partners"  style={{cursor:'pointer'}}>
                                        <img src="https://yogibo.kr/yogico/img/careers/partnership_01.jpg"/>
                                    </Link>
                                    </li>
                                </ul>         
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
            <div class="middle_visual">
                <img src="https://yogibo.kr/yogico/img/careers/middle_banner.jpg" style={{width:'100%'}}/>
            </div>
            <div class="section_01_inner">
                <div class="welfare">
                    <div class="welfare_wrapper">
                        <ul>
                            <li>
                                <dl>
                                    <dt><img src="https://yogibo.kr/yogico/img/partners/icon_01.png"/>&nbsp;근무시간</dt>
                                    <dd>
                                        <ul>
                                            <li>본사(유연근무제 적용) <br/><span>출근 09:00~09:30 | 퇴근 18:00~18:30</span></li>
                                            <li>물류센터  <br/><span>출근 08:30 | 퇴근 17:30</span></li>
                                        </ul>
                                    </dd>
                                </dl>
                            </li>
                            <li class="secont_w">
                                <dl>
                                    <dt><img src="https://yogibo.kr/yogico/img/partners/icon_02.png"/>&nbsp;자유로운 휴가 사용</dt>
                                    <dd>
                                        <ul>
                                            <li><span class="no_span">열심히 일한만큼 Refresh도 중요</span></li>
                                        </ul>
                                    </dd>
                                </dl>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <dl>
                                    <dt><img src="https://yogibo.kr/yogico/img/partners/icon_03.png"/>&nbsp;자기계발비</dt>
                                    <dd>
                                        <ul>
                                            <li><span class="no_span">업무 관련 부분만이 아닌 폭 넓혀 문화생활까지 지원<br/>(직군별 상이)</span></li>
                                        </ul>
                                    </dd>
                                </dl>
                            </li>
                            <li class="secont_w">
                                <dl>
                                    <dt><img src="https://yogibo.kr/yogico/img/partners/icon_04.png"/>&nbsp;수습 종료 Gift</dt>
                                    <dd>
                                        <ul>
                                            <li><span class="no_span">3개월 수습 종료 후, 자사몰 포인트 및 요기코의 Identity가 담긴 선물 지급</span></li>
                                        </ul>
                                    </dd>
                                </dl>
                            </li>
                        </ul> 
                        <ul>
                            <li>
                                <dl>
                                    <dt><img src="https://yogibo.kr/yogico/img/partners/icon_05.png"/>&nbsp;조직 문화</dt>
                                    <dd>
                                        <ul>
                                            <li><span class="no_span">요동, 요다챌, 우리또, 승진식, 환송식, 요시데 등
                                                우리만의 조직 문화를 만들어가며 함께 일하는
                                                요미들과의 친목 도모 기회 Up! 
                                                활동비 지원은 Plus! </span>
                                            </li>
                                        </ul>
                                    </dd>
                                </dl>
                            </li>
                            <li class="secont_w">
                                <dl>
                                    <dt><img src="https://yogibo.kr/yogico/img/partners/icon_06.png"/>&nbsp;인재 추천 보상 제도</dt>
                                    <dd>
                                        <ul>
                                            <li><span class="no_span">나만 알고 있는 우수한 인재를 추천 후 채용되면 우리 모두 Winner</span></li>
                                        </ul>
                                    </dd>
                                </dl>
                            </li>
                        </ul> 
                        <ul>
                            <li>
                                <dl>
                                    <dt><img src="https://yogibo.kr/yogico/img/partners/icon_07.png"/>&nbsp;자율 복장</dt>
                                    <dd>
                                        <ul>
                                            <li><span class="no_span">반바지도 OK! 365일 자유로운 근무 복장 </span></li>
                                        </ul>
                                    </dd>
                                </dl>
                            </li>
                            <li class="secont_w">
                                <dl>
                                    <dt><img src="https://yogibo.kr/yogico/img/partners/icon_08.png"/>&nbsp;개성있는 헤어</dt>
                                    <dd>
                                        <ul>
                                            <li><span class="no_span">요미만의 Style을 존중, 레인보우 헤어도 OK</span></li>
                                        </ul>
                                    </dd>
                                </dl>
                            </li>
                        </ul> 
                        <ul>
                            <li>
                                <dl>
                                    <dt><img src="https://yogibo.kr/yogico/img/partners/icon_09.png"/>&nbsp;업무 장비 지원</dt>
                                    <dd>
                                        <ul>
                                            <li><span class="no_span">듀얼 모니터는 물론, 업무에 필요한 장비 제공</span></li>
                                        </ul>
                                    </dd>
                                </dl>
                            </li>
                            <li class="secont_w">
                                <dl>
                                    <dt><img src="https://yogibo.kr/yogico/img/partners/icon_10.png"/> &nbsp;회사 업무 실비 지원 </dt>
                                    <dd>
                                        <ul>
                                            <li><span class="no_span">회사 차량 제공은 물론, 개인차량 이용 시 
                                                실비 지원, 유류비 지원, 도로이용료 지원</span></li>
                                        </ul>
                                    </dd>
                                </dl>
                            </li>
                        </ul>   
                        <ul>
                            <li>
                                <dl>
                                    <dt><img src="https://yogibo.kr/yogico/img/partners/icon_11.png"/>&nbsp;자사 제품 할인</dt>
                                    <dd>
                                        <ul>
                                            <li><span class="no_span">요미가 제일 먼저 즐기는 Yogibo 제품 직원가 할인 적용</span></li>
                                        </ul>
                                    </dd>
                                </dl>
                            </li>
                            <li class="secont_w">
                                <dl>
                                    <dt><img src="https://yogibo.kr/yogico/img/partners/icon_12.png"/>&nbsp;팀별 운영비 지원 </dt>
                                    <dd>
                                        <ul>
                                            <li><span class="no_span">회식비, 음료, 다과 등 팀원들과의 소통 및
                                            동기부여를 위한 지원 </span></li>
                                        </ul>
                                    </dd>
                                </dl>
                            </li>
                        </ul>  
                        <ul>
                            <li>
                                <dl>
                                    <dt><img src="https://yogibo.kr/yogico/img/partners/icon_13.png"/>&nbsp;스낵바 운영</dt>
                                    <dd>
                                        <ul>
                                            <li><span class="no_span">회사 안의 작은 편의점에서 커피와 당 충전 </span></li>
                                        </ul>
                                    </dd>
                                </dl>
                            </li>
                            <li class="secont_w">
                                <dl>
                                    <dt><img src="https://yogibo.kr/yogico/img/partners/icon_14.png"/>&nbsp;생일 축하  </dt>
                                    <dd>
                                        <ul>
                                            <li><span class="no_span">소정의 기프트 카드 지급 </span></li>
                                        </ul>
                                    </dd>
                                </dl>
                            </li>
                        </ul>   
                        <ul>
                            <li>
                                <dl>
                                    <dt><img src="https://yogibo.kr/yogico/img/partners/icon_15.png"/>&nbsp;경조사 및 명절</dt>
                                    <dd>
                                        <ul>
                                            <li><span class="no_span">각종 휴가와 경조금, 결혼 선물 및 명절 선물 지급 </span></li>
                                        </ul>
                                    </dd>
                                </dl>
                            </li>
                            <li class="secont_w">
                                <dl>
                                    <dt><img src="https://yogibo.kr/yogico/img/partners/icon_16.png"/>&nbsp;성과금 지급</dt>
                                    <dd>
                                        <ul>
                                            <li><span class="no_span">월간 목표 금액 100% 달성 시,초과금액의 10%를 요미들과 함께!</span></li>
                                        </ul>
                                    </dd>
                                </dl>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <dl>
                                    <dt><img src="https://yogibo.kr/yogico/img/partners/icon_21.png"/>&nbsp;석식 지원</dt>
                                    <dd>
                                        <ul>
                                            <li><span class="no_span">굶지 않고 저녁은 챙겨 먹고 일하기  </span></li>
                                        </ul>
                                    </dd>
                                </dl>
                            </li>
                            <li class="secont_w">
                                <dl>
                                    <dt><img src="https://yogibo.kr/yogico/img/partners/icon_18.png"/>&nbsp;여가 활동</dt>
                                    <dd>
                                        <ul>
                                            <li><span class="no_span">미세먼지 없는 청정 리조트를 
                                                직원 할인가로 비용은 줄이고 혜택은 늘리고!</span>
                                            </li>
                                        </ul>
                                    </dd>
                                </dl>
                            </li>
                        </ul>    
                        <ul>
                            <li>
                                <dl>
                                    <dt><img src="https://yogibo.kr/yogico/img/partners/icon_19.png"/>&nbsp;육아 제도</dt>
                                    <dd>
                                        <ul>
                                            <li><span class="no_span">출산 전·후 휴가, 육아 휴직 제도 등
                                                육아 관련 제도 적극 지원 </span></li>
                                        </ul>
                                    </dd>
                                </dl>
                            </li>
                            <li class="secont_w">
                                <dl>
                                    <dt><img src="https://yogibo.kr/yogico/img/partners/icon_20.png"/>&nbsp;중소기업 청년 소득세 감면</dt>
                                    <dd>
                                        <ul>
                                            <li><span class="no_span">만 34세 이하 청년까지는 취업일로부터 5년까지
                                            소득세 90% 감면 혜택 적용</span>
                                            </li>
                                        </ul>
                                    </dd>
                                </dl>
                            </li>
                        </ul>   
                        <ul>
                            <li>
                                <dl>
                                    <dt><img src="https://yogibo.kr/yogico/img/partners/icon_21.png"/>&nbsp;중식 지원</dt>
                                    <dd>
                                        <ul>
                                            <li><span class="no_span">점심식사 걱정은 No! 든든하게 먹을 수 있도록 지원
                                                <br/>(직군별 상이)</span></li>
                                        </ul>
                                    </dd>
                                </dl>
                            </li>

                        </ul>                                                                               
                    </div>
                </div>
                
            </div>
         </div>
        </>
    )
}
export default Careers_01
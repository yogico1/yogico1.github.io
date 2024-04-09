import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import './css/section_01.css'
function Careers_02(){
    return(
        <>
            <div className="section_01_inner careers_02 tabcontent" id="tab2">
                <div className="section_01_inner"  style={{padding:'0'}}>
                    <div className="seciton_lifestyle">
                        <div className="careers_section_title">채용정보</div>
                    </div> 
                    <div className="employment_wrapper">
                        <div className="employment_title">
                            1.채용안내
                        </div>
                        <div className="emplyment_sub">-채용 프로세스</div>
                        <div className="emplyment_pr">
                            서류접수 <img src="https://yogibo.kr/web/img/icon/new/arrow_right.svg" style={{width:'6px'}}/>&nbsp;
                            서류검토 <img src="https://yogibo.kr/web/img/icon/new/arrow_right.svg" style={{width:'6px'}}/>&nbsp;
                            1차면접  <img src="https://yogibo.kr/web/img/icon/new/arrow_right.svg" style={{width:'6px'}}/>&nbsp;
                            2차면접  <img src="https://yogibo.kr/web/img/icon/new/arrow_right.svg" style={{width:'6px'}}/>&nbsp;
                            최종 합격
                        </div>
                        <div className="employment_number">
                            <dl>
                                <dt>① 서류 접수</dt>
                                <dd>
                                    채용 지원자는 채용 사이트에 게재된 기간 내에 온라인 입사지원서를 접수해야 합니다
                                     지원서 접수 시 본인의 경력 및 관심 분야에 따른 직무를 선택하여 
                                    이력서 및 자기소개서, 경력기술서(포트폴리오 등)를 첨부하여 접수하시기 바랍니다
                                </dd>
                            </dl>
                        </div>
                        <div className="employment_number">
                            <dl>
                                <dt>② 서류 검토 </dt>
                                <dd>
                                     이력서 및 첨부된 자기소개서, 경력기술서(포트폴리오) 등을 바탕으로 지원자가 
                                    지원 직무와 회사에 적합한 자격과 인재상을 갖추었는지를 종합적으로 검토합니다
                                </dd>
                            </dl>
                        </div>
                        <div className="employment_number">
                            <dl>
                                <dt>③ 면접 전형</dt>
                                <dd>
                                    <ul>
                                        <li>1) 1차: 실무진 면접</li>
                                        <li>2) 2차: 임원진 면접</li>
                                    </ul>
                                </dd>
                            </dl>
                        </div>
                        <div className="employment_number">
                            <dl>
                                <dt>④ 최종 합격 </dt>
                                <dd>
                                    최종 면접에 합격한 지원자는 입사 절차에 따라 요기코퍼레이션 구성원으로 합류하게 됩니다
                                </dd>
                            </dl>
                        </div>
                        <div className="emplyment_icon">
                            <ul className="e_icon_first">
                                <li>
                                    <dl>
                                        <dt><img src="https://yogibo.kr/yogico/img/partners/icon_22.png"/></dt>
                                        <dd>① 서류 접수</dd>
                                    </dl>
                                </li>
                                <li>
                                    <dl>
                                        <dt><img src="https://yogibo.kr/yogico/img/partners/icon_23.png"/></dt>
                                        <dd>② 서류 검토</dd>
                                    </dl>
                                </li>
                                <li> 
                                    <dl>
                                        <dt><img src="https://yogibo.kr/yogico/img/partners/icon_24.png"/></dt>
                                        <dd>③ 면접진행(1차/2차)</dd>
                                    </dl>
                                </li>
                                <div class="e_icon_text">서류 합격자에 한하여 개별 연락 예정</div>                          
                            </ul>
                            <ul className="e_icon_second">
                                <p className="e_iocn_bar"><img src="https://yogibo.kr/web/img/icon/new/arrow_right.svg"/></p>
                                <li>
                                    <dl>
                                        <dt><img src="https://yogibo.kr/yogico/img/partners/icon_25.png"/></dt>
                                        <dd>④ 최종합격 발표</dd>
                                    </dl>
                                </li>
                                <div class="e_icon_text">입사 시 3개월 동안 수습기간<br/>(모든 직원 동일)</div>   
                            </ul>
                        </div>
                        <div className="e_info">문의사항</div>
                        <div className="e_info_sub">인사 담당자 hr@yogico.kr</div>
                
                        <div className="e_info">입사지원</div>
                        <div className="e_info_sub">
                            <ul>
                                <li
                                onClick={() => window.open('https://www.jobkorea.co.kr/Recruit/Co_Read/Recruit/C/yogibo', '_blank')}
                                >잡코리아 입사지원 <img src="https://yogibo.kr/web/img/icon/new/arrow_right.svg"/></li>
                                <li
                                 onClick={() => window.open('https://www.saramin.co.kr/zf_user/company-info/view-inner-recruit?csn=RlFwOHkwNDNWVWFTMkF0QzRFQk5uQT09', '_blank')}
                                >사람인  입사지원 <img src="https://yogibo.kr/web/img/icon/new/arrow_right.svg"/></li>
                                 <li
                                onClick={() => window.open('https://www.shopma.net/job/guin.asp?fset=job_116&jobcode=20804&midkeyw=%EC%9A%94%EA%B8%B0%EB%B3%B4', '_blank')}
                                >샵마넷  입사지원 <img src="https://yogibo.kr/web/img/icon/new/arrow_right.svg"/></li>
                            </ul>
                        </div>
                        
                    </div>  
                </div>
            </div>

        </>
    )
}
    export default Careers_02
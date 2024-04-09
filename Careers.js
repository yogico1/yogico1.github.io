import './css/section_01.css'
import './css/careers.css'
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Careers_01 from './Careers_01.js'
import Careers_02 from './Careers_02.js'
import Careers_03 from './Careers_03.js'
import React from 'react';
import jquery from 'jquery';
import $ from 'jquery';


function Careers(){ 
    $(document).ready(function(){
        $('.careers_wrapper ').addClass('current');
        $('.careers_02 ').removeClass('current');
    })  
    return(
        <>
        <section class="p_l_d_b">
            <div class="careers_visual_01 tabcontent2 current2" id="visual_tab_01">
                <img src="https://yogibo.kr/web/img/banner/yogico_careers_w_01.jpg" style={{width:'100%'}} 
                    className="careers_visual_01_img"/>
                <img src="https://yogibo.kr/web/img/banner/yogico_careers_w_02.jpg" style={{width:'100%'}} 
                    className="careers_visual_01_m_img"/>
            </div>
            <div class="careers_visual_03 tabcontent2" id="visual_tab_02">
            <img src="https://yogibo.kr/yogico/img/careers/careers_img_03.jpg" style={{width:'100%'}} 
                    className="careers_visual_01_img"/>
                <img src="https://yogibo.kr/yogico/img/banner/m_main_02.jpg" style={{width:'100%'}} 
                    className="careers_visual_01_m_img"/>               
            </div> 
            <div class="careers_visual_02 tabcontent2" id="visual_tab_03">
                <img src="https://yogibo.kr/yogico/img/careers/careers_img_02.jpg" style={{width:'100%'}} 
                        className="careers_visual_01_img"/>
                    <img src="https://yogibo.kr/yogico/img/banner/m_main_03.jpg" style={{width:'100%'}} 
                        className="careers_visual_01_m_img"/>                
                </div>  
            <div class="section_01_wrapper">
                <div class="careers_select">
                    <ul>
                        <li data-tab="tab1" data-tab2="visual_tab_01"class="current">회사소개</li>
                        <li data-tab="tab2" data-tab2="visual_tab_02">채용정보</li>
                        <li data-tab="tab3" data-tab2="visual_tab_03">찾아오시는길</li>
                    </ul>
                </div>   
                <Careers_01/>
                <Careers_02/>
                <Careers_03/>
            </div>
        </section>
        </>
    )
}
export default Careers;

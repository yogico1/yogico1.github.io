/*eslint-disable*/
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap'
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Visual from './Visual.js'
import News from './News.js'
import Section from './Section.js'
import Partners from './Partners.js'
import React from 'react';
import jquery from 'jquery';
import $ from 'jquery';
import './css/Visual.css';
import './css/aside_menu.css';
import './App.css';
import Choice from './Choice.js';
import Careers from './Careers.js';
import Footer from './Footer.js';
import News_letter from './News_letter.js';
import Corporation from './Corporation.js';
import Careers2 from './Careers2.js'


import AOS, { init } from "aos";
import "aos/dist/aos.css";
AOS.init();  

function App() {
/*
$(function(){
  $('.ham_icon').on('click',function(){
    if($('.aside_menu').find('.miri')){
      $('.block_main').show();
    }else{
      $('.block_main').hide();
    }
  })
})
*/
  //만약에 miri 단어가 있다면 .header_logo 에 a태그를 삭제 해줘

//제이쿼리 Gnb공간 
$(function(){
  var num = 1;
  $('.ham_icon,.gnb_black,.news_txt').on('click',function(){
     num++
    if(num % 2 == 0){
      $('.aside_menu').addClass('miri')
      $('.gnb_black').addClass('miri_dim')
      $('.line').removeClass('init');
      $('#line-top').toggleClass('line-top').toggleClass('top-reverse');
      $('#line-mid').toggleClass('line-mid').toggleClass('mid-reverse');
      $('#line-bot').toggleClass('line-bot').toggleClass('bot-reverse'); 
      $('.header_vertical_txt ,.main_con').addClass('blo')   
    }else{
      $('.header_vertical_txt,.main_con').removeClass('blo')
      $('.aside_menu').removeClass('miri')
      $('.gnb_black').removeClass('miri_dim')
      $('.line').removeClass('init');
      $('#line-top').toggleClass('line-top').toggleClass('top-reverse');
      $('#line-mid').toggleClass('line-mid').toggleClass('mid-reverse');
      $('#line-bot').toggleClass('line-bot').toggleClass('bot-reverse');  
    }
  })
})
$(function(){
  $('.header_vertical_txt').on('click',function(){
    if($('.header_vertical_txt').hasClass('blo')==true){
      $('.header_vertical_txt').removeClass('blo')
      $('.aside_menu').removeClass('miri')
      $('.gnb_black').removeClass('miri_dim')
      $('.line').removeClass('init');
      $('#line-top').toggleClass('line-top').toggleClass('top-reverse');
      $('#line-mid').toggleClass('line-mid').toggleClass('mid-reverse');
      $('#line-bot').toggleClass('line-bot').toggleClass('bot-reverse'); 
    }
  })
})

$(function(){
  $('.header_vertical_txt').on('click',function(){
    if($('.header_vertical_txt').hasClass('blo')==true){
      $('.header_vertical_txt').removeClass('blo')
      $('.aside_menu').removeClass('miri')
      $('.gnb_black').removeClass('miri_dim')
      $('.line').removeClass('init');
      $('#line-top').toggleClass('line-top').toggleClass('top-reverse');
      $('#line-mid').toggleClass('line-mid').toggleClass('mid-reverse');
      $('#line-bot').toggleClass('line-bot').toggleClass('bot-reverse'); 
    }
  })
})
$(function(){
  $('.main_con').on('click',function(){
    if($('.main_con').hasClass('blo')==true){
      $('.main_con').removeClass('blo')
      $('.aside_menu').removeClass('miri')
      $('.gnb_black').removeClass('miri_dim')
      $('.line').removeClass('init');
      $('#line-top').toggleClass('line-top').toggleClass('top-reverse');
      $('#line-mid').toggleClass('line-mid').toggleClass('mid-reverse');
      $('#line-bot').toggleClass('line-bot').toggleClass('bot-reverse'); 
    }
  })
})


//탭 공간
$(function(){
  $('.careers_select li').click(function() {
    var activeTab = $(this).attr('data-tab');
    $('.careers_select li').removeClass('current');
    $('.tabcontent').removeClass('current');
    $(this).addClass('current');
    $('#' + activeTab).addClass('current');
  });

  $('.careers_select li').click(function() {
    var activeTab = $(this).attr('data-tab2');
    $('.careers_select li').removeClass('current2');
    $('.tabcontent2').removeClass('current2');
    $(this).addClass('current');
    $('#' + activeTab).addClass('current2');
  })
})

$(function(){
$('.banner_01').mouseover(function(e){
  $('.banner_01 .brand_hover_txt').addClass('dim_slide_up');
  $('.banner_01 .brand_line').addClass('brand_line_hover');
  $('.banner_01 .brand_line img').attr("src", "https://yogibo.kr/yogico/img/icon/g_off.png");
  $('.banner_01 .brand_line').attr('src', 'https://yogibo.kr/yogico/img/icon/g_off.png');
  $('.banner_01 .brand_dim').show();
})
$('.banner_01').mouseout(function(e){
  $('.banner_01 .brand_hover_txt').removeClass('dim_slide_up');
  $('.banner_01 .brand_line').removeClass('brand_line_hover');
  $('.banner_01 .brand_line img').attr("src", "https://yogibo.kr/yogico/img/icon/g_on.png");
  $('.banner_01 .brand_dim').hide();
})

$('.banner_02').mouseover(function(e){
  $('.banner_02 .brand_hover_txt').addClass('dim_slide_up');
  $('.banner_02 .brand_line').addClass('brand_line_hover');
  $('.banner_02 .brand_line img').attr("src", "https://yogibo.kr/yogico/img/icon/b_off.png");
  $('.banner_02 .brand_line').attr('src', 'https://yogibo.kr/yogico/img/icon/b_off.png');
  $('.banner_02 .brand_dim').show();
})
$('.banner_02').mouseout(function(e){
  $('.banner_02 .brand_hover_txt').removeClass('dim_slide_up');
  $('.banner_02 .brand_line').removeClass('brand_line_hover');
  $('.banner_02 .brand_line img').attr("src", "https://yogibo.kr/yogico/img/icon/b_on.png");
  $('.banner_02 .brand_dim').hide();
})

})
  let navigate = useNavigate();//링크연결
  return (
    <>
    <Routes>
      <Route path="/" element={<Main  navigate={navigate}/>}>
        <Route path="/" element={<Section/>}/>
        <Route path="/visual" element={<Visual/>}/>      
        <Route path="/news" element={<News/>}/>
        <Route path="/Partners" element={<Partners/>}/>
        <Route path="/choice" element={<Choice/>}/>
        <Route path="/careers" element={<Careers/>}/>
        <Route path="/corporation" element={<Corporation/>}/>
        <Route path="/careers2" element={<Careers2/>}/>
        <Route path="/news_letter" element={<News_letter/>}/>
      </Route>
        <Route path="*" element={<div>404. That’s an error.</div>}/>
    </Routes>
    </>
  );
};

function Main(props){
  return(
    <>
      <div id="yogi_corporation">
        <div className="fixed_line"></div>
        <div id="headerWrap">
          <div className="header">
            <div className="header_logo">
              <div className="main_con">
                 <Link to="/"><img src="https://yogibo.kr/yogico/img/icon/symbol.png" alt=""/></Link>
              </div>
            </div>
            <div className="header_ham">
            <div className="ham_icon">
              <div id="line-top" className="line init top-reverse"></div>
              <div id="line-mid" className="line init mid-reverse"></div>
              <div id="line-bot" className="line init bot-reverse"></div>
            </div>
            </div>
            <div className="header_vertical_txt"><Link to="/"><img src="https://yogibo.kr/yogico/img/icon/Signature03.png" alt=""/></Link></div>
          </div>
          <div className="gnb_black"></div>
          <div className="aside_menu">
            <div className="aside_inner">            
            </div>
            <div className="aside_gnb">
              <div className="news_txt">
                <dl>
                  <dt><Link to="/">Yogi Corporation Inc.</Link></dt>
                </dl>
              </div>
              <div className="brand_txt">
                <dl>
                  <dt>Brand</dt>
                  <dd>
                    <ul>
                      <li onClick={() => window.open('http://yogibo.kr', '_blank')}>Yogibo</li>
                      <li onClick={()=>window.open('http://betterair.kr','_blank')}>betterair</li>
                    </ul>
                  </dd>
                </dl>
              </div>
              <div className="news_txt">
                <dl>
                  <dt><Link to="news">News</Link></dt>
                </dl>
              </div>
              <div className="news_txt">
                <dl>
                  <dt><Link to="careers" className="careers">Careers</Link></dt>
                </dl>
              </div>
              <div className="news_txt">
                <dl>
                  <dt><Link to="partners">Partners</Link></dt>
                </dl>
              </div>              
            </div>        
          </div>
        </div>
        <div className="article_menu" style={{display:'none'}}>
          <ul>
            <li onClick={()=>{props.navigate('/corporation')}}>YOGI CORPORATION</li>
            <li onClick={()=>{props.navigate('/partners')}}>PARTNERS</li>
          </ul>
        </div>
        <div className="contact_us"><Link to="careers">Careers <img src="https://yogibo.kr/web/img/icon/new/arrow_right.svg" alt=""/></Link></div>
        <Outlet/>
        <Footer/>
      </div>
    </>
  )
}

//var num2 = 1;
//document.querySelector('.ham_icon,.gnb_black,.news_txt').addEventListener('click')

export default App;

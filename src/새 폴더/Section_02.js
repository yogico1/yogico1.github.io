function Section_02(){
   return(
      <>
      <section class="p_l_d_b2">
      <div class="boarder_wrapper" data-aos="fade-up" data-aos-duration="800">
         <div class="news_title">NEWS</div>
         <div class="news_title_more"  onClick={() => window.open('https://yogico.kr/#/news', '_blank')}>
         더보기 &nbsp;<img src="http://yogibo.kr//web/img/icon/new/arrow_right.svg" alt=""></img>
         </div>
         <div class="row">
            <div class="board_list col-xl-4 col-md-4">
               <dl>
                  <dt class="board_img"><img src="https://yogibo.kr/yogico/img/banner/img_news01.png"alt=""/></dt>
                  <dd>
                     <div class="board_title">
                        <dl>
                           <dt>Yogibo 맥스</dt>
                           <dd>2022 서울어워드 우수상품 선정</dd>
                        </dl>		
                     </div>
                     <div class="board_cont">
                        글로벌 라이프스타일 브랜드 요기보의 대표 제품
                        "맥스 하이브리드" 가 2022 서울어워드 (Seoul Award) 우수상품으로 선정되었습니다.
                        "서울어워드란?" 서울시 산하기관인 서울산업진흥원에서 매년 엄격한 심사를 통해 서울어워드 우수 제품을 선정하고 있습니다
                     </div>
                     <div class="board_more_button" 
                     onClick={()=>window.open('https://blog.naver.com/yogibo/222936445416','_blank')}>더 알아보기</div>
                  </dd>
               </dl>
               <p class="board_title_txt">Yogico X,News</p>
            </div>
            <div class="board_list col-xl-4 col-md-4" >
               <dl>
                  <dt class="board_img">
                     <img src="https://yogibo.kr/yogico/img/banner/img_news02.png" alt=""/></dt>
                  <dd>
                     <div class="board_title">	
                        <dl>
                           <dt>2022 MAMA AWARDS</dt>
                           <dd>메인 스폰서 참여</dd>
                        </dl>	                      		
                     </div>
                     <div class="board_cont">
                        ‘2022 MAMA AWARDS’는 11월 29일, 30일 이틀간 일본 오사카의 ‘교세라 돔 오사카’에서 개최됩니다. 
                        지난 8월 CJ ENM은 아시아를 넘어 글로벌 음악시장까지 K-POP의 영향력이 확산됨에 따라 기존의 'Mnet ASIAN MUSIC AWARDS'를 글로벌 시장을 겨냥한 'MAMA AWARDS'로 리브랜딩한다고 밝힌 바 있으며, 이에 다가오는 ‘2022 MAMA AWARDS’는 역대급 시상식이 될 것으로 큰 기대를 받고 있습니다.
                     </div>
                     <div class="board_more_button" 
                     onClick={()=>window.open('https://yogibo.kr/article/yogibo-news/16/9892/','_blank')}>더 알아보기</div>
                  </dd>
               </dl>
               <p class="board_title_txt">Yogico X,News</p>
            </div>

            <div class="board_list col-xl-4 col-md-4 ">
               <dl>
                   <dt class="board_img"><img src="https://yogibo.kr/yogico/img/banner/img_news03.png" alt=""/></dt>
                  <dd>
                     <div class="board_title">	
                        <dl>
                           <dt>Yogibo  2022</dt>
                           <dd>2022 수해 이웃돕기 성금 기탁</dd>
                        </dl>	                             
                     </div>
                     <div class="board_cont">
                        요기보(Yogibo)가 14일 희망브리지 전국재해구호협회에 집중 호우 및 태풍 힌남노로 인한 수해 복구 지원 성금 500만원을 전달했다고 14일 밝혔다.
                        ㈜요기코퍼레이션의 브랜드 요기보(Yogibo)는 지난 8월 26일부터 29일까지 4일간 수해 피해를 지원하기 위한 ‘Yogibo Cares’ 캠페인을 진행했고, 캠페인 수익의 일부와 임직원들의 뜻을 모아 수해 지원 성금을 마련했다고 밝혔다.
                     </div>
                     <div class="board_more_button" 
                     onClick={()=>window.open('http://www.segyebiz.com/newsView/20220914508053','_blank')}>더 알아보기</div>
                  </dd>
               </dl>
               <p class="board_title_txt">Yogico X,News</p>
            </div>
         </div>
      </div>
      </section>
        
      </>
   )
  }
  export default Section_02
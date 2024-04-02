import './css/section_01.css'
import './css/news.css'
import './css/careers.css'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { changeName } from './store.js'

function News_letter(){
   let state = useSelector((state)=> state)
    return(
       <>
       <section class="p_l_d_b" style={{paddingTop:'20px!important'}}>
       <div class="boarder_wrapper" data-aos="fade-up" data-aos-duration="800">
          <div class="row">
            <News_border/>
          </div>
       </div>
       </section>
         
       </>
    )
         function News_border(){
            return(
               <>

               {
                 state.news_bord.map(function(a,i){
                        return(
                           <div class="board_list col-xl-4 col-md-4 mgt_20">
                           <dl>
                              <dt class="board_img">{state.news_bord[i].img}</dt>
                              <dd>
                                 <div class="board_title">
                                    <dl>
                                       <dt>{state.news_bord[i].title}</dt>
                                       <dd>{state.news_bord[i].sub_title}</dd>
                                    </dl>		
                                 </div>
                                 <div class="board_cont">
                                    {state.news_bord[i].sub_content}
                                 </div>
                                 <div class="board_more_button">{state.news_bord[i].more}</div>
                              </dd>
                           </dl>
                        </div>
                        )

                  })
               }
                  
               </>
            )
            
         }
   }
   export default News_letter
import { render } from "@testing-library/react"

function Careers_03(){
    return(
        <>
            <div class="section_01_inner tabcontent" id="tab3">
                <div class="section_01_inner"  style={{padding:'0'}}>
                    <div class="careers_section_title">찾아오시는길</div>
                    <div class="map_wrapper">
                        <div class="map_section">
                            <div class="map_title">본사</div>
                            <div class="map_add">서울시 강남구 봉은사로 125, 2층 201호</div>
                            <div class="map_tel">T . 02-557-0920</div>
                        </div>
                        <div class="map_inner">
                         <iframe src="https://yogibo.kr//why/store/yogibo.html" width="100%" height="300px" 
                            allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>                       
                        </div>
                    </div>
                    <div class="map_wrapper" style={{marginTop:'200px;'}}>
                        <div class="map_section">
                            <div class="map_title">물류창고</div>
                            <div class="map_add">경기도 용인시 처인구 모현읍 곡현로 707-1, 물류센터 (매산리 138-16)</div>
                        </div>
                        <div class="map_inner">
                         <iframe src="https://yogibo.kr//why/store/deliver.html" width="100%" height="300px" 
                            allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>                       
                        </div>
                    </div>
                    <div class="map_store_info">
                  <div class="e_info_button" style={{width:'210px',border:'none'}}
                   onClick={() => window.open('https://yogibo.kr/why/store.html', '_blank')}>매장안내 <img src="https://yogibo.kr/web/img/icon/new/arrow_right.svg"/></div>
                </div>
                <div class="careers_section_title store" onClick={()=>{
                     window.open('https://yogibo.kr/why/store.html', '_blank')
                }}>
                    <img src="https://yogibo.kr/web/img/banner/store.jpg" style={{width:'100%'}}/>
                </div>

                </div>
            </div>
            
        </>
    )
}


    export default Careers_03 
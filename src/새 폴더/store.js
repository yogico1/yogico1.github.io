import {configureStore,createSlice} from '@reduxjs/toolkit'

let news_bord = createSlice({
    name:'news_bord',
    initialState:[
        {
            img:<img src="https://yogibo.kr/yogico/img/banner/img_news_disney copy.jpg"/>,
            title:'요기보, 디즈니∙픽사',
            sub_title:'스페셜 에디션 론칭',
            sub_content:`빈백(beanbag) 소파 브랜드 요기보(Yogibo)는 월트디즈니 컴퍼니(Disney)와의 협업을 통해 
            ‘미키와 친구들’ 및 ‘토이스토리’ 캐릭터를 활용한 스페셜 에디션을 선보인다고 23일 밝혔다.`,
            more:<div onClick={() => window.open('https://www.newsquest.co.kr/news/articleView.html?idxno=96933')}>더알아보기</div>
        },
        {
            img:<img src="https://yogibo.kr/yogico/img/banner/img_news_kakaofriends.jpg"/>,
            title:'요기보, 카카오프렌즈 ',
            sub_title:'에디션 공식 런칭',
            sub_content:`회사 측에 따르면 지난달 와디즈 리워드 펀딩을 진행한 요기보 카카오프렌즈 
            에디션의 일부 제품을 포함한 전 제품이 이번 론칭을 통해 선보인다. 요기보의 각 제품의 특징과 기능에 맞게 
            카카오프렌즈의 캐릭터와 카테고리를 구성했다.`,
            more:<div onClick={() => window.open('http://www.discoverynews.kr/news/articleView.html?idxno=654877')}>더알아보기</div>
        },
        {
            img:<img src="https://yogibo.kr/yogico/img/banner/img_news_modju.jpg"/>,
            title:'요기보, 모듈러 소파 ',
            sub_title:`모듀(Modju)' 국내 론칭`,
            sub_content:`라이프스타일 브랜드 Yogibo(요기보)는 수만 가지 형태로 조합 가능한 모듈러 소파 Modju(모듀)를 국내에 론칭한다고 10일 밝혔다.
            요기보의 모듀는 각 상품의 특성에 따라 블록처럼 조합하여 사용자의 라이프스타일에 맞게 자유자재로 조립 및 구성할 수 있는 개인화된 맞춤형 소파이다.      
            빠르게 변화는 최근 라이프스타일 트렌드에 걸맞게 요기보의 모듀는 3가지의 형태와 6개 색상으로 이뤄져 있다. 모듀만의 ‘조합성’으로 수만 가지의 다양한 스타일의 소파를 만들 수 있다.`,
            more:<div onClick={() => window.open('https://www.edaily.co.kr/news/read?newsId=02010646632196408&mediaCodeNo=257&OutLnkChk=Y')}>더알아보기</div>
        },   

        {
            img:<img src="https://yogibo.kr/yogico/img/banner/img_news_인천면세점 copy.jpg"/>,
            title:'요기보, 인천공항 제1여객터미널',
            sub_title:`면세점 매장 오픈`,
            sub_content:`요기보 인천공항점은 빈백소파를 주요 제품으로 판매하던 기존 매장들과 차별화된 매장이다. 아동을 동반한 고객들 사이에서 큰 인기를 끌고 있는 요기보 캐릭터 인형과 바디필로우, 쿠션 그리고 기능성 목배게를 면세가로 만나볼 수 있을 뿐 아니라, 요기보 액세서리 제품 중 가장 인기가 높은 노트북/태블릿PC 트레이 트레이보X, 코어강화용 씨팅볼 요가보, 
            기내에서 바로 사용할 수 있는 요기보 슬리퍼 및 여행용 사계절 담요 코지보 등등을 만나볼 수 있다. `,
            more:<div onClick={() => window.open('https://www.kdfnews.com/news/articleView.html?idxno=62132')}>더알아보기</div>
        }, 

        {
            img:<img src="https://yogibo.kr/yogico/img/banner/img_news_런칭.jpg"/>,
            title:'요기보',
            sub_title:`하이브리드 빈백 소파 론칭`,
            sub_content:`지난 7월 CGV연남점 요기보관에 하이브리드 충전재가 들어간 빈백 소파를 선보인 바 있다고 업체 측은 전했다.
            요기보에 따르면 하이브리드 충전재는 요기보 연구진에 의해 개발된 제품으로 기존 충전재인 EPS 제품에 비해 9~10배, EPP 제품에 비해 5~7배 내구성과 복원력이 향상된 2세대 빈백 소파용 충전재이다. 특허를 기반으로 제조된 하이브리드 빈백 소파는 기존
             빈백 소파의 충전 주기를 획기적으로 늘린 제품이라는 것이 업체 측의 설명이다. `,
            more:<div onClick={() => window.open('https://www.segyebiz.com/newsView/20211108508168')}>더알아보기</div>
        }, 

        {
            img:<img src="https://yogibo.kr/yogico/img/banner/img_yogicorporation.jpg"/>,
            title:'요기보코리아',
            sub_title:`요기코퍼레이션으로 사명 변경`,
            sub_content:`빈백소파와 다양한 라이프스타일 제품을 수출입, 제조, 유통하는 요기보코리아(주)가 (주)요기코퍼레이션으로 사명을 변경한다고 2일 밝혔다. 
            이번 사명 변경은 유통 및 소재 시장을 혁신을 보여주고자 하는 요기보코퍼레이션의 의지를 반영한 것이다. 특히 스마트 라이프스타일 플랫폼으로 확장하기 위해 인공지능 기술을 
            접목한 홈퍼니싱 전용 추천 솔루션을 출시하기 위해 준비 중이다.  `,
            more:<div onClick={() => window.open('https://www.news2day.co.kr/article/20210602500064')}>더알아보기</div>
        }, 



    ]
    
})

export default configureStore({
    reducer:{
        news_bord:news_bord.reducer,
    }
})

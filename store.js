import {configureStore,createSlice} from '@reduxjs/toolkit'

let news_bord = createSlice({
    name:'news_bord',
    initialState:[

        // {
        //     img:<img src="https://yogibo.kr/yogico/img/banner/야마하.jpg"/>,
        //     title:'요기보, ‘마법 같은 겨울 음악회’ ',
        //     sub_title:'팝업 이벤트 진행',
        //     sub_content:`빈백 소파 브랜드 요기보(Yogibo)가 연말을 맞아 오는 30일 스타필드 고양점에서 이색 팝업 이벤트 ‘Yogibo’s Magical Winter Concert’를 진행한다고 밝혔다.
        //     ’Yogibo’s Magical Winter Concert’는 마법 같은 겨울 음악회로 불완전함과 어려움의 시기를 잊고 아름다움과 경이로움의 순간을 맞이하길 바란다는 메시지를 담고 있다. 특히 영국 록밴드 콜드플레이(Cold play)
        //     의 노래 ‘Biutyful’ 뮤직비디오를 콘셉트로 사람 크기의 빈백 인형들이 다양한 악기를 사람처럼 연주하는 듯한 느낌으로 기획됐다.
        //     `,
        //     more:<div onClick={() => window.open('http://www.sentv.co.kr/news/view/676221')}>더알아보기  23년12월28일</div>
        // },


        // {
        //     img:<img src="https://yogibo.kr/yogico/img/banner/스카이-요기보존.jpg"/>,
        //     title:'성남FC, 10월 7일 홈경기서',
        //     sub_title:'스카이 요기보존 오픈!',
        //     sub_content:`요기보(Yogibo)는 라이프스타일 전문브랜드로 소파는 물론 바디필로우, 쿠션 액세서리, 캐릭터 인형 등 힐링과 휴식과 관련된 제품을 판매하는 글로벌 브랜드다.
        //     요기보(Yogibo)는 대표 상품인 빈백 소파뿐만 아니라 다양한 형태의 소파를 개발해 선보이고 있고 다양한 스포츠 구단과 함께 협업해왔다.
        //      2021년 야구를 시작으로 농구, 배구 등 다양한 스포츠 경기를 누워서 관람하도록 하는 요기보존을 구성했고 축구에서는 올 시즌 성남FC와 처음으로 손잡았다.
        //     `,
        //     more:<div onClick={() => window.open('https://www.interfootball.co.kr/news/articleView.html?idxno=615321')}>더알아보기 23년 10월</div>
        // },


        // {
        //     img:<img src="https://yogibo.kr/yogico/img/banner/보코서울강남.jpg"/>,
        //     title:'보코서울강남, 프리미엄 빈백 브랜드  ',
        //     sub_title:'요기보와 함께하는 ‘캠핑 위드 요기보’ 패키지',
        //     sub_content:`IHG가 처음으로 한국에 선보이는 첫번째 보코(voco) 브랜드 보코서울강남은 도심 속에서 프라이빗하고 편안한 캠핑을 
        //     즐길 수 있는 ‘캠핑 위드 요기보(Camping with Yogibo)’ 패키지를 제안한다. 도심 속 글램핑을
        //     테마로 보코서울강남의 최상위 커스텀 스위트인 ‘로얄 스위트’와 ‘프레지덴셜 스위트’에서 여유로운 캠핑 감성을
        //      느낄 수 있게 구성한 것이 특징이며 프리미엄 라이프 스타일 빈백 브랜드인 ‘요기보(Yogibo)’와의 제휴를 통해 
        //      요기보의 줄라 라운저 프리미엄뿐만 아니라 쁘띠메종의 노르덴 키즈 텐트와 다양한 캠핑 용품을 경험할 수 있다.
        //     `,
        //     more:<div onClick={() => window.open('https://www.cooknchefnews.com/news/view/1065573194725085')}>더알아보기</div>
        // },


        {
            img:<img src="https://yogibo.kr/yogico/img/banner/보코서울강남.jpg"/>,
            title:'보코서울강남, 프리미엄 빈백 브랜드',
            sub_title:'요기보와 함께하는 ‘캠핑 위드 요기보’ 패키지',
            sub_content:`                     IHG가 처음으로 한국에 선보이는 첫번째 보코(voco) 브랜드 보코서울강남은 도심 속에서 프라이빗하고 편안한 캠핑을 
            즐길 수 있는 ‘캠핑 위드 요기보(Camping with Yogibo)’ 패키지를 제안한다. 도심 속 글램핑을
            테마로 보코서울강남의 최상위 커스텀 스위트인 ‘로얄 스위트’와 ‘프레지덴셜 스위트’에서 여유로운 캠핑 감성을
            느낄 수 있게 구성한 것이 특징이며 프리미엄 라이프 스타일 빈백 브랜드인 ‘요기보(Yogibo)’와의 제휴를 통해 
            요기보의 줄라 라운저 프리미엄뿐만 아니라 쁘띠메종의 노르덴 키즈 텐트와 다양한 캠핑 용품을 경험할 수 있다.`,
            more:<div onClick={() => window.open('https://www.cooknchefnews.com/news/view/1065573194725085')}>더알아보기</div>
        },


        
        {
            img:<img src="https://yogibo.kr/yogico/img/banner/노블레스-수현.jpg"/>,
            title:'결혼정보회사 노블레스 수현',
            sub_title:'라이프스타일 브랜드 ‘요기보’와 제휴 맺어',
            sub_content:`결혼정보회사 노블레스 수현이 글로벌 라이프스타일 브랜드 ‘Yogibo(요기보)’와의 제휴 체결했다.
            노블레스 수현은 정회원이 감각적인 디자인과 우수한 성능을 겸비한 요기보 소파로 일상의 가치를 드높일 수 있도록 요기보와 MOU를
             맺어 요기보 제품 10% 할인 쿠폰을 제공하고 있다. 노블레스 수현 회원이라면 누구나 노블레스 수현 공식 홈페이지의 ‘수현 회원 혜택’에서 해당 쿠폰 발급 안내를 받을 수 있다.
            `,
            more:<div onClick={() => window.open('https://www.cooknchefnews.com/news/view/1065573194725085')}>더알아보기</div>
        },

 
        {
            img:<img src="https://yogibo.kr/yogico/img/banner/창원LG세이커스.jpg"/>,
            title:'Yogibo(요기보), 겨울 스포츠  ',
            sub_title:'콜라보레이션 강화',
            sub_content:`Yogibo(요기보)가 겨울스포츠 22-23 농구시즌을 맞아 KBL 창원 LG 세이커스와 새로운 콜라보레이션을 진행한다고 밝혔다.
            이번 콜라보레이션을 통해 요기보는 기존 구장의 패밀리석 자리를 요기보석으로 이름을 변경 후 소파 ‘드롭’과 바디필로우 ‘서포트’를 설치 했다. 
            특히 다양한 색상의 커버들 중에서 구단의 색상에 맞춘 ‘와인 버건디’ 색상과 ‘브라이트 옐로우’ 색상을 설치하면서 구단의 특색을 제대로 반영하였다는 평을 받고 있다.`,
            more:<div onClick={() => window.open('https://sports.khan.co.kr/sports/sk_index.html?art_id=202301061228003&sec_id=530103&pt=nv')}>더알아보기 </div>
        },


        {
            img:<img src="https://yogibo.kr/yogico/img/banner/어썸피플.jpg"/>,
            title:'요기보, 어썸 피플 캠페인 ',
            sub_title:'임신&출산 사연 공모전 개최',
            sub_content:`요기보는 ‘Awesome People’ 캠페인으로 매년 사회적 약자를 돕고, 
            더 행복한 세상을 만들기 위한 다양한 활동을 진행하고 있다. 올해는 여섯 번째 캠페인으로 저출산 문제에 대한 사회적 인식 및 임산부 환경 개선을 위해 사연을 공모한다.`,
            more:<div onClick={() => window.open('https://www.babytimes.co.kr/news/articleView.html?idxno=61578')}>더알아보기</div>
        },


        {
            img:<img src="https://yogibo.kr/yogico/img/banner/img_news_disney copy.jpg"/>,
            title:'요기보, 디즈니∙픽사',
            sub_title:'스페셜 에디션 론칭',
            sub_content:`빈백(beanbag) 소파 브랜드 요기보(Yogibo)는 월트디즈니 컴퍼니(Disney)와의 협업을 통해 
            ‘미키와 친구들’ 및 ‘토이스토리’ 캐릭터를 활용한 스페셜 에디션을 선보인다고 23일 밝혔다.`,
            more:<div onClick={() => window.open('https://www.newsquest.co.kr/news/articleView.html?idxno=96933')}>더알아보기</div>
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
            img:<img src="https://yogibo.kr/yogico/img/banner/유연석.jpg"/>,
            title:'요기보, 배우 유연석 ',
            sub_title:'공식 모델 선정',
            sub_content:`유연석은 '응답하라 1994'의 훈남 야구선수 ‘칠봉이’ 역할부터 '슬기로운 의사 생활'의 부드럽고 천사 같은 소아외과
             의사 ‘안정원’ 역할까지 다양한 작품으로 인기를 얻은 바 있다.`,
            more:<div onClick={() => window.open('https://www.segyebiz.com/newsView/20211210508236?OutUrl=naver')}>더알아보기</div>
        },

        {
            img:<img src="https://yogibo.kr/yogico/img/banner/드류베리모어.jpg"/>,
            title:'요기보, 브랜드 광고 모델로 할리우드',
            sub_title:'배우 드류 베리모어 선정',
            sub_content:`전 세계 가정에 편안함과 휴식을 제공하는 라이프스타일 브랜드 Yogibo(요기보)가 미녀 삼총사, 
            배트맨 포에버, 그 여자 작사 그 남자 작곡으로 유명한 월드 스타 드류 베리모어(Drew Barrymore)와 광고 계약을 체결했다고 18일 밝혔다.`,
            more:<div onClick={() => window.open('https://www.segyebiz.com/newsView/20211118516199?OutUrl=naver')}>더알아보기</div>
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
            img:<img src="https://yogibo.kr/yogico/img/banner/img_news_kakaofriends.jpg"/>,
            title:'요기보, 카카오프렌즈 ',
            sub_title:'에디션 공식 런칭',
            sub_content:`회사 측에 따르면 지난달 와디즈 리워드 펀딩을 진행한 요기보 카카오프렌즈 
            에디션의 일부 제품을 포함한 전 제품이 이번 론칭을 통해 선보인다. 요기보의 각 제품의 특징과 기능에 맞게 
            카카오프렌즈의 캐릭터와 카테고리를 구성했다.`,
            more:<div onClick={() => window.open('http://www.discoverynews.kr/news/articleView.html?idxno=654877')}>더알아보기</div>
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

        {
            img:<img src="https://yogibo.kr/yogico/img/banner/img_news_인천면세점 copy.jpg"/>,
            title:'요기보, 인천공항 제1여객터미널',
            sub_title:`면세점 매장 오픈`,
            sub_content:`요기보 인천공항점은 빈백소파를 주요 제품으로 판매하던 기존 매장들과 차별화된 매장이다. 아동을 동반한 고객들 사이에서 큰 인기를 끌고 있는 요기보 캐릭터 인형과 바디필로우, 쿠션 그리고 기능성 목배게를 면세가로 만나볼 수 있을 뿐 아니라, 요기보 액세서리 제품 중 가장 인기가 높은 노트북/태블릿PC 트레이 트레이보X, 코어강화용 씨팅볼 요가보, 
            기내에서 바로 사용할 수 있는 요기보 슬리퍼 및 여행용 사계절 담요 코지보 등등을 만나볼 수 있다. `,
            more:<div onClick={() => window.open('https://www.kdfnews.com/news/articleView.html?idxno=62132')}>더알아보기</div>
        }, 
             

    ]
    
})

export default configureStore({
    reducer:{
        news_bord:news_bord.reducer,
    }
})

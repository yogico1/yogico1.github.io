import { useEffect } from 'react';
import './css/service.css'

import Chart from 'chart.js/auto';
import ChartDataLabels from 'chart.js/auto';

import 'chartjs-plugin-datalabels';

function Service() {
    useEffect(() => {
        const ctx = document.getElementById('myChart');
        const dataLabels = ['EPS', 'EPP', 'HRF']; // 각 데이터에 대한 라벨
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: [''], // 전체 데이터셋에 대한 라벨
                datasets: [{
                    label: dataLabels[0], // 각 데이터에 대한 라벨
                    data: [35.0], // 첫 번째 그래프 데이터
                    backgroundColor: '#2b7a4a',
                    borderWidth: 1
                }, {
                    label: dataLabels[1], // 각 데이터에 대한 라벨
                    data: [39.6], // 두 번째 그래프 데이터
                    borderColor: '#7f7f7f',
                    backgroundColor: '#7f7f7f',
                    borderWidth: 1
                }, {
                    label: dataLabels[2], // 각 데이터에 대한 라벨
                    data: [45.5], // 세 번째 그래프 데이터

                    backgroundColor: '#b93f4a',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true, // 반응형
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            min: 0, // 최소값 설정
                            max: 50 // 최대값 설정
                        }
                    }]
                }
            }
        });
        const lineCtx = document.getElementById('myLineChart').getContext('2d');
        new Chart(lineCtx, {
            type: 'line',
            data: {
                labels: ["0%", "@10%", "@25%", "@50%", "@75%",""], // X축 레이블을 백분율로 지정
                datasets: [
                    {
                        label: 'EPP',
                        data: [null,10, 25, 49, 90], // X값 대신 Y값만 지정
                        borderColor: '#7f7f7f',
                        backgroundColor: '#7f7f7f',
                        tension: 0.1,
                        borderWidth:5
                    },
                    {
                        label: 'EPS',
                        data: [null,8, 23, 49, 65], // X값 대신 Y값만 지정
                        borderColor: '#2b7a4a',
                        backgroundColor: '#2b7a4a',
                        tension: 0.1,
                        borderWidth:5
                    },
                    {
                        label: 'HRF',
                        data: [null,10, 15, 35, 55], // X값 대신 Y값만 지정
                        borderColor: '#b93f4a',
                        backgroundColor: '#b93f4a',
                        tension: 0.1,
                        borderWidth:5
                    }
                ]
            },
            options: {
                scales: {
                    x: {
                        type: 'category', // X축 타입을 'category'로 설정
                        position: 'bottom',
                    },
                    y: {
                        beginAtZero: false,
                        suggestedMin: 0,
                        suggestedMax: 100,
                        ticks: {
                            display: false // Y축의 틱 레이블을 숨깁니다.
                        }
                    }
                },
            plugins: {
                    tooltip: {
                        enabled: false // 데이터 포인트에 마우스 호버시 툴팁 표시를 비활성화합니다.
                    },
                    datalabels: {
                        display: true
                    }
                }
        }
        });
        const TwolineCtx = document.getElementById('myLineChart2').getContext('2d');
        new Chart(TwolineCtx, {
            type: 'line',
            data: {
                labels: ["" ,"","","" ,"" ,"" ], // 여기는 X축 레이블로, 변경할 필요 없음
                datasets: [
                    {
                        label: 'EPP',
                        data: [null, 0, 10,20,35,50], // X값 대신 Y값만 지정
                        borderColor: '#7f7f7f',
                        backgroundColor: '#7f7f7f',
                        tension: 0.1,
                        borderWidth: 5,
                        pointRadius: 0,
                        // borderDash 설정 없음으로 일반 선
                    },
                    {
                        label: 'EPS',
                        data: [null, 0, 11, 16, 21, 26], // X값 대신 Y값만 지정
                        borderColor: '#2b7a4a',
                        backgroundColor: '#2b7a4a',
                        tension: 0.1,
                        borderWidth: 5,
                        pointRadius: 0,
                        // borderDash 설정 없음으로 일반 선
                    },
                    {
                        label: 'HRF',
                        data: [null, 3, 30, 40, 55, 60], // X값 대신 Y값만 지정
                        borderColor: '#b93f4a',
                        backgroundColor: '#b93f4a',
                        tension: 0.1,
                        borderWidth: 5,
                        pointRadius: 0,
                        // borderDash 설정 없음으로 일반 선
                    }
                    ,
                    {
                        label: '',
                        data: [null, 0, 10,20,30,45], // X값 대신 Y값만 지정
                        borderColor: '#7f7f7f',
                        backgroundColor: '#fff',
                        tension: 0.1,
                        borderWidth: 1,
                        borderDash: [5, 5], // 점선 스타일 적용
                        pointRadius: 0, // 데이터 포인트의 크기 설정
                        pointBackgroundColor: null, // 데이터 포인트의 배경 색상 설정
                        pointBorderColor: null, // 데이터 포인트의 테두리 색상 설정
                        showLine: true // 선을 보여줌 (기본값)
                    }
                    ,
                    {
                        label: '',
                        data: [null, 0, 10, 15, 20, 25], // X값 대신 Y값만 지정
                        borderColor: '#2b7a4a',
                        backgroundColor: '#fff',
                        tension: 0.1,
                        borderWidth: 1,
                        borderDash: [5, 5], // 점선 스타일 적용
                        pointRadius: 0, // 데이터 포인트의 크기 설정
                        pointBackgroundColor: null, // 데이터 포인트의 배경 색상 설정
                        pointBorderColor: null, // 데이터 포인트의 테두리 색상 설정
                        showLine: true // 선을 보여줌 (기본값)
                    }
                    ,
                    {
                        label: '',
                        data: [null, 0, 10, 30, 50, 70], // X값 대신 Y값만 지정
                        borderColor: '#b93f4a',
                        backgroundColor: '#fff',
                        tension: 0.1,
                        borderWidth: 1,
                        borderDash: [5, 5], // 점선 스타일 적용
                        pointRadius: 0, // 데이터 포인트의 크기 설정
                        pointBackgroundColor: null, // 데이터 포인트의 배경 색상 설정
                        pointBorderColor: null, // 데이터 포인트의 테두리 색상 설정
                        showLine: true // 선을 보여줌 (기본값)
                    }
                ]


            },
            options: {
                scales: {
                    y: {
                        beginAtZero: false,
                        suggestedMin: 0,
                        suggestedMax: 70,
                        position: 'right', // Y축을 오른쪽으로 이동
                        ticks: {
                            display: true, // Y축 레이블 표시
                            // Y축 레이블을 원하는 값으로 설정
                            callback: function(value, index, values) {
                                // 여기서 value는 기본적으로 해당 위치의 값입니다. 
                                // 원하는 텍스트 레이블로 매핑합니다.
                                const labels = [null,null, "35%",null,"70%",null, "80%",];
                                return labels[index] || '';
                            }
                        }
                    },
                    x: {
                        type: 'category',
                        position: 'bottom',
                        ticks: {
                            display: true // X축 레이블 표시 여부 결정
                        }
                    }
                },
                plugins: {
                    tooltip: {
                        enabled: false // 툴팁 비활성화
                    },
                    datalabels: {
                        display: true // 데이터 레이블 표시
                    }
                }
            }
        });
        
        
    }, []); 

    return (
        <section className="p_l_d_b2">
            <div id="service_wrapper"  data-aos="fade-up" data-aos-duration="800">
                <div className="service_inner">
                    <div className="service_main_wrapper">HRF,빈백 소파 전용 충전재</div>
                    <div className="service_txt">
                        글로벌 라이프스타일 브랜드yogibo
                        의 국내 총판 기업인 요기코퍼레이션은 
                        지난 5년 간 다양한 시도와 연구개발을 통해 빈백 소파 전용 충전재, 
                        HRF(High Resillience Form)를 국내 대기업과 공동 개발하여 
                        2023년 3월 1일부터 상용화하였습니다. HRF는 전세계적으로 
                        빈백 충전재로 사용하는 EPS와 EPP의 단점을
                        보완한 제품으로 기술적인 면과 가격적인 면에서 우수성을 가진 충전재입니다.
                    </div>   
                </div>

                <div className="graph"  data-aos="fade-up" data-aos-duration="1500">   

                    <div className="chart-container">
                        <div className="chart-title">압축강도</div>                        
                        <canvas id="myLineChart"></canvas>
                        <div class="chart-content">
                        비즈의 <strong>압축강도</strong>가 낮을수록 부드럽다는
                         것을 의미하며 부드러운 느낌이 들수록 몸을 받쳐주고 감싸 안아주는 <strong>착석감 향상</strong>
                        </div>
                    </div>
                    
                    <div className="chart-container">
                        <div className="chart-title">복원력</div>                    
                        <canvas id="myLineChart2"></canvas>
                        <div class="chart-content">
                        비즈의 <strong>복원력이</strong> 높다는 것은 충전 주기가 늘어날 뿐 아니라 빈백 소파의 내구성도 향상되어 
                        <strong>오랜 기간 사용할 수 있음</strong>
                        </div>
                    </div>
                    
                    <div className="hito">
                        <div className="grapy_s">
                            <div className="chart-title">탄성력</div>
                            <canvas id="myChart"></canvas>
                        </div>
                        <div class="chart-content2">
                            비즈의 탄성이 높다는 것은 사용자의 몸무게 또는 체형과 관계없이 몸에 맞게 변형된 빈백의 
                            <strong> 형태가 유지된다</strong>는 것을 의미
                        </div>
                    </div>

                </div> 

                <div id="videArea"  data-aos="fade-up" data-aos-duration="800">
                    <div className="service_main_wrapper">HRF,빈백 소파 전용 충전재</div>
                    <ul>
                        <li>영상추가예정</li>
                        <li>영상추가예정</li>
                    </ul>
                    <div className="text-content">
                    뿐만 아니라 HRF는 황색포도상구균, 
                    대장균 등 유해 세균의 번식을 99.9% 감소시키는 항균 비즈로서<br/> 코로나19 팬데믹 이후 더욱 민감해진 병원균에 대한 솔루션입니다. 
                    </div>
                </div>
                <div id="biz"  data-aos="fade-up" data-aos-duration="800">
                    <div className="service_main_wrapper">HRF 비즈의 장점</div>
                    <div className="bizImg">
                        <ul>
                            <li>
                                <img src="https://yogibo.openhost.cafe24.com/yogico/standard.jpg"/>
                                <span>EPS (1세대 비즈)</span>    
                            </li>
                            <li>
                                <img src="https://yogibo.openhost.cafe24.com/yogico/premium.jpg"/>
                                <span>EPP (2세대 비즈)</span>   
                            </li>
                            <li>
                                <img src="https://yogibo.openhost.cafe24.com/yogico/premiumplus.jpg"/>
                                <span>HRF (3세대 비즈)</span> 
                            </li>
                        </ul>
                    </div>
                   
                   
                    <div className="biz_ul">
                        <ul>
                            <li>※흰색,</li>
                            <li>무취,</li>
                            <li>무독성,</li>
                            <li>친환경,</li>
                            <li>향균비즈,</li>
                            <li>기존 빈백용 충전재 대비 탄성과 복원력 탁월,</li>
                            <li>기존 비즈 대비 가격경쟁력 우수</li>
                        </ul>
                    </div>    
                </div>

                <div id="biz_info"   data-aos="fade-up" data-aos-duration="800">
                    <div className="service_main_wrapper">비즈 향균 시험 성적서</div>
                    <div className="bizImg2"><img src="https://yogibo.openhost.cafe24.com/yogico/r3j9DaG.png"/></div>
                </div>
                <div id="brand_save">
                    <div className="service_main_wrapper text-center">빈백 브랜드를 만들기 위한 제반 비용과 시간을 모두 = <span> SAVE</span></div>

                    <div className="branc_line_s">
                        <ul>
                            <li ><span>Money</span><br/>급변하는원자재비</li>
                            <li><span>Time</span> <br/>물류 센터 구축 비용</li>
                            <li><span>Unit Labor Cost</span> <br/> 치솟는 인건비</li>
                            <li><span>Efficiency</span> <br/>재조 환경구축비용</li>
                            <li><span>Human Resources</span><br/> 쉽지 않은 인력관리</li>
                        </ul>
                    </div>   
                               
                </div>

                <div id="brand_footer" >
                    <div className="text-content footer_list">
                        (주)요기코퍼레이션은 HRF 비즈 판매뿐만 아니라 빈백 소파 OEM과 ODM 솔루션도 제공합니다.<br/> 
                        자세한 내용은 하기 링크 참고 및 하기 연락처로 문의 주시길 바랍니다  
                    </div>
                    <div className="link_list_01">http://bit.ly/yogico_hrf_solution </div>
                    <div className="link_list_02">partner@yogico.kr / 02-557-0920</div>
                </div>
            </div>
        




            <br/> <br/> <br/> <br/>
        </section>
        
       
    );
}

export default Service

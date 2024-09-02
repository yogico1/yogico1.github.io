import './css/section_01.css';
import './css/news.css';
import './css/careers.css';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'; // useDispatch 추가
import { changeName } from './store.js';

function News_letter() {
    const dispatch = useDispatch();

    const handleChangeName = () => {
        dispatch(changeName('New Name'));
    };

    const state = useSelector((state) => state);

    return (
        <>
            <section className="p_l_d_b" style={{ paddingTop: '20px' }}>
                <div className="boarder_wrapper" data-aos="fade-up" data-aos-duration="800">
                    <div className="row">
                        <News_border newsBord={state.news_bord} />
                    </div>
                </div>
            </section>
        </>
    );
}

function News_border({ newsBord }) { // newsBord를 props로 전달
    return (
        <>
            {newsBord.map((a, i) => (
                <div key={i} className="board_list col-xl-4 col-md-4 mgt_20">
                    <dl>
                        <dt className="board_img">{a.img}</dt>
                        <dd>
                            <div className="board_title">
                                <dl>
                                    <dt>{a.title}</dt>
                                    <dd>{a.sub_title}</dd>
                                </dl>
                            </div>
                            <div className="board_cont">
                                {a.sub_content}
                            </div>
                            <div className="board_more_button">{a.more}</div>
                        </dd>
                    </dl>
                </div>
            ))}
        </>
    );
}

export default News_letter;

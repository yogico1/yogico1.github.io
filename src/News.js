import './css/section_01.css'
import './css/news.css'
import './css/careers.css'
import Section_02 from './Section_02.js'
import Careers_01 from './Careers_01.js'
import News_letter from './News_letter.js'
import { changeName } from './store.js'
function News(){
    return(
        <>
        <div id="news_wrapper">
            <Section_02/>  
            <News_letter/>  
        </div>
        </>
    )
}
export default News

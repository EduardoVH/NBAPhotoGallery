import facebook from '../assets/img/facebook.png'
import twitter from '../assets/img/twitter.png'
import youtube from '../assets/img/youtube.png'
import instagram from '../assets/img/instagram.png'

import Img from '../atoms/Img'
function SocialMedia () {
    return (
    <div className='socialMedia'>
            <Img src={facebook} className="icons"></Img>
            <Img src={twitter} className="icons"></Img>
            <Img src={youtube} className="icons"></Img>
            <Img src={instagram} className="icons"></Img>
    </div>
    )
}

export default SocialMedia;
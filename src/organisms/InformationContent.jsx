import ImgAndText from '../molecules/ImgAndText';

import image1 from '../assets/img/image1.png'
import image2 from '../assets/img/image2.png'
import image3 from '../assets/img/image3.png'
import image4 from '../assets/img/image4.png'
import image5 from '../assets/img/image5.png'
import image6 from '../assets/img/image6.png'

import '../assets/styles/InformationContent.css'

const ImageAndTextContent = [
    {
        src: image1,
        text: 'Michael "Air" Jordan.'
    },
    {
        src: image2,
        text: 'Lebron James and Dwyane Wade after iconic "alley oop" play.'
    },
    {
        src: image3,
        text: 'Michael Jordan and Kobe Bryant play each other.'
    },
    {
        src: image4,
        text: 'One of the biggest rivalries in NBA history, Magic Johnson and Larry Bird.'
    },
    {
        src: image5,
        text: 'Steph Curry hits a deep three and does the MJ shrug.'
    },
    {
        src: image6,
        text: 'Allen Iverson "Step Over" Tyronn Lue NBA Finals 2001.'
    },
]

function InformationContent () {
    return (
    <div className='mainInformation'>
        <h2>NBA PICTURES</h2>
        <div className='line'></div>

        <div className='imagesAndText'>
            {ImageAndTextContent.map((content)=>{
                return ( <ImgAndText src={content.src} text={content.text}></ImgAndText> )
            })}
        </div>
    </div>
    )
}

export default InformationContent
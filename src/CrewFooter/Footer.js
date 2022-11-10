import footCss from '../CrewFooter/css/CrewFooter.module.css';
import logo from '../CrewFooter/FooterImg/Logo.png';
import line from '../CrewFooter/FooterImg/Divider.png';
import fb from './FooterImg/fb.png';
import twiter from './FooterImg/twit.png';
import mask from './FooterImg/mask.png';
import circle1 from './FooterImg/circle1.png';
import circle2 from './FooterImg/circle2.png';
import circle3 from './FooterImg/circle3.png';
import vector3 from './FooterImg/Vector 3.png';


function Footer() {


    return (
        <footer className={footCss.footer}>
            <div className={footCss.footerTop}>
                <div className={footCss.footerTopLeftSide}>
                    <a href='#'>About</a>
                    <a href='#'>Blog</a>
                    <a href='#'>Press Kit</a>
                </div>

                <div className={footCss.logo}>
                    <img src={logo} />
                </div>

                <div className={footCss.footerTopRightSide}>
                    <a href='#'>Team</a>
                    <a href='#'>FAQ</a>
                    <a href='#'>Support</a>
                </div>
            </div>

            <div className={footCss.footerMain}>
                <img src={line} />
            </div>

            <div className={footCss.footerBottom}>
                <img src={fb} />
                <img src={twiter} />
                <img src={mask} />
                <img src={circle1} />
                <img src={vector3} />
            </div>
        </footer>
    )

}

export default Footer;
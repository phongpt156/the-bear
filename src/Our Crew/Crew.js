import CrewCss from '../Our Crew/Css/Crew.module.css';
import Bear1 from '../Our Crew/CrewImg/Bear1.png';
import Bear2 from '../Our Crew/CrewImg/Bear2.png';
import Bear3 from '../Our Crew/CrewImg/Bear3.png';
import Bear4 from '../Our Crew/CrewImg/Bear4.png';
import Bear5 from '../Our Crew/CrewImg/Bear5.png';
import RotateBear from '../Our Crew/CrewImg/rotateBear.png';
import board from '../Our Crew/CrewImg/Artboard.png';
import pongBear from '../Our Crew/CrewImg/pongBear.png';
import Vector from '../Our Crew/CrewImg/Vector.png';
import { useState } from 'react';




function Crew() {



    const [btn1, setBtn1] = useState(false);
    const [btn2, setBtn2] = useState(false);
    const [btn3, setBtn3] = useState(false);
    const [btn4, setBtn4] = useState(false);

    const btnClick1 = () => {
        setBtn1(!btn1)
    }

    const btnClick2 = () => {
        setBtn2(!btn2)
    }

    const btnClick3 = () => {
        setBtn3(!btn3)
    }

    const btnClick4 = () => {
        setBtn4(!btn4)
    }








    return (
        <section className={CrewCss.crew}>

            <div className={CrewCss.crewContent}>
                <div className={CrewCss.title}>
                    <h2>Our Crew</h2>
                </div>
                <div className={CrewCss.bearsBlocks}>
                    <div className={CrewCss.blockItem}>
                        <img src={Bear1} />
                        <div className={CrewCss.itemDesc}>
                            <p>Pung Pu</p>
                            <span>The Gang Leader</span>
                        </div>
                    </div>

                    <div className={CrewCss.blockItem}>
                        <img src={Bear2} />
                        <div className={CrewCss.itemDesc}>
                            <p>BIET TUOT</p>
                            <span>The Encyclopedia</span>
                        </div>
                    </div>

                    <div className={CrewCss.blockItem}>
                        <img src={Bear3} />
                        <div className={CrewCss.itemDesc}>
                            <p>TARO TARO</p>
                            <span>The Magician</span>
                        </div>
                    </div>

                    <div className={CrewCss.blockItem}>
                        <img src={Bear4} />
                        <div className={CrewCss.itemDesc}>
                            <p>PONG PAY</p>
                            <span>The Art Enthusiast</span>
                        </div>
                    </div>

                    <div className={CrewCss.blockItem}>
                        <img src={Bear5} />
                        <div className={CrewCss.itemDesc}>
                            <p>HONG HOT</p>
                            <span>The News Hunter</span>
                        </div>
                    </div>

                </div>




                <div className={CrewCss.blockFaq}>
                    <div className={CrewCss.faqTitle}>
                        <h2>FAQ</h2>
                    </div>
                    <div className={CrewCss.blockFaqContent}>

                        <div className={CrewCss.faqDescBlocks}>

                            <div className={CrewCss.blockDesc1} >

                                <div className={CrewCss.paragraph}>
                                    <p>
                                        Who is the team behind Bear The Awesome News?
                                    </p>

                                    <span className={CrewCss.lightt} style={btn1 ? { opacity: '1' } : { opacity: '0' }}>
                                        We are QBA Studio, a collective of tech-savvy individuals that aims to contribute to the new future of entertainment.
                                    </span>

                                </div>

                                <div className={CrewCss.faqbtn}>
                                    <button onClick={btnClick1}>{'>'}</button>
                                </div>
                            </div>
                            <div className={CrewCss.blockDesc1} >

                                <div className={CrewCss.paragraph}>
                                    <p>
                                        Who is the team behind Bear The Awesome News?
                                    </p>

                                    <span className={CrewCss.lightt} style={btn2 ? { opacity: '1' } : { opacity: '0' }}>
                                        We are QBA Studio, a collective of tech-savvy individuals that aims to contribute to the new future of entertainment.
                                    </span>

                                </div>

                                <div className={CrewCss.faqbtn}>
                                    <button onClick={btnClick2}>{'>'}</button>
                                </div>
                            </div>
                            <div className={CrewCss.blockDesc1} >

                                <div className={CrewCss.paragraph}>
                                    <p>
                                        Who is the team behind Bear The Awesome News?
                                    </p>

                                    <span className={CrewCss.lightt} style={btn3 ? { opacity: '1' } : { opacity: '0' }}>
                                        We are QBA Studio, a collective of tech-savvy individuals that aims to contribute to the new future of entertainment.
                                    </span>

                                </div>

                                <div className={CrewCss.faqbtn}>
                                    <button onClick={btnClick3}>{'>'}</button>
                                </div>
                            </div>
                            <div className={CrewCss.blockDesc1} >

                                <div className={CrewCss.paragraph}>
                                    <p>
                                        Who is the team behind Bear The Awesome News?
                                    </p>

                                    <span className={CrewCss.lightt} style={btn4 ? { opacity: '1' } : { opacity: '0' }}>
                                        We are QBA Studio, a collective of tech-savvy individuals that aims to contribute to the new future of entertainment.
                                    </span>

                                </div>

                                <div className={CrewCss.faqbtn}>
                                    <button onClick={btnClick4}>{'>'}</button>
                                </div>
                            </div>


                        </div>

                        <div className={CrewCss.rotateBear}>
                            <img src={RotateBear} />
                        </div>
                    </div>

                </div>



                <div className={CrewCss.blockJoin}>
                    <div className={CrewCss.blockJoinDesc}>
                        <h2>JOIN THE BEAR GANG</h2>
                        <img src={board} />
                        <button>OWN A BEAR NOW</button>

                    </div>
                    <img className={CrewCss.pongBear} src={pongBear} />
                    <img className={CrewCss.vector} src={Vector} />
                </div>

            </div>

        </section>
    )
}

export default Crew;